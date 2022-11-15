import React from 'react'
import BootstrapCard from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Card = (props) => {
    return (
        <div >
            <CardGroup>
                <BootstrapCard className="card text-center">
                    <BootstrapCard.Img variant="top" src={props.src} />
                    <BootstrapCard.Body>
                        <BootstrapCard.Title>{props.name}</BootstrapCard.Title>
                    </BootstrapCard.Body>
                </BootstrapCard>
            </CardGroup>
        </div>

    )
}

export default Card