import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "چگونه می‌توانم پروژه طراحی سایت ثبت کنم؟",
    answer:
      "برای ثبت سفارش طراحی سایت، می‌توانید از طریق فرم تماس با ما اقدام کرده یا مستقیماً با پشتیبانی شرکت تماس بگیرید. کارشناسان ما در کمترین زمان با شما تماس خواهند گرفت.",
  },
  {
    question: "طراحی سایت چقدر زمان می‌برد؟",
    answer:
      "مدت زمان طراحی سایت بسته به نوع سایت (شرکتی، فروشگاهی، شخصی و...) متفاوت است، اما معمولاً بین ۱۰ تا ۳۰ روز کاری زمان می‌برد.",
  },
  {
    question: "آیا سایت من با موبایل و تبلت سازگار خواهد بود؟",
    answer:
      "بله، تمام سایت‌های طراحی‌شده توسط تیم ما به صورت کامل ریسپانسیو هستند و در انواع دستگاه‌ها (موبایل، تبلت، دسکتاپ) به درستی نمایش داده می‌شوند.",
  }
];

const SectionSix = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className=" bg-gray-50 md:py-16 py-10 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 flex flex-col justify-center items-center">
          <h1 className="md:text-3xl  text-2xl font-bold text-gray-800 mb-4"><span className="text-[#faa518]">سوالات</span> متداول</h1>
          <div className="lg:w-[100%] w-[90%] ">
            <p className="text-gray-600 text-sm leading-relaxed">
              در این بخش می‌توانید پاسخ سوالات پرتکرار درباره خدمات طراحی سایت، پشتیبانی، زمان تحویل، و موارد دیگر را مشاهده کنید.
            </p>
          </div>
        
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
          <div
            key={index}
            className="rounded-xl shadow p-5 transition bg-[white]"
            >
            <button
              className="flex hover:cursor-pointer justify-between items-center w-full text-right font-medium text-gray-800 md:text-lg text-[13px]"
              onClick={() => toggle(index)}
            >
              <span>{item.question}</span>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
          
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionSix;

