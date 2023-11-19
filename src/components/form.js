import React, { useState } from "react";
import "../index.css";

const Form = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("https://httpbin.org/post", {
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            // eslint-disable-next-line
            const resJson = await res.json();
            if (res.status === 200) {
                setEmail("");
                setPassword("");
                setMessage("You logged in successfully");
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <h1 className="form__heading">Sign In</h1>
                <label
                    for="email"
                    className="form__label">Email <sup>*</sup></label>
                <input
                    id="email"
                    type="email"
                    required
                    placeholder="tony7989@gmail.com"
                    className="form__input"
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                <label
                    for="password"
                    className="form__label"
                >Password <sup>*</sup></label>
                <input
                    id="password"
                    type="password"
                    required
                    className="form__input"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                <button
                    type="submit"
                    className="form__button"
                >Sign In</button>
                <a href="/forgot-password" className="form__link">Forgot password?</a>
                <div className="form__message">{message ? <p>{message}</p> : null}</div>
            </form>
        </div>
    );
}

export default Form;