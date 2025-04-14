import recomendLogo from "../../../public/assets/media/programing.png"
const SectionOne = () => {
    return ( <>
    <div className="w-[100%] flex lg:flex-row flex-col   container ">
        <div className=" lg:w-[45%] hidden w-[100%] p-5 lg:flex flex-col ">
        
            <p className="lg:text-[33px] text-[20px] font-bold"><span className="lg:border-b-8 border-b-4 border-amber-300">راحت </span>تر از چیزی که فکرشو کنی!</p>
            <p className="lg:text-[20px] text-[15px] font-bold text-[#C1C1C1] mt-7">طراحی سایت تخصصی از </p>
            <p className="lg:text-[20px] text-[15px] font-bold text-[red]">شرکتی</p>
            <p className="lg:text-[20px] text-[15px] font-bold text-[#C1C1C1]">تا</p>
            <p className="lg:text-[20px] text-[15px] font-bold text-[#2B3742]">فروشگاهی</p>
            <p className="lg:text-[20px] text-[15px] font-bold text-[#C1C1C1]">در</p>
            <p className="lg:text-[20px] text-[15px] font-bold text-[#C1C1C1]"><span className="text-[blue]"> سریعترین زمان </span>ممکن</p>
            <div className="bg-[#0D67BE] w-[100%] mt-23  rounded-2xl p-3 flex flex-row justify-between">
                <p className="text-[white] font-bold text-[15px]  mt-2">پاسخ گوی پرسش های شما هستیم...</p>
                <button className=" lg:px-5 lg:py-3 p-2  bg-[#FAA518] rounded-3xl text-[12px] lg:text-[15px]  text-[white] font-bold">درخواست مشاوره</button>
            </div>
       </div>
       <div className="lg:hidden flex flex-col justify-center items-center  p-3">
            <p className="lg:text-[40px] md:text-[30px] text-[20px] font-bold"><span className="lg:border-b-8 border-b-4 border-amber-300">راحت </span>تر از چیزی که فکرشو کنی!</p>
            <p className="mt-5 text-[18px] text-center">طراحی سایت تخصصی از شرکتی تا فروشگاهی در سریعترین زمان ممکن</p>
            <div className="bg-[#0D67BE] sm:w-[70%] w-[100%] lg:mt-15 mt-5 rounded-2xl p-3 flex flex-row justify-between">
                <p className="text-[white] font-bold lg:text-[20px] text-[12px] mt-2">پاسخ گوی پرسش های شما هستیم...</p>
                <button className=" lg:px-5 lg:py-3 p-2  bg-[#FAA518] rounded-3xl text-[12px] lg:text-[15px]  text-[white] font-bold">درخواست مشاوره</button>
            </div>
       </div>
        <div className="lg:w-[55%] w-[100%] flex flex-row lg:justify-end justify-center  ">
            <img className="lg:w-[78%] w-[90%]" src={recomendLogo} alt="" />

        </div>
       
    </div>
    </> );
}
 
export default SectionOne;