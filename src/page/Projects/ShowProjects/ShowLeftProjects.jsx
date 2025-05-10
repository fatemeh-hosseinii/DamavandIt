const ShowLeftProjects = ({project}) => {
    return ( <>
    <div className="bg-[#F7F2FE] lg:w-[45%] rounded-3xl shadow-lg border-[1px]  border-[#b5b5b5]">
       <div className=" p-6 border-b-[1px] border-[#b5b5b5]">
            <h2 className="text-[22px] font-bold">{project.name}</h2>
       </div>
       <div className="flex flex-col p-6">
            <h2 className="font-bold">خدمات :</h2>
            <div className="flex flex-row justify-content-around gap-5 w-[100%] mt-3">
                <div className="bg-[#f9a518] w-[18%] rounded-3xl text-center">
                    <span className="text-[13px] text-[white]">توسعه</span>
                    
                </div>
                <div className="bg-[#f9a518] w-[18%] rounded-3xl text-center">
                    <span className="text-[13px] text-[white]">مشاوره</span>
                    
                </div>
                <div className="bg-[#f9a518] w-[18%] rounded-3xl text-center">
                    <span className="text-[13px] text-[white]">نگهداری</span>
                    
                </div>
                <div className="bg-[#f9a518] w-[18%] rounded-3xl text-center">
                    <span className="text-[13px] text-[white]">پشتیباتی</span>
                    
                </div>
            </div>
       </div>
       <div className="flex flex-col p-6 ">
            <h2 className="font-bold">درباره ی محصول :</h2>
            <p className="text-[13px] text-[#8E92A0] mt-2">
                {project.decription}

            </p>

       </div>
       <div className="p-6 flex flex-col">
            <h2 className="font-bold"> کشور  :{project.city}</h2>

       </div>
      
            
    </div>
    </> );
}
 
export default ShowLeftProjects;