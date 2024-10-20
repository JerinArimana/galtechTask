import Image from "next/image";
const CategoryCard = ({ title, image }) => {
  return (
    <>
      <div className="category__item">
        <div className="category__item_image">
          {" "}
          <Image
            src={image}
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
        <h4>{title}</h4>
      </div>
    </>
  );
};

export default CategoryCard;
