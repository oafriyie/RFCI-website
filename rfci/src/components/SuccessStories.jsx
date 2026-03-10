import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const STORIES = [
  {
    name: "Young Man",
    role: "Hearing Aid Recipient",
    text: "Handing over hearing aid to the young man has transformed his ability to communicate and participate in community activities.",
    img: "/dee.jpeg"
  },
  {
    name: "Young Man",
    role: "Disability Care UEW",
    text: "Through RFCI's Disability Care program at UEW, I've received the support and resources needed to thrive and contribute to my community.",
    img: "/u1.jpeg"
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