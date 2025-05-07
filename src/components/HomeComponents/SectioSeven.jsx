import React from "react";
import { motion } from "framer-motion";
import {
    FaClipboardList,
    FaCode,
    FaBug,
    FaHandshake,
  } from "react-icons/fa6";
  import { FaSearch } from "react-icons/fa"; // ایمپورت جدا برای FaSearch
  

// مراحل اجرای پروژه + آیکون‌ها
const steps = [
  {
    title: "تحلیل و طراحی سیستم",
    description: "در ابتدای کار لازم است پروژه از نظر فنی کاملا مورد بررسی قرار گیرد...",
    icon: <FaClipboardList className="text-3xl text-[#FAA518]" />,
  },
  {
    title: "بررسی فنی",
    description: "در این مرحله ساختار فنی پروژه، تکنولوژی‌ها و نحوه پیاده‌سازی بررسی می‌شود...",
    icon: <FaSearch className="text-3xl text-[#FAA518]" />,
  },
  {
    title: "برنامه نویسی و اجرا",
    description: "پس از مشخص شدن ساختارها، مطابق فازبندی اجرا و برنامه نویسی آغاز می‌شود...",
    icon: <FaCode className="text-3xl text-[#ffc66a]" />,
  },
  {
    title: "تست و دیباگ",
    description: "در پایان هر فاز و در انتها، تست و رفع باگ انجام می‌شود...",
    icon: <FaBug className="text-3xl text-[#ffbc51]" />,
  },
  {
    title: "پشتیبانی یکساله",
    description: "پس از تحویل نهایی، یکسال پشتیبانی رایگان خواهید داشت...",
    icon: <FaHandshake className="text-3xl text-[#ffc05c]" />,
  },
];

// کارت مرحله
const StepCard = ({ title, description, icon, className = "" }) => (
  <div
    className={`text-right bg-[#FFDF80] p-6 rounded-2xl text-white w-full max-w-md shadow-xl ${className}`}
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="bg-white rounded-full p-2 shadow">
        {icon}
      </div>
      <h3 className="font-bold text-[#FAA518] text-lg">{title}</h3>
    </div>
    <p className="text-sm leading-6">{description}</p>
  </div>
);

// کامپوننت اصلی
const SectionSeven = () => {
  return (
    <section className="w-full bg-white py-16">
      {/* عنوان اصلی */}
      <div className="text-center px-4 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          مراحل <span className="text-[#FAA518]">صفر تا صد</span> پروژه‌ها
        </h2>
      </div>

      {/* دسکتاپ */}
      <div className="hidden xl:block relative container mx-auto px-6">
        {/* خط مرکزی */}
        <div className="absolute top-0 left-1/2 w-[4px] h-full bg-gradient-to-b from-[#00B4DB] via-[#1890fa] to-[#0D67BE] rounded-full z-0" />

        <div className="relative z-10 flex flex-col gap-5">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="relative flex justify-between items-center">
                {/* کارت سمت چپ یا راست */}
                {isLeft ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: false }}
                      className="w-[60%] flex justify-around pr-10  "
                    >
                      <StepCard {...step} className="text-right" />
                    </motion.div>
                    <div className="w-1/2 " />
                  </>
                ) : (
                  <>
                    <div className="w-1/2" />
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: false }}
                      className="w-[60%] flex justify-around pl-10"
                    >
                      <StepCard {...step} />
                    </motion.div>
                  </>
                )}

                {/* دایره وسط */}
                <motion.div
                  initial={{ scale: 0.5, rotate: -180, backgroundColor: "#ccc" }}
                  whileInView={{
                    scale: 1,
                    rotate: 0,
                    backgroundColor: "#FAA518",
                    boxShadow: "0 0 0 6px rgba(250,165,24,0.2)",
                  }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                            w-12 h-12 rounded-full text-white text-base flex items-center 
                            justify-center font-extrabold border-4 border-white"
                >
                  {index + 1}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* موبایل و تبلت */}
      <div className="xl:hidden flex flex-col items-center mt-12 px-6">
        <div className="flex flex-col gap-6 w-full max-w-md">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#FAA518] text-white p-5 rounded-xl shadow flex gap-4"
            >
              <div className="bg-white p-2 rounded-full self-start">{step.icon}</div>
              <div>
                <h3 className="font-bold text-base mb-1">{step.title}</h3>
                <p className="text-sm leading-6">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionSeven;
