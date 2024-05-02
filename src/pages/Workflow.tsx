import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useSlideAnimation } from "../components/Sliders";

const FetchPoints = ({ skill }: any) => {
  const { t } = useTranslation();

  if (!skill || !skill.points) {
    return null;
  }

  
  return (
    <>
      {skill.points.map((point: any, pointIndex: any) => (
        <div key={`${skill.name}-${pointIndex}`} className="">
          <h3>{point.title}</h3>
          <h4>{point.explanation}</h4>
          <p className="">
            <strong className="text-underline">Situation: </strong>
            {t(point.example.Situation)}
          </p>
          <p className="">
            <strong className="text-underline">Task: </strong>
            {t(point.example.Task)}
          </p>
          <p className="">
            <strong className="text-underline">Action: </strong>{" "}
            {t(point.example.Action)}
          </p>
          <p className="">
            <strong className="text-underline">Result: </strong>{" "}
            {t(point.example.Result)}
          </p>
        </div>
      ))}
    </>
  );
};

const useTechnologies = (technologies: any[]) => {
  const { t } = useTranslation();

  const fetchSkillItem = (skill: any, index: any) => {
    const sanitizedSkillName = skill?.name.replace(/[^a-zA-Z0-9-_]/g, "");

    const collapseId = `collapse-${sanitizedSkillName}-${index}`;
    const headingId = `heading-${sanitizedSkillName}-${index}`;

    return (
      <div key={`${skill?.name}-${index}`} className="accordion-item border-0">
        <h3 className="accordion-header" id={headingId}>
          <button
            key={index}
            className="h3 accordion-button collapsed text-start"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${collapseId}`}
            aria-expanded="false"
            aria-controls={collapseId}
          >
            {t(skill.name)}
          </button>
        </h3>
        <div
          id={collapseId}
          className="accordion-collapse collapse shadow rounded-4 mb-4"
          aria-labelledby={headingId}
          data-bs-parent={`#${headingId}`}
        >
          <div className="accordion-body">
            <p className="text-gray">{t(skill.introduction)}</p>
            {skill?.text &&
              skill?.text.map((text: any) => (
                <p className="" key={text}>
                  {t(text)}
                </p>
              ))}
            <FetchPoints skill={skill} />
          </div>
        </div>
      </div>
    );
  };

  const renderTechnologies = () => {
    if (!technologies) return null;
    return technologies?.map((technology, index) => (
      <div className="" key={`${technology.title}-${index}`}>
        <label className="fw-boldest">{technology.title}</label>
        <div className="d-flex flex-wrap mb-2 gap-2 accordion accordion-flush">
          {technology?.tools.map((skill: any, skillIndex: number) =>
            fetchSkillItem(skill, skillIndex)
          )}
        </div>
      </div>
    ));
  };

  return { renderTechnologies };
};

const Technologies = ({ technologies }: { technologies: any[] }) => {
  const { renderTechnologies } = useTechnologies(technologies);

  return (
    <div className="row col-12 mx-auto d-flex mb-4 pt-5">
      {renderTechnologies()}
    </div>
  );
};

const Skills = ({ technologies }: { technologies: any[] }) => {
  const { t } = useTranslation();

  return (
    <div className="row col-12 mx-auto d-flex mb-4 pt-5">
      <div className="d-flex flex-wrap mb-2 gap-2 accordion accordion-flush">
        {technologies.map((skill, index) => {
          return (
            <div key={skill.name} className="accordion-item border-0">
              <h3 className="accordion-header" id={`heading${index}`}>
                <button
                  key={index}
                  className="h3 accordion-button collapsed text-start"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {index + 1}: {skill.name}
                </button>
              </h3>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse shadow rounded-4 mb-4"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#skill"
              >
                <div key={index} className="accordion-body">
                  <p className="">{t(skill.introduction)}</p>

                  <FetchPoints skill={skill} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Situation = ({ skills }: { skills: any[] }) => {
  const { t } = useTranslation();
  const slideRef = useRef<HTMLDivElement>(null);

  useSlideAnimation(slideRef, "bottom");

  return (
    <div className="hero-holder mt-5">
      <div className="accordion accordion-flush row" id="skill">
        <div className="mt-4">
          <h2>Situations</h2>
        </div>
        {skills.map((skill, index) => {
          return (
            <div key={index} className="accordion-item border-0">
              <h3 className="accordion-header" id={`heading${index}`}>
                <button
                  key={index}
                  className="h3 accordion-button collapsed text-start"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {index + 1}: {skill.skill}
                </button>
              </h3>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse shadow rounded-4 mb-4"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#skill"
              >
                <div key={index} className="accordion-body">
                  <p className="">{t(skill.text)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Flow = () => {
  const { t } = useTranslation();
  const technologies: any[] = t("technologies", { returnObjects: true });
  const skills: any[] = t("about.skills", { returnObjects: true });
  const skillData: any[] = t("skills", { returnObjects: true });

  return (
    <div className="page-contact mt-7 position-relative">
      <div className="container hero-container pt-4 mt-md-5">
        <Technologies technologies={technologies} />
        <Skills technologies={skillData} />
        <Situation skills={skills} />
      </div>
    </div>
  );
};

export default Flow;
