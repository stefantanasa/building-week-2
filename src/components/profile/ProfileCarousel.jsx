import { Carousel, Row } from "react-bootstrap";

const ProfileCarousel = () => {
    return (



        <Carousel>
  <Carousel.Item>
      <div className="profile-carousell-card rounded bg-light rounded border">
        <p>Open to work</p>
        <p>See all details</p>

    </div>
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div className="profile-carousell-card rounded bg-light rounded border">
        <p>Open to work</p>
        <p className="contact-info">See all details</p>

    </div>
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div className="profile-carousell-card rounded bg-light rounded border">
        <p>Open to work</p>
        <p>See all details</p>

    </div>
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
     );
}
 
export default ProfileCarousel;