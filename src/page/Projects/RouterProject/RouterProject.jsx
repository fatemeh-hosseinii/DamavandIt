import { Route, Routes } from "react-router-dom";
import Project from "../Project";
import { ShowProjects } from "../ShowProjects/ShowProjects";


const  RouterProject= () => {
    return (<>
    <Routes>
        <Route path="/" element={<Project/>} />
        <Route path="/:id" element={<ShowProjects/>} />
     </Routes>
    </>  );
}
 
export default RouterProject;