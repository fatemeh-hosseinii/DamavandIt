import { Route, Routes } from "react-router-dom";
import Project from "../Project";

const  RouterProject= () => {
    return (<>
    <Routes>
        <Route path="/" element={<Project/>} />
     </Routes>
    </>  );
}
 
export default RouterProject;