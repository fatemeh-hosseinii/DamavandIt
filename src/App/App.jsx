
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import RouterAbout from "../page/about/RouterAbout/RouterAbout";
import RouterContactUs from "../page/ContactUs/RouterContactUs/RouterContactUs";
import RouterBlog from "../page/Blog/RouterBlog/RouterBlog";
import RouterProject from "../page/Projects/RouterProject/RouterProject";
const App = () => {
    return ( <>
     <BrowserRouter>
     <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about/*" element={<RouterAbout />}/>
            <Route path="/contact/*" element={<RouterContactUs/>}/>
            <Route path="/blog/*" element={<RouterBlog/>} />
            <Route path="/project/*" element={<RouterProject/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    </> );
}
 
export default App;