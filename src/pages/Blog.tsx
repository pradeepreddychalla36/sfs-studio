import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: "Top 10 Pre-Wedding Shoot Locations in Hyderabad for 2024",
    excerpt: "Looking for the perfect backdrop? From Chowmahalla Palace to Gandipet, discover Hyderabad's hidden gems.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    date: "May 10, 2024",
    author: "Pradeep Reddy"
  },
  {
    id: 2,
    title: "How to Choose the Perfect Wedding Photographer for Your Big Day",
    excerpt: "Everything you need to know about style, equipment, and chemistry when selecting your storyteller.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop",
    date: "April 25, 2024",
    author: "SFS Creative Team"
  },
  {
    id: 3,
    title: "The Ultimate Guide to Newborn Baby Photoshoot Concepts",
    excerpt: "From props to lighting, tips for capturing those adorable first moments with your little one.",
    image: "https://images.unsplash.com/photo-1544126592-807daa2b567b?q=80&w=2070&auto=format&fit=crop",
    date: "April 12, 2024",
    author: "SFS Studio"
  }
];

export default function Blog() {
  return (
    <div className="pt-32 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-primary font-display uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
            Insights & Guides
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
            The <span className="italic">Cinematic</span> Blog
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Planning, inspiration, and technical insights from the leading wedding photography studio in Hyderabad.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden mb-6 relative">
                <img
                  src={post.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={post.title}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-primary font-bold">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <User className="w-3 h-3" /> {post.author}
                  </span>
                </div>
                <h2 className="text-2xl font-serif font-bold group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-500 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="pt-4">
                  <button className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs border-b border-white/20 pb-2 group-hover:border-primary group-hover:text-primary transition-all">
                    Read Full Story <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
