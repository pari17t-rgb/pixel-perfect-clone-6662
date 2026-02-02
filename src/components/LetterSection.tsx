import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Feather } from "lucide-react";

const LetterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="letter" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
            From My Heart
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-6">
            A Letter For You
          </h2>
        </motion.div>

        {/* Letter */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="letter-paper rounded-3xl p-8 md:p-12 lg:p-16 relative">
            {/* Decorative Corner */}
            <div className="absolute top-6 right-6 md:top-10 md:right-10">
              <Feather className="w-8 h-8 text-primary/30" />
            </div>

            {/* Letter Content */}
            <div className="handwritten text-foreground space-y-6 text-lg md:text-xl leading-relaxed">
              <p className="text-primary font-semibold text-xl md:text-2xl">
                My Dearest Friend,
              </p>

              <p>
                I've been wanting to write this letter for a long time. There are
                so many things I want to say, so many feelings I want to express,
                and I finally found the courage to put them into words.
              </p>

              <p>
                You came into my life when I least expected it, and since then,
                you've become one of the most important people in my world. You've
                seen me at my best and at my worst, and you've never judged me.
                You've celebrated my victories and held my hand through my
                struggles.
              </p>

              <p>
                I want you to know that your presence in my life is a gift I
                treasure every single day. The way you listen without judgment,
                the way you make me laugh until my stomach hurts, the way you
                believe in me even when I don't believe in myself—these are things
                I will never take for granted.
              </p>

              <p>
                Thank you for being you. Thank you for your patience, your
                kindness, and your unwavering support. Thank you for the late-night
                conversations, the spontaneous adventures, and the comfortable
                silences we share.
              </p>

              <p>
                No matter where life takes us, know that you will always have a
                special place in my heart. Our friendship is one of the greatest
                blessings of my life, and I promise to cherish it always.
              </p>

              <div className="pt-8 space-y-2">
                <p>With all my love and gratitude,</p>
                <p className="text-primary text-2xl md:text-3xl font-semibold">
                  Your Forever Friend
                </p>
              </div>
            </div>

            {/* Heart Decoration */}
            <motion.div
              className="flex justify-center mt-10"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-10 h-10 text-primary fill-primary" />
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-muted-foreground mb-6">
            Want to create a letter for your friend?
          </p>
          <button className="btn-primary">
            Create Your Own Letter
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default LetterSection;
