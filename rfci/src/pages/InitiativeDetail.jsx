import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Hospital, Eye, Bike, Heart, Leaf, Users, ArrowRight, ArrowLeft } from "lucide-react";

const INITIATIVES = {
  healthcare: {
    title: "Health Care (HC)",
    subtitle: "Mobile Health Outreaches for Rural Communities",
    icon: <Hospital className="w-12 h-12 text-green-600" />,
    description: "Delivering mobile health outreaches that provides free screening on Blood Pressure, Glucose tests etc, nutrition and health education and referrals for further health attention since most rural residents delay health care due to cost, distance, etc.",
    fullDescription: "Under the Health Care is a Special Unit called, Meet the Counsellors. Our Healthcare Initiative brings quality mobile health outreach services directly to rural farming communities, providing comprehensive health screenings and education. We ensure families have access to affordable, quality healthcare including blood pressure and glucose testing, nutrition guidance, and necessary health referrals.",
    features: ["Mobile Clinics", "Free Screening", "Health Education", "Disease Prevention", "Health Referrals", "Meet the Counsellors"],
    impact: "Improved health access for 5,000+ rural families.",
    stats: [
      { label: "Clinics Organized", value: "50+" },
      { label: "Families Served", value: "5,000+" },
      { label: "Health Screenings", value: "1,200+" }
    ],
    gallery: [
      { type: "image", src: "/LadyCare.jpg", title: "Mobile Clinic" },
      { type: "image", src: "/freenhis.jpg", title: "Health Screening" },
      { type: "image", src: "/group.jpeg", title: "Community Health Camp" }
    ]
  },
  "vision-care": {
    title: "Vision Care (VC)",
    subtitle: "Eye Health for Everyone in Rural Communities",
    icon: <Eye className="w-12 h-12 text-green-600" />,
    description: "Improving eye health in rural communities through free eye screenings, awareness campaigns, free reading glasses and access to affordable eye lenses.",
    fullDescription: "Under Vision Care, RFCI seeks to contribute to making eye health readily available, accessible, and affordable for everyone. Our program provides comprehensive eye screenings and vision correction services to rural communities. Vision Care is essential for our farmers' productivity and students' academic success.",
    features: ["Free Eye Screenings", "Awareness Campaigns", "Free Reading Glasses", "Affordable Eye Lenses", "School Programs"],
    impact: "Provided glasses to 1,200+ individuals.",
    stats: [
      { label: "Eye Screenings", value: "1,200+" },
      { label: "Glasses Provided", value: "1,200+" },
      { label: "Communities Reached", value: "45+" }
    ],
    gallery: [
      { type: "image", src: "/VisionCare.jpg", title: "Eye Screening Program" },
      { type: "image", src: "/freenhis.jpg", title: "Vision Testing" },
      { type: "image", src: "/LadyCare.jpg", title: "Community Outreach" }
    ]
  },
  "school-care": {
    title: "School Care (SC)",
    subtitle: "Essential Support for Rural Schools and Students",
    icon: <Bike className="w-12 h-12 text-green-600" />,
    description: "Supporting rural schools with teaching, learning materials and other essential supports. Under the School Care is the Free-NHIS, which enrols pupils on the National Health Insurance Scheme policy to ensure access to basic healthcare. Also, the byke2School, which provides bicycles to pupils who trek long hours to access basic education.",
    fullDescription: "School Care provides comprehensive support to rural schools and students. Our Free-NHIS program enrolls pupils on the National Health Insurance Scheme policy to ensure access to basic healthcare. The Bike2School Initiative provides bicycles to pupils who trek long hours to access basic education, improving school attendance and reducing educational barriers.",
    features: ["Teaching Materials", "Learning Resources", "Free-NHIS Program", "Bike2School Program", "Community Learning Support"],
    impact: "Supported 800+ students with school transportation.",
    stats: [
      { label: "Bikes Distributed", value: "800+" },
      { label: "Students Supported", value: "800+" },
      { label: "Schools Partnered", value: "20+" }
    ],
    gallery: [
      { type: "image", src: "/group.jpeg", title: "Bike Distribution Event" },
      { type: "image", src: "/LadyCare.jpg", title: "Students with Bikes" },
      { type: "image", src: "/freenhis.jpg", title: "School Engagement" }
    ]
  },
  "disability-care": {
    title: "Disability Care (DC)",
    subtitle: "Empowering Persons with Disabilities",
    icon: <Users className="w-12 h-12 text-green-600" />,
    description: "Empowering persons with disabilities through assistive devices and economic opportunities for independent livelihoods to promote equity, diversity and inclusivity. This initiative is built on one of RFCIs core values, Caring Without Borders (CWBs).",
    fullDescription: "Our Disability Care Program is built on one of RFCI's core values, Caring Without Borders (CWBs). We provide assistive devices and create economic opportunities for persons with disabilities, ensuring independent livelihoods and promoting equity, diversity and inclusivity. We believe everyone deserves equal opportunities and the ability to participate fully in community life.",
    features: ["Assistive Devices", "Economic Opportunities", "Independent Livelihoods", "Inclusivity Programs", "Equity & Diversity"],
    impact: "Empowered 300+ people with disabilities.",
    stats: [
      { label: "People Supported", value: "300+" },
      { label: "Economic Opportunities", value: "100+" },
      { label: "Communities Engaged", value: "30+" }
    ],
    gallery: [
      { type: "image", src: "/co.jpeg", title: "Community Program" },
      { type: "image", src: "/group.jpeg", title: "Inclusive Event" },
      { type: "image", src: "/VisionCare.jpg", title: "Support Session" }
    ]
  },
  "lady-care": {
    title: "Lady Care (LC)",
    subtitle: "Supporting Women and Adolescent School Girls",
    icon: <Heart className="w-12 h-12 text-green-600" />,
    description: "Supporting women and adolescent school girls challenged with period poverty with menstrual hygiene education and menstrual sanitary products to promote good health and wellbeing, boost confidence, improve school attendance, performance, etc.",
    fullDescription: "Lady Care recognizes the critical challenges women and adolescent girls face in rural communities. Our comprehensive program addresses period poverty through menstrual hygiene education and provision of menstrual sanitary products. This support promotes good health and wellbeing, boosts confidence, improves school attendance, and enhances academic performance for school girls.",
    features: ["Menstrual Hygiene Education", "Sanitary Products", "Health & Wellbeing", "School Support", "Confidence Building"],
    impact: "Supported 2,000+ women with health and livelihood programs.",
    stats: [
      { label: "Women Supported", value: "2,000+" },
      { label: "Income Groups", value: "500+" },
      { label: "Leaders Trained", value: "150+" }
    ],
    gallery: [
      { type: "image", src: "/LadyCare.jpg", title: "Women Empowerment Meeting" },
      { type: "image", src: "/group.jpeg", title: "Leadership Training" },
      { type: "image", src: "/freenhis.jpg", title: "Health Program" }
    ]
  },
  "agri-care": {
    title: "Agri Care (AC)",
    subtitle: "Plant Today For Tomorrow - Farming for Sustainable Income",
    icon: <Leaf className="w-12 h-12 text-green-600" />,
    description: "Empowering smallholder farmers with modern improved farming methods including climate smart technologies to contribute to productivity and increase income. Under the Agri Care, is its flagship agriculture program 'Plant Today For Tomorrow' (PTFT), which supports women, youth etc. to venture into agribusiness, entrepreneurship etc. to earn a sustainable income, reduce migration and contribute to food security.",
    fullDescription: "Agri Care embodies our vision for rural prosperity through sustainable agriculture. We empower smallholder farmers with modern farming methods including climate-smart technologies. Our flagship agriculture program, 'Plant Today For Tomorrow' (PTFT), supports women and youth in ventures into agribusiness and entrepreneurship to earn sustainable income, reduce migration, and contribute to food security.",
    features: ["Modern Farming Methods", "Climate Smart Technologies", "Plant Today For Tomorrow (PTFT)", "Agribusiness Training", "Sustainable Income", "Food Security"],
    impact: "Helped farmers adopt sustainable practices on 3,000+ acres.",
    stats: [
      { label: "Acres Managed", value: "3,000+" },
      { label: "Farmers Trained", value: "1,500+" },
      { label: "Crop Yields Up", value: "40%" }
    ],
    gallery: [
      { type: "image", src: "/freenhis.jpg", title: "Sustainable Farming" },
      { type: "image", src: "/group.jpeg", title: "Farmer Training" },
      { type: "image", src: "/VisionCare.jpg", title: "Crop Innovation" }
    ]
  }
};

export default function InitiativeDetail() {
  const { id } = useParams();
  const initiative = INITIATIVES[id];

  if (!initiative) {
    return (
      <>
        <section className="py-20 container mx-auto px-6 text-center min-h-[60vh] flex items-center justify-center">
          <div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Initiative Not Found</h1>
            <Link to="/programs" className="text-green-600 font-bold hover:text-green-700">
              Back to All Initiatives
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-6">
          <Link to="/programs" className="inline-flex items-center text-green-100 font-bold mb-6 hover:text-white transition gap-2">
            <ArrowLeft size={20} /> Back to All Initiatives
          </Link>
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-8 backdrop-blur-sm"
            >
              {initiative.icon}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-black mb-4 leading-tight"
            >
              {initiative.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-green-100"
            >
              {initiative.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              {initiative.description}
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              {initiative.fullDescription}
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 bg-slate-50 p-10 rounded-2xl border border-slate-100"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {initiative.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <span className="text-slate-700 font-medium text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {initiative.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 text-center"
                >
                  <div className="text-4xl font-black text-green-600 mb-2">{stat.value}</div>
                  <div className="text-slate-700 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="bg-white p-10 rounded-2xl border-2 border-green-600 text-center">
              <p className="text-2xl font-bold text-slate-800">{initiative.impact}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      {initiative.gallery && initiative.gallery.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Gallery</h2>
              <p className="text-slate-600 text-lg">Visual stories from our initiatives in action</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {initiative.gallery.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative w-full h-64 bg-slate-200 overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Support This Initiative?</h2>
          <p className="text-green-100 mb-10 max-w-xl mx-auto text-lg">
            Your contribution can directly impact lives in rural communities.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="/donate" className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition">
              Make a Donation
            </a>
            <a href="/join" className="inline-block bg-green-700 text-white px-8 py-4 rounded-xl font-bold border-2 border-white hover:bg-green-800 transition">
              Volunteer with Us
            </a>
          </div>
        </div>
      </section>

      {/* Related Initiatives */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Other Core Initiatives</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {Object.entries(INITIATIVES).map(([key, init]) => (
              key !== id && (
                <Link key={key} to={`/programs/${key}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-green-200 hover:shadow-lg transition cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                      {init.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">{init.title}</h3>
                  </motion.div>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
