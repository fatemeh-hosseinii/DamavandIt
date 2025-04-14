import { Route, Routes } from "react-router-dom";
import ContactUs from "../ContactUs";

const  RouterContactUs= () => {
    return (<>
    <Routes>
        <Route path="/" element={<ContactUs/>} />
     </Routes>
    </>  );
}
 
export default RouterContactUs;