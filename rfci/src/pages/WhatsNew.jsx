import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const STORIES_AND_EVENTS = [
  {
    id: 1,
    type: "Success Story",
    title: "Farmers in Kwahu See 40% Crop Yield Increase",
    description: "Through our sustainable farming initiatives, smallholder farmers in the Kwahu region have successfully increased their crop yields by 40% in just one season.",
    date: "March 1, 2026",
    location: "Kwahu Mpraeso",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600",
    content: "Working with local farmers, RFCI introduced improved soil management techniques and climate-resilient seed varieties. The results speak for themselves - higher yields, better incomes, and more sustainable farming practices.",
    category: "Agriculture"
  },
  {
    id: 2,
    type: "Event",
    title: "Mobile Health Clinic Visits Northern Region",
    description: "Our mobile health clinic conducted comprehensive health screenings for over 500 families in the Northern Region community.",
    date: "February 28, 2026",
    location: "Northern Region",
    image: "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&w=600",
    content: "The clinic provided free health checks, maternal care services, and health education. Community members received information on disease prevention and access to NHIS services.",
    category: "Healthcare"
  },
  {
    id: 3,
    type: "Success Story",
    title: "Lady Care Program Empowers 200 Women",
    description: "Our Lady Care initiative has successfully trained and supported 200 women in economic empowerment and leadership development.",
    date: "February 25, 2026",
    location: "Multiple Communities",
    image: "https://images.unsplash.com/photo-1494888286974-455935dac288?auto=format&fit=crop&w=600",
    content: "Women participants have started micro-businesses, gained financial literacy, and are now leading community development efforts. The impact extends to their families and entire communities.",
    category: "Women Empowerment"
  },
  {
    id: 4,
    type: "Event",
    title: "Bike to School Initiative Launches",
    description: "RFCI launched the Bike to School Initiative, distributing 200 bikes to students in rural communities to improve school attendance.",
    date: "February 20, 2026",
    location: "Ashanti Region",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600",
    content: "Students now have reliable transportation to school, resulting in improved attendance rates and engagement. The initiative also promotes youth interest in agricultural practices.",
    category: "Education"
  },
  {
    id: 5,
    type: "Success Story",
    title: "Vision Care Program Provides Glasses to 1,200+",
    description: "Through our vision care initiative, over 1,200 individuals received free eye screenings and corrective glasses.",
    date: "February 18, 2026",
    location: "Western Region",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600",
    content: "Improved vision has enhanced productivity for farmers and learning outcomes for students. Many beneficiaries expressed gratitude for regained independence.",
    category: "Healthcare"
  },
  {
    id: 6,
    type: "Event",
    title: "Community Forum on Sustainable Agriculture",
    description: "RFCI organized a grassroots forum bringing together 150 farmers to discuss sustainable agricultural practices and climate resilience.",
    date: "February 15, 2026",
    location: "Volta Region",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600",
    content: "Farmers shared experiences, learned from each other, and collectively developed community-based solutions to agricultural challenges. Strong partnerships were formed.",
    category: "Agriculture"
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
                  <div className="md:col-span-1 h-64 md:h-auto overflow-hidden bg-slate-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
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
