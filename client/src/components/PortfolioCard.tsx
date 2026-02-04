import { motion } from "framer-motion";
import { type PortfolioItem } from "@shared/schema";

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

export function PortfolioCard({ item, index }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-card rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 shadow-lg hover:box-shadow-neon"
    >
      <div className="aspect-video relative overflow-hidden bg-muted">
        {/* Placeholder image logic since we don't have dynamic images yet */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            {item.imageUrl ? (
                <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            ) : (
                <span className="text-6xl opacity-20 font-display font-bold uppercase">{item.category[0]}</span>
            )}
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
        
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full text-xs font-semibold text-primary-foreground uppercase tracking-wider">
            {item.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-2">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {item.description}
        </p>
        
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-semibold text-secondary hover:text-white transition-colors"
          >
            View Project <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
