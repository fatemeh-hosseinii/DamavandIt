import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProjects } from "../../../Redux/ProjectsSlice";
import Container from "../../../components/Container/Container";

import ShowRightProjects from "./ShowRightProjects";
import ShowLeftProjects from "./ShowLeftProjects";
import ShowDowmProjects from "./ShowDowmProjects";

export const ShowProjects = () => {
  const { Projects, loading, error } = useSelector((state) => state.Projects);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (loading) return <div className="p-4 text-center text-lg">در حال بارگذاری...</div>;
  if (error) return <div className="text-red-500 p-4 text-center">خطا در دریافت اطلاعات: {error}</div>;

  const project = Projects.find((item) => item.id === id);
  console.log(project);
  if (!project) return <div className="text-red-500 p-4 text-center">پروژه‌ای با این شناسه پیدا نشد.</div>;

  return (
    <Container>
      <div className="p-6  rounded-lg  ">
        <h1 className="text-2xl lg:text-3xl font-extrabold text-[black] text-center">جزئیات پروژه</h1>
        <div className="w-[100%] flex lg:flex-row flex-col gap-5 mt-10 ">
          <ShowRightProjects project={project}/>
          <ShowLeftProjects project={project}/>
        </div>
        <div className="">
          <ShowDowmProjects />
        </div>
        
       

       
         
      </div>

     
    </Container>
  );
};
