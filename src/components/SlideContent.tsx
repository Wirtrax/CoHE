const SlideContent: React.FC<{ title: number; descriprion: string }> = ({
  title,
  descriprion,
}) => {
  return (
    <div className="historySlider__slideContent">
      <h3 className="historySlider__slideContent-title">{title}</h3>
      <p className="historySlider__slideContent-info">{descriprion}</p>
    </div>
  );
};

export default SlideContent;

