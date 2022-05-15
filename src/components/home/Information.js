import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

function Information() {
  return (
    <>
      <Container className="desktop__information">
        <Row>
          <Col>
            <div className="desktop__information__text__container">
              <h3>What is Holidaze?</h3>
              <p>
                Holidaze aims to make your holiday go as smooth as possible.
                Giving you top notch quality and service. We have multiple
                employees to help you plan out your perfect holiday contact us
                below for any special needs you might have!
              </p>
            </div>
          </Col>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 information__img"
                  src="/citybreak.jpg "
                  alt="People on holiday in a city"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      <Container className="mobile__information">
        <Row>
          <Col>
            <div className="mobile__information__text__container">
              <h3>What is Holidaze?</h3>
              <p>
                Holidaze aims to make your holiday go as smooth as possible.
                Giving you top notch quality and service. We have multiple
                employees to help you plan out your perfect holiday contact us
                below for any special needs you might have!
              </p>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 information__img"
                    src="/citybreak.jpg "
                    alt="People on holiday in a city"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Information;
