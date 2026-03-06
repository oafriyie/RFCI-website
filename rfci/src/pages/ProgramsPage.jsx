import { motion } from "framer-motion";
import { Hospital, Eye, Bike, Heart, Leaf, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DETAILED_PROGRAMS = [
  {
    id: "agri-care",
    title: "Agri Care (AC)",
    icon: <Leaf className="w-12 h-12 text-green-600" />,
    description: "Empowering smallholder farmers with modern improved farming methods including climate smart technologies to contribute to productivity and increase income. Our flagship agriculture program 'Plant Today For Tomorrow' (PTFT), supports women, youth etc. to venture into agribusiness, entrepreneurship etc.",
    features: ["Modern Farming Methods", "Climate Smart Technologies", "Plant Today For Tomorrow (PTFT)", "Agribusiness Training", "Sustainable Income"],
    impact: "Empowering smallholder farmers with modern improved farming methods."
  },
  {
    id: "disability-care",
    title: "Disability Care (DC)",
    icon: <Users className="w-12 h-12 text-green-600" />,
    description: "Empowering persons with disabilities through assistive devices and economic opportunities for independent livelihoods to promote equity, diversity and inclusivity. Built on RFCIs core value, Caring Without Borders (CWBs).",
    features: ["Assistive Devices", "Economic Opportunities", "Independent Livelihoods", "Inclusivity Programs", "Equity & Diversity"],
    impact: "Empowering persons with disabilities for independent livelihoods."
  },
  {
    id: "healthcare",
    title: "Health Care (HC)",
    icon: <Hospital className="w-12 h-12 text-green-600" />,
    description: "Delivering mobile health outreaches that provides free screening on Blood Pressure, Glucose tests etc, nutrition and health education and referrals for further health attention since most rural residents delay health care due to cost, distance, etc.",
    features: ["Mobile Clinics", "Free Screening", "Health Education", "Disease Prevention", "Health Referrals"],
    impact: "Delivering mobile health outreaches to remote rural communities."
  },
  {
    id: "lady-care",
    title: "Lady Care (LC)",
    icon: <Heart className="w-12 h-12 text-green-600" />,
    description: "Supporting women and adolescent school girls challenged with period poverty with menstrual hygiene education and menstrual sanitary products to promote good health and wellbeing, boost confidence, improve school attendance, performance, etc.",
    features: ["Menstrual Hygiene Education", "Sanitary Products", "Health & Wellbeing", "School Support", "Confidence Building"],
    impact: "Supporting women and adolescent girls' health and wellbeing."
  },
  {
    id: "school-care",
    title: "School Care (SC)",
    icon: <Bike className="w-12 h-12 text-green-600" />,
    description: "Supporting rural schools with teaching, learning materials and other essential supports. Includes Free-NHIS which enrols pupils on National Health Insurance Scheme, and Bike2School which provides bicycles to pupils who trek long hours to access basic education.",
    features: ["Teaching Materials", "Learning Resources", "Free-NHIS Program", "Bike2School Program", "Community Learning Support"],
    impact: "Supporting rural schools with essential materials and transportation."
  },
  {
    id: "vision-care",
    title: "Vision Care (VC)",
    icon: <Eye className="w-12 h-12 text-green-600" />,
    description: "Improving eye health in rural communities through free eye screenings, awareness campaigns, free reading glasses and access to affordable eye lenses. Seeking to contribute to making eye health readily available, accessible, and affordable for everyone.",
    features: ["Free Eye Screenings", "Awareness Campaigns", "Free Reading Glasses", "Affordable Eye Lenses", "School Programs"],
    impact: "Improving eye health accessibility in rural communities."
  }
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="bg-white border-b border-slate-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Our Solutions</span>
          <h1 className="text-5xl font-black text-slate-900 mt-4 leading-tight">
            Our Core Initiatives <br /> Making Real Impact
          </h1>
        </div>
      </section>

      {/* Our Initiatives Overview Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-8">Our Initiatives</h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                RFCI is transforming the lives of rural underserved populations through health, agriculture and other essential social supports services as our tailored initiatives are designed to contribute to achieving the Sustainable Development Goals (SDGs) 1, 2, 3, 4, 5, 6, 10, 11, 13 and 17 seek to empower vulnerable groups, strengthen resilience and improve quality of life.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Program Sections */}
      <section className="py-20 container mx-auto px-6 max-w-5xl">
        <div className="space-y-24">
          {DETAILED_PROGRAMS.map((program, index) => (
            <Link key={index} to={`/programs/${program.id}`} className="block group">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-12 items-center cursor-pointer transition-all group-hover:opacity-80 rounded-2xl p-6 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Icon Box */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="w-64 h-64 bg-green-100 rounded-[3rem] flex items-center justify-center shadow-inner relative group-hover:shadow-xl group-hover:bg-green-200 transition-all">
                    {program.icon}
                    <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-2xl shadow-lg border border-slate-50 text-center">
                      <p className="text-xs text-slate-400 font-bold uppercase">Impact</p>
                      <p className="text-green-600 font-bold">{program.impact}</p>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-extrabold text-slate-800 mb-6 group-hover:text-green-600 transition-colors">{program.title}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {program.description}
                  </p>
                  <ul className="space-y-3">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Are you a community leader?</h2>
          <p className="text-green-100 mb-10 max-w-xl mx-auto">
            Partner with us to bring these programs to your district or community.
          </p>
          <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold flex items-center gap-2 mx-auto hover:bg-slate-50 transition">
            Request Partnership <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
}