import gsap from "gsap";
import {useRef } from "react";

const SlideContent: React.FC<{ title: number; descriprion: string }> = ({
  title,
  descriprion,
}) => {
  const slideContent = useRef<HTMLHeadingElement>(null);

    gsap.fromTo(
      slideContent.current,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, ease: "power2.out", duration:1 }
    );

  return (
    <div className="historySlider__slideContent" ref={slideContent}>
      <h3 className="historySlider__slideContent-title">{title}</h3>
      <p className="historySlider__slideContent-info">{descriprion}</p>
    </div>
  );
};

export default SlideContent;
