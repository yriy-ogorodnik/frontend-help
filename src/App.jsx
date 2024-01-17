import { Routes, Route  } from "react-router-dom";
import  HomePage  from 'pages/HomePage'
import  AboutPage  from 'pages/AboutPage.jsx'
import  NotfoundPage  from 'pages/NotfoundPage'
import  Layout  from 'components/Layout'
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";


function App() {
 

  return (
    <>
 
    <Routes>
      <Route path="/frontend-help/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="about" element={<AboutPage/>}/>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="*" element={<NotfoundPage/>}/>
      </Route>
      
    </Routes>
    
    </>
  )
}

export default App
