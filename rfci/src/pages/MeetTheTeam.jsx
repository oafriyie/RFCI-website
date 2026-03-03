import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Bartholomew Sey",
    role: "RFCI Coordinator",
    image: "/sey.png"
  },
  {
    name: "Jonas Opoku",
    role: "RFCI Secretary",
    image: "/jonas.png"
  },
  {
    name: "Henrietta Mensah Djan",
    role: "RFCI Ambassador",
    image: "/hen.png"
  },
  {
    name: "Benedicta Gyamfua Ansah",
    role: "RFCI Counsellor",
    image: "/bb.png"
  },
    {
    name: "Docia Sarpomaa",
    role: "RFCI Subscriber",
    image: "/dorc.png"
  },
     {
    name: "Rejoice Ama Agbedzordzi",
    role: "RFCI Partnerships Facilitator",
    image: "/rej.png"
  },
];

const BOARD_MEMBERS = [
  {
    name: "Dr. Miriam Zimela",
    title: "Board Member",
    image: "/dr.png"
  },
  {
    name: "Victor Agyei Mframa",
    title: "Board Member",
    image: "/2.png"
  },
  {
    name: "Fred Cobbinah",
    title: "Board Member",
    image: "/3.png"
  },
  {
    name: "Dr. Salomey Afrifa",
    title: "Board Member",
    image: "/4.png"
  },
  
];

export default function MeetTheTeam() {
  return (
    <>
      {/* Hero Header */}
      <section className="bg-white border-b border-slate-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Our People</span>
          <h1 className="text-5xl font-black text-slate-900 mt-4 leading-tight">
            Meet the Team Driving <br /> Real Change
          </h1>
          <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
            Dedicated professionals and leaders committed to transforming rural communities through sustainable agriculture and equitable healthcare.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800">Leadership Team</h2>
          <div className="h-1 w-20 bg-green-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center justify-center py-8">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-white shadow-sm border border-slate-100 flex items-center justify-center transition-transform group-hover:scale-105 ring-1 ring-green-50">
                  {typeof member.image === 'string' && (member.image.includes('/') || member.image.match(/\.(png|jpe?g|svg)$/i)) ? (
                    <img src={member.image.startsWith('/') ? member.image : `/${member.image}`} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-4xl">{member.image}</span>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
                <p className="text-green-600 font-semibold text-sm mt-1">{member.role}</p>
                <p className="text-slate-600 text-sm mt-4 leading-relaxed">{member.bio}</p>
                <div className="flex gap-3 mt-6">
                  <button className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-green-100 hover:text-green-600 transition">
                    <Linkedin size={18} />
                  </button>
                  <button className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-green-100 hover:text-green-600 transition">
                    <Twitter size={18} />
                  </button>
                  <button className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-green-100 hover:text-green-600 transition">
                    <Mail size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800">Board of Directors</h2>
            <div className="h-1 w-20 bg-green-500 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {BOARD_MEMBERS.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-green-200 hover:shadow-lg transition-all text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center text-4xl overflow-hidden">
                  {typeof member.image === 'string' && (member.image.includes('/') || member.image.match(/\.(png|jpe?g|svg)$/i)) ? (
                    <img
                      src={member.image.startsWith('/') ? member.image : `/${member.image}`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    member.image
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-800">{member.name}</h3>
                <p className="text-green-600 font-semibold text-sm mt-2">{member.title}</p>
                <p className="text-slate-600 text-xs mt-3">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
          <p className="text-green-100 mb-10 max-w-xl mx-auto">
            We're always looking for passionate individuals to help us expand our impact and reach more rural communities.
          </p>
          <a href="/join" className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition">
            Become Part of the Team
          </a>
        </div>
      </section>
    </>
  );
}
