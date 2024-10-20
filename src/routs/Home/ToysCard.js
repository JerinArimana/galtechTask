import Image from "next/image";

const ToysCard = ({ image, product_name, price }) => {
  return (
    <>
      <div className="toys_section__toys_card">
        <div className="toys_section__toys_image">
          <Image
            src={image}
            width={100}
            height={300}
            alt="Picture of the author"
          />
          <div className="toys_section__toys_hover">
            <button>Quick add</button>
          </div>
        </div>
        <div className="toys_section__toys_info">
          <h5>{product_name}</h5>
          <p>$ {price}</p>
        </div>
      </div>
    </>
  );
};

export default ToysCard;
