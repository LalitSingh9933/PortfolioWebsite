import React, { useState } from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Link } from 'react-router-dom'; // Make sure this import exists
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Updated navItems with proper route paths
  const navItems = [
    { name: 'Home', path: '#home' }, // Will scroll to home section
    { name: 'About', path: '#about' }, // Will scroll to about section
    { name: 'Services', path: '#services' }, // Will scroll to services section
    { name: 'My Works', path: '#projects' }, // Will scroll to projects section
    { name: 'Contact', path: '#contact' } // Will scroll to contact section
  ];

  return (
    <>
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f1ede7] dark:bg-gray-900 shadow-md">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Changed to scroll to top */}
            <div className="flex-shrink-0 flex items-center">
              <a 
                href="#home" 
                className="text-3xl font-bold text-[#52a388] dark:text-[#52a388] hover:text-[#56c5a0] dark:hover:text-green-300 transition-colors"
              >
                LALIT SINGH
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className="px-3 py-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-[#52a388]/20 dark:hover:bg-[#52a388]/30 font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <ThemeSwitcher />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <ThemeSwitcher className="mr-4" />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 dark:text-gray-200 hover:text-[#52a388] dark:hover:text-[#52a388] focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden bg-[#f1ede7] dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="block px-4 py-3 rounded-md text-gray-800 dark:text-gray-200 hover:bg-[#52a388]/20 dark:hover:bg-[#52a388]/30 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Add padding to account for fixed navbar */}
      <div className="pt-16"></div>
    </>
  );
}