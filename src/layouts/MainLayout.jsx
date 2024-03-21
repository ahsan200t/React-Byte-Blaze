import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <div className="h-16">
                <Nav></Nav>
            </div>
            {/* Packet */}
           <div className="min-h-[calc(100vh-116px)]">
           <Outlet></Outlet>
           </div>
           {/* footer */}
           <Footer></Footer>
        </div>
    );
};

export default MainLayout
;