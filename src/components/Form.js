import IntroButton from "./IntroButton";

const Form = () => {
    return (
        <section>
            <IntroButton />
            <form>
                <input name="first name" value="First Name"/>
                <input name="last name" value="Last Name"/>
                <input name="email" value="Email Address"/>
                <input name="password" value="Password"/>
                <button>CLAIM YOUR FREE TRIAL</button>
            </form>
                <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
        </section>
    );
}

export default Form;