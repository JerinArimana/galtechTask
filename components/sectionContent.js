import ButtonCustom from "./ButtonCustom";

const SectionContent = ({ removeParag, label, title, text }) => {
  return (
    <>
      <div className="section_content">
        <label>{label}</label>
        <h2>{title}</h2>
        {removeParag ? null : <p>{text}</p>}
      </div>
    </>
  );
};

export default SectionContent;
