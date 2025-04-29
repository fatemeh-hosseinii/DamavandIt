import { useDispatch, useSelector } from "react-redux";
import ArticleNews from "../../components/BlogComponents/ArticleNews";
import { fetchArticle } from "../../Redux/ArticleNewsSlice";
import JobArticle from "../../components/BlogComponents/JobArticle";
import { useEffect } from "react";

const Blog = () => {
 
  const{Article,loading,error}=useSelector((state)=>state.Article)
  const dispatch=useDispatch()
  useEffect(()=>{
      dispatch(fetchArticle())
  },[])

  return (
    <div className="w-full flex flex-col p-6 bg-[#fafafa]  shadow-sm">
      {/* هدر وبلاگ */}
      <div className="mb-8">
        <p className="text-[18px] text-[#777]">وبلاگ</p>
        <h1 className="text-[32px] font-extrabold text-[#222] mt-2">
          با <span className="text-[#faa518]">دماوند ایتی</span> به‌روز بمانید
        </h1>
        <p className="text-[20px] text-[#444] mt-4 leading-relaxed">
          جدیدترین اخبار، پروژه‌ها، بهبودهای خدمات، و نکات حرفه‌ای در زمینه طراحی و توسعه سایت را در اینجا دنبال کنید.
        </p>
      </div>
      {/* بخش مقالات کسب و کار */}
      <div className="bg-white w-full p-6 ">
        <h2 className="text-[24px] font-bold text-[#b45b00] mb-6 border-b pb-3">
          مقالات کسب و کار
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {Article.JobArticle?.map((article) => (
            <JobArticle key={article.id} article={article} />
          ))}
        </div>
      </div>
      {/* بخش مقالات */}
      <div className="bg-white w-full p-6 ">
        <h2 className="text-[24px] font-bold text-[#222] mb-6 border-b pb-3">
          اخبار و مقالات
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {Article.ArticleNews?.map((post) => (
          <ArticleNews post={post}/>
          ))}
        </div>
      </div>


    </div>
  );
};

export default Blog;
