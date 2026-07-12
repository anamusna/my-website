import { SECTION_VARIANTS, SECTION_VIEWPORT } from "constants/section-motion";
import { home } from "data/home";
import { motion } from "motion/react";
import React, { memo } from "react";
import { personalInfo } from "data/personalInfo";

const HeroTerminal: React.FC = memo(() => {
  return (
    <motion.div
      variants={SECTION_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={SECTION_VIEWPORT}
      className="relative"
      aria-label="Terminal introduction"
    >
      <div className="relative bg-gray-100 dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden border border-light-border/55 dark:border-dark-border/40">
        <div className="bg-gray-200/80 dark:bg-gray-800/90 px-3 py-2 border-b border-gray-300/50 dark:border-gray-700/50 flex items-center justify-between">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </div>

          <div className="text-sm font-medium text-muted font-mono hidden sm:block">
            Terminal
          </div>

          <div className="hidden sm:block w-3" aria-hidden="true" />
        </div>

        <div className="bg-gray-900 dark:bg-black relative">
          <div className="p-4 font-mono text-sm leading-relaxed">
            <div className="flex items-start gap-2 mb-2">
              <span className="text-green-400 select-none" aria-hidden="true">
                ❯
              </span>
              <div className="flex-1">
                <span className="text-blue-400">{personalInfo.nickname}</span>
                <span className="text-gray-500">@</span>
                <span className="text-purple-400">portfolio</span>
                <span className="text-gray-500">$ </span>
                <span className="text-white">whoami</span>
              </div>
            </div>

            <div className="pl-4 mb-3 space-y-1">
              <div className="text-yellow-400 font-semibold">
                {personalInfo.name} ({personalInfo.nickname})
              </div>
              <div className="text-gray-400 leading-relaxed text-sm">
                {home.hero.bio}
              </div>
            </div>

            <div className="flex items-start gap-2" aria-hidden="true">
              <span className="text-green-400 select-none">❯</span>
              <div className="flex-1">
                <span className="text-blue-400">{personalInfo.nickname}</span>
                <span className="text-gray-500">@</span>
                <span className="text-purple-400">portfolio</span>
                <span className="text-gray-500">$ </span>
                <span className="text-green-400 motion-safe:animate-pulse">
                  _
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

HeroTerminal.displayName = "HeroTerminal";

export default HeroTerminal;
