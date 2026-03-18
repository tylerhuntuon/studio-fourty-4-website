import { NavLink } from "react-router-dom";
function Footer(){
    return (
        <div className="w-full flex justify-between items-center px-6 py-4 bg-taupe relative z-20">
            <NavLink to="/">
                <img src="src\assets\logo\SECONDARY LOGO - ONYX.svg" className="w-30" />
            </NavLink>
            

            <p className="font-body text-sm border-l px-4 mx-4 mr-auto">
                Shop 2<br />206 The Entrance Road<br />Erina 2550
            </p>

            <div className="flex gap-6 font-subheading text-sm">
                <NavLink to="/socials" className={({ isActive }) => isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"}>Contact</NavLink>
                <NavLink to="/book now" className={({ isActive }) => isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"}>Book Now</NavLink>
            </div>
            
        </div>
        
    );
}

export default Footer;
