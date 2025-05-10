import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchArticle } from "../../Redux/ArticleNewsSlice"
import { Link } from "react-router-dom"

const SectionFour = () => {
    const{Article,loading,error}=useSelector((state)=>state.Article)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchArticle())
    },[])
    return ( <>
    <div className="flex flex-col gap-5">
        {
            Article.SideArticle?.map((elem)=>{
                return <div className="shadow-lg flex flex-col gap-5 lg:w-[85%] w-[100%] p-5 rounded-lg ">
                    <img className="rounded-lg" src={elem.image} alt=""/>
                    <div className="flex flex-col gap-4 ">
                        <p className="text-[#58595B] font-bold" >{elem.name}</p>
                        
                    </div>
                    <Link to={`/blog/${elem.id}`} className="w-[35%] px-5 py-1 bg-[#E89A18] text-center text-[15px] font-bold text-[white]">بیشتر</Link>

                    
                </div>
            })
        }
        

    </div>
    </> );
}
 
export default SectionFour;