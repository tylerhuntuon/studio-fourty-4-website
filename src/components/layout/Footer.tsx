import { NavLink, useLocation } from "react-router-dom";
function Footer(){
    const location = useLocation();
    const overlapsPage = location.pathname === "/socials";

    return (
        <div className={`relative z-30 w-full flex justify-between items-center px-6 py-4 ${overlapsPage ? "-mt-30 md:-mt-23 text-calacatta" : "bg-taupe text-onyx"}`}>
            <NavLink to="/">
                <img src={overlapsPage ? "src/assets/logo/SECONDARY LOGO - CALACATTA.svg" : "src/assets/logo/SECONDARY LOGO - ONYX.svg"} className="block w-30" />
            </NavLink>
            

            <p className="font-body text-sm border-l px-4 mx-4 mr-auto">
                Shop 2<br />206 The Entrance Road<br />Erina 2550
            </p>

            <div className="flex gap-6 font-subheading text-sm">
                <NavLink to="/socials" className={({ isActive }) => isActive ? "underline-offset-4" : "hover:underline underline-offset-4"}>Contact</NavLink>
                <NavLink to="https://www.fresha.com/a/studioforty4-erina-206-the-entrance-road-fe15fhse/all-offer?menu=true&share=true&pId=1032092&utm_content=link_in_bio&utm_medium=social&utm_source=ig" className={({ isActive }) => isActive ? "underline-offset-4" : "hover:underline underline-offset-4"}>Book Now</NavLink>
            </div>
            
        </div>
        
    );
}

export default Footer;
