import "./index.css"
import React, { useState, useEffect } from 'react'

function Profile() {
    const [profile, setProfile] = useState([]);

    const getProfile = () => {
        window.fetch("http://plato.mrl.ai:8080/profile", {
            "method": "GET",
            "headers": { "api": "richard" }
        })
            .then(res => res.json())
            .then((data) => {
                setProfile(data)
            })
            .catch(console.log)
    }

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <div className="profile-title">
            <div>
                <h2>Profile: {profile.name} - Has {profile.count} Contacts</h2>
            </div>
        </div>
    )
};

export default Profile;