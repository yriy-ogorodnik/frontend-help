import { Routes, Route  } from "react-router-dom";
import  HomePage  from 'pages/HomePage'
import  AboutPage  from 'pages/AboutPage.jsx'
import  NotfoundPage  from 'pages/NotfoundPage'
import  Layout  from 'components/Layout'


function App() {
 

  return (
    <>
 
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="*" element={<NotfoundPage/>}/>
      </Route>
      
    </Routes>
    
    </>
  )
}

export default App
