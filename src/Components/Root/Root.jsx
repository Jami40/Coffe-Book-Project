import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-232px)] py-12">
                <Outlet />

            </div>
            
            <Footer></Footer>
            
        </div>
    );
};

export default Root;