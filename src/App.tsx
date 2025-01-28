import React from 'react';
import { ChefHat, Phone, Star, TrendingUp, Shield, Truck } from 'lucide-react';

const categories = [
  { name: 'Cooking Equipment', icon: ChefHat, color: 'bg-pink-500' },
  { name: 'Refrigeration', icon: TrendingUp, color: 'bg-purple-500' },
  { name: 'Food Prep', icon: Star, color: 'bg-yellow-500' },
  { name: 'Storage & Transport', icon: Truck, color: 'bg-emerald-500' },
];

const products = [
  {
    id: 1,
    name: 'Commercial Gas Range',
    specs: ['6 High-Performance Burners', '36" Width', 'Stainless Steel Construction', 'Heavy-Duty Cast Iron Grates'],
    image: 'https://images.unsplash.com/photo-1588629170177-eee0e9a3b647?auto=format&fit=crop&q=80&w=600',
    category: 'Cooking Equipment',
    color: 'bg-pink-500'
  },
  {
    id: 2,
    name: 'Industrial Stand Mixer',
    specs: ['20Qt Capacity', 'Variable Speed Control', '1.5 HP Motor', 'Bowl Guard Safety Feature'],
    image: 'https://images.unsplash.com/photo-1591261730799-ee4e6c2d16d7?auto=format&fit=crop&q=80&w=600',
    category: 'Food Prep',
    color: 'bg-yellow-500'
  },
  {
    id: 3,
    name: 'Commercial Refrigerator',
    specs: ['Double Door Design', 'Digital Temperature Control', '49 Cu.Ft Capacity', 'LED Interior Lighting'],
    image: 'https://images.unsplash.com/photo-1584992236310-6ded3f94f461?auto=format&fit=crop&q=80&w=600',
    category: 'Refrigeration',
    color: 'bg-purple-500'
  },
  {
    id: 4,
    name: 'Professional Convection Oven',
    specs: ['Steam Injection Feature', 'Digital Controls', 'Multiple Rack Positions', 'Energy Efficient Design'],
    image: 'https://images.unsplash.com/photo-1592323360850-e317605f0526?auto=format&fit=crop&q=80&w=600',
    category: 'Cooking Equipment',
    color: 'bg-pink-500'
  },
  {
    id: 5,
    name: 'Commercial Food Processor',
    specs: ['Multiple Blade Options', '4L Bowl Capacity', 'Variable Speed', 'Safety Interlock System'],
    image: 'https://images.unsplash.com/photo-1625943553852-781c6dd46faa?auto=format&fit=crop&q=80&w=600',
    category: 'Food Prep',
    color: 'bg-yellow-500'
  },
  {
    id: 6,
    name: 'Walk-in Freezer',
    specs: ['Digital Temperature Display', 'Heavy-Duty Shelving', 'LED Lighting', 'NSF Certified'],
    image: 'https://images.unsplash.com/photo-1591119160904-ee4d0654a3c3?auto=format&fit=crop&q=80&w=600',
    category: 'Refrigeration',
    color: 'bg-purple-500'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">ProKitchen Equipment</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-white" />
              <span className="text-white font-medium">1-800-PRO-CHEF</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-500 via-purple-500 to-yellow-500 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center">
            <h1 className="text-5xl font-black text-black sm:text-6xl md:text-7xl">
              Professional Kitchen Equipment
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-gray-600 sm:text-2xl md:mt-5 md:max-w-3xl">
              Premium commercial grade appliances for your restaurant
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-black text-black mb-8">Our Equipment Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="bg-gray-50 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                <category.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Products Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-black text-black mb-8">Featured Equipment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-gray-50 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className={`absolute top-4 right-4 ${product.color} text-white px-3 py-1 rounded-full text-sm`}>
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-4">{product.name}</h3>
                <ul className="space-y-2">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Star className="h-4 w-4 text-black mr-2" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition group-hover:scale-105">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold">Commercial Grade Quality</h3>
              <p className="text-gray-600 mt-2">Professional equipment built to last</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold">Professional Installation</h3>
              <p className="text-gray-600 mt-2">Expert setup and configuration</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold">24/7 Support</h3>
              <p className="text-gray-600 mt-2">Always here to help</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2">
                <ChefHat className="h-8 w-8 text-white" />
                <span className="text-xl font-bold text-white">ProKitchen Equipment</span>
              </div>
              <p className="mt-4 text-gray-400">Your trusted source for commercial kitchen equipment</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>1-800-PRO-CHEF</li>
                <li>info@prokitchen.com</li>
                <li>123 Commerce St, NY 10001</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Friday: 8am - 6pm</li>
                <li>Saturday: 9am - 4pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 ProKitchen Equipment. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;