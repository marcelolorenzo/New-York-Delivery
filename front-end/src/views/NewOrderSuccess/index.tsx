import { Col, Container, Row } from "react-bootstrap";
import { CustomButton } from "../../components/CustomButton";
import { Layout } from "../../components/Layout";

export function NewOrderSuccessView () {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col>
                    <PageTitle>Order successful!</PageTitle>
                    <p>We will send an e-mail with all details.</p>
                    </Col>
                    <CustomButton variant="success" size="lg" to='/novo-pedido'>Place another order.</CustomButton>
                </Row>
            </Container>
        </Layout>
    )
}