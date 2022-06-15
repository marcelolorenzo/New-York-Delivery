import { Container } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export function NotFoundView () {
    return (
        <Layout>
            <Container className="text-center">
            <PageTitle>Page not found</PageTitle>
            <p>The page you're trying to access was not found</p>
            <p>Use the upper menu to found what you want</p>
            </Container>
        </Layout>
    )
}