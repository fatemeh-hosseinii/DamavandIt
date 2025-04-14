import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



import { FetchPostTeam } from '../../Redux/TeamSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
const SectionThree = () => {
    const{Team,loading,error}=useSelector((state)=>state.Team)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(FetchPostTeam())
    },[])
    return ( <>
    <div className=" hidden flex-col p-5 ">
       <div className=" flex flex-col p-3">
        <p className="text-3xl font-bold text-[#212529]">یک تیم <span className="text-[#FAA518]">حرفه ای</span> درکنار شماست</p>
        <p className="text-2xl font-bold mt-3 text-[#212529]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
       </div>
       <div className="bg-cyan-950">
       <Swiper 
            modules={[
                Pagination
            ]}
                    
            breakpoints={{
                870: {
                    slidesPerView: 4,
                },
                770: {
                    slidesPerView: 3.5,
                },
                660: {
                    slidesPerView: 3,
                },
                550:{
                    slidesPerView:2.5  
                },
                450: {
                    slidesPerView:2,
                },
                      
                380: {
                    slidesPerView: 1.5,
                },
                }}
                spaceBetween={20}
             
                className="mySwiper mt-[35px] h-[100%] w-[100%] "
                 >
                 {
                   Team?.map((elem)=>{
                    return(
                    <SwiperSlide className='flex flex-col bg-[#FAA518] p-3 rounded-xl '>
                      
                        <button className='text-[13px] text-center w-[100%] py-2  mt-2 text-[white] font-bold rounded-lg '>  {elem.job}</button>
                    </SwiperSlide>

                    )
                    })
                 }   
              
            </Swiper>
       </div>
    </div>
    </> );
}
 
export default SectionThree;