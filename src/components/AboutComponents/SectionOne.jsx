import { AiOutlineLeft } from "react-icons/ai";

const SectionOne = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-10 px-4 md:px-16" dir="rtl">
      {/* مسیر راهنما */}
      <nav className="flex items-center text-sm text-gray-600 gap-1 mb-6">
        <span>خانه</span>
        <AiOutlineLeft className="text-[#1788DE]" size={14} />
        <span className="text-[#6F727A]">درباره ما</span>
      </nav>

      {/* عنوان و توضیحات */}
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#2B3742] mb-4">
          ما کی هستیم؟
        </h1>
        <p className="text-gray-700 text-lg leading-loose">
          ما تیمی خلاق، متعهد و متخصص در زمینه طراحی و توسعه وب‌سایت و اپلیکیشن‌های دیجیتال هستیم. هدف ما ایجاد راهکارهایی نوآورانه برای رشد کسب‌وکارهای آنلاین است.
        </p>
      </div>
    </section>
  );
};

export default SectionOne;
