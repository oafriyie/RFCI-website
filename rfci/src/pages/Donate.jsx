import { motion, AnimatePresence } from "framer-motion";
import { Landmark, Smartphone, CheckCircle2, X, Check } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAIL_CONFIG } from "../config/emailConfig";

// EmailJS initialized in config

export default function Donate() {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [donationEmail, setDonationEmail] = useState("");

  const paymentMethods = [
    {
      id: "mtn",
      title: "Mobile Money",
      icon: <Smartphone className="text-green-600" size={28} />,
      description: "MTN Mobile Money",
      details: "MTN: 0556817259\nMerchant ID: 403161",
      color: "bg-yellow-50",
      fullDetails: {
        number: "0556817259",
        merchantId: "403161"
      }
    },
    {
      id: "bank",
      title: "Bank Transfer",
      icon: <Landmark className="text-blue-600" size={28} />,
      description: "Direct Deposit / EFT",
      details: "Rural Farmer Care Initiative\nAccount: 2191180001978\nBranch: Mpraeso, GCB Plc",
      color: "bg-blue-50",
      fullDetails: {
        name: "Rural Farmer Care Initiative",
        account: "2191180001978",
        branch: "Mpraeso",
        bank: "GCB Plc"
      }
    },
  ];

  const validateEmail = (emailValue) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
  };

  const handleDonate = async () => {
    setEmailError("");
    
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    // capture current method for template
    const method = currentMethod ? currentMethod.title : '';

    try {
      // send receipt to donor
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.DONATION_TEMPLATE_ID,
        {
          to_email: email,
          donor_email: email,
          payment_method: method,
          // you can add other variables (amount, date) if template expects them
        }
      );

      // notify organization as well
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.DONATION_TEMPLATE_ID,
        {
          to_email: EMAIL_CONFIG.RECIPIENT_EMAIL,
          donor_email: email,
          payment_method: method,
        }
      );
    } catch (err) {
      console.error('Error sending donation emails:', err);
      // don't block user flow; just log
    }

    setDonationEmail(email);
    setShowSuccess(true);
    setEmail("");
    setSelectedMethod(null);
  };

  const currentMethod = selectedMethod ? paymentMethods.find(m => m.id === selectedMethod) : null;

  return (
    <>
      <div className="container mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold text-slate-800"
          >
            Support RFCI
          </motion.h1>
          <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto">
            Your contribution directly funds seeds, medical supplies, and training for rural farmers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mb-6`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800">{method.title}</h3>
              <p className="text-slate-500 mt-2 text-sm">{method.description}</p>
              
              <button 
                onClick={() => setSelectedMethod(method.id)}
                className="mt-8 w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-colors"
              >
                Donate Now
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center text-slate-400">
          <div className="flex items-center gap-2 text-sm mb-2">
            <CheckCircle2 size={16} className="text-green-500" />
            <span>Secure SSL Encrypted Transactions</span>
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      <AnimatePresence>
        {selectedMethod && currentMethod && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMethod(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMethod(null)}
                className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition"
              >
                <X size={24} className="text-slate-600" />
              </button>

              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                {currentMethod.title}
              </h2>
              <p className="text-slate-600 mb-8">Enter your email to proceed with your donation</p>

              {/* Payment Details */}
              <div className={`p-6 ${currentMethod.color} rounded-xl mb-8 border border-slate-200`}>
                <h3 className="font-bold text-slate-800 mb-4">Payment Details:</h3>
                
                {currentMethod.id === "mtn" ? (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-700">MTN Number:</span>
                      <span className="font-mono text-lg text-slate-900">{currentMethod.fullDetails.number}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-700">Merchant ID:</span>
                      <span className="font-mono text-lg text-slate-900">{currentMethod.fullDetails.merchantId}</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-slate-700">Account Name:</span>
                      <p className="font-mono text-slate-900">{currentMethod.fullDetails.name}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-700">Account Number:</span>
                      <span className="font-mono text-lg text-slate-900">{currentMethod.fullDetails.account}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-700">Branch:</span>
                      <span className="font-mono text-slate-900">{currentMethod.fullDetails.branch}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-700">Bank:</span>
                      <span className="font-mono text-slate-900">{currentMethod.fullDetails.bank}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-3 rounded-lg border-2 transition focus:outline-none ${
                    emailError
                      ? "border-red-500 focus:border-red-600"
                      : "border-slate-200 focus:border-green-600"
                  }`}
                />
                {emailError && (
                  <p className="text-red-600 text-sm mt-2">{emailError}</p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedMethod(null)}
                  className="flex-1 px-6 py-3 rounded-lg border-2 border-slate-300 text-slate-700 font-bold hover:bg-slate-50 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDonate}
                  className="flex-1 px-6 py-3 rounded-lg bg-green-600 text-white font-bold hover:bg-green-700 transition"
                >
                  Confirm Donation
                </button>
              </div>

              <p className="text-xs text-slate-500 text-center mt-6">
                Your information is secure and encrypted. We will only use your email to send donation confirmation.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-10 max-w-lg w-full shadow-2xl text-center"
            >
              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", damping: 15 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Check className="text-green-600" size={48} strokeWidth={3} />
              </motion.div>

              {/* Success Message */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-black text-slate-900 mb-2"
              >
                Thank You for Your Donation!
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-slate-600 text-lg mb-6"
              >
                Your generous contribution will help us empower rural farmers and build sustainable communities.
              </motion.p>

              {/* Confirmation Details */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8"
              >
                <p className="text-sm text-slate-600 mb-1">Confirmation sent to:</p>
                <p className="text-lg font-bold text-slate-800">{donationEmail}</p>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-3 mb-8 text-sm text-slate-600"
              >
                <p>✓ A confirmation email has been sent to {donationEmail}</p>
                <p>✓ Check your email for receipt and tax information</p>
                <p>✓ Your impact will be shared in our next newsletter</p>
              </motion.div>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                onClick={() => setShowSuccess(false)}
                className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all active:scale-95"
              >
                Back to Home
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-xs text-slate-400 mt-6"
              >
                God bless you for supporting rural development in Ghana
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}