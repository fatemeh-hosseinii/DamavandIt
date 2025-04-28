const Blog = () => {
    const blogPosts = [
      {
        id: 1,
        title: "روندهای جدید در طراحی وب‌سایت در سال ۲۰۲۵",
        description: "آشنایی با جدیدترین ترندهای طراحی سایت برای سال‌های آینده.",
        imageUrl: "https://blog.asax.ir/wp-content/uploads/2025/04/photo-%D8%A7%DB%8C%D9%86%D8%AF%DA%A9%D8%B3-%D8%AF%D8%B1-%D9%BE%D8%A7%DB%8C%DA%AF%D8%A7%D9%87-%D8%AF%D8%A7%D8%AF%D9%87-%DA%86%DB%8C%D8%B3%D8%AA%D8%9F.jpg",
      },
      {
        id: 2,
        title: "۵ نکته طلایی برای بهبود تجربه کاربری سایت",
        description: "چطور با رعایت چند نکته ساده تجربه کاربری را بهبود ببخشیم.",
        imageUrl: "https://academy.rayanita.com/wp-content/uploads/2024/06/shopping-marketplace-min-420x294.jpg",
      },
      {
        id: 3,
        title: "اهمیت طراحی ریسپانسیو در موفقیت وب‌سایت",
        description: "چرا طراحی واکنش‌گرا برای هر کسب‌وکار آنلاین ضروری است؟",
        imageUrl: "https://academy.rayanita.com/wp-content/uploads/2024/03/%D9%86%DA%A9%D8%A7%D8%AA-%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C-%D8%B3%D8%A7%DB%8C%D8%AA-%D9%85%D8%B4%D8%AA%D8%B1%DB%8C-%D9%85%D8%AD%D9%88%D8%B1-420x294.jpg",
      },
      {
        id: 4,
        title: "برترین فریم‌ورک‌های توسعه وب در سال ۲۰۲۵",
        description: "معرفی محبوب‌ترین فریم‌ورک‌های برنامه‌نویسی وب.",
        imageUrl: "https://academy.rayanita.com/wp-content/uploads/2024/06/%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C-%D8%B3%D8%A7%DB%8C%D8%AA-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%B4%D8%B1%DA%A9%D8%AA_%D9%87%D8%A7%DB%8C-%D9%81%D9%86%D8%A7%D9%88%D8%B1-min-420x294.jpg",
      },
      {
        id: 5,
        title: "چگونه امنیت وب‌سایت خود را افزایش دهیم",
        description: "روش‌های مهم برای محافظت از سایت در برابر تهدیدهای امنیتی.",
        imageUrl: "https://academy.rayanita.com/wp-content/uploads/2024/06/%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C-%D8%B3%D8%A7%DB%8C%D8%AA-%D9%85%D8%A7%D8%B1%DA%A9%D8%AA-%D9%BE%D9%84%DB%8C%D8%B3-%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%DB%8C-min-420x294.jpg",
      },
    ];
  
    return (
      <div className="w-full flex flex-col p-5">
        <p className="text-[17px] text-[#c5c5c5]">وبلاگ</p>
  
        <div className="w-full flex flex-col">
          <p className="text-[28px] font-bold text-[#000000] mt-3">
            با <span className="text-[#faa518]">دماوند ایتی</span> به‌روز بمانید
          </p>
  
          <p className="text-[23px] font-bold text-[#000000] mt-2">
            جدیدترین اخبار، پروژه‌ها، بهبودهای خدمات، و نکات حرفه‌ای در زمینه طراحی و توسعه سایت را در اینجا دنبال کنید.
          </p>
  
          <div className="bg-[#faa518] w-full mt-10 p-6 rounded-lg flex flex-col">
            <p className="font-bold text-[20px] text-white mb-5">اخبار و مقالات</p>
  
            <div className="flex flex-wrap gap-6">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="w-full sm:w-[48%] md:w-[30%] bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-[#333]">{post.title}</h3>
                    <p className="text-sm text-[#666]">{post.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* بخش جدید مقالات کسب و کار */}
          <div className="bg-[#f4f4f4] w-full mt-10 p-6 rounded-lg flex flex-col">
            <p className="font-bold text-[20px] text-[#333] mb-3">مقالات کسب و کار</p>
            <p className="text-[16px] text-[#555]">
              مقالات مرتبط با رشد و مدیریت کسب و کار
            </p>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default Blog;
  