const SustainableCard = ({ svg, title, text }) => {
  return (
    <>
      <div className="sustainable__card">
        <span>{svg}</span>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default SustainableCard;
