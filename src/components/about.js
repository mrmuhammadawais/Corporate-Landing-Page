import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img1 from '../assets/images/img1.jpg';

export default function AppAbout(){
    return(
        <section id="about className="block about-block>
        <Container fluid>
        <div className='title-holder'>
            <h2>About us</h2>
            <div className="subtitle">
            Learn More About us
            </div>
        </div>
        <Row>
          <Col sm={6}>
          <Image src={img1}/>
          </Col>
          <Col sm={6}>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus volutpat orci non sagittis. Duis porttitor a augue sed luctus. Nulla facilisi. Vivamus euismod metus vitae nisl laoreet vestibulum. Phasellus facilisis sem eget pulvinar blandit. In blandit urna augue, sed lacinia nibh consectetur ac. Phasellus ex risus, commodo eget nulla at, mollis facilisis ligula. Nullam finibus, enim scelerisque interdum feugiat, est felis malesuada diam, sed convallis eros lacus ac lectus. Sed ac justo molestie, pretium tortor condimentum, vulputate augue. Nullam a malesuada metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse egestas turpis enim, nec luctus quam ullamcorper at. Aenean gravida aliquet risus, id ullamcorper dui maximus at. Morbi a pretium velit.</p>
          </Col>
        </Row>
      </Container>
      </section>
    )
}