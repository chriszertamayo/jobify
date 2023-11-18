import styled from "styled-components"
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg';
import { Link } from "react-router-dom";
import { Logo } from "../components";


const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>job <span>tracking</span> app
                    </h1>
                    <p>
                        I'm baby wayferers hoodi next level taiyaki brooklyn cliche blue
                        bottle single-origin coffee chia. Aesthetic post-ironic vemmo,
                        quinoa lo-fi tote bag adaptogeen everyday carry meeggings +1 brunch
                        nwrhal.
                    </p>
                    <Link to="/register" className="btn register-link">Register</Link>
                    <Link to="/login" className="btn">Login / Demo User</Link>
                </div>
                <img src={main} alt="job hunt" className="img main-img" />
            </div>
        </Wrapper>
    )
}


export default Landing