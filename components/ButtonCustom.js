const ButtonCustom = ({ btn_label, childern, ...props }) => {
  return (
    <>
      <button className="custom_btn" {...props}>
        {btn_label}
      </button>
    </>
  );
};

export default ButtonCustom;
