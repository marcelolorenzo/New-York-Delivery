import { Col, Container, Row } from "react-bootstrap";
import { CustomButton } from "../../components/CustomButton";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export function NewOrderSuccessView () {
    return (
        <Layout>
            <Container className="text-center">
                <Row className="justify-content-center">
                    <Col md={8} lg={6} xl={5}>
                    <PageTitle>Order successful!</PageTitle>
                    <p>We will send an e-mail with all details.</p>
                    </Col>
                    <CustomButton variant="success" size="lg" to='/novo-pedido'>Place another order.</CustomButton>
                </Row>
            </Container>
        </Layout>
    )
}