import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProjects } from "../../Redux/ProjectsSlice";


  const Project = () => {
    const{Projects,loading,error}=useSelector((state)=>state.Projects)
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(fetchProjects())
    },[])
    return (
      <div className="bg-gray-50 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">پروژه‌های ما</h2>
            <p className="text-gray-600 text-sm">نمونه‌ای از پروژه‌هایی که توسط <span className="text-[#FAA518]" >تیم ما</span> انجام شده‌اند</p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col"
              >
                <img
                  src={project.image}
              
                  className="rounded-xl mb-4 object-cover h-48 w-full"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm line-clamp-1">{project.decription}</p>
                <Link  className=" w-[24%] border-b-[1px] border-[#ff9b19]  text-[#F9A518] text-[13px] mt-5" to={`/project/${project.id}`}>نمایش بیشتر</Link>

              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Project;
  