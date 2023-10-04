import Navbar from "../../components/Navbar";
import "./index.css";

function SignUp(){
    return(
        <>
        <Navbar/>
        <div className="signup">
            <h1>SignUp</h1>
            <form>
                <label>First Name : <input type="text" placeholder="First Name"/></label><br/>
                <label>Last Name : <input type="text" placeholder="Last Name"/></label><br/>
                <label>Email : <input type="email" placeholder="Email"/></label><br/>
                <label>Password : <input type="password" placeholder="Password"/></label><br/>
                <label>Confirm Password : <input type="password" placeholder="Confirm Password"/></label><br/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
        </>
    );
}

export default SignUp;