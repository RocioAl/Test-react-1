import React from 'react'
import Button from "react-bootstrap/Button";

const Footer = (props) => {
    return (
        <footer className="text-muted p-5">
            <Button variant="outline-warning">{props.text} <cite title="Source Title">{props.cite}</cite></Button>
        </footer>
    )
}

export default Footer