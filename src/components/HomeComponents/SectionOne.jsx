import recomendLogo from "../../../public/assets/media/programing.png";

const SectionOne = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row-reverse container mt-5">
            {/* تصویر - ابتدا در موبایل، سمت راست در دسکتاپ */}
            <div className="lg:w-[55%] w-full flex justify-center lg:justify-end">
                <img className="lg:w-[78%] w-[90%]" src={recomendLogo} alt="برنامه نویسی" />
            </div>

            {/* متن برای دسکتاپ */}
            <div className="lg:w-[45%] hidden lg:flex flex-col p-5">
                <p className="lg:text-[33px] text-[20px] font-bold">
                    <span className="lg:border-b-8 border-b-4 border-amber-300">راحت </span>
                    تر از چیزی که فکرشو کنی!
                </p>
                <p className="lg:text-[20px] text-[15px] font-bold text-[#C1C1C1] mt-7">طراحی سایت تخصصی از </p>
                <p className="lg:text-[20px] text-[15px] font-bold text-[red]">شرکتی</p>
                <p className="lg:text-[20px] text-[15px] font-bold text-[#C1C1C1]">تا</p>
                <p className="lg:text-[20px] text-[15px] font-bold text-[#2B3742]">فروشگاهی</p>
                <p className="lg:text-[20px] text-[15px] font-bold text-[#C1C1C1]">در</p>
                <p className="lg:text-[20px] text-[15px] font-bold text-[#C1C1C1]">
                    <span className="text-[blue]">سریعترین زمان</span> ممکن
                </p>
                <div className="bg-[#0D67BE] w-full mt-10 rounded-2xl p-3 flex justify-between">
                    <p className="text-white font-bold text-[15px] mt-2">پاسخ‌گوی پرسش‌های شما هستیم...</p>
                    <button className="lg:px-5 lg:py-3 p-2 bg-[#FAA518] rounded-3xl text-[12px] lg:text-[15px] text-white font-bold">
                        درخواست مشاوره
                    </button>
                </div>
            </div>

            {/* متن برای موبایل */}
            <div className="lg:hidden flex flex-col justify-center items-center p-3">
                <p className="lg:text-[40px] md:text-[30px] text-[20px] font-bold text-center">
                    <span className="lg:border-b-8 border-b-4 border-amber-300">راحت </span>
                    تر از چیزی که فکرشو کنی!
                </p>
                <p className="mt-5 text-[18px] text-center">
                    طراحی سایت تخصصی از شرکتی تا فروشگاهی در سریعترین زمان ممکن
                </p>
                <div className="bg-[#0D67BE] sm:w-[70%] w-full mt-5 rounded-2xl p-3 flex justify-between">
                    <p className="text-white font-bold text-[12px] mt-2">پاسخ‌گوی پرسش‌های شما هستیم...</p>
                    <button className="lg:px-5 lg:py-3 p-2 bg-[#FAA518] rounded-3xl text-[12px] lg:text-[15px] text-white font-bold">
                        درخواست مشاوره
                    </button>
                </div>
              
               
            </div>
        </div>
    );
};

export default SectionOne;
