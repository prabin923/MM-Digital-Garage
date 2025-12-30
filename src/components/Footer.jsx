import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2">MM Digital Garage</h3>
                        <p className="text-gray-400">Driving digital excellence since 2019</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/company/109477274/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com/mmdigitalgarage1/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100090076563092" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                            <Facebook className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} MM Digital Garage. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
