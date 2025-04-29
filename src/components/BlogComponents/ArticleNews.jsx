const ArticleNews = ({post}) => {
    return (<>
            <div
              key={post.id}
              className="bg-[#f9f9f9] rounded-lg overflow-hidden shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#333] mb-2">{post.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{post.description}</p>
              </div>
            </div>
    </>  );
}
 
export default ArticleNews;