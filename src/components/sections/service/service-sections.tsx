import { LAYOUT_STYLES } from "data/heroData";
import { personalInfo } from "data/personalInfo";
import { motion } from "motion/react";
import React from "react";
import { SURFACE_CARD_ICON } from "../../../tailwind/styles/surfaceCard";
import { TEXT_BODY } from "../../../tailwind/styles/textTokens";

const spring = {
  type: "spring" as const,
  stiffness: 380,
  damping: 30,
  mass: 0.7,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: spring,
  },
};

interface ServiceSectionHeaderProps {
  title: string;
  icon: React.ReactNode;
}

const ServiceSectionHeader: React.FC<ServiceSectionHeaderProps> = ({
  title,
  icon,
}) => (
  <div className={LAYOUT_STYLES.SECTION_HEADER}>
    <div className={`${LAYOUT_STYLES.SECTION_ICON} ${SURFACE_CARD_ICON}`}>
      {icon}
    </div>
    <h2 className={`${LAYOUT_STYLES.SECTION_TITLE} text-heading`}>{title}</h2>
  </div>
);

type ServiceListCardProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  stepNumber?: number;
};

const ServiceListCard: React.FC<ServiceListCardProps> = ({
  children,
  icon,
  stepNumber,
}) => (
  <div
    className={`${LAYOUT_STYLES.CARD_PADDING} surface-card border border-light-border/55 dark:border-dark-border/40 rounded-lg`}
  >
    <div className="flex items-start gap-2 sm:gap-3">
      {stepNumber !== undefined ? (
        <div
          className={`w-7 h-7 sm:w-8 sm:h-8 ${SURFACE_CARD_ICON} flex items-center justify-center flex-shrink-0`}
        >
          <span className="text-sm font-bold text-heading">{stepNumber}</span>
        </div>
      ) : icon ? (
        <div
          className={`w-7 h-7 sm:w-8 sm:h-8 ${SURFACE_CARD_ICON} flex items-center justify-center flex-shrink-0`}
        >
          {icon}
        </div>
      ) : null}
      <div className={`flex-1 min-w-0 ${TEXT_BODY} leading-relaxed`}>
        {children}
      </div>
    </div>
  </div>
);

const checkIcon = (className: string) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

interface WhyItMattersProps {
  reasons: string[];
}

export const WhyItMattersSection: React.FC<WhyItMattersProps> = ({
  reasons,
}) => (
  <section className="relative">
    <ServiceSectionHeader
      title="Why It Matters"
      icon={checkIcon("w-4 h-4 text-amber-600 dark:text-amber-400")}
    />
    <motion.div
      className="space-y-2 sm:space-y-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {reasons.map((reason, index) => (
        <motion.div key={index} variants={itemVariants}>
          <ServiceListCard icon={checkIcon("w-4 h-4 text-amber-600 dark:text-amber-400")}>
            {reason}
          </ServiceListCard>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

interface HowItWorksProps {
  steps: string[];
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ steps }) => (
  <section className="relative">
    <ServiceSectionHeader
      title="How It Works"
      icon={
        <svg
          className="w-4 h-4 text-cyan-600 dark:text-cyan-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      }
    />
    <motion.div
      className="space-y-2 sm:space-y-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {steps.map((step, index) => (
        <motion.div key={index} variants={itemVariants}>
          <ServiceListCard stepNumber={index + 1}>{step}</ServiceListCard>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

interface SpecificationsProps {
  specifications: string[];
}

export const SpecificationsSection: React.FC<SpecificationsProps> = ({
  specifications,
}) => (
  <section className="relative">
    <ServiceSectionHeader
      title="What You Get"
      icon={
        <svg
          className="w-4 h-4 text-purple-600 dark:text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      }
    />
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {specifications.map((spec, index) => (
        <motion.div key={index} variants={itemVariants}>
          <ServiceListCard icon={checkIcon("w-4 h-4 text-purple-600 dark:text-purple-400")}>
            {spec}
          </ServiceListCard>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

interface ExpectedOutcomesProps {
  outcomes: string[];
}

export const ExpectedOutcomesSection: React.FC<ExpectedOutcomesProps> = ({
  outcomes,
}) => (
  <section className="relative">
    <ServiceSectionHeader
      title="Expected Results"
      icon={checkIcon("w-4 h-4 text-green-600 dark:text-green-400")}
    />
    <motion.div
      className="space-y-2 sm:space-y-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {outcomes.map((outcome, index) => (
        <motion.div key={index} variants={itemVariants}>
          <ServiceListCard icon={checkIcon("w-4 h-4 text-green-600 dark:text-green-400")}>
            {outcome}
          </ServiceListCard>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

interface ClientUseCaseProps {
  useCase: string;
}

export const ClientUseCaseSection: React.FC<ClientUseCaseProps> = ({
  useCase,
}) => (
  <section className="relative">
    <ServiceSectionHeader
      title="Real Client Example"
      icon={
        <svg
          className="w-4 h-4 text-indigo-600 dark:text-indigo-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      }
    />
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div
        className={`${LAYOUT_STYLES.CARD_PADDING} surface-card border border-light-border/55 dark:border-dark-border/40 rounded-lg`}
      >
        <p className={`${TEXT_BODY} leading-relaxed`}>{useCase}</p>
      </div>
    </motion.div>
  </section>
);

interface ToolsSectionProps {
  tools: string[];
}

export const ToolsSection: React.FC<ToolsSectionProps> = ({ tools }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
    className={`${LAYOUT_STYLES.CARD_PADDING} surface-card border border-light-border/55 dark:border-dark-border/40 rounded-lg`}
  >
    <div className={`flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3`}>
      <div className={`w-6 h-6 sm:w-7 sm:h-7 ${SURFACE_CARD_ICON}`}>
        <svg
          className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <h2 className={`${LAYOUT_STYLES.SECTION_TITLE} text-heading`}>
        Tools & Technologies
      </h2>
    </div>
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
      {tools.map((tool) => (
        <span
          key={tool}
          className="inline-flex items-center px-2 py-1 surface-card rounded text-sm font-medium border border-light-border/55 dark:border-dark-border/40 text-body"
        >
          {tool}
        </span>
      ))}
    </div>
  </motion.div>
);

interface CTASectionProps {
  serviceTitle: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ serviceTitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
    className={`${LAYOUT_STYLES.CARD_PADDING} surface-card border border-light-border/55 dark:border-dark-border/40 rounded-lg`}
  >
    <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
      <div className={`w-6 h-6 sm:w-7 sm:h-7 ${SURFACE_CARD_ICON}`}>
        <svg
          className="w-3.5 h-3.5 text-green-600 dark:text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </div>
      <h2 className={`${LAYOUT_STYLES.SECTION_TITLE} text-heading`}>
        Ready to Get Started?
      </h2>
    </div>
    <div className="space-y-2">
      <p className={TEXT_BODY}>
        Let's discuss how I can help you with {serviceTitle.toLowerCase()}.
      </p>
      <a
        href={`mailto:${personalInfo.contact.email}`}
        className="flex w-full items-center justify-center gap-2 min-h-[44px] px-3 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold text-sm transition-colors"
      >
        Get in Touch
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </a>
    </div>
  </motion.div>
);
