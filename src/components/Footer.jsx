function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      
      {/* ✅ TOP GRID SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">

        {/* ✅ ABOUT */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase">
            About Mini Bazar
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Our Blog</li>
            <li className="hover:text-white cursor-pointer">Press & Media</li>
            <li className="hover:text-white cursor-pointer">Investor Relations</li>
          </ul>
        </div>

        {/* ✅ SHOP */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase">
            Shop
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Men Fashion</li>
            <li className="hover:text-white cursor-pointer">Women Fashion</li>
            <li className="hover:text-white cursor-pointer">Electronics</li>
            <li className="hover:text-white cursor-pointer">Home & Kitchen</li>
            <li className="hover:text-white cursor-pointer">Beauty Products</li>
          </ul>
        </div>

        {/* ✅ HELP */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase">
            Help & Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Payments</li>
            <li className="hover:text-white cursor-pointer">Shipping</li>
            <li className="hover:text-white cursor-pointer">Returns & Refunds</li>
            <li className="hover:text-white cursor-pointer">Order Tracking</li>
            <li className="hover:text-white cursor-pointer">Customer Care</li>
          </ul>
        </div>

        {/* ✅ POLICIES */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase">
            Policies
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Use</li>
            <li className="hover:text-white cursor-pointer">Secure Shopping</li>
            <li className="hover:text-white cursor-pointer">Cookie Policy</li>
            <li className="hover:text-white cursor-pointer">Grievance Support</li>
          </ul>
        </div>

        {/* ✅ CONTACT */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase">
            Contact Us
          </h3>
          <p className="text-sm leading-6">
            Mini Bazar Pvt. Ltd.<br />
            Tech Park, Indrapuri<br />
            Bhopal, Madhya Pradesh<br />
            India
          </p>

          <p className="text-sm mt-3">
            📞 +91 98765 43210  
            <br />
            📧 support@minibazar.com
          </p>

          {/* ✅ SOCIAL ICONS */}
          <div className="flex gap-4 mt-4 text-xl">
            <span className="hover:text-white cursor-pointer">🌐</span>
            <span className="hover:text-white cursor-pointer">📘</span>
            <span className="hover:text-white cursor-pointer">📸</span>
            <span className="hover:text-white cursor-pointer">🐦</span>
          </div>
        </div>
      </div>

      {/* ✅ BOTTOM BAR */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

          {/* LEFT */}
          <div className="flex flex-wrap items-center gap-6">
            <span className="hover:text-white cursor-pointer">Become a Seller</span>
            <span className="hover:text-white cursor-pointer">Advertise</span>
            <span className="hover:text-white cursor-pointer">Gift Cards</span>
            <span className="hover:text-white cursor-pointer">Help Center</span>
          </div>

          {/* RIGHT */}
          <div className="text-gray-400">
            © {new Date().getFullYear()} Mini Bazar. All Rights Reserved.
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
