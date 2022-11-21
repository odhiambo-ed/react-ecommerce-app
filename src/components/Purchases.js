import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";

import PurchaseCard from "./PurchaseCard";

const Purchases = () => {
    const data = useSelector((state) => state.purchases.value);
    return (
        <Container
            style={{
                marginTop: 100,
            }}
        >
            <Row>
                {data.map((item) => {
                    return (
                        <Col sm key={item.id}>
                            <PurchaseCard
                                name={item.data.itemName}
                                image={item.data.itemImage}
                                price={item.data.cost}
                                quantity={item.data.quantity}
                                summary={item.data.summary}
                                description={item.data.description}
                            />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default Purchases;
