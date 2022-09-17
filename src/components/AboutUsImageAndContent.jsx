import React from 'react';
import img from '../assets/images/Image.png';
import AboutUs from './AboutUs';
import {Card,CardBody,CardTitle,CardSubtitle,CardText} from 'reactstrap';


const AboutUsImageAndContent = () => {
return (
<div>
    <div className="container">
        <Card className="img-and-content-container">
            <img className='about-img' src={img} />
            <CardBody className='w-100 p-4'>
                <CardTitle tag="h5">
                    About Us
                </CardTitle>
                <CardText>
                    What is Lorem Ipsum? <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    <br /> <br />
                    Why do we use it? <br />
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                    default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like). </CardText>
            </CardBody>
        </Card>
    </div>
</div>
)
}

export default AboutUsImageAndContent