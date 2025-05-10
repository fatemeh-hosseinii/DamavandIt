import { FaReact, FaNodeJs, FaSass, FaDatabase } from "react-icons/fa";

const technologies = [
  { id: 1, name: "React", icon: <FaReact className="text-blue-500" />, desc: "کتابخانه رابط کاربری" },
  { id: 2, name: "Node.js", icon: <FaNodeJs className="text-green-600" />, desc: "بک‌اند با جاوااسکریپت" },
  { id: 3, name: "Sass", icon: <FaSass className="text-pink-500" />, desc: "پیش‌پردازنده CSS" },
  { id: 4, name: "Database", icon: <FaDatabase className="text-gray-600" />, desc: "مدیریت داده‌ها" },
];

const ShowDowmProjects = () => {
  return (
    <div className="mt-10 rounded-3xl shadow-lg border border-[#b5b5b5] p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">تکنولوژی‌ها</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {technologies.map((tech) => (
          <div
            key={tech.id}
            className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl shadow hover:shadow-md transition-all duration-300"
          >
            <div className="text-3xl mb-2">{tech.icon}</div>
            <h3 className="text-lg font-semibold text-gray-700">{tech.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{tech.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowDowmProjects;
