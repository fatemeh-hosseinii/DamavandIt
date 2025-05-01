import { Route, Routes } from "react-router-dom";
import Question from "../Question";

const  RouterQuestion= () => {
    return (<>
    <Routes>
        <Route path="/" element={<Question/>} />
     </Routes>
    </>  );
}
 
export default RouterQuestion;