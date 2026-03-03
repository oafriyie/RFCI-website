import { motion } from "framer-motion";
import { Hospital, Eye, Bike, Heart, Leaf, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DETAILED_PROGRAMS = [
  {
    id: "healthcare",
    title: "Healthcare Initiative",
    icon: <Hospital className="w-12 h-12 text-green-600" />,
    description: "NHIS-integrated mobile clinics providing comprehensive healthcare services to remote farming communities. Regular health screenings, maternal care, and disease prevention.",
    features: ["NHIS Coverage", "Mobile Clinics", "Maternal Care", "Disease Prevention", "Health Education"],
    impact: "Improved health access for 5,000+ rural families."
  },
  {
    id: "vision-care",
    title: "Vision Care Program",
    icon: <Eye className="w-12 h-12 text-green-600" />,
    description: "Regular eye screening campaigns and vision correction programs ensuring farmers and students have access to quality eye care.",
    features: ["Eye Screening", "Vision Correction", "School Programs", "Prevention Workshops"],
    impact: "Provided glasses to 1,200+ individuals."
  },
  {
    id: "school-care",
    title: "School Care - Bike to School Initiative",
    icon: <Bike className="w-12 h-12 text-green-600" />,
    description: "Promoting youth engagement and agricultural education through bike distribution programs for school children in rural areas.",
    features: ["Bike Distribution", "Youth Education", "Agricultural Training", "Community Engagement"],
    impact: "Supported 800+ students with school transportation."
  },
  {
    id: "disability-care",
    title: "Disability Care Program",
    icon: <Users className="w-12 h-12 text-green-600" />,
    description: "Inclusive programs ensuring people with disabilities benefit from healthcare, economic opportunities, and social support.",
    features: ["Inclusive Services", "Accessibility Programs", "Economic Support", "Social Integration"],
    impact: "Empowered 300+ people with disabilities."
  },
  {
    id: "lady-care",
    title: "Lady Care Program",
    icon: <Heart className="w-12 h-12 text-green-600" />,
    description: "Women-centered initiatives focusing on health, economic empowerment, leadership development, and family welfare.",
    features: ["Health Programs", "Economic Empowerment", "Leadership Training", "Family Support"],
    impact: "Supported 2,000+ women with health and livelihood programs."
  },
  {
    id: "agri-care",
    title: "Agri-Care - Plant Today for Tomorrow",
    icon: <Leaf className="w-12 h-12 text-green-600" />,
    description: "Sustainable agricultural practices promoting long-term food security and environmental stewardship for future generations.",
    features: ["Sustainable Farming", "Soil Health", "Climate Resilience", "Youth Engagement"],
    impact: "Helped farmers adopt sustainable practices on 3,000+ acres."
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