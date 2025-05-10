import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

const SectionEight = () => {
    return ( <>
    <div className="lg:mt-5 mt-10 m w-[100%] p-5 flex lg:flex-row mb-5  flex-col justify-center items-end lg:justify-between ">
        <div className="lg:w-[60%] w-[100%]  shadow-2xl  rounded-xl flex lg:flex-row flex-col ">
            <div className="bg-gradient-to-r from-[#FAA518] to-[#fa6f18]  lg:rounded-r-xl rounded-t-lg flex  flex-row lg:flex-col justify-around items-center  lg:p-4  lg:w-[15%] w-[100%]  gap-6 ">
             
                <AiFillTwitterCircle className="text-[white]" md:size={45} size={35} />
                <AiFillGithub className="text-[white]"  md:size={45} size={35} />
                <AiFillLinkedin className="text-[white]" md:size={45} size={35}  />
                <AiFillFacebook className="text-[white]" md:size={45} size={35} />


            </div>
             <div className=" rounded-l-lg xl:w-[85%] w-[100%]  flex flex-col gap-5 p-3">
                  <p className="text-[20px] font-bold   ">درخواست <span className="text-amber-600">مشاوره</span> رایگان</p>
                  <p className="text-[12px] text-[#C0C3C1] mt-1">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p> 
                   <div className=" flex lg:flex-row flex-col lg:gap-5 gap-4 w-[100%] lg:mt-2 ">
                        <div className=" flex flex-col gap-3 lg:w-[30%] w-[60%] ">
                            <label className="lg:text-[14px] text-[13px]" htmlFor="">
                                نام و نام خانوادگی
                            </label>
                            <div className="bg-[#F5F6F7] shadow-xl rounded-lg lg:p-[6px] p-1 w-[100%]">
                             <input className="outline-none  w-[80%]" type="text" />

                            </div>
                        </div>
                        <div className=" flex flex-col gap-3 lg:w-[30%] w-[60%] ">
                            <label className="lg:text-[14px] text-[13px]" htmlFor="">
                                نام و نام خانوادگی
                            </label>
                            <div className="bg-[#F5F6F7] shadow-xl rounded-lg lg:p-[6px] p-1  w-[100%]">
                             <input className="outline-none  w-[80%]" type="text" />

                            </div>
                        </div>
                       
                        <div className=" flex flex-col gap-3 lg:w-[30%] w-[60%] ">
                            <label className="lg:text-[14px] text-[13px]" htmlFor="">
                                نام و نام خانوادگی
                            </label>
                            <div className="bg-[#F5F6F7] shadow-xl rounded-lg lg:p-[6px] p-1   w-[100%]">
                             <input className="outline-none  w-[80%]" type="text" />

                            </div>
                        </div>
                  </div>
                  <div className="  flex flex-col p-2">
                        <label className="lg:text-[15px] text-[13px] font-bold" htmlFor="">پیام در خواست :</label>
                        <textarea className="mt-5  bg-[#F5F6F7] shadow-xl rounded-lg  outline-none" rows="5" cols="2"></textarea>
                  </div>
                  <div className="  flex lg:flex-row flex-col justify-between  w-[100%]">
                        <div className=" lg:w-[50%] w-[100%] flex flex-row justify-between p-1">
                            <p className="lg:text-[18px] text-[14px] font-bold">0912<span className="text-[blue] ">3336474</span> </p>
                            <p className="lg:text-[14px] text-[13px]">همراه شما هستیم...</p>
                        </div>
                        <div className=" p-1 lg:w-[50%]  flex flex-row lg:justify-end lg:items-end w-[100%] mt-5 lg:mt-0">
                            <button className="bg-amber-600 lg:px-5 lg:py-3 px-4 py-2 font-bold lg:text-[14px] text-[13px] rounded-lg">
                                ثبت در خواست
                            </button>
                        </div>

                  </div>
             </div>
        </div>
        <div className="lg:w-[38%] w-[100%]   shadow xl:mx-auto mt-7 lg:mt-0 ">
            <iframe
                className="w-[100%] rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.815984547883!2d51.304684175210625!3d35.73074387257124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfda3016788c1%3A0x4a01716cc77f4f70!2z2KfbjNiz2Krar9in2Ycg2YXYqtix2Ygg2LnZhNin2YXZhyDYrNi52YHYsduM!5e0!3m2!1sen!2sde!4v1727891062058!5m2!1sen!2sde"
                height="460"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>

    </div>
    </> );
}
 
export default SectionEight;