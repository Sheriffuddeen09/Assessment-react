import { useState } from "react"
import Logo from './images/port.png'
const Header = () =>{
const [country, setCountry] = useState('')
    return(

        <nav>
            <span className="img">
            <img src={Logo} alt="Logo" width={50} height={50}/>
            </span>
            <ul>
                <li><a href={'/'}>about us</a></li>
                <li><a href={'/user'}>services</a></li>
                <li><a href={'/carrier'}>contact us</a></li>
                <li><a href={'/ticket'}>careers</a></li>
            </ul>
            <span className="login">
            <a href={'/'}>Login</a>
            </span>
            <span>
            <button className="account">Create Account</button>
            </span>
            <section>
            <select value={country}
            onChange={(e) => setCountry(e.target.value)} className="sece">
            <option value="FT">
            <img src={Logo} alt="Logo" width={50} height={50}/>
                Nigeria
            </option>
            <option value="Fs">
            <img src={Logo} alt="Logo" width={50} height={50}/>
                Ghana
            </option>
            <option value="">
            <img src={Logo} alt="Logo" width={50} height={50}/>
                Algeria
            </option>
            </select>
        </section>
        </nav>
    )
}
export default Header



