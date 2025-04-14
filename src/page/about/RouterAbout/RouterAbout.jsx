import { Route, Routes } from "react-router-dom";
import About from "../About";

const RouterAbout = () => {
    return ( <>
      <Routes>
        <Route path="/" element={<About />} />
     </Routes>
    </> );
}
 
export default RouterAbout;