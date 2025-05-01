import { AiOutlineLeft } from "react-icons/ai";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="w-full flex flex-col bg-white min-h-screen">
      {/* Header */}
      <div className="px-6 lg:px-24 pt-10 pb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          <span className="text-[#faa518]">تماس</span> با ما
        </h1>
        <p className="text-gray-500 text-sm max-w-2xl mt-2 mx-auto leading-relaxed">
          خوشحال می‌شویم هرگونه سوال، نظر یا پیشنهاد خود را با ما در میان بگذارید. ما همیشه در کنارتان هستیم.
        </p>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-24 py-12">
      <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
  <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2 border-blue-100">
    ارسال تیکت پشتیبانی
  </h2>
  <form className="space-y-5">
    <select
      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-gray-700"
      defaultValue=""
    >
      <option value="" disabled>انتخاب موضوع پیام</option>
      <option value="technical">پشتیبانی فنی</option>
      <option value="payment">مشکل پرداخت</option>
      <option value="suggestion">پیشنهادات</option>
      <option value="other">سایر</option>
    </select>

    <input
      type="text"
      placeholder="نام و نام خانوادگی"
      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />

    <input
      type="email"
      placeholder="ایمیل"
      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />

    <textarea
      rows={5}
      placeholder="شرح مشکل یا پیام شما"
      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
    ></textarea>

    <button
      type="submit"
      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-3 rounded-xl font-semibold transition duration-300"
    >
      ارسال تیکت
    </button>
  </form>
</div>

        {/* Contact Info */}
        <div className=" p-8 rounded-2xl flex flex-col ">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2 border-orange-200">
            راه‌های ارتباطی
          </h2>

          <div className="flex items-start gap-4 mb-6">
            <FaPhoneAlt className="text-orange-500 mt-1" size={20} />
            <div>
              <p className="font-medium text-gray-700">تلفن تماس:</p>
              <p className="text-gray-600">۰۲۱-۱۲۳۴۵۶۷۸</p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <FaEnvelope className="text-orange-500 mt-1" size={20} />
            <div>
              <p className="font-medium text-gray-700">ایمیل:</p>
              <p className="text-gray-600">info@example.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-orange-500 mt-1" size={20} />
            <div>
              <p className="font-medium text-gray-700">آدرس:</p>
              <p className="text-gray-600">تهران، خیابان انقلاب، پلاک ۱۲</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
