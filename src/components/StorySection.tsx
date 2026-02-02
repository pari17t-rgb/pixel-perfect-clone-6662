import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Calendar, MapPin, Star } from "lucide-react";

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    {
      icon: Sparkles,
      title: "The Beginning",
      date: "When it all started",
      description:
        "The moment our paths crossed was truly magical. Neither of us knew then that this chance encounter would blossom into one of the most meaningful friendships of our lives.",
    },
    {
      icon: Calendar,
      title: "Growing Together",
      date: "Through thick and thin",
      description:
        "We've shared countless laughs, supported each other through challenges, and celebrated every victory—big or small. Our friendship only grew stronger with time.",
    },
    {
      icon: MapPin,
      title: "Adventures Shared",
      date: "Making memories",
      description:
        "From spontaneous road trips to quiet coffee conversations, every moment spent together has been a treasure. These adventures have shaped who we are today.",
    },
    {
      icon: Star,
      title: "Forever Friends",
      date: "Now and always",
      description:
        "Distance may separate us at times, but our bond remains unbreakable. This friendship is a gift I cherish more than words could ever express.",
    },
  ];

  return (
    <section id="story" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Our Journey
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-6">
            The Story of Our Friendship
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every friendship has a story. Ours is filled with laughter, growth,
            and unconditional support.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {/* Milestones */}
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                className={`relative flex items-start gap-6 md:gap-12 mb-12 md:mb-16 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-6 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-6 z-10 ${
                    index % 2 === 0 ? "md:-translate-x-1/2" : "md:-translate-x-1/2"
                  }`}
                />

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-3rem)] letter-paper rounded-2xl p-6 md:p-8 ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <milestone.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {milestone.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {milestone.date}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
