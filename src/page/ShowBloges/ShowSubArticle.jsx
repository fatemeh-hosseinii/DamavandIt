import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticle } from "../../Redux/ArticleNewsSlice";
import { useParams } from "react-router-dom";

const ShowSubArticle = () => {
  const { Article } = useSelector((state) => state.Article);
  const dispatch = useDispatch();
  const { id, subid } = useParams();
console.log("s",subid);
  useEffect(() => {
    dispatch(fetchArticle());
  }, [dispatch]);

 
  console.log("All articles:", Article);  


  if (!Article) {
    return <p>در حال بارگذاری داده‌ها...</p>;
  }

  const allArticles = Object.values(Article || {}).flat();
  console.log("Flattened articles:", allArticles); 

  const blog = allArticles.find((item) => item.id === Number(id));
  console.log("Found blog:", blog); 

  if (!blog) {
    return <p className="text-red-500 mt-5">مقاله‌ای با این شناسه یافت نشد.</p>;
  }

  const sideArticles = blog?.sideArticle;
  const subArticle = sideArticles?.find((item) => item.id === Number(subid));
  console.log("subArticle:", subArticle);

  return (
    <>
      {subArticle ? (
        <div className="p-4 flex flex-row justify-around items-center w-[100%]">
          <div className="w-[55%] flex flex-col gap-3">
            <h2 className="text-2xl font-bold mb-2">{subArticle.title}</h2>
            <img
              src={subArticle.image}
              alt={subArticle.title}
              className="w-full h-64 object-cover rounded mb-2"
            />
            <p>{subArticle.summary}</p>
            
          </div>
          
        </div>
      ) : (
        <p className="text-red-500 mt-5">زیرمقاله‌ای با این شناسه یافت نشد.</p>
      )}
    </>
  );
};

export default ShowSubArticle;
