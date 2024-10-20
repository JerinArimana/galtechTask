import { Col, Container, Row } from "react-bootstrap";
import SectionContent from "../../../components/sectionContent";
import ButtonCustom from "../../../components/ButtonCustom";
import secondImg from "../../../public/images/second_bg.png";
import Image from "next/image";
const ThirdSection = () => {
  return (
    <>
      <section className="thirdSection">
        <Container fluid>
          <div className="thirdSection__content_wrapper d-flex  flex-wrap">
            <div className="thirdSection__content">
              <SectionContent
                label={"Lorem Ipsum In"}
                title={"Lorem Ipsum In Website"}
                text={`The word Lorem Ipsum is derived from the Latin word which means “pain itself”. It is a kind of a text filler tool that is used by the webmaster on the website. Basically, this tool is used to create dummy content on the website when it’s new.`}
              />
              <ButtonCustom btn_label={"Discover more"} />
            </div>

            <div className="thirdSection__image">
              <Image
                src={secondImg}
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ThirdSection;
