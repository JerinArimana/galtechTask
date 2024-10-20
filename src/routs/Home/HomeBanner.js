import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import ButtonCustom from "../../../components/ButtonCustom";
import SectionContent from "../../../components/sectionContent";

const HomeBanner = () => {
  return (
    <>
      <section className="home_banner">
        <Container fluid>
          <Row>
            <Col md={6}>
              <div className="home_banner__contentWrapper">
                <SectionContent
                  label={"Lorem Ipsum In"}
                  title={"Lorem Ipsum In Website"}
                  text={`The word Lorem Ipsum is derived from the Latin word which means “pain itself”. It is a kind of a text filler tool that is used by the webmaster on the website.

Basically, this tool is used to create dummy content on the website when it’s new.`}
                />
                <ButtonCustom btn_label={"Shopp all"} />
              </div>
            </Col>
            <Col md={6}>
              <Image
                src="/images/bannerImg.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomeBanner;
