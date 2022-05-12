import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Navbar,Container,Carousel,Button,Card } from 'react-bootstrap';
import './boot.css';
import { GrPowerShutdown } from "react-icons/gr";

function App() {
  return (
    <div>
      
      <Navbar collapseOnSelect expand="lg"  className='nav'>
  <Container>
  <Navbar.Brand href="#home" className='navbar'><img src={require('./img/ll.png')} /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto"> 
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Home</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Our Story
      </Nav.Link>
      <Nav.Link href="#deets">Store Locator</Nav.Link>
      <Nav.Link eventKey={2} href="#memes"> 
      Contact Us
      </Nav.Link>
      <Nav.Link href="#deets">Franchise Enquiry</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Order Online
      </Nav.Link>
      <Nav.Link>
      <GrPowerShutdown/>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<div>
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={require('./img/slider1.jpg')}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={require('./img/slider3.jpg')}
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('./img/slider4.jpg')}
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>
</div>
<div  className='bv'>

<div className='sec'>
  <table>
        <tr>
						<div className='title'>
							<p className='tee'>La Pino'z<b className='te'> going international</b></p>
							<p className='t4'>Launching Soon in</p>
						</div>
        </tr>
        <tr>
						<ul className='country-listing t'>
							<il>
								<div className='flag-b t1'>
									<img src={require('./img/uk.png')} alt="lapinoz pizza United Kingdom" />
								</div>
								United Kingdom
							</il>
							<il>
								<div className='flag-b t2'>
									<img src={require('./img/uk.png')} alt="lapinoz pizza Canada" />
								</div>
								Canada
							</il>
							<il>
								<div className='flag-b t2'>
									<img src={require('./img/uk.png')} alt="lapinoz pizza Australia" />
								</div>
								Australia
							</il>
              </ul>
        </tr>
        <tr>
              <ul className='country-listing t'>
							<il>
								<div className='flag-b t2'>
									<img src={require('./img/uk.png')} alt="lapinoz pizza Dubai" />
								</div>
								Dubai
							</il>
							<il>
								<div className='flag-b t2'>
									<img src={require('./img/uk.png')} alt="lapinoz pizza tanzania" />
								</div>
								Tanzania
							</il>
						</ul>
          </tr>
            </table>
					</div>
  
    </div >
      <div className='f'>
      <div className='read'>
            <p className='our'>Our <b className='bold'>Story</b></p>
            <p >The story of your favorite pizza place started back in 2011 when Sanam Kapoor opened his very first pizzeria in his hometown 
            Chandigarh. Inspired by his own search for delicious pizza options, he started to wonder if there was a better way of doing 
            pizza – and business. The last thing the world needed was another pizzeria, but maybe this one could be different. Maybe with 
            this one, everyone could get exactly what they wanted, made fresh on demand. It all started sounding pretty great, and soon 
            Sanam was opening the first La Pinoz in City Beautiful.</p>


            <Button variant="success" className='btn'>Read More</Button>
        
				</div>
        <div className='bb'>
        <img src={require('./img/about-img.png')}/>
        </div>
        </div>

        <section >
          <div>
            <h5>FEELING HUNGRY?</h5>
            <h2>CHECKOUT <b>WHAT'S ON THE MENU?</b></h2>
          </div>
          <div className='sec1'>
          <div className='ty' >
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require('./img/pizza-icon.png')} />
                <Card.Body>    
                  <Card.Text>
                      <h3>Pizza</h3>
                  </Card.Text>   
                </Card.Body>
          </Card>
          </div>
          <div className='ty'>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require('./img/pizza-icon.png')} />
                <Card.Body>    
                  <Card.Text>
                      <h3>Pizza</h3>
                  </Card.Text>   
                </Card.Body>
          </Card>
          </div>
          <div className='ty'>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require('./img/pizza-icon.png')} />
                <Card.Body>    
                  <Card.Text>
                      <h3>Pizza</h3>
                  </Card.Text>   
                </Card.Body>
          </Card>
          </div>
          <div className='ty'>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require('./img/pizza-icon.png')} />
                <Card.Body>    
                  <Card.Text>
                      <h3>Pizza</h3>
                  </Card.Text>   
                </Card.Body>
          </Card>
          </div>
          
          </div>
          
        </section>
        
        
  </div>
  );
}

export default App;
