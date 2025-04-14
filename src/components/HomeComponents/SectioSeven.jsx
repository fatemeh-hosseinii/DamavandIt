import { useEffect, useState } from "react";

const SectionSeven = () => {
  

    return ( <>
    <div className=" mt-20 xl:flex hidden flex-col justify-center items-center  p-3">
        <h2 className="text-[30px] font-bold"> مراحل <span className="text-[#ff9d01]">صفر تا صد</span> پروژه ها</h2>
        <div className="w-[100%] flex flex-row justify-center relative  container">
            <div className=" absolute right-6  w-[47%]  flex flex-col justify-end items-end mt-25 gap-5 ">
                <div className="bg-gradient-to-r from-[#1890fa] to-[#0D67BE] p-3 w-[70%] rounded-2xl text-[white] mt-15">
                    <div className="flex flex-col">
                       <h2 className="font-bold text-[#FAA518] text-[18px]">بررسی فنی</h2>
                       <p className="text-[12px] leading-5">
                        
                       در ابتدای کار لازم است پروژه از نظر فنی کاملا مورد بررسی قرار گیرد. پس از بررسی ابهامات، بهبودها و پیشنهادات مشخص می‌شوند. در صورت نیاز یک جلسه رفع ابهام و شفاف سازی تشکیل می‌شود.
                       </p>
                    </div>

                </div>
                <div className="bg-gradient-to-r from-[#1890fa] to-[#0D67BE] p-3 w-[70%] text-[white] rounded-2xl mt-25">
                    <div className="flex flex-col">
                       <h2 className="font-bold text-[#FAA518] text-[17px]">برنامه نویسی و اجرا</h2>
                       <p className="text-[12px] leading-5">
                       پس از مشخص شدن ساختارها، مطابق فازبندی اجرا و برنامه نویسی آغاز می‌گردد. بخش‌های مختلف در صورت امکان برای سرعت بیشتر به صورت همزمان توسعه داده می‌شوند.


                       
                       </p>
                    </div>

                </div>


            </div>
            <div className="absolute left-6  flex flex-col gap-3 w-[47%] ">
                <div className="bg-gradient-to-r from-[#1890fa] to-[#0D67BE] p-3 w-[70%] text-[white] rounded-2xl mt-15">
                    <div className="flex flex-col">
                       <h2 className="font-bold text-[#FAA518] text-[19px]"> تحلیل و طراحی سیستم</h2>
                       <p className="text-[12px] leading-5">
                        
                       در ابتدای کار لازم است پروژه از نظر فنی کاملا مورد بررسی قرار گیرد. پس از بررسی ابهامات، بهبودها و پیشنهادات مشخص می‌شوند. در صورت نیاز یک جلسه رفع ابهام و شفاف سازی تشکیل می‌شود.
                       </p>
                    </div>

                </div>
                <div className="bg-gradient-to-r from-[#1890fa] to-[#0D67BE]  p-5 w-[70%] text-[white] rounded-2xl mt-25">
                    <div className="flex flex-col">
                       <h2 className="font-bold text-[#FAA518] text-[19px]"> تست و دیباگ</h2>
                       <p className="text-[12px] leading-5">
                        
                       علاوه بر تست و دیباگ در هر فاز تحویلی، در آخر کار نیز یک محدوده زمانی صرفا به تست و رفع مشکل پرداخته می‌شود.


                       </p>
                    </div>

                </div>
                <div className="bg-gradient-to-r from-[#1890fa] to-[#0D67BE] p-3 w-[70%] text-[white] rounded-2xl mt-25 bg">
                    <div className="flex flex-col">
                       <h2 className="font-bold text-[#FAA518] text-[19px]"> پشتیبانی یکساله</h2>
                       <p className="text-[12px] leading-5">
                        
                       پس از تحویل نهایی، یکسال پشتیبانی رایگان خواهید داشت و در طول این مدت همه موارد فنی با اولویت بالا بررسی و مرتفع می‌گردند.


                       </p>
                    </div>

                </div>


            </div>
           <div className="relative h-[750px] w-[3px] bg-gradient-to-r from-[#1890fa] to-[#0D67BE] mt-5 before:absolute before:content-[''] before:w-4 before:h-4 before:bg-[blue] before:rounded-full before:-left-[6px] before:top-0 after:absolute after:content-[''] after:w-4 after:h-4 after:bg-[blue] after:rounded-full after:-left-[6px] after:bottom-0">
           </div>

        </div>
        
    </div>
    {/* responsive */}
    <div className=" flex w-[100%] xl:hidden flex-col justify-center items-center mt-20 ">
        <h2 className="text-[25px] font-bold"> مراحل <span className="text-[#FAA518]">صفر تا صد</span> واردات کالا </h2>
        <div className="flex flex-col justify-center gap-3 items-center  w-[70%] mx-auto mt-6">
                <div className="bg-[#FAA518] p-3 w-[95%] text-[white] ">
                    <div className="flex flex-col">
                       <h2 className="text-[bold]  text-[16px]"> تحلیل و طراحی سیستم</h2>
                       <p className="text-[11px]  leading-5">
                        
                       در ابتدای کار لازم است پروژه از نظر فنی کاملا مورد بررسی قرار گیرد. پس از بررسی ابهامات، بهبودها و پیشنهادات مشخص می‌شوند. در صورت نیاز یک جلسه رفع ابهام و شفاف سازی تشکیل می‌شود.
                       </p>
                    </div>

                </div>
                <div className="bg-[#FAA518] p-3 w-[95%] text-[white] ">
                    <div className="flex flex-col">
                       <h2 className="text-[bold]  text-[16px]"> تحلیل و طراحی سیستم</h2>
                       <p className="text-[11px]  leading-5">
                        
                       در ابتدای کار لازم است پروژه از نظر فنی کاملا مورد بررسی قرار گیرد. پس از بررسی ابهامات، بهبودها و پیشنهادات مشخص می‌شوند. در صورت نیاز یک جلسه رفع ابهام و شفاف سازی تشکیل می‌شود.
                       </p>
                    </div>

                </div>
                <div className="bg-[#FAA518] p-3 w-[95%] text-[white] ">
                    <div className="flex flex-col">
                       <h2 className="text-[bold]  text-[16px]"> تحلیل و طراحی سیستم</h2>
                       <p className="text-[11px]  leading-5">
                        
                       در ابتدای کار لازم است پروژه از نظر فنی کاملا مورد بررسی قرار گیرد. پس از بررسی ابهامات، بهبودها و پیشنهادات مشخص می‌شوند. در صورت نیاز یک جلسه رفع ابهام و شفاف سازی تشکیل می‌شود.
                       </p>
                    </div>

                </div>
                <div className="bg-[#FAA518] p-3 w-[95%] text-[white] ">
                    <div className="flex flex-col">
                       <h2 className="text-[bold]  text-[16px]"> تحلیل و طراحی سیستم</h2>
                       <p className="text-[11px]  leading-5">
                        
                       در ابتدای کار لازم است پروژه از نظر فنی کاملا مورد بررسی قرار گیرد. پس از بررسی ابهامات، بهبودها و پیشنهادات مشخص می‌شوند. در صورت نیاز یک جلسه رفع ابهام و شفاف سازی تشکیل می‌شود.
                       </p>
                    </div>

                </div>

        </div>

    </div>
    
    </> );
}
 
export default SectionSeven;