import React , { useContext , useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';


export default function HomePage() {

    let navigate = useNavigate();
    
    const [meetingCode , setMeedingCode] = useState("");
    
    const { addToUserHistory } = useContext(AuthContext);

    let handleJoinVideoCall = async () => {
        if(!meetingCode.trim())  return;
        await addToUserHistory(meetingCode);
        navigate(`/${meetingCode}`)
    };

    return (
        <>
        <div className='navBar'>
            <div style={{display: "flex" , alignItems: "center"}}>
                <h2>SyncMeet</h2>
            </div>

            <div style={{display : "flex" , alignItems : "center"}}>
                <IconButton onClick={
                    () => {
                        navigate("/history")
                    }
                }>

                    <RestoreIcon/>

                </IconButton>
                <p>History</p>

                {/* <Button onClick={() => {
                    localStorage.removeItem("token")
                    navigate("/auth")
                }}> */}
                <Button onClick={logout}>
                    Logout
                </Button>

            </div>

        </div>


        <div className='meetContainer'>
            <div className='leftPanel'>
                <div>
                    <h2>Providing Quality video call just like quality education</h2>

                    <div style={{display : "flex" , gap : "10px"}}>
                        {/* <TextField onChange={e => setMeedingCode(e.target.value)}  id='outlined-basic'  label="Meeting Code"  variant='outlined'/> */}
                        <TextField label="Meeting Code" variant='outlined' value={meetingCode}  onChange={(e)  =>  setMeedingCode(e.target.value)}></TextField>
                        <Button onClick={handleJoinVideoCall}  variant='contained'>Join</Button>
                    </div>
                </div>
            </div>

            <div className='rightPanel'>
                <img srcSet=""  alt="vdo call" />
            </div>
        </div>
        </>
    );

}