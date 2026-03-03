import { motion } from "framer-motion";

export default function OurWork() {
  return (
    <>
      {/* Header Section */}
      <header className="bg-green-900 py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-green-100"
          >
            Rural Farmer Care Initiative: Our Mission & Vision
          </motion.p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Organization Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-6">We Are A Non-Profit Organization</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Rural Farmer Care Initiative (RFCI) is a non-profit organization registered and based in Ghana that provides essential support services to the underserved communities through professional development initiatives.
            </p>
          </motion.div>

          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 bg-green-50 p-10 rounded-2xl border border-green-200"
          >
            <h2 className="text-3xl font-bold text-green-900 mb-6">Our Story</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Bartholomew Sey founded the ideation of RFCI in 2016 as an Extensionist working with the Department of Agriculture, and co-founded with Jonas Opoku, who was then serving as a National Service Personnel in the same Department at Kwahu Mpraeso. We both shared a vision for rural development by the underserved populations despite thriving in certain conditions beyond their control.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We had plans to support them to contribute to community development. We registered RFCI in 2012 because we believed it would empower them to achieve that vision.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl border-2 border-green-600 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-green-600 mb-4">Mission Statement</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                To provide essential support services to the underserved populations to enhance community development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl border-2 border-green-600 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-green-600 mb-4">Vision Statement</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                To contribute to sustainable healthy communities in Ghana.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 bg-slate-50 p-10 rounded-2xl"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {["Learning", "Result-Oriented", "Transparency"].map((value, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-5xl font-black text-green-600 mb-3">✓</div>
                  <h3 className="text-xl font-bold text-slate-800">{value}</h3>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Our Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-green-600 text-white p-10 rounded-2xl"
          >
            <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                RFCI operates solely on volunteers from various academic backgrounds to achieve its objectives. RFCI takes health screening to the doorsteps of our clients.
              </p>
              <p>
                We conduct grassroot research to identify the needs of our clients and offer tailored tools to address them. In addition, RFCI enrolls in Innovative Learning Programs to seek solutions to address problems facing schools, communities, individuals, and groups.
              </p>
              <p>
                RFCI uses radio, social media, and other channels to sensitize the public on socioeconomic issues coupled with peer-to-peer support. We believe in sustainable development through community participation and local solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Interested in Learning More?</h2>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto text-lg">
            Join us in making a tangible difference in rural communities.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="/programs" className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition">
              Explore Our Initiatives
            </a>
            <a href="/join" className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold border-2 border-green-600 hover:bg-green-50 transition">
              Become a Volunteer
            </a>
          </div>
        </div>
      </section>
    </>
  );
}