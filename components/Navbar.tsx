'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Image
                            src="/logo.png"
                            alt="EVM Demo Platform Logo"
                            width={120}
                            height={40}
                            className="h-8 md:h-10 w-auto"
                            priority
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        <button
                            onClick={() => scrollToSection('services')}
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                        >
                            സേവനങ്ങൾ
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                        >
                            ബന്ധപ്പെടുക
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6 text-gray-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-700" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col gap-3">
                            <button
                                onClick={() => scrollToSection('services')}
                                className="text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors"
                            >
                                സേവനങ്ങൾ
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors"
                            >
                                ബന്ധപ്പെടുക
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
