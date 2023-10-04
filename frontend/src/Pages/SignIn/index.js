import Navbar from "../../components/Navbar";
import "./index.css";

function SignIn(){
    return(
        <>
        <Navbar/>
        <div className="signin-container">
            <form>
                <h1>Sign In</h1>
                <label>Email : <input type="email" placeholder="Email"/></label>
                <label>Password : <input type="password" placeholder="Password"/></label>
                <a href="#">Forgot your password?</a>
                <button type="submit">Sign In</button>
                <span>OR</span>
                <button>Create Account</button>
            </form>
        </div>
        </>
    )
}

export default SignIn;