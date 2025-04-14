import question from "../../../public/assets/media/question-mark.png"


const SectionFive = () => {
    return (<>
    <div className= " lg:mt-20 mt-20 md:container p-5 w-[100%] ">
        
        <div className="rounded-lg w-[100%]  p-3 flex md:flex-row flex-col gap-6 lg:gap-0 justify-center  items-center md:justify-between bg-gradient-to-r from-[#1890fa] to-[#0D67BE]">
            <div className="lg:w-[30%] w-[100%] flex flex-row justify-center items-center">
               <img className="w-[25%]" src={question} alt="" />

            </div>
           
            <div className="flex flex-col text-center  lg:w-[35%] w-[100%] ">
                <p className="lg:text-[25px] text-[18px] text-[white] font-bold">
                    برای سفارش پروژه نیاز به مشاوره دارید؟

                </p>
                <p className="text-[white] text-[13px] mt-2 lg:mt-0">همین حالا با کارشناسان ما تماس حاصل فرمایید.</p>
            </div>
            <div className=" lg:w-[35%] w-[100%] flex flex-row justify-center items-center ">
                <button className="px-6 py-4 bg-[#FAA518] rounded-3xl text-[14px] font-bold  text-[white]">دریافت مشاوره رایگان</button>
            </div>
        </div>

    </div>
    
    </>);
}
 
export default SectionFive;