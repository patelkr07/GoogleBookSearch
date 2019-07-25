import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

export function BookList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

export function BookListItem({
    thumbnail= "https://placehold.it/300x300",
    title,
    authors,
    description,
    image,
    link
}) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm2">
                        <Thumbnail src={thumbnail} />
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>{title}</h3>
                        <p>Author: {authors}</p>
                        <p>Description: {description}</p>
                        <a rel="noreferrer noopener" target="_blank" href={link}>
                            Go to book!
                        </a>
                    </Col>
                </Row>
            </Container>
        </li>
    )
}