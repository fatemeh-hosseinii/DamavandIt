import { Route, Routes } from "react-router-dom";
import Blog from "../Blog";


const  RouterBlog= () => {
    return (<>
    <Routes>
        <Route path="/" element={<Blog/>} />
     </Routes>
    </>  );
}
 
export default RouterBlog;