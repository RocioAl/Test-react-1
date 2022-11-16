import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "./Card";
import Alert from 'react-bootstrap/Alert';

const MiApi = (props) => {
    const getRickandmortyApi = async () => {
        try {
            const url = "https://rickandmortyapi.com/api/character";
            const response = await fetch(url);
            const data = await response.json();
            props.setData(data.results);
        } catch (e) {
            <Alert variant="danger">
                {e.message}
            </Alert>
        }
    };
    useEffect(() => {
        getRickandmortyApi()
    }, []);

    return (
        <div >
            <Container>
                <Row><h1 class="text-white bg-dark mb-4"> Conoce sobre los personajes de Rick and Morty</h1></Row>
                <Row xs={1} md={4} className="g-4">
                    {props.data.filter((card) =>
                        card.name.toLowerCase().includes(props.filterData)
                    ).map((card) => (
                        <Col key={card.id}>
                            <Card name={card.name} src={card.image} />
                        </Col>

                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default MiApi


