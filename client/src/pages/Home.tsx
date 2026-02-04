import { useState } from "react";
import { IntroAnimation } from "@/components/IntroAnimation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PortfolioCard } from "@/components/PortfolioCard";
import { usePortfolio } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Play } from "lucide-react";
import { FaDiscord, FaFacebook } from "react-icons/fa";

// Assets
import heroBg from "@assets/Screenshot_2026-02-04-22-18-27-13_a23b203fd3aafc6dcb84e438dda6_1770217270851.jpg";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const { data: portfolioItems, isLoading } = usePortfolio();

  // Mock data if API is empty
  const mockItems = [
    {
      id: 1,
      title: "Epic Gaming Highlights",
      description: "Best moments from our recent community tournaments and streams. High octane action and unforgettable plays.",
      category: "Gaming Content",
      imageUrl: "",
      link: "#"
    },
    {
      id: 2,
      title: "Community Tournament 2025",
      description: "Bringing players together for a massive showdown. Over 500 participants battling for the championship title.",
      category: "Community Project",
      imageUrl: "",
      link: "#"
    },
    {
      id: 3,
      title: "Brand Identity Design",
      description: "The evolution of the Game Na Dan visual language. From logo concepts to final stream overlays.",
      category: "Creative Identity",
      imageUrl: "",
      link: "#"
    }
  ];

  const items = (portfolioItems && portfolioItems.length > 0) ? portfolioItems : mockItems;

  if (!introComplete) {
    return <IntroAnimation onComplete={() => setIntroComplete(true)} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Gaming Setup Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
          <div className="absolute inset-0 bg-purple-900/10 mix-blend-overlay" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-secondary font-display font-semibold tracking-[0.2em] text-sm md:text-base mb-4 uppercase">
              Welcome to the Arena
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-extrabold text-white mb-6 text-shadow-neon tracking-tight">
              GAME NA DAN
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 font-light mb-8 max-w-3xl mx-auto font-sans">
              "Super Fun of Game na Dan"
            </p>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              A gaming brand and community built for fun, creativity, and connection.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://discord.com/invite/XmxuAKHpz3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded bg-primary text-white font-bold tracking-wide uppercase shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaDiscord className="text-xl" /> Join Discord
              </a>
              <a
                href="https://www.facebook.com/share/16syorLvex/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded bg-blue-600/20 border border-blue-500/50 text-blue-100 font-bold tracking-wide uppercase hover:bg-blue-600 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaFacebook className="text-xl" /> Visit Facebook
              </a>
              <a
                href="https://youtube.com/@gamenadanofficialyt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded bg-red-600/20 border border-red-500/50 text-red-100 font-bold tracking-wide uppercase hover:bg-red-600 hover:border-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play className="text-xl fill-current" /> Watch Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-background relative overflow-hidden">
        {/* Decor elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                MORE THAN JUST <span className="text-primary text-shadow-neon">GAMING</span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Game Na Dan is not just an event page—it's a lifestyle. We are a dedicated gaming brand focused on creating high-quality content and fostering a welcoming community for gamers of all levels.
                </p>
                <p>
                  Our mission is to bring people together through the shared love of video games, creativity, and digital entertainment. Whether you're a casual player or a hardcore enthusiast, there's a place for you here.
                </p>
                <div className="pt-4 flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-3xl font-display font-bold text-white">10K+</span>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">Community Members</span>
                  </div>
                  <div className="w-px h-12 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-3xl font-display font-bold text-white">24/7</span>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">Gaming Vibes</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-20 transform rotate-3" />
              <div className="relative bg-card border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
                <h3 className="font-display font-bold text-2xl text-white mb-4">Our Core Values</h3>
                <ul className="space-y-4">
                  {['Community First', 'Creative Freedom', 'Inclusive Gaming', 'Pure Entertainment'].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center mr-4 text-primary">
                        <ArrowRight size={16} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 bg-black/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              OUR <span className="text-secondary text-shadow-neon-blue">PORTFOLIO</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Showcasing the brand, the content, and the community projects that define Game Na Dan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Loading skeletons
              Array(3).fill(0).map((_, i) => (
                <div key={i} className="bg-card rounded-xl h-96 animate-pulse" />
              ))
            ) : (
              items.map((item, index) => (
                // @ts-ignore - mock items match schema structure roughly
                <PortfolioCard key={item.id} item={item} index={index} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* SOCIAL SECTION */}
      <section id="social" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-white/10 rounded-3xl p-8 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
              JOIN THE <span className="text-primary">MOVEMENT</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a
                href="https://www.facebook.com/share/16syorLvex/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#1877F2]/10 border border-[#1877F2]/30 hover:bg-[#1877F2] p-8 rounded-xl transition-all duration-300 flex flex-col items-center gap-4 hover:-translate-y-2"
              >
                <FaFacebook size={40} className="text-[#1877F2] group-hover:text-white transition-colors" />
                <span className="font-display font-bold text-xl text-white">Facebook</span>
                <span className="text-xs text-gray-400 group-hover:text-white/80 uppercase tracking-widest">Follow Updates</span>
              </a>

              <a
                href="https://discord.com/invite/XmxuAKHpz3"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#5865F2]/10 border border-[#5865F2]/30 hover:bg-[#5865F2] p-8 rounded-xl transition-all duration-300 flex flex-col items-center gap-4 hover:-translate-y-2 shadow-lg shadow-[#5865F2]/10"
              >
                <FaDiscord size={40} className="text-[#5865F2] group-hover:text-white transition-colors" />
                <span className="font-display font-bold text-xl text-white">Discord</span>
                <span className="text-xs text-gray-400 group-hover:text-white/80 uppercase tracking-widest">Join Community</span>
              </a>

              <a
                href="https://youtube.com/@gamenadanofficialyt"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#FF0000]/10 border border-[#FF0000]/30 hover:bg-[#FF0000] p-8 rounded-xl transition-all duration-300 flex flex-col items-center gap-4 hover:-translate-y-2"
              >
                <Play size={40} className="text-[#FF0000] fill-[#FF0000] group-hover:text-white group-hover:fill-white transition-colors" />
                <span className="font-display font-bold text-xl text-white">YouTube</span>
                <span className="text-xs text-gray-400 group-hover:text-white/80 uppercase tracking-widest">Watch Content</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
            CONTACT GAME NA DAN
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Have inquiries, partnership proposals, or just want to say hello? 
            Reach out to us directly via email.
          </p>
          
          <a 
            href="mailto:gamenadaaaaan@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-5 bg-card border border-white/10 rounded-xl text-white font-semibold hover:border-primary hover:text-primary hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 text-lg group"
          >
            <Mail className="group-hover:animate-bounce" />
            gamenadaaaaan@gmail.com
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
