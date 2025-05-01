import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchArticle } from "../../Redux/ArticleNewsSlice"
import { Link } from "react-router-dom"

const SectionThree = () => {
    const{Article,loading,error}=useSelector((state)=>state.Article)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchArticle())
    },[])
    return ( <>
    <div className="w-[100%]  flex flex-col gap-5">
        {
            Article.Article?.map((elem)=>{
                return <div className="w-[90%] flex flex-row bg-[white] p-4 rounded-lg shadow-lg">
                    <div className="w-[45%] mt-5">
                    <img className="rounded-lg" src={elem.image} alt="" />
                         
                    </div>
                    <div className=" flex flex-col gap-3 p-3 w-[55%]">
                        <p className="text-[#58595B] font-bold">{elem.name}</p>
                        <p className="text-[#9084A8] text-[12px]">{elem.date}</p>
                        <p className="line-clamp-3">{elem.decription}</p>
                        <Link className="w-[25%] px-3 py-1 bg-[#E89A18] text-center text-[13px] font-bold text-[white]">بیشتر</Link>

                    </div>
                    
                </div>
            })
        }
    </div>
    </> );
}
 
export default SectionThree;