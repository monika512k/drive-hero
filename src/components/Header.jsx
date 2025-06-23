import React, { useState } from 'react';
import logo from "../assets/logo.png"; // Adjust the path as necessary
import { Menu, X } from 'lucide-react';

export const HeaderCom = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    return (
        <header className="relative flex items-center justify-between px-6 py-4 bg-white shadow-sm">
            <div className="flex items-center space-x-2">
                <img src={logo} alt="DriveHero Logo" className="h-8" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Fallstudien</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Investor Relations</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Karriere</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">News & Insights</a>
                <div className="flex items-center space-x-2">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='18' viewBox='0 0 24 18'%3E%3Cpath fill='%23000' d='M0 0h8v6H0zm0 12h8v6H0zm8-12h8v6H8zm0 12h8v6H8zm8-12h8v6h-8zm0 12h8v6h-8z'/%3E%3Cpath fill='%23ff0' d='M0 6h8v6H0zm8 0h8v6H8zm8 0h8v6h-8z'/%3E%3C/svg%3E" alt="German flag" className="w-6 h-4" />
                    <span className="text-sm text-gray-600">DE</span>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                    Login
                </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
            >
                {isMobileMenuOpen ? (
                    <X className="w-6 h-6 text-gray-600" />
                ) : (
                    <Menu className="w-6 h-6 text-gray-600" />
                )}
            </button>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 md:hidden z-50">
                    <nav className="flex flex-col p-4 space-y-4">
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">Fallstudien</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">Investor Relations</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">Karriere</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">News & Insights</a>
                        <div className="flex items-center space-x-2 py-2">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='18' viewBox='0 0 24 18'%3E%3Cpath fill='%23000' d='M0 0h8v6H0zm0 12h8v6H0zm8-12h8v6H8zm0 12h8v6H8zm8-12h8v6h-8zm0 12h8v6h-8z'/%3E%3Cpath fill='%23ff0' d='M0 6h8v6H0zm8 0h8v6H8zm8 0h8v6h-8z'/%3E%3C/svg%3E" alt="German flag" className="w-6 h-4" />
                            <span className="text-sm text-gray-600">DE</span>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors w-full">
                            Login
                        </button>
                    </nav>
                </div>
            )}
        </header>
    )

}

