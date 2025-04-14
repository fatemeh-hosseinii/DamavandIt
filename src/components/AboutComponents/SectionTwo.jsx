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
        return: <LuNewspaper className="text-[#FAA518] " size={55} />,
        design: <AiOutlineFormatPainter className="text-[#FAA518]" size={55} />,
        code: <AiOutlineCode className="text-[#FAA518]" size={55} />,
        seo: <AiOutlineLineChart  className="text-[#FAA518]" size={55}/>,
    };

    return (
        <div className=" w-full flex  flex-col justify-center items-center p-5 mt-10">
            <p className="lg:text-[30px] text-[25px] font-bold">
                خدماتی که ما را <span className="text-[#FAA518]">متمایز</span> می‌کند
            </p>
            <p className="lg:text-[15px] text-[13px] text-center">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>
            <div className="lg:flex lg:flex-row  mt-5 flex-col justify-around w-full flex-wrap   p-5 ">
                {Service.map((elem, index) => {
                    const SelectedIcon = iconMapping[elem.icon];   
                    return (
                        <div className="flex  flex-col mt-3 lg:mt-0 lg:w-[23%] w-[100%] border-[2px] shadow-lg border-[white] lg:gap-3 xl:gap-8   rounded-2xl  p-3">
                            <div
                                key={index}
                                className=" w-[100%] flex flex-row xl:gap-6 lg:gap-3 justify-center items-center "
                            >
                                {SelectedIcon && <span className="w-8 flex justify-center">{SelectedIcon}</span>}
                                <p className="font-bold text-[blue] xl:text-[20px] lg:text-[14px] ">{elem.name}</p>
                                
                                

                            </div>
                            <div className="p-3 ">
                                <p className="text-[gray] text-[14px] leading-[2rem]">{elem.title}</p>
                            </div>
                            
                        </div>
                       
                    );
                })}
            </div>
        </div>
    );
};

export default SectionTwo;
