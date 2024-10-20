import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryCard from "./categoryCard";
import SectionContent from "../../../components/sectionContent";

const ShopByCategory = () => {
  const categoryInfo = [
    {
      id: "1",
      title: "Bath & Baby Care",
      image: "/images/bath _care.jpg",
    },
    {
      id: "1",
      title: "Bath & Baby Care",
      image: "/images/bath _care.jpg",
    },
    {
      id: "1",
      title: "Bath & Baby Care",
      image: "/images/bath _care.jpg",
    },
    {
      id: "1",
      title: "Bath & Baby Care",
      image: "/images/bath _care.jpg",
    },
  ];
  return (
    <>
      <section className="category">
        <Container>
          <Row>
            <Col>
              <SectionContent
                removeParag
                label={"Lorem Ipsum In"}
                title={"Lorem Ipsum In Website"}
              />
            </Col>
          </Row>
          <Row>
            {categoryInfo.map((data) => (
              <Col xs={6} sm={6} md={6} lg={3}>
                <CategoryCard title={data.title} image={data.image} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ShopByCategory;
