import {
    FaPhone,
    FaMapMarkerAlt,
    FaInstagram,
    FaTelegramPlane,
    FaLinkedinIn,
  } from "react-icons/fa";
  import logo from "../../../public/assets/media/icon (2).png";
  
  const Footer = () => {
    return (
      <footer className="bg-[#1E1B1B] text-white">
        <div className=" mx-auto w-[100%] grid grid-cols-1 md:grid-cols-3 gap-6 p-4 mt-5 ">
          
          {/* About Box */}
          <div className=" rounded-xl p-5 shadow-sm space-y-4">
            <h2 className="text-2xl font-extrabold">
              دماوند <span className="text-[#faa518]">آیتی</span>
            </h2>
            <p className="text-[12px] text-[white] leading-8">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با 
                    استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود 
                    ابزارهای متون بلکه روزنامه و کاربردی می باشد….
            </p>
            <div className="flex items-center gap-3 mt-5">
              <img src={logo} alt="Logo" className="w-15 h-17" />
              <span className="text-lg font-medium">Damavand IT</span>
            </div>
          </div>
  
          {/* Contact Info Box */}
          <div className="bg-[#2a2a2c] rounded-xl p-5 shadow-sm space-y-4 text-sm">
            <h3 className="text-white font-bold text-base border-b border-[#faa518] pb-1 w-fit">
              اطلاعات تماس
            </h3>
  
            <div className="bg-[#3a3838] rounded-lg flex flex-col gap-7 p-3">
              <div className="flex flex-row gap-2">
                <div className="w-[15px] h-[15px] bg-amber-800 mt-1"></div>
                <p className="text-[14px] font-bold text-white">دفتر تهران</p>
              </div>
              <div className="flex flex-row gap-3">
                <p className="text-white font-bold">تلفن :</p>
                <p className="text-white text-[14px]">02145865484 | 0912345748</p>
              </div>
              <div className="flex flex-row gap-3">
                <p className="text-white font-bold">آدرس:</p>
                <p className="text-white text-[14px]">
                  تهران، دروازه دولت، خیابان انقلاب، ساختمان شقایق، واحد 23، طبقه سوم
                </p>
              </div>
            </div>
  
            <div className="bg-[#3a3838] rounded-lg p-4 flex flex-col gap-4 justify-center">
              <p className="text-[14px] font-bold text-white mb-2">شبکه‌های اجتماعی</p>
              <div className="flex flex-row gap-4 w-[100%]" >
                    <a href="#" className="hover:text-[#faa518] transition ">
                    <FaInstagram size={22} />
                    </a>
                    <a href="#" className="hover:text-[#faa518] transition">
                    <FaTelegramPlane  size={25} />
                    </a>
                    <a href="#" className="hover:text-[#faa518] transition">
                    <FaLinkedinIn  size={25}/>
                    </a>
              </div>
            </div>
          </div>
  
          {/* Contact Form Box */}
          <div className="bg-[#2a2a2c] rounded-xl p-5 shadow-sm">
            <h3 className="text-white font-bold text-base border-b border-[#faa518] pb-1 w-fit mb-4">
              ارتباط با ما
            </h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="نام شما"
                className="w-full px-4 py-2 rounded bg-[#1e1e1f] text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#faa518]"
              />
              <input
                type="email"
                placeholder="ایمیل شما"
                className="w-full px-4 py-2 rounded bg-[#1e1e1f] text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#faa518]"
              />
              <textarea
                rows={3}
                placeholder="پیام شما"
                className="w-full px-4 py-2 rounded bg-[#1e1e1f] text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#faa518]"
              />
              <button
                type="submit"
                className="w-full bg-[#faa518] text-black py-2 rounded hover:bg-[#e69f1e] transition font-semibold text-sm"
              >
                ارسال پیام
              </button>
            </form>
          </div>
        </div>
  
        <div className=" p-2 bg-[#343333]  text-[12px] mt-5 text-right">
          © تمامی حقوق این وب‌سایت متعلق به شرکت بازرگانی فلان است.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  