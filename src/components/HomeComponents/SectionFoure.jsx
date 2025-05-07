import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchpostSuccessP } from '../../Redux/SuccesProjectSlice';

const SectionFoure = () => {
    const{Project,loading,error}=useSelector((state)=>state.Project)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchpostSuccessP())
    },[])
    return ( <>
    <div className=" flex  flex-col justify-center items-center lg:mt-20 mt-15 md:container p-5">
        <p className="md:text-3xl  text-2xl text-center font-bold">پروژه های <span className="text-[#FAA518]">موفق</span> دماوند آیتی </p>
        <div className='lg:w-[100%] w-[90%]'>
        <p className='text-gray-600 text-sm leading-relaxed text-center mt-2'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
            
        </div>
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
                    Project?.map((elem)=>{
                    return(
                    <SwiperSlide className='flex flex-col bg-[#FAA518] p-3 rounded-xl '>
                       <img className='rounded-lg' src={elem.image} alt="" />
                        <button className='text-[13px] text-center w-[100%] py-2  mt-2 text-[white] font-bold rounded-lg '>طراحی سایت شرکتی</button>
                     </SwiperSlide>

                    )
                    })
                 }   
              
            </Swiper>
    </div>
    </> );
}
 
export default SectionFoure;