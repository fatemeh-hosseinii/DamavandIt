import logo from "../../../public/assets/media/icon (2).png";

const Footer = () => {
    return ( <>
    <div className="flex  flex-col ">
        <div className="bg-[#221E1E] w-[100%] flex lg:flex-row flex-col justify-center items-center lg:justify-around p-3">
        <div className=" lg:w-[33%] w-[100%] flex flex-col  p-3 gap-5 ">
                <p className="text-[25px] font-bold text-[white]">
                    دماوند<span className="text-[#faa518]"> آیتی</span>
                </p>
                <div className="lg:w-[75%] w-[100%] ">
                    <p className="text-[12px] text-[white] leading-8">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با 
                    استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود 
                    ابزارهای متون بلکه روزنامه و کاربردی می باشد….
                    </p>
                </div>
            
                <div className="w-[55%] flex flex-row mt-2 gap-3">
                    <img className="w-[25%]" src={logo} alt="" />
                    <p className="mt-4 text-[17px] font-bold text-[white] ">Damavand It</p>
                </div>
        </div>
        <div className=" lg:w-[33%] w-[100%] p-3 flex flex-col gap-5  ">
                <div className="bg-[#3a3838] rounded-lg flex flex-col gap-7 p-3 ">
                    <div className="flex flex-row gap-2">
                        <div className="w-[15px] h-[15px] bg-amber-800 mt-1"></div>
                        <p className="text-[14px] font-bold text-[white]">دفتر تهران</p>

                    </div>
                    <div className="flex flex-row gap-3">
                        <p className="text-[white] font-bold">تلفن :</p>
                        <p className="text-[white] text-[14px]">02145865484 | 0912345748</p>

                    </div>
                    <div className="flex flex-row gap-3">
                        <p className="text-[white] font-bold"> آدرس:</p>
                        <p className="text-[white] text-[14px]">
                        تهران، دروازه دولت، خیابان انقلاب، ساختمان شقایق، واحد 23، طبقه سوم

                        </p>

                    </div>
                </div>
                <div className="bg-[#3a3838] rounded-lg flex flex-col gap-7 p-3 ">
                    <div className="flex flex-row gap-2">
                        <div className="w-[15px] h-[15px] bg-[red] mt-1"></div>
                        <p className="text-[14px] font-bold text-[white]">دفتر تهران</p>

                    </div>
                    <div className="flex flex-row gap-3">
                        <p className="text-[white] font-bold">تلفن :</p>
                        <p className="text-[white] text-[14px]">02145865484 | 0912345748</p>

                    </div>
                    <div className="flex flex-row gap-3">
                        <p className="text-[white] font-bold"> آدرس:</p>
                        <p className="text-[white] text-[14px]">
                        تهران، دروازه دولت، خیابان انقلاب، ساختمان شقایق، واحد 23، طبقه سوم

                        </p>

                    </div>
                </div>
        </div>
        <div className=" lg:w-[33%] w-[100%] p-3 flex flex-col gap-5">
                <div className="bg-[#3a3838] rounded-lg p-4 flex flex-col gap-4 justify-center">
                    <p className="text-[14px] font-bold text-white mb-2">شبکه‌های اجتماعی</p>
                    <div className="flex flex-row gap-4">
                    <a href="#" className="text-white hover:text-[#faa518] text-[14px]">اینستاگرام</a>
                    <a href="#" className="text-white hover:text-[#faa518] text-[14px]">تلگرام</a>
                    <a href="#" className="text-white hover:text-[#faa518] text-[14px]">لینکدین</a>
                    </div>
                </div>

                <div className="bg-[#3a3838] rounded-lg p-4 flex flex-col gap-3">
                    <p className="text-[14px] font-bold text-white">ارتباط با ما</p>
                    <form className="flex flex-col gap-2">
                    <input
                        type="text"
                        placeholder="نام شما"
                        className="rounded p-2 text-[14px] outline-none bg-amber-50"
                    />
                    <input
                        type="email"
                        placeholder="ایمیل"
                        className="rounded p-2 text-[14px] outline-none bg-amber-50"
                    />
                    <textarea
                        rows="3"
                        placeholder="پیام شما"
                        className="rounded p-2 text-[14px] outline-none bg-amber-50"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-[#faa518] text-white rounded p-2 mt-1 hover:bg-[#e29515] transition"
                    >
                        ارسال
                    </button>
                    </form>
                </div>
        </div>
        

        </div>
        <div className="bg-[#343333] p-2">
            <p className="text-[12px] text-[white]">تمام حقوق وبسایت تجارتخانه برای شرکت بازرگانی فلان محفوظ است.</p>
        </div>
    </div>
   
    
    </> );
}
 
export default Footer;