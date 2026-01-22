import express from "express";
import { login, register } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// router.route("/login").post(login);
// router.route("/register").post(register);
// router.route("/addToActivity").post(authMiddleware);
// router.route("/getAllActivities").get(authMiddleware);

router.post("/login" , login);
router.post("/register" , register);
router.post("/addToActivity" , authMiddleware);
router.get("/getAllActivities" , authMiddleware);

//protected route
router.get("/profile" , authMiddleware , (req , res) => {
    res.status(200).json({ message : `Hello , ${req.user.name} . You have accessed a protected route.` });
});

export default router;