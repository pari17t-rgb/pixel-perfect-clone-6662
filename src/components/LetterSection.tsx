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
                Dear Doboo,
              </p>

              <p>
                I’ve been wanting to say this properly, not in bits and pieces just 
                from my heart.Lately things have felt a little off between us and I 
                know a big reason for that is me.I got caught up in my own things and 
                somewhere in that you felt unseen. And that hurts me,because the last 
                thing I would ever want is for you to feel like you don’t matter to me 
                because you matter so, so much Doboo.
              </p>

              <p>
                You came into my life when I least expected it and since then
                you've become one of the most important people in my life. You've
                seen me at my best and at my worst and you've never judged me.
              </p>

              <p>
                You’ve always been there for me through my overthinking, my crying, 
                my gussa, my random moods and I hate the thought that I made you feel 
                like I wasn’t there when you needed me rajaa. I’m really sorry for that. 
                Not a casual sorry, but a real one. I should’ve shown you better, not 
                just felt it.
              </p>

              <p>
                You’re not just someone I talk to you’re my safe place, the person I 
                trust without thinking twice. Even when life gets busy or things get messy,
                you’re still my person Sohamm. That hasn’t changed n it won’t.
              </p>

              <p>
                If I ever made you feel like you were taken for granted please know 
                that was never my intention. I value you more than I probably show sometimes
                and I’m learning to do better not just say it, but prove it.
              </p>

              <p>
                Thank you for being patient with me. Thank you for staying, even when things 
                felt weird. And thank you for being you the one who irritates me, supports 
                me, pushes me, and somehow still makes everything feel goodd.
                I don’t want perfect. I just want us with a lot more of those good moments.
              </p>

              <p>
                You matter to me. A lot. Always have. Always will.
              </p>

              <div className="pt-8 space-y-2">
                <p>With lots of love (and a promise💫 to be more present),</p>
                <p className="text-primary text-2xl md:text-3xl font-semibold">
                  Your Dumbo🫂❤️
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
