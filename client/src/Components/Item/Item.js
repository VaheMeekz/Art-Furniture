import React from 'react'
import {Button, Card, Container} from 'react-bootstrap'
import css from './item.module.css';
import mebel from "../../Assets/Images/mebel.png"
import {NavLink} from "react-router-dom";
import Slider from "react-slick";


const Item = ({id, nameAm, nameRu, numberCode, descriptionAm, descriptionRu, price, categorie}) => {


    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
    };

    return (
        <Container>
            <Card style={{width: '18rem'}}>
                {/*<Card.Img variant="top" >*/}
                <Slider {...settings}>
                    <div className={css.imgBox}>
                        <div>

                            <img src={mebel} className={css.img}/>
                        </div>
                    </div>
                    <div className={css.imgBox}>
                        <div>

                            <img src={mebel} className={css.img}/>
                        </div>
                    </div>
                    <div className={css.imgBox}>
                        <div>

                            <img src={mebel} className={css.img}/>
                        </div>
                    </div>
                    <div className={css.imgBox}>
                        <div>

                            <img src={mebel} className={css.img}/>
                        </div>
                    </div>
                </Slider>
                {/*</Card.Img>*/}
                <Card.Body>
                    <Card.Title>{nameAm}</Card.Title>
                    <Card.Text>
                        <p>{descriptionAm}</p>
                        <p>{numberCode}</p>
                        <p>{price}</p>

                    </Card.Text>
                    <NavLink exact to={`/item/${id}`}>
                        <Button variant="outline-success">Ավելին</Button>
                    </NavLink>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Item
