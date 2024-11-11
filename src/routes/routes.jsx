import {Routes,Route} from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { AboutPage } from '../pages/About-us';
import { ContactUs } from '../pages/Contact-us';


const AppRoutes = () =>{
    return(
        <>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about-us" element={<AboutPage/>} />
            <Route path="/contact-us" element={<ContactUs/>} />
        </Routes>
        </>
    )
}


export default AppRoutes;