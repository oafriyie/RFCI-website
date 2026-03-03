import { motion } from "framer-motion";

export default function DonationGoal() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h3 className="text-2xl font-bold mb-4 text-slate-800 text-center">Project: Clean Water for Farm Irrigation</h3>
        <div className="bg-slate-100 h-8 rounded-full overflow-hidden flex items-center px-2">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "65%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="bg-green-600 h-5 rounded-full flex justify-end items-center px-2 shadow-sm"
          >
            <span className="text-[10px] text-white font-bold">65%</span>
          </motion.div>
        </div>
        <div className="flex justify-between mt-4 font-bold text-slate-600">
          <span>Raised: $6,500</span>
          <span>Goal: $10,000</span>
        </div>
      </div>
    </section>
  );
}