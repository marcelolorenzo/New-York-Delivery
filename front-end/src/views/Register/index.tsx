import { Container } from "react-bootstrap";
import { FormField } from "../../components/FormField";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export function RegisterView () {
    return (
        <Layout>
        <Container>
        <PageTitle>New account</PageTitle>
        <FormField 
            controlId='userName'
            label='Name'
            placeholder="Write your name"
            error="Fill your name."
            isInvalid
            mask={[
                { mask: '000.000.000-00'}
            ]}
        />
        </Container>
        </Layout>
    )
}