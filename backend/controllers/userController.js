import User from "../models/userModel.js";
import httpsStatus from "http-status";
import bcrypt , { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import { transporter } from "../config/mail.js";
import { generateRandomPassword } from "../utils/generatePassword.js";

// User Registration 

export const register = async (req , res ) => {
    const { name , username } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(httpsStatus.CONFLICT).json({ message : "Username already exists" });
        }

        const plainPassword = generateRandomPassword();
        const hashedPassword = await bcrypt.hash(plainPassword , 10);

        await User.create({
            name , 
            username , 
            password : hashedPassword
        
        });

        // Send email with the generated password
        await transporter.sendMail({
            from : process.env.EMAIL_USER ,
            to : username , 
            subject : "Your SyncMeet Account Password" ,
            text : `Hello ${name} , \n\n Your account has been created successfully. \n Your password is : ${plainPassword} \n\n Please change your password after logging in. \n\n Regards, \n SyncMeet Team`
        });

        return res.status(httpsStatus.CREATED).json({ message : "User registered successfully. Please check your email for the password." });
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(httpsStatus.INTERNAL_SERVER_ERROR).json({ message : "Internal Server Error" });
    }
};


// User Login
export const login = async (req , res) => {
    const { username  , password } = req.body;

    if ( !username || !password ) {
        return res.status(httpsStatus.BAD_REQUEST).json({ message : "All fields are required" });
    }

    try{
        const user = await User.findOne({ username });

        if(!user) {
            return res.status(httpsStatus.NOT_FOUND).json({ message : "User not found. Invalid credentials." });
        }

        const isMatch = await bcrypt.compare(password , user.password);

        if(!isMatch) {
            return res.status(httpsStatus.UNAUTHORIZED).json({ message : "Invalid credentials" });
        }

        const token = jwt.sign({
            id : user._id,
            username : user.username
        } , 
        process.env.JWT_SECRET ,
        { expiresIn : process.env.JWT_EXPIRES_IN }
        );
        
        return res.status(httpsStatus.OK).json({ message : "Login successful" , token });

    } catch (error) {
        return res.status(httpsStatus.INTERNAL_SERVER_ERROR).json({ message : "Internal Server Error. Login failed." });
    } 
}