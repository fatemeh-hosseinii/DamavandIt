import { useDispatch, useSelector } from "react-redux";
import { fetchArticle } from "../../Redux/ArticleNewsSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SectionOne = () => {
    const{Article,loading,error}=useSelector((state)=>state.Article)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchArticle())
    },[])


    return (  <>
    <div>
        {
            Article.damavandIt?.map((elem)=>{
             
                return <div className="flex flex-col lg:w-[90%] w-[100%] lg:gap-5 gap-3  bg-[white] shadow-lg p-5 rounded-lg">
                    <img className="rounded-lg" src={elem.image} alt=""/>
                    <p className="text-[#58595B] font-bold">{elem.name}</p>
                    <p className="text-[#9084A8] text-[12px]">{elem.date}</p>
                    <p className="lg:text-[15px] text-[12px] ">{elem.decription}</p>
                    <Link  className="lg:w-[20%] rounded-lg text-[14px] lg:px-3 py-1 bg-[#E89A18] text-center font-bold text-[white]" to={`/blog/${elem.id}`} >بیشتر</Link>
                    
                </div>
            })
        }
    </div>
    </>);
}
 
export default SectionOne;