import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import cityImg from "../assets/city.jpg";
import heroImg from "../assets/hero.png";

export default function WelcomePage() {
  const { scrollY } = useScroll();
  const yCity = useTransform(scrollY, [0, 300], [0, -100], { clamp: false });
  const opacityCity = useTransform(scrollY, [0, 300, 500], [1, 0.5, 0]);
  const yHero = useTransform(scrollY, [0, 300], [0, -100], { clamp: false });
  const opacityHero = useTransform(scrollY, [0, 300, 500], [1, 0.5, 0]);
  const yText = useTransform(scrollY, [0, 300, 500], [0, 50, 350]);
  const scaleText = useTransform(scrollY, [0, 300], [1, 1.5]);
  return (
    <>
      <header id="welcome-header">
        <motion.div
          style={{ scale: scaleText, y: yText }}
          id="welcome-header-content"
        >
          <h1
            initial={{ translateY: " -100%", opacity: 0 }}
            animate={{ translateY: "0%", opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Ready for a challenge?
          </h1>
          <Link id="cta-link" to="/challenges">
            Get Started
          </Link>
        </motion.div>
        <motion.img
          style={{ opacity: opacityCity, y: yCity }}
          src={cityImg}
          alt="A city skyline touched by sunlight"
          id="city-image"
        />
        <motion.img
          style={{ opacity: opacityHero, y: yHero }}
          src={heroImg}
          alt="A superhero wearing a cape"
          id="hero-image"
        />
      </header>
      <main id="welcome-content">
        <motion.section
          initial={{ opacity: 0, x: -30 }}
          transition={{ delay: 0.2 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <motion.h2>There&apos;s never been a better time.</motion.h2>
          <p>
            With our platform, you can set, track, and conquer challenges at
            your own pace. Whether it&apos;s personal growth, professional
            achievements, or just for fun, we&apos;ve got you covered.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: -30 }}
          transition={{ delay: 0.2 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2>Why Challenge Yourself?</h2>
          <p>
            Challenges provide a framework for growth. They push boundaries,
            test limits, and result in genuine progress. Here, we believe
            everyone has untapped potential, waiting to be unlocked.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: -30 }}
          transition={{ delay: 0.2 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2>Features</h2>
          <ul>
            <li>Custom challenge creation: Set the rules, define your pace.</li>
            <li>
              Track your progress: See your growth over time with our analytics
              tools.
            </li>
            <li>
              Community Support: Join our community and get motivated by peers.
            </li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: -30 }}
          transition={{ delay: 0.2 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2>Join Thousands Embracing The Challenge</h2>
          <p>
            “I never realized what I was capable of until I set my first
            challenge here. It&apos;s been a transformative experience!” - Alex
            P.
          </p>
          {/* You can add more testimonials or even a carousel for multiple testimonials */}
        </motion.section>
      </main>
    </>
  );
}
