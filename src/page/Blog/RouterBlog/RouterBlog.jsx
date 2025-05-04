import { Route, Routes } from "react-router-dom";
import Blog from "../Blog";
import ShowBloges from "../../ShowBloges/ShowBloges";
import ShowSubArticle from "../../ShowBloges/ShowSubArticle";


const  RouterBlog= () => {
    return (<>
    <Routes>
        <Route path="/" element={<Blog/>} />
        <Route path="/:id" element={<ShowBloges/>} />
        <Route path="/:id/:subid" element={<ShowSubArticle/>} />
     </Routes>
    </>  );
}
 
export default RouterBlog;