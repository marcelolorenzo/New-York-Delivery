import { Col, Container, Row } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import { EstimateDetails } from "./EstimateDetails";
import { EstimateForm } from "./EstimateForm";

export function NewOrderView() {
    return (
        <Layout>
            <Container>
                <PageTitle>New Order</PageTitle>
                <Row>
                    <Col xs={12} md={6} lg={7}>
                        <EstimateForm />
                    </Col>
                    <Col xs={12} md={6} lg={5}>
                        <EstimateDetails />
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}