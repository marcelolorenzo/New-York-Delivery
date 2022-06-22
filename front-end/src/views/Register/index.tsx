import { useFormik } from "formik";
import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton";
import { FormField } from "../../components/FormField";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export function RegisterView() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            agree: false,
        },
        onSubmit: (values) => {
            console.log('oi', values)
        }
    })
    const getFieldProps = (fieldName: string) {
        return {
            ... formik.getFieldProps(fieldName),
            controlId: `input-${fieldName}` 
        }
    }
    return (
        <Layout>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={4}>
                        <PageTitle>New account</PageTitle>
                        <Form onSubmit={formik.handleSubmit}>
                            <FormField
                                label="Name"
                                placeholder="Fill up your name here"
                                { ... getFieldProps('name')}
                            />
                            <FormField
                                type='email'
                                label="E-mail"
                                placeholder="This is going to be your user name"
                                {... getFieldProps('email')}
                            />
                            <FormField
                                label="Telefone"
                                placeholder="(00) 00000-0000"
                                {... getFieldProps('phone')}
                                mask={[
                                    { mask: '(00) 0000-0000' },
                                    { mask: '(00) 00000-0000' },
                                ]}
                                onAccept={value => formik.setFieldValue('phone', value)}
                            />
                            <FormField
                                label="Password"
                                placeholder="Inform your password"
                                {... getFieldProps('password')}
                                type="password"
                            />
                            <Form.Group className="mb-3" controlId="input-agree">
                                <Form.Check
                                    {... getFieldProps('agree')}
                                    type="checkbox"
                                    label="I read and accept the terms of use."
                                />
                            </Form.Group>
                            <div className="d-grid mb-4">
                                <CustomButton type='submit'>
                                    Create new account
                                </CustomButton>
                            </div>
                            <p className="text-center">Already have an account?<br /> <Link to='login'>Log in</Link></p>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </Layout>
    )
}