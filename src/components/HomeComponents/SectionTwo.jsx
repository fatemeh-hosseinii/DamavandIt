import { LuNewspaper } from "react-icons/lu";
import { AiOutlineFormatPainter, AiOutlineCode, AiOutlineLineChart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchpost_service } from "../../Redux/ServicesSlice";

const SectionTwo = () => {
    const { error, loading, Service } = useSelector((state) => state.Service);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchpost_service());
    }, [dispatch]);

    const iconMapping = {
        return: <LuNewspaper className="text-[#FAA518]" size={50} />,
        design: <AiOutlineFormatPainter className="text-[#FAA518]" size={50} />,
        code: <AiOutlineCode className="text-[#FAA518]" size={50} />,
        seo: <AiOutlineLineChart className="text-[#FAA518]" size={50} />,
    };

    return (
        <div className="w-full flex flex-col justify-center items-center md:container p-5 mt-10">
            <h2 className="text-[26px] md:text-[32px] font-extrabold text-center mb-3">
                خدماتی که ما را <span className="text-[#FAA518]">متمایز</span> می‌کند
            </h2>
            <p className="text-gray-500 text-[14px] md:text-[16px] text-center max-w-xl mb-10">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                {Service.map((elem, index) => {
                    const SelectedIcon = iconMapping[elem.icon];
                    return (
                        <div
                            key={index}
                            className="group relative bg-white border border-gray-100 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]"
                        >
                            {/* Border glow effect */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#FAA518] transition-all duration-300"></div>

                            {/* Icon */}
                            <div className="flex items-center justify-center w-16 h-16 bg-[#fff6e3] rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform">
                                {SelectedIcon}
                            </div>

                            {/* Title */}
                            <h3 className="text-center font-bold text-blue-700 text-[18px] mb-2">
                                {elem.name}
                            </h3>

                            {/* Description */}
                            <p className="text-center text-gray-600 text-[14px] leading-relaxed">
                                {elem.title}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SectionTwo;
