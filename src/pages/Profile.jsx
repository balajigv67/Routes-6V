import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Profile = () => {

    let navigate = useNavigate();
    let { userName } = useParams();
    return (
        <div>Profile Page for {userName}
            <button onClick={() => navigate("/menu")
            }>Change to about page</button></div >
    )
}

export default Profile