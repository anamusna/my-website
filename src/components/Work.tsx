import { faCircle, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const Work = () => {
  const { t } = useTranslation();

  return (
    <div className="work px-md-4 d-flex gap-4 justify-content-center align-items-center mx-auto">
      <div className="text-md-start bg-success-1 badge rounded-4 mb-4 mb-md-0">
        <span className="polygon">
          <FontAwesomeIcon icon={faCircle} className="" fixedWidth />
        </span>
        <label className="badge-label text-success">{t("home.work")}</label>
      </div>
      <div className="location-text text-gray text-start mb-4 mb-md-0">
        <FontAwesomeIcon
          icon={faLocationDot}
          className="text-danger"
          fixedWidth
        />
        {t("home.location")}
      </div>
    </div>
  );
};

export default Work;
