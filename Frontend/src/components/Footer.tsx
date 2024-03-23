import React from 'react';

export default function Footer() {
  return (
    <footer className="text-black py-8" style={{ backgroundColor: 'rgb(172, 226, 225)' }}>
      <div className="container mx-auto flex flex-wrap justify-between font-sans">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            At [Your Dental Booking Service], we're all about hassle-free dentist appointments. With just a few clicks, you can schedule your visit online. We link you with trusted clinics and dentists, making oral health a breeze. Say goodbye to appointment headaches - we've got you covered!
          </p>
        </div>

        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Links</h3>
          <ul className="text-sm">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Services</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm">123 Street Name<br />City, Country<br />info@example.com<br />(123) 456-7890</p>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};
