import { Sprout, Hospital, Eye, Bike, Heart, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PROGRAMS = [
  {
    id: "agri-care",
    title: "Agri Care (AC)",
    desc: "Empowering smallholder farmers with modern improved farming methods and climate smart technologies. Flagship program 'Plant Today For Tomorrow' (PTFT) supports women and youth in agribusiness entrepreneurship.",
    icon: <Leaf className="w-8 h-8 text-green-600" />,
  },
  {
    id: "disability-care",
    title: "Disability Care (DC)",
    desc: "Empowering persons with disabilities through assistive devices and economic opportunities for independent livelihoods. Built on our core value, Caring Without Borders (CWBs).",
    icon: <img src="/co.jpeg" alt="Disability Care" className="w-8 h-8 object-contain" />,
  },
  {
    id: "healthcare",
    title: "Health Care (HC)",
    desc: "Delivering mobile health outreaches with free screening on Blood Pressure, Glucose tests, nutrition and health education. Special Unit: Meet the Counsellors.",
    icon: <Hospital className="w-8 h-8 text-green-600" />,
  },
  {
    id: "lady-care",
    title: "Lady Care (LC)",
    desc: "Supporting women and adolescent school girls challenged with period poverty through menstrual hygiene education and sanitary products to promote health and wellbeing.",
    icon: <Heart className="w-8 h-8 text-green-600" />,
  },
  {
    id: "school-care",
    title: "School Care (SC)",
    desc: "Supporting rural schools with teaching and learning materials. Includes Free-NHIS program and Bike2School Initiative providing bicycles for students to access education.",
    icon: <Bike className="w-8 h-8 text-green-600" />,
  },
  {
    id: "vision-care",
    title: "Vision Care (VC)",
    desc: "Improving eye health through free eye screenings, awareness campaigns, free reading glasses and access to affordable eye lenses in rural communities.",
    icon: <Eye className="w-8 h-8 text-green-600" />,
  },
];

export default function Programs() {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800">Our Core Initiatives</h2>
          <div className="h-1 w-20 bg-green-500 mx-auto mt-4"></div>
          <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
            RFCI is transforming the lives of rural underserved populations through health, agriculture and other essential social supports services. Our tailored initiatives are designed to contribute to achieving the Sustainable Development Goals (SDGs) 1, 2, 3, 4, 5, 6, 10, 11, 13 and 17, empowering vulnerable groups, strengthening resilience and improving quality of life.
          </p>
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