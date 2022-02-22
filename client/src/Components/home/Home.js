import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import Drawer from '../Drawer/Drawer'
import Item from '../Item/Item'
import {useSelector} from 'react-redux'
import css from "./home.module.css"

const Home = () => {
    const items = useSelector((state) => state.ItemReducer.items)
    console.log('🚀 ~ file: Item.js ~ line 9 ~ Item ~ items', items)
    return (
        <Container>
            <Row>
                <Col sm={1}>
                    <Container>

                        <Row xs={3}>
                            <Col></Col>
                            <Col className={css.title}>
                                <h2></h2>
                            </Col>
                            <Col></Col>
                        </Row>
                        <Drawer/>
                    </Container>
                </Col>

                <Col sm={11}>
                    <Container>

                        <Row xs={3}>
                            <Col></Col>
                            <Col className={css.title}>
                                <h2>Վաճառքի Թոփ</h2>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                    <Row xs={3}>
                        {items.map((i) => {
                            return (
                                <Col key={i.id} className={css.col}>
                                    <Item id={i.id} nameAm={i.nameAm} nameRu={i.nameRu} numberCode={i.numberCode}
                                          descriptionAm={i.descriptionAm} descriptionRu={i.descriptionRu}
                                          price={i.price} categorie={i.categorie}/>
                                </Col>
                            )
                        })}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
