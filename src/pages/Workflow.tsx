import React, { useContext, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useSlideAnimation } from "../components/Sliders";
import { ThemeContext } from "../ThemeContext";

const FetchPoints = ({ skill }: any) => {
  const { t } = useTranslation();
  const { theme, setTheme } = useContext<any>(ThemeContext);
  //console.log("DeFAULTTHEME#", theme);
  const isDarkTheme = !!(theme === "dark");
  const textColor = isDarkTheme ? "text-white" : "text-black";

  if (!skill || !skill.points) {
    return null;
  }

  return (
    <>
      {skill.points.map((point: any, pointIndex: any) => (
        <div key={`${skill.name}-${pointIndex}`} className="">
          <h3 className={textColor}>{point.title}</h3>
          <h4 className={textColor}>{point.explanation}</h4>
          <p className={textColor}>
            <strong className="text-underline">Situation: </strong>
            {t(point.example.Situation)}
          </p>
          <p className={textColor}>
            <strong className="text-underline">Task: </strong>
            {t(point.example.Task)}
          </p>
          <p className={textColor}>
            <strong className="text-underline">Action: </strong>{" "}
            {t(point.example.Action)}
          </p>
          <p className={textColor}>
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
  const { theme, setTheme } = useContext<any>(ThemeContext);

  const isDarkTheme = !!(theme === "dark");
  const backgroundColor = isDarkTheme ? "bg-black" : "bg-white";
  const textColor = isDarkTheme ? "text-white" : "text-black";
  const labelColor = isDarkTheme ? "text-white" : "text-dark";

  const fetchSkillItem = (skill: any, index: any) => {
    const sanitizedSkillName = skill?.name.replace(/[^a-zA-Z0-9-_]/g, "");

    const collapseId = `collapse-${sanitizedSkillName}-${index}`;
    const headingId = `heading-${sanitizedSkillName}-${index}`;

    return (
      <div
        key={`${skill?.name}-${index}`}
        className={`mb-4 accordion-item rounded-5 box-shadow-xl ${backgroundColor}`}
      >
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
          <div className={`accordion-body rounded-5 ${backgroundColor}`}>
            <p className={labelColor}>{t(skill.introduction)}</p>
            {skill?.text &&
              skill?.text.map((text: any) => (
                <p className={textColor} key={text}>
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
        <label className={`fw-boldest ${labelColor}`}>{technology.title}</label>
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
      <div className="mt-4">
        <h2 className="text-primary">Technologies</h2>
      </div>
      {renderTechnologies()}
    </div>
  );
};

const Skills = ({ technologies }: { technologies: any[] }) => {
  const { t } = useTranslation();

  const { theme, setTheme } = useContext<any>(ThemeContext);
  //console.log("DeFAULTTHEME#", theme);
  const isDarkTheme = !!(theme === "dark");
  const backgroundColor = isDarkTheme ? "bg-black" : "bg-white";
  const textColor = isDarkTheme ? "text-white" : "text-black";

  return (
    <div className="row col-12 mx-auto d-flex mb-4 pt-5">
      <div className="mt-4">
        <h2 className={textColor}>Skills</h2>
      </div>
      <div className="d-flex flex-wrap mb-2 gap-2 accordion accordion-flush">
        {technologies.map((skill, index) => {
          return (
            <div
              key={skill.name}
              className={`mb-4 accordion-item rounded-5 box-shadow-xl ${backgroundColor}`}
            >
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
                <div
                  key={index}
                  className={`accordion-body rounded-5 ${backgroundColor}`}
                >
                  <p className={textColor}>{t(skill.introduction)}</p>

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
  const { theme, setTheme } = useContext<any>(ThemeContext);
  //console.log("DeFAULTTHEME#", theme);
  const isDarkTheme = !!(theme === "dark");
  const backgroundColor = isDarkTheme ? "bg-black" : "bg-white";
  const textColor = isDarkTheme ? "text-white" : "text-black";

  return (
    <div className="hero-holder mt-5">
      <div className="accordion accordion-flush row" id="skill">
        <div className="mt-4">
          <h2 className={textColor}>Situations</h2>
        </div>
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              className={`mb-4 accordion-item rounded-5 box-shadow-xl ${backgroundColor}`}
            >
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
                <div
                  key={index}
                  className={`accordion-body rounded-5 ${backgroundColor}`}
                >
                 {skill.text.map((value: any)=> (
                   <p className={textColor}>{t(value)}</p>
                 ))}
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

  const { theme, setTheme } = useContext<any>(ThemeContext);
  //console.log("DeFAULTTHEME#", theme);
  const isDarkTheme = !!(theme === "dark");
 const backgroundColor = isDarkTheme ? "bg-black" : "bg-white";

  return (
    <div className={`page-contact mt-5 position-relative ${backgroundColor}`}>
      <div className="container hero-container pt-4 mt-md-5">
        <Technologies technologies={technologies} />
        <Skills technologies={skillData} />
        <Situation skills={skills} />
      </div>
    </div>
  );
};

export default Flow;
