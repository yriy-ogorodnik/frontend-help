import { Outlet, Link, NavLink } from "react-router-dom";
import Footer from "./Footer";
import  Header  from "./Header";
import { Container } from "@mui/material";

const Layout = () => {
  return (
    <>
      <header className="bg-slate-400 text-center">
      </header>
      
       <Header> 
        </Header>

      <main className="container mx-auto flex-1 text-center">
        <Container>
        <Outlet />
        </Container>
      </main>

      <Footer> </Footer>
    </>
  );
};

export default Layout;
