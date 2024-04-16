import React, { useEffect, useRef, useState } from "react";

const useHeaderBackgroundChange = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [bodyHeight, setBodyHeight] = useState(0);

  useEffect(() => {
    const divElement = divRef.current;
    const headerElement = headRef.current;
    const scrollPosition = window.scrollY;
    const scrollThreshold = window.innerHeight;
    
    const handleScroll = () => {
      const onScrollOptions = {
        threshold: 0.5,
        //rootMargin: "0px 0px -100px 0px",
      };
    
   /*    if (scrollPosition >= 80) {
        setIsScrolled(true)
    } else {
      setIsScrolled(false)
    } */

      const onScrollObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              setIsScrolled(false)
              entry.target.classList.remove("body-scrolled");
              observer.observe(entry.target);
              console.log("HEADNOT#:", entry.target, );
            } else {
              console.log("HEADISINTERSECTING#:", entry.target, );
              setIsScrolled(true)
              entry.target.classList.add("body-scrolled");
              observer.unobserve(entry.target);
            }
            //setIsScrolled(scrollPosition >= scrollThreshold);
          });
        },
        onScrollOptions
      );

      const onHeaderScrollObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              setIsScrolled(false)
              entry.target.classList.remove("header-scrolled");
              observer.observe(entry.target);
              console.log("HEADNOT#:", entry.target, );
            } else {
              console.log("HEADISINTERSECTING#:", entry.target, );
              setIsScrolled(true)
              entry.target.classList.add("header-scrolled");
              observer.unobserve(entry.target);
            }
          });
        },
        onScrollOptions
      );
    
      if (divElement) {
        const { height } = divElement.getBoundingClientRect();
    
        console.log("divElementXXXXHeight#:", height);

        onScrollObserver.observe(divElement);
      }

  /*     if (headerElement) {
        const { height } = headerElement.getBoundingClientRect();
    
        console.log("XXXXheaderElementHeight#:", height);

        onHeaderScrollObserver.observe(headerElement);
      }  */
    
    };

    handleScroll();

    window.addEventListener('scroll', () => {
      console.log('User scrolled ????');
    })
   // window.addEventListener("scroll", handleScroll);

   /*  return () => {
      window.removeEventListener("scroll", handleScroll);
    }; */

  }, []);

  return [divRef, isScrolled, headRef] as const;
};

export default useHeaderBackgroundChange;
