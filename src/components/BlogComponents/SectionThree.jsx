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
    <div className="w-[100%] flex flex-col gap-5">
        {
            Article.Article?.map((elem)=>{
                return <div className="lg:w-[90%] w-[100%] flex lg:flex-row flex-col bg-[white] p-4 rounded-lg shadow-lg">
                    <div className="lg:w-[45%] w-[100%]  mt-5">
                    <img className="lg:w-[100%] w-[100%] rounded-lg" src={elem.image} alt="" />
                         
                    </div>
                    <div className=" flex flex-col gap-3 p-3 lg:w-[55%] w-[100%] ">
                        <p className="text-[#58595B] font-bold">{elem.name}</p>
                        <p className="text-[#9084A8] text-[12px]">{elem.date}</p>
                        <p className="line-clamp-3">{elem.decription}</p>
                        <Link to={`/blog/${elem.id}`} className="lg:w-[25%] px-3 py-1 bg-[#E89A18] text-center text-[13px] font-bold text-[white]">بیشتر</Link>

                    </div>
                    
                </div>
            })
        }
    </div>
    </> );
}
 
export default SectionThree;