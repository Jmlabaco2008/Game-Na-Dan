import { Facebook, Youtube, Heart } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black/80 border-t border-white/10 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-2xl text-white mb-2">GAME NA DAN</h3>
            <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
              A gaming brand and community built for fun, creativity, and connection.
            </p>
          </div>
          
          {/* Socials */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-6">
              <a 
                href="https://www.facebook.com/share/16syorLvex/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 hover:scale-110 transition-all duration-300"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://discord.com/invite/XmxuAKHpz3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-500 hover:scale-110 transition-all duration-300"
              >
                <FaDiscord size={24} />
              </a>
              <a 
                href="https://youtube.com/@gamenadanofficialyt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 hover:scale-110 transition-all duration-300"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
          
          {/* Credits */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end gap-1">
              Made with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> by 
              <a 
                href="https://www.facebook.com/share/16vnK5uava/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-white hover:underline transition-colors ml-1"
              >
                Mart John Labaco
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 mt-8">
          <p className="text-center text-xs text-gray-600 leading-relaxed max-w-3xl mx-auto">
            <span className="font-bold text-gray-500 block mb-1">Copyright Disclaimer:</span>
            All content, images, logos, and designs on this website are the property of Game Na Dan unless otherwise stated.
            Any unauthorized use, reproduction, or redistribution of materials is strictly prohibited.
          </p>
          <p className="text-center text-xs text-gray-700 mt-4">
            © {new Date().getFullYear()} Game Na Dan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
