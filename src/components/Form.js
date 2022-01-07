import { useState } from "react";

import IntroButton from "./IntroButton";

const Form = () => {
    const [firstName, setFirstName] = useState("First Name")
    const [lastName, setLastName] = useState("Last Name")
    const [email, setEmail] = useState("Email Address")
    const [password, setPassword] = useState("Password")

    return (
        <section>
            <IntroButton />
            <form>
                <input
                    type="text"
                    name="first name" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input 
                    type="text"
                    name="last name" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input 
                    type="email"
                    name="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password"
                    name="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>CLAIM YOUR FREE TRIAL</button>
            </form>
                <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
        </section>
    );
}

export default Form;