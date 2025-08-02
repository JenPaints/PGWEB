import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";
import { CircleDot, Activity, Zap, Waves } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  sport: {
    _id: string;
    name: string;
    price: number;
    trialPrice: number;
    features: string[];
  } | null;
  bookingType: 'trial' | 'enrollment';
}

const BookingModal = ({ isOpen, onClose, sport, bookingType }: BookingModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [guestInfo, setGuestInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const bookTrial = useMutation(api.sports.bookTrialGuest);
  const enrollNow = useMutation(api.sports.enrollNowGuest);

  const handleBooking = async () => {
    if (!sport || !guestInfo.name || !guestInfo.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    try {
      if (bookingType === 'trial') {
        await bookTrial({
          sportId: sport._id as any,
          guestName: guestInfo.name,
          guestEmail: guestInfo.email,
          guestPhone: guestInfo.phone || undefined,
        });
        toast.success("Free trial booked successfully! We'll contact you soon.");
      } else {
        await enrollNow({
          sportId: sport._id as any,
          guestName: guestInfo.name,
          guestEmail: guestInfo.email,
          guestPhone: guestInfo.phone || undefined,
        });
        toast.success("Enrollment successful! Welcome to the program.");
      }
      setGuestInfo({ name: '', email: '', phone: '' });
      onClose();
    } catch (error) {
      toast.error("Failed to process booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!sport) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-900/95 backdrop-blur-lg rounded-3xl p-8 max-w-2xl w-full border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="text-white">
                  {sport.name === 'Football' && <CircleDot className="w-8 h-8" />}
                  {sport.name === 'Basketball' && <Activity className="w-8 h-8" />}
                  {sport.name === 'Badminton' && <Zap className="w-8 h-8" />}
                  {sport.name === 'Swimming' && <Waves className="w-8 h-8" />}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {bookingType === 'trial' ? 'Book Free Trial' : 'Enroll Now'}
                  </h2>
                  <p className="text-gray-400">{sport.name} Training Program</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-gray-800/50 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Guest Information Form */}
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-4">Your Information:</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={guestInfo.name}
                    onChange={(e) => setGuestInfo(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-[#89D3EC] focus:ring-1 focus:ring-[#89D3EC] outline-none transition-colors"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={guestInfo.email}
                      onChange={(e) => setGuestInfo(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-[#89D3EC] focus:ring-1 focus:ring-[#89D3EC] outline-none transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={guestInfo.phone}
                      onChange={(e) => setGuestInfo(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-[#89D3EC] focus:ring-1 focus:ring-[#89D3EC] outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gray-800/50 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-300">
                  {bookingType === 'trial' ? 'Trial Session' : 'Monthly Program'}
                </span>
                <div className="text-right">
                  <span className="text-3xl font-bold text-white">
                    ${bookingType === 'trial' ? sport.trialPrice : sport.price}
                  </span>
                  <span className="text-gray-400 text-sm">
                    /{bookingType === 'trial' ? 'session' : 'month'}
                  </span>
                </div>
              </div>
              
              {bookingType === 'trial' && sport.trialPrice === 0 && (
                <div className="flex items-center space-x-2 text-green-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Completely Free!</span>
                </div>
              )}
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-4">What's Included:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sport.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-[#D7243F] to-[#89D3EC] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Terms */}
            <div className="bg-gray-800/30 rounded-xl p-4 mb-6">
              <h4 className="text-white font-medium mb-2">Important Notes:</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Our team will contact you within 24 hours to schedule your session</li>
                <li>• Please bring comfortable athletic wear and water bottle</li>
                <li>• Sessions can be rescheduled with 24-hour notice</li>
                {bookingType === 'trial' && (
                  <li>• No commitment required - try before you enroll</li>
                )}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="flex-1 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-gray-500 hover:text-white transition-colors"
              >
                Cancel
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleBooking}
                disabled={isSubmitting || !guestInfo.name || !guestInfo.email}
                className="flex-1 py-3 bg-gradient-to-r from-[#D7243F] to-[#89D3EC] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  `Confirm ${bookingType === 'trial' ? 'Trial' : 'Enrollment'}`
                )}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
