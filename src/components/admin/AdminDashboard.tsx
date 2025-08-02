import { motion } from "framer-motion";
import { LogOut, Users, Calendar, MessageSquare, BarChart3 } from "lucide-react";

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img
                src="https://jenpaints.art/wp-content/uploads/2025/08/IMG_6671-removebg-preview.png"
                alt="Playgram Logo"
                className="w-24 h-24 object-contain"
              />
              <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Total Users", value: "1,234", icon: Users, color: "from-blue-500 to-blue-600" },
            { title: "Bookings", value: "567", icon: Calendar, color: "from-green-500 to-green-600" },
            { title: "Messages", value: "89", icon: MessageSquare, color: "from-yellow-500 to-yellow-600" },
            { title: "Revenue", value: "₹45,678", icon: BarChart3, color: "from-purple-500 to-purple-600" }
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Bookings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
          >
            <h2 className="text-xl font-bold text-white mb-4">Recent Bookings</h2>
            <div className="space-y-4">
              {[
                { name: "John Doe", sport: "Football", date: "2024-01-15", status: "Confirmed" },
                { name: "Jane Smith", sport: "Basketball", date: "2024-01-14", status: "Pending" },
                { name: "Mike Johnson", sport: "Swimming", date: "2024-01-13", status: "Confirmed" }
              ].map((booking, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                  <div>
                    <p className="text-white font-medium">{booking.name}</p>
                    <p className="text-gray-400 text-sm">{booking.sport} - {booking.date}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    booking.status === 'Confirmed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Messages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
          >
            <h2 className="text-xl font-bold text-white mb-4">Recent Messages</h2>
            <div className="space-y-4">
              {[
                { name: "Sarah Wilson", message: "Interested in badminton coaching", time: "2 hours ago" },
                { name: "David Brown", message: "Question about swimming lessons", time: "4 hours ago" },
                { name: "Lisa Garcia", message: "Football training inquiry", time: "6 hours ago" }
              ].map((message, index) => (
                <div key={index} className="p-3 bg-gray-700/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white font-medium">{message.name}</p>
                    <span className="text-gray-400 text-xs">{message.time}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{message.message}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;