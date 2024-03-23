import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-gray-800 text-white py-8 flex flex-row text-center  bg-cyan-300"
  >
      
      
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm">At [Your Dental Booking Service], we strive to make booking dentist appointments as easy and convenient as possible. Our platform connects patients with trusted dental clinics and practitioners, allowing them to schedule appointments online with just a few clicks. We understand the importance of oral health and the challenges that patients often face when trying to find and book dental appointments. That's why we're dedicated to providing a 
          seamless and user-friendly experience for both patients and dental professionals.</p>
        </div>
        
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-bold mb-4">Links</h3>
          <ul className="text-sm">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Services</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
        
        
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm">123 Street Name<br />City, Country<br />info@example.com<br />(123) 456-7890</p>
        </div>
      </div>
      
      
      <div className="text-center mt-8">
        <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

