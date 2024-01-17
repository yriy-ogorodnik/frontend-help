import { Outlet, Link, NavLink } from "react-router-dom";
import Footer from "./Footer";
import  Header  from "./Header";
import { Container} from "@mui/material";

const Layout = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: 1 }}>
           <Header />
           <main  className="container mx-auto flex-1 text-center">
             <Container>
               <Outlet />
             </Container>
           </main>
      </div>

     
        <Footer />
      
    </div>
       
      
    </>
  );
};

export default Layout;
