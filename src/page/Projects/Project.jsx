const projects = [
    {
      id: 1,
      title: "طراحی وب‌سایت فروشگاهی",
      description: "یک فروشگاه آنلاین با طراحی ریسپانسیو و تجربه کاربری بهینه.",
      image: "https://rayanita.com/assets/img/main/samples/irankhebre-s.jpg",
    },
    {
      id: 2,
      title: "سایت شرکتی خدماتی",
      description: "وب‌سایتی رسمی برای معرفی خدمات و جذب مشتریان جدید.",
      image: "https://rayanita.com/assets/img/main/samples/pars-express-app.png",
    },
    {
      id: 3,
      title: "پلتفرم آموزشی آنلاین",
      description: "پروژه‌ای برای ارائه آموزش‌ها به صورت ویدیویی و تعاملی.",
      image: "https://rayanita.com/assets/img/main/samples/irankhebre-s.jpg",
    },
    {
        id: 4,
        title: "پلتفرم آموزشی آنلاین",
        description: "پروژه‌ای برای ارائه آموزش‌ها به صورت ویدیویی و تعاملی.",
        image: "https://rayanita.com/assets/img/main/samples/injazanoonas.jpg ",
      }
  ];
  
  const Project = () => {
    return (
      <div className="bg-gray-50 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">پروژه‌های ما</h2>
            <p className="text-gray-600 text-sm">نمونه‌ای از پروژه‌هایی که توسط <span className="text-[#FAA518]" >تیم ما</span> انجام شده‌اند</p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl mb-4 object-cover h-48 w-full"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Project;
  