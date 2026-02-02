import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Heart } from "lucide-react";

const MemoriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const memories = [
    {
      title: "Summer Adventures",
      description: "That unforgettable summer we spent exploring new places together.",
      color: "from-primary/20 to-accent/20",
    },
    {
      title: "Late Night Talks",
      description: "Hours of deep conversations that brought us closer than ever.",
      color: "from-accent/20 to-primary/20",
    },
    {
      title: "Celebrations",
      description: "Every birthday, achievement, and milestone we've celebrated together.",
      color: "from-secondary to-muted",
    },
    {
      title: "Tough Times",
      description: "The moments we held each other up when everything seemed impossible.",
      color: "from-muted to-secondary",
    },
    {
      title: "Random Fun",
      description: "Spontaneous adventures and inside jokes only we understand.",
      color: "from-primary/15 to-secondary",
    },
    {
      title: "Future Dreams",
      description: "All the plans we've made and the dreams we share together.",
      color: "from-accent/15 to-primary/15",
    },
  ];

  return (
    <section id="memories" className="py-24 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Cherished Moments
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Our Favorite Memories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A collection of precious moments that have defined our friendship and
            filled our hearts with joy.
          </p>
        </motion.div>

        {/* Memories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.title}
              className="memory-card group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
             {/* Image */}
<div
  className={`aspect-[4/3] bg-gradient-to-br ${memory.color} relative overflow-hidden`}
>
  <img
    src={memory.image} // or "/images/photo.jpg"
    alt="Memory"
    className="w-full h-full object-cover"
  />
</div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 fill-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {memory.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {memory.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <blockquote className="letter-paper inline-block px-8 py-6 md:px-12 md:py-8 rounded-2xl max-w-3xl">
            <p className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed">
              "True friendship isn't about being inseparable—it's about being
              separated and nothing changes."
            </p>
            <footer className="mt-4 text-muted-foreground text-sm">
              — Unknown
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default MemoriesSection;
