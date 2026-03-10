import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const STORIES_AND_EVENTS = [
  {
    id: 1,
    type: "Event",
    title: "UP COMING INITIATIVES - Earn a Skill",
    description: "Discover new opportunities to learn and grow with our upcoming skill-building programs designed to empower individuals in rural communities",
    date: "March 1, 2026",
    location: "Kwahu Mpraeso",
    image: "/up.jpeg",
    content: "RFCI is launching comprehensive skill-building programs tailored for rural communities. These initiatives will provide training in various vocational skills, entrepreneurship, digital literacy, and sustainable practices. Participants will gain practical knowledge and certifications that open doors to better employment opportunities and economic independence. Join us in empowering the next generation of skilled professionals in rural areas.",
    category: "Skill Development"
  }
];

export default function WhatsNew() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">What's New</h1>
            <p className="text-2xl text-green-100">
              Stay updated with the latest stories, events, and impact from RFCI
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stories and Events Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {STORIES_AND_EVENTS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Image */}
                  <div className="md:col-span-1 h-64 md:h-auto overflow-hidden bg-slate-200" style={{ backgroundImage: 'url(/up.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                          item.type === "Success Story"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}>
                          {item.type}
                        </span>
                        <span className="text-xs font-bold text-slate-500 uppercase">{item.category}</span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                        {item.title}
                      </h3>

                      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        {item.description}
                      </p>

                      <p className="text-slate-600 mb-6 leading-relaxed hidden md:block">
                        {item.content}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pt-6 border-t border-slate-100">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Calendar size={18} />
                        <span className="text-sm font-medium">{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin size={18} />
                        <span className="text-sm font-medium">{item.location}</span>
                      </div>
                      <button className="text-green-600 font-bold hover:text-green-700 transition flex items-center gap-2 mt-4 sm:mt-0 sm:ml-auto">
                        Read More <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-black mb-2">50+</div>
              <p className="text-green-100">Events Organized</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-black mb-2">5,000+</div>
              <p className="text-green-100">Lives Impacted</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-black mb-2">6</div>
              <p className="text-green-100">Core Initiatives</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-black mb-2">100+</div>
              <p className="text-green-100">Volunteers</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Be Part of Our Story</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter to stay updated with the latest news, stories, and opportunities to make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
