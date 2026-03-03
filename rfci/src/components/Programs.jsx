import { Sprout, Hospital, Eye, Bike, Heart, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PROGRAMS = [
  {
    id: "healthcare",
    title: "Healthcare Initiative",
    desc: "NHIS-integrated mobile clinics bringing essential medical care to rural farming communities.",
    icon: <Hospital className="w-8 h-8 text-green-600" />,
  },
  {
    id: "vision-care",
    title: "Vision Care",
    desc: "Regular eye screening and prevention programs for farmers and their families.",
    icon: <Eye className="w-8 h-8 text-green-600" />,
  },
  {
    id: "school-care",
    title: "School Care",
    desc: "Bike to School Initiative promoting youth engagement and agricultural education.",
    icon: <Bike className="w-8 h-8 text-green-600" />,
  },
  {
    id: "disability-care",
    title: "Disability Care",
    desc: "Inclusive programs ensuring people with disabilities benefit from all our initiatives.",
    icon: <img src="/co.jpeg" alt="Disability Care" className="w-8 h-8 object-contain" />,
  },
  {
    id: "lady-care",
    title: "Lady Care",
    desc: "Women-centered programs focusing on health, economic empowerment, and leadership.",
    icon: <Heart className="w-8 h-8 text-green-600" />,
  },
  {
    id: "agri-care",
    title: "Agri-Care",
    desc: "Plant Today for Tomorrow Initiative supporting sustainable agricultural practices.",
    icon: <Leaf className="w-8 h-8 text-green-600" />,
  },
];

export default function Programs() {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800">Our Core Initiatives</h2>
          <div className="h-1 w-20 bg-green-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROGRAMS.map((p, i) => (
            <Link key={i} to={`/programs/${p.id}` || '#'}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl border border-slate-100 hover:border-green-200 hover:shadow-xl transition-all cursor-pointer h-full"
              >
                {p.id === 'disability-care' ? (
                  <div
                    className="w-full h-40 bg-cover bg-center rounded-2xl mb-6"
                    style={{ backgroundImage: 'url(/co.jpeg)' }}
                  />
                ) : p.id === 'vision-care' ? (
                  <div
                    className="w-full h-40 bg-cover bg-center rounded-2xl mb-6"
                    style={{ backgroundImage: 'url(/vvv.jpeg)' }}
                  />
                ) : (
                  <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                    {p.icon}
                  </div>
                )}
                <h3 className="text-xl font-bold mb-4 text-slate-800">{p.title}</h3>
                <p className="text-slate-600 leading-relaxed">{p.desc}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}