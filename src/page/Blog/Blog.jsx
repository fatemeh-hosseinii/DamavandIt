import SectionFour from "../../components/BlogComponents/SectionFour";
import SectionOne from "../../components/BlogComponents/SectionOne";
import SectionThree from "../../components/BlogComponents/SectionThree";
import SectionTwo from "../../components/BlogComponents/SectionTwo";
const Blog = () => {
  return (
    <div className="w-full bg-[#f9f9f9] py-12 px-6 md:px-16">
      {/* هدر صفحه */}
      <div className="text-center mb-12">
        <h1 className="text-2xl lg:text-3xl font-extrabold text-gray-800">
          تازه‌ترین اخبار و مقالات
        </h1>
        <p className="text-gray-600 mt-4 text-sm max-w-3xl mx-auto">
          با خواندن مطالب تخصصی ما در حوزه تکنولوژی، طراحی وب و توسعه نرم‌افزار، دانش خود را به‌روز نگه دارید.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col  w-full mx-auto ">
        <div className="lg:w-1/2 w-[100%] flex flex-col justify-center items-center  ">
          <SectionOne />
        </div>
        <div className="lg:w-1/2 w-full lg:mt-0 mt-5">
          <SectionTwo />
        </div>
      </div>

      <div className="mt-5 flex flex-col ">
        <h1 className="text-2xl md:text-2xl font-extrabold text-gray-800 border-b pb-2 border-[#727272]">
           اخبار و مقالات
        </h1>
       <div className=" w-[100%] flex lg:flex-row flex-col lg:mt-5 mt-0">
        <div className="lg:w-[70%] w-[100%]">
          <SectionThree/>
        </div>
        <div className=" lg:w-[30%]">
          <SectionFour/>
        </div>
       </div>
      </div>
    </div>
    
  );
};

export default Blog;
