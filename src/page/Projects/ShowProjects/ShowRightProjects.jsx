import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ShowRightProjects = ({ project }) => {
  console.log("ll",project);
  const [selectedSlide, setSelectedSlide] = useState(null);

  return (
    <div className="w-full lg:w-[55%] p-4">
      {/* تصویر اصلی پروژه */}
      <div className="flex justify-center">
        <img
          src={project.image}
          alt="تصویر اصلی پروژه"
          className="w-full max-h-[400px] rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* گالری تصاویر پروژه */}
      {project.photo?.length > 0 && (
        <div className="bg-gray-50 shadow-lg p-4 rounded-xl mt-6 relative">

          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            modules={[Navigation]}
            className="rounded-lg"
          >
            {project.photo.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  onClick={() => setSelectedSlide(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedSlide(item)}
                  className={`cursor-pointer p-1 rounded-lg transition-transform hover:scale-105 focus:outline-none ${
                    selectedSlide?.id === item.id ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <img
                    src={item.image}
                    alt={`تصویر ${item.id}`}
                    className="w-full h-24 md:h-32 object-cover rounded-lg shadow-md"
                  />
                </div>
              </SwiperSlide>
            ))}

            {/* دکمه‌های ناوبری سفارشی */}
            <button
                className="swiper-button-prev-custom absolute top-1/2 left-1 -translate-y-1/2 z-20
                            w-9 h-9 flex items-center justify-center
                            bg-white/80 text-gray-600 hover:text-blue-600
                            rounded-full shadow hover:shadow-md transition-all duration-200"
                aria-label="قبلی"
                >
                <FiChevronLeft size={18} />
            </button>

            <button
            className="swiper-button-next-custom absolute top-1/2 right-1 -translate-y-1/2 z-20
                        w-9 h-9 flex items-center justify-center
                        bg-white/80 text-gray-600 hover:text-blue-600
                        rounded-full shadow hover:shadow-md transition-all duration-200"
            aria-label="بعدی"
            >
            <FiChevronRight size={18} />
            </button>



          </Swiper>
        </div>
      )}

      {/* مودال نمایش تصویر */}
      {selectedSlide && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] animate-fadeIn">
          <div className="relative bg-white p-6 rounded-xl shadow-2xl w-[90%] md:w-[50%] max-h-[90vh] overflow-auto">
            <button
              onClick={() => setSelectedSlide(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
              aria-label="بستن تصویر"
            >
              ✖
            </button>
            <img
              src={selectedSlide.image}
              alt={`تصویر بزرگ ${selectedSlide.id}`}
              className="w-full max-h-[400px] object-contain rounded mb-4"
            />
            <p className="text-center text-gray-600 text-sm">
              تصویر شماره {selectedSlide.id}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowRightProjects;
