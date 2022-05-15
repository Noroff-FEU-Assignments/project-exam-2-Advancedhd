import Carousel from "react-bootstrap/Carousel";

function HeroBanner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 hero__banner__img"
          src="/bergen.jpg "
          alt="Beautiful Bergen"
        />
        <Carousel.Caption>
          <h3>Accommodations in Bergen</h3>
          <p>Holiday made easy</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroBanner;
