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
    <div className="flex flex-col gap-7 w-[80%]">
            {
                Article.damavandItArticle?.map((elem)=>{
                  return  <div className="flex flex-row gap-4 justify-between bg-[white] shadow-lg p-3 rounded-lg">
                        <img className="w-[45%] rounded-lg" src={elem.image} alt=""/>
                        <div className=" flex flex-col gap-5">
                            <p className="line-clamp-2 text-[15px] text-[#58595B] font-bold">{elem.name}</p>
                            <p className="text-[13px] text-[#9084A8] ">{elem.date}</p>
                            <Link className="w-[30%] px-3 py-1 bg-[#E89A18] text-center text-[12px] font-bold text-[white]">بیشتر</Link>

                        </div>
                    </div>
                })
            }
    </div>
    </> );
}
 
export default SectionTwo;