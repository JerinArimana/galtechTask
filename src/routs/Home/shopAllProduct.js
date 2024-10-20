import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionContent from "../../../components/sectionContent";
import ButtonCustom from "../../../components/ButtonCustom";
import Image from "next/image";
import ToysCard from "./ToysCard";
const ShopAllProduct = () => {
  const toysInfo = [
    {
      id: "1",
      image: "/images/bottile.png",
      product_name: "name",
      price: 50,
    },
    {
      id: "1",
      image: "/images/bottile.png",
      product_name: "name",
      price: 50,
    },
    {
      id: "1",
      image: "/images/bottile.png",
      product_name: "name",
      price: 50,
    },
    {
      id: "1",
      image: "/images/bottile.png",
      product_name: "name",
      price: 50,
    },
  ];
  return (
    <>
      <section className="toys_section second_toys">
        <Container>
          <Row>
            <Col>
              <div className="toys_section__header">
                <SectionContent
                  label={"Lorem Ipsum In"}
                  title={"Toys for everyone to enjoy"}
                />
              </div>
            </Col>
          </Row>
          <Row>
            {toysInfo.map((data) => (
              <Col xs={6} sm={6} md={6} lg={3}>
                <ToysCard
                  image={data.image}
                  product_name={data.product_name}
                  price={data.price}
                />
              </Col>
            ))}
            <div className="second_toys__btn">
              <ButtonCustom btn_label={"Discover more"} />
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ShopAllProduct;
