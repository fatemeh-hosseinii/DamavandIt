import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

const SectionEight = () => {
    return ( <>
    <div className="lg:mt-5 mt-10 m w-[100%] p-5 flex lg:flex-row mb-5  flex-col justify-center items-end lg:justify-between ">
        <div className="w-full lg:w-[60%] shadow-2xl rounded-xl overflow-hidden flex flex-col lg:flex-row bg-white">
            {/* Social Icons */}
            <div className="bg-gradient-to-r from-[#FAA518] to-[#fa6f18] lg:w-[12%] w-full flex lg:flex-col flex-row items-center justify-around lg:p-4 p-2 gap-6">
                <AiFillTwitterCircle className="text-white" size={35} />
                <AiFillGithub className="text-white" size={35} />
                <AiFillLinkedin className="text-white" size={35} />
                <AiFillFacebook className="text-white" size={35} />
            </div>

            {/* Form Content */}
            <div className="lg:w-[85%] w-full flex flex-col gap-6 p-6">
                {/* Title */}
                <div>
                <h2 className="text-xl font-bold">
                    درخواست <span className="text-amber-600">مشاوره رایگان</span>
                </h2>
                <p className="text-sm text-gray-500 mt-1">برای دریافت مشاوره، فرم زیر را پر کنید.</p>
                </div>

                {/* Inputs */}
                <div className="grid lg:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">نام و نام خانوادگی</label>
                    <input
                    type="text"
                    placeholder="مثلاً فاطمه حسینی"
                    className="bg-[#F5F6F7] shadow-md rounded-lg p-2 text-sm outline-none"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">شماره تماس</label>
                    <input
                    type="text"
                    placeholder="مثلاً 09121234567"
                    className="bg-[#F5F6F7] shadow-md rounded-lg p-2 text-sm outline-none"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">ایمیل (اختیاری)</label>
                    <input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-[#F5F6F7] shadow-md rounded-lg p-2 text-sm outline-none"
                    />
                </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">پیام درخواست</label>
                <textarea
                    rows="4"
                    placeholder="متن پیام شما..."
                    className="bg-[#F5F6F7] shadow-md rounded-lg p-3 text-sm outline-none resize-none"
                ></textarea>
                </div>

                {/* Footer */}
                <div className="flex flex-col lg:flex-row justify-between items-center mt-4 gap-4">
                <div className="text-sm text-gray-700 font-semibold">
                    <span className="text-lg text-black">0912</span><span className="text-blue-600 text-lg">3336474</span> — همراه شما هستیم
                </div>
                <button className="bg-amber-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-amber-500 transition">
                    ثبت درخواست
                </button>
                </div>
            </div>
        </div>

        <div className="lg:w-[38%] w-[100%]   shadow xl:mx-auto mt-7 lg:mt-0 ">
            <iframe
                className="w-[100%] rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.815984547883!2d51.304684175210625!3d35.73074387257124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfda3016788c1%3A0x4a01716cc77f4f70!2z2KfbjNiz2Krar9in2Ycg2YXYqtix2Ygg2LnZhNin2YXZhyDYrNi52YHYsduM!5e0!3m2!1sen!2sde!4v1727891062058!5m2!1sen!2sde"
                height="428"
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