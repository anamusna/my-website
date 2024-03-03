import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        '',
        500, 
        'Ansumana',
        300,
        'Ansumana Darboe',
        1000,
      ]}
      className="header-brand-text align-self-end align-self-md-center text-uppercase fw-bolder"
      wrapper="p"
      cursor={false}
      speed={40}
      repeat={0}
    />
  );
};

export default TypingAnimation;
