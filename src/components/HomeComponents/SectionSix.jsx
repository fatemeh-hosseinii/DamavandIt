import { useState } from 'react';

const SectionSix = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: " چگونه ثبت‌نام کنم؟",
      answer: "برای ثبت‌نام کافی است روی دکمه ثبت‌نام کلیک کنید و فرم مربوطه را پر کنید."
    },
    {
      question: "  هزینه دوره چقدر است؟",
      answer: "هزینه دوره بسته به نوع برنامه متفاوت است. لطفاً به بخش قیمت‌گذاری مراجعه کنید."
    },
    {
      question: "  آیا امکان بازگشت وجه وجود دارد؟",
      answer: "بله، در صورت لغو ثبت‌نام در مدت مشخص، بازگشت وجه امکان‌پذیر است."
    },
  ];

  const toggleAccordion = (index) => {
    if (open === index) {
      setOpen(null); 
    } else {
      setOpen(index); 
    }
  };

  return (
    <>
      <div className="lg:mt-20 mt-10  flex  flex-col  text-center p-4 w-[100%]">
        <h2 className="text-[30px] font-bold text-amber-600">سوالات متداول</h2>
        <div className="mt-4  flex flex-col justify-center items-center w-[100%]">
          {faqs.map((faq, index) => (
            <div key={index} className="border-[2px] mt-4 bg-[#f3ac3b] rounded-lg border-amber-500 p-5 w-[90%] ">
              <button
                className="w-full flex justify-between items-center text-right focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-[white] font-bold lg:text-[16px] text-[13px]">{faq.question}</span>
                <span className="text-[white] text-2xl">{open === index ? "-" : "+"}</span>
              </button>
              {open === index && (
                <div className="mt-2 text-[white] lg:text-[14px] text-[12px] text-right">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionSix;
