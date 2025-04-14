import { AiOutlineLeft } from "react-icons/ai";
import SectionOne from "../../components/AboutComponents/SectionOne";
import SectionTwo from "../../components/AboutComponents/SectionTwo";
import SectionThree from "../../components/AboutComponents/SectionThree";

const About = () => {
    return ( <>
    <div className=" flex flex-col w-[100%]">
        <div className="p-5">
            <div className="flex flex-row gap-1">
                <p className="text-[15px]">خانه</p>
                <AiOutlineLeft className="text-[#1788DE]" size={15} />
                <p className="text-[15px] text-[#6F727A]">درباره ما</p>
            </div>
            <div className="mt-5">
              <p className="text-[27px] font-bold text-[#2B3742]" >درباره ما</p>

            </div>
            
        </div>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
    </div>
    </> );
}
 
export default About;