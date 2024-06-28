import React from 'react';
import './style/Navbar.css';

const Navbar = () => {   
    return (
        <div className="navbar">
            <h1>BudgetBuddy</h1>
            <div className="nav">
                <h2>Home</h2>
                <h2>Accounts</h2>
                <h2>Savings</h2>
                <h2>Expense</h2>
                <h2>About Us</h2>
                <h2>Profile</h2>
            </div>
            <div className="log">
               <button>Signup</button>
                <button>Login</button>
            </div>
        </div>
    );
};

export default Navbar;
