const JobArticle = ({ article }) => {
    return (
      <div className="bg-[#fff7e8] rounded-lg overflow-hidden shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
        <div className="p-6">
          <h3 className="text-lg font-bold text-[#b45b00] mb-3">{article.title}</h3>
          <p className="text-sm text-[#7a4b00] leading-relaxed">{article.description}</p>
        </div>
      </div>
    );
  };
  
  export default JobArticle;
  