import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            return localStorage.getItem('theme') || 'light';
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img src={logo} alt="MM Digital Garage Logo" className="w-10 h-10 object-contain" />
                    <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                        MM Digital Garage
                    </h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        <li><a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors">Home</a></li>
                        <li><a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors">Services</a></li>
                        <li><a href="#scoreboard" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors">Results</a></li>
                        <li><a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors">About</a></li>
                        <li><a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors">Contact</a></li>
                    </ul>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <button
                        className="p-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-t border-gray-100 dark:border-gray-800 py-4 px-4 flex flex-col gap-4">
                    <a href="#home" onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium">Home</a>
                    <a href="#services" onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium">Services</a>
                    <a href="#scoreboard" onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium">Results</a>
                    <a href="#about" onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium">About</a>
                    <a href="#contact" onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
