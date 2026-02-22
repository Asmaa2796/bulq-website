import style from './brands.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Brands = () => {
    const brands = [
        { id: 1, brand: "Brand 1" },
        { id: 2, brand: "Brand 2" },
        { id: 3, brand: "Brand 3" },
        { id: 4, brand: "Brand 4" },
        { id: 5, brand: "Brand 5" },
        { id: 6, brand: "Brand 6" }
    ];

    return (
        <div className={`${style.brands} py-5`}>
            <div className="container">
                <h2 className="text-center dark-color fw-bold mb-4">
                    Our Trusted Brands
                </h2>

                <Swiper
                    className={style.swiper}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={5}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        576: { slidesPerView: 3 },
                        768: { slidesPerView: 3 },
                        992: { slidesPerView: 5 },
                    }}
                >
                    {brands.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className={`${style.brandCard} text-center rounded-3 border shadow-sm`}>
                                <img
                                    src="/logos/6.png"
                                    alt={item.brand}
                                    className='my-2 d-block'
                                />
                                <b className='d-block'>{item.brand}</b>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Brands;