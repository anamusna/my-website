import { ComposerLayout } from "components/peek/composer/composer-layout";
import { registerPeekComposers } from "components/peek/samples/register-peek-composers";
import { SECTION_VARIANTS, SECTION_VIEWPORT } from "constants/section-motion";
import { motion } from "motion/react";
import React, { useEffect } from "react";
import CareerHighlights from "../components/sections/home/career-highlights";
import Hero from "../components/sections/home/hero";
import HomeIdentity from "../components/sections/home/home-identity";
import HowIWork from "../components/sections/home/how-i-work";
import RecentPosts from "../components/sections/home/recent-posts";
import HomeClosing from "../components/sections/home/home-closing";
import Services from "../components/sections/home/services";
import TechStack from "../components/sections/home/tech-stack";
import Testimonials from "../components/sections/home/testimonials";
import { personalInfo } from "../data/personalInfo";

const Home: React.FC = () => {
  useEffect(() => {
    registerPeekComposers();
  }, []);

  return (
    <ComposerLayout
      main={
        <div className="relative overflow-hidden md:overflow-visible">
          <div className="relative z-10">
            <section id="hero" className="relative">
              <Hero />
            </section>

            <motion.section
              id="who-i-am"
              className="relative scroll-mt-24 bg-light-background-alt dark:bg-dark-background-alt"
              variants={SECTION_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={SECTION_VIEWPORT}
            >
              <HomeIdentity />
            </motion.section>

            <motion.section
              id="career-highlights"
              className="relative scroll-mt-24"
              variants={SECTION_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={SECTION_VIEWPORT}
            >
              <CareerHighlights />
            </motion.section>

            <motion.section
              id="testimonials"
              className="relative scroll-mt-24 bg-light-background-alt dark:bg-dark-background-alt"
              variants={SECTION_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={SECTION_VIEWPORT}
            >
              <Testimonials />
            </motion.section>

            <motion.section
              id="how-i-work"
              className="relative scroll-mt-24"
              variants={SECTION_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={SECTION_VIEWPORT}
            >
              <HowIWork />
            </motion.section>

            <motion.section
              id="services"
              className="relative scroll-mt-24 bg-light-background-alt dark:bg-dark-background-alt"
              variants={SECTION_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={SECTION_VIEWPORT}
            >
              <Services />
            </motion.section>

            <motion.section
              id="tech-stack"
              className="relative scroll-mt-24"
              variants={SECTION_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={SECTION_VIEWPORT}
            >
              <TechStack skills={personalInfo.skills} />
            </motion.section>

            <motion.section
              id="recent-posts"
              className="relative scroll-mt-24 bg-light-background-alt dark:bg-dark-background-alt"
              variants={SECTION_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={SECTION_VIEWPORT}
            >
              <RecentPosts />
            </motion.section>

            <motion.section
              id="home-closing"
              className="relative scroll-mt-24"
              variants={SECTION_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={SECTION_VIEWPORT}
            >
              <HomeClosing />
            </motion.section>
          </div>
        </div>
      }
    />
  );
};

export default Home;
