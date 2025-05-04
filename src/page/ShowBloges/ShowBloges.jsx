import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchArticle } from "../../Redux/ArticleNewsSlice";
import { useEffect } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

const ShowBloges = () => {
    const{Article,loading,error}=useSelector((state)=>state.Article)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchArticle())
    },[])
    const { id } = useParams(); 
  
    const numericId = parseInt(id);

    const allArticles = Object.values(Article).flat();
    const blog = allArticles.find(item => item.id === numericId);
  
    if (!blog) {
      return <div className="text-red-500 p-4">مقاله‌ای با این شناسه پیدا نشد.</div>;
    }
  
    return (
    <div className="p-5  flex flex-row gap-3">
        <div className="w-[75%] flex flex-col  gap-3">
            <h1 className="text-4xl font-bold">{blog.name}</h1>
            <div className="w-[40%] mt-4 gap-5 flex flex-row">
                <div className="w-[11%] bg-[green] p-2 rounded-lg">
                    <AiOutlineWhatsApp className="text-[white]" size={25}/>

                </div>
                <div className="w-[11%] bg-[blue] p-2 rounded-lg">
                    <AiFillLinkedin className="text-[white]" size={25}/>

                </div>
                <div className="w-[11%] bg-[#748BBC] p-2 rounded-lg">
                    <AiFillFacebook className="text-[white]" size={25}/>

                </div>
               
            </div>
            <p className="text-gray-500 text-[16px]">{blog.date}</p>
            {blog.image && <img src={blog.image} alt={blog.name} className="w-full  rounded" />}
            <p className="text-2xl font-bold">{blog.extratitle}</p>
            <p className="text-[17px] mt-2">{blog.decription}</p>
            <p className="text-[17px] mt-1">{blog.extradecription}</p>
            <p className="text-2xl font-bold mt-3">همبستگی:</p>
            <div className=" w-[100%] flex flex-row justify-center items-center mt-3">
              <img className="w-[60%] rounded-lg" src={blog.extraimage} alt="" />
               
            </div>
        </div>
        <div className="w-[23%] ps-4">
            <h2 className="text-xl font-bold mb-3 border-b pb-2">مطالب مرتبط</h2>
            {blog.sideArticle && blog.sideArticle.map(article => (
                <div key={article.id} className="mb-4 border-b pb-3">
                    <img src={article.image} alt={article.title} className="w-full h-32 object-cover rounded mb-2" />
                    <h3 className="text-md font-semibold">{article.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{article.summary}</p>
                    <Link  to={`/blog/${id}/${article.id}`} className="text-blue-600 text-sm mt-1 inline-block hover:underline">ادامه مطلب</Link>
                </div>
            ))}
            </div>
         </div>
    );
};
  
  export default ShowBloges;