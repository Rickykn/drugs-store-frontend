import { useState } from "react"
import "../../component/styles.css"
import {BsEyeSlashFill,BsEyeFill} from "react-icons/bs"

const Singin =()=>{
    const [passwordVisible, setPasswordVisible] = useState(false)

    const togglePasswordHandler =()=>{
        setPasswordVisible(!passwordVisible)
    }
    
    return (
    <div className="container">
        <section className="login-section">
            <div>
                <h2>Masuk</h2>
            </div>
            <form className="login-form">
                <label className="label-input" id="email" >Email</label>
                <input className="form-input" type="email" placeholder="example@mail.com"/>
                <label className="label-input" id="password" >Password</label>
                <div className="input-with-icon">
                    <input className="form-input-password" type={!passwordVisible?"password":"text"} for="password"/>
                    <i className="icon-password" onClick={togglePasswordHandler}>
                    {!passwordVisible?<BsEyeSlashFill/>:<BsEyeFill/>}</i>
                </div>
                <div className="additional-form-section">
                </div>
                    <div className="remember-me">
                        <input id="remember-me" type="checkbox"/>
                        <span>remember me</span>
                    </div>
                        <span className="forgot-password">lupa password ?</span>
            </form>
            <div>
                <button>Signin</button>
            </div>
            <div></div>
        </section>
    </div>
    )
}

export default Singin