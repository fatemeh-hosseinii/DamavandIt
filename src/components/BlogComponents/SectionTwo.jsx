import { useDispatch, useSelector } from "react-redux";
import { fetchArticle } from "../../Redux/ArticleNewsSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const SectionTwo = () => {
    const{Article,loading,error}=useSelector((state)=>state.Article)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchArticle())
    },[])
    return ( <>
    <div className="flex flex-col gap-7 lg:w-[80%] w-[100%]">
            {
                Article.damavandItArticle?.map((elem)=>{
                  return <div className="flex flex-row gap-4 justify-between bg-[white] shadow-lg p-3 rounded-lg">
                        <img className="w-[45%] rounded-lg" src={elem.image} alt=""/>
                        <div className=" flex flex-col justify-center items-center lg:justify-start lg:items-start lg:gap-5 gap-3 w-[55%] ">
                            <p className="line-clamp-2 lg:text-[15px] text-[13px] text-[#58595B] font-bold">{elem.name}</p>
                            <p className="text-[13px] text-[#9084A8] text-right ">{elem.date}</p>
                            <Link to={`/blog/${elem.id}`} className="lg:w-[30%] w-[60%] px-3 py-1 bg-[#E89A18] text-center text-[12px] font-bold text-[white] ">بیشتر</Link>

                        </div>
                    </div>
                })
            }
    </div>
    </> );
}
 
export default SectionTwo;