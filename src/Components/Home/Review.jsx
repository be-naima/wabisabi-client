import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';
const Review = () => {
    return (
        <div className='margin container-md px-4 mb-5'>
            <h1 className='headline text-white mb-5 mt-5 fw-bold display-5 text-center '>  Reviews </h1>
            <CardGroup>
                <Card>
                    <Image variant="top" src="https://miro.medium.com/v2/resize:fit:800/1*NpS-s4VDYVsNbIplzmKIMg.jpeg" className='reviewImg image-responsive mx-auto mt-4' roundedCircle/>
                    <Card.Body>
                        <Card.Title>Ayumi Hana</Card.Title>
                        <Card.Text>
                        As a Japanese person, I am happy to be able to experience these cuisine and share them with people from other countries. <br /><br />The site is very easy to use, and I appreciate the quick response. I will continue to use this site in the future. Thank you very much.❤️❤️❤️
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"> 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Image variant="top" src="https://i.pinimg.com/550x/a7/46/e5/a746e5691f3b153c18bcf691c3e9e0ff.jpg" className='reviewImg image-responsive mx-auto mt-4' roundedCircle/>
                    <Card.Body>
                        <Card.Title>Emre Eren</Card.Title>
                        <Card.Text>
                        I have tried their Tonkatso recipe. Its fresh, seasonal ingredients and delicate flavors. It emphasizes simple yet refined tastes that balance sweet, sour, salty, and umami flavors. <br /><br />Love from Pakistan.👍😄😄
                        {' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"> 2 days ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Image variant="top" src="https://sc01.alicdn.com/kf/Ud0fca9d4331f4d86b4a2713f59fe1d60e.jpg" className='reviewImg image-responsive mx-auto mt-4' roundedCircle/>
                    <Card.Body>
                        <Card.Title>Noura Zahra</Card.Title>
                        <Card.Text>
                        Tekiya Japanese food is one of my best meal ever. They have authentic Japanese food recipes like sushi, tempura, udon. I love also curry rice recipe. <br /><br />Their recipes are simple and easy to cook.Thank you for sharing this amazing recipes of japan.🫶❤️
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"> 4 days ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Review;