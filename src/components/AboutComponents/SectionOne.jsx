import { useEffect, useState, useRef } from "react";

const SectionOne = () => {
  const items = [
    { title: "کارمند مجرب", targetNumber: 500 },
    { title: "پروژه", targetNumber: 100 },
    { title: "مشتری راضی", targetNumber: 300 },
    { title: "تجربه کاری", targetNumber: 150 },
 
  ];

  const [counts, setCounts] = useState(Array(items.length).fill(0)); 
  const counterRefs = useRef([]); 
  const duration = 2000; 

  const startCounter = (index, target, duration) => {
    let start = 0;
    let increment = target / (duration / 10); 
    let interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = target; 
          return newCounts;
        });
        clearInterval(interval); 
      } else {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.ceil(start); 
          return newCounts;
        });
      }
    }, 10);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            startCounter(index, items[index].targetNumber, duration); 
            observer.unobserve(counterRefs.current[index]);
          }
        });
      },
      { threshold: 0.5 }
    );

    counterRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref); 
    });

    return () => {
      counterRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref); 
      });
    };
  }, []);

  return (
    <div className="flex  w-full lg:flex-row flex-col justify-between items-center p-5 lg:mt-5 mt-3">
      <div className="relative lg:w-[45%] w-[100%] rounded-2xl h-[400px] flex justify-center items-center bg-gradient-to-r from-[#FAA518] to-[#fa6f18]">
        <video className="w-full h-auto rounded-lg shadow-lg" controls>
          <source src="/videos/sample.mp4" type="video/mp4" />
          مرورگر شما از ویدیو پشتیبانی نمی‌کند.
        </video>
      </div>

      <div className="lg:w-[50%] w-[100%] flex flex-col gap-5 mt-15 lg:mt-0 lg:h-[400px]">
        <p className="text-[30px] font-bold">
          چرا شرکت <span className="text-[#faa518]">دماوند آیتی</span>؟
        </p>

        <div className="w-full text-right">
          <p className="text-[#6A7089] text-[15px] leading-[1.75rem]">
            شرکت برنامه نویسی رایانیتا، از صفر تا صد پروژه در کنار شماست. تحلیل نیازمندی‌ها، طراحی سیستم، فازبندی، برنامه نویسی، تست و اجرا و پشتیبانی توسط کارشناسان مجرب و متخصص انجام شده و در تمامی مراحل گزارش پیشرفت پروژه به شما ارائه می‌گردد.
          </p>
        </div>

        <div className="flex flex-row  w-[100%]  justify-around lg:mt-15 mt-3">
          {items.map((item, index) => (
            
              <div 
               key={index}
               ref={(el) => (counterRefs.current[index] = el)}
              className=" lg:w-[15%] w-[25%] p-2 rounded-lg font-bold flex flex-col  items-center">
                <p className="lg:text-[25px] text-[18px] text-[#FB7D18]">{counts[index]}+</p>
                <p className="lg:text-[14px] text-[12px]">{item.title}</p>
              </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionOne;

