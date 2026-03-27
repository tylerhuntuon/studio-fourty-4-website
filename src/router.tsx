import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Socials from "./pages/Socials";
import Policy from "./pages/Policy";
import NotFound from "./pages/NotFound";

function AppRouter(){
    return(
        <Routes>
            <Route path ="/" element = {<Home />} />
            <Route path ="/about" element = {<About />} />
            <Route path ="/services" element = {<Services />} />
            <Route path ="/socials" element = {<Socials />} />
            <Route path ="/policy" element = {<Policy />} />
            <Route path ="/*" element = {<NotFound />} />
        </Routes>
    );
}

export default AppRouter;
