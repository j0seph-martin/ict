import React, { useState } from "react";
import './style/Signup.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRePassword] = useState("");
    const [error, setError] = useState(false);

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleRePasswordChange = (e) => setRePassword(e.target.value);

    async function  handleSubmit (e) {
        e.preventDefault();
        if (password === repassword) {
            setError(false);
            navigate('/login');
           const response = await axios.post('http://localhost:5001/Signup',{
                username,email,password

            })
        } else {
            setError(true);
        }
    };

    return (
        <div className="signup">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} placeholder="Username" required />
                <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} placeholder="Email" required />
                <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} placeholder="Password" required />
                <input type="password" id="repassword" name="repassword" value={repassword} onChange={handleRePasswordChange} placeholder="Re-Enter Password" required />
                {error && <h2>Your Password Does Not Match</h2>}
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;

