import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const STORIES = [
  {
    name: "Kofi Mensah",
    role: "Maize Farmer",
    text: "Before RFCI, I struggled with soil quality. Their training helped me double my yield in just one season.",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400"
  },
  {
    name: "Amina Yusuf",
    role: "Vegetable Farmer",
    text: "The medical outreach program cured my persistent fever, allowing me to return to my farm stronger than ever.",
    img: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?auto=format&fit=crop&w=400"
  }
];

export default function SuccessStories() {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Stories of Hope</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{ 768: { slidesPerView: 2 } }}
          className="pb-12"
        >
          {STORIES.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col items-center text-center h-full border border-green-100">
                <img src={s.img} className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-white shadow-lg" alt={s.name} />
                <p className="text-slate-600 italic mb-6 leading-relaxed">"{s.text}"</p>
                <h4 className="font-bold text-lg text-slate-800">{s.name}</h4>
                <p className="text-green-600 font-medium text-sm uppercase">{s.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}