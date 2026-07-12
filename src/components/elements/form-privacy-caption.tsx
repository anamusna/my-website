import React from "react";
import { Link } from "react-router-dom";
import { P } from "../../tailwind/components/elements/Typography";

const FormPrivacyCaption: React.FC = () => (
  <P
    size="sm"
    className="text-gray-500 dark:text-gray-400 text-center leading-relaxed"
  >
    The personal data you provide via this form is used to address your inquiry.{" "}
    <Link
      to="/privacy"
      className="text-royal-primary dark:text-royal-primary hover:underline font-medium"
    >
      Privacy notice
    </Link>
  </P>
);

export default FormPrivacyCaption;
