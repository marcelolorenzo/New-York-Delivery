import { useFormik } from "formik";
import { Col, Container, Form, Row } from "react-bootstrap";
import { CustomButton } from "../../components/CustomButton";
import { FormField } from "../../components/FormField";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

type FormValues = {
    email: string
    password: string
}

export function LoginView() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            console.log('values', values)
        }
    })
    const getFieldProps = (fieldName: keyof FormValues) => {
        return {
            ...formik.getFieldProps(fieldName),
            controlId: `input-${fieldName}`,
            error: formik.errors[fieldName],
            isInvalid: formik.touched[fieldName] && !!formik.errors[fieldName],
            isValid: formik.touched[fieldName] && !formik.errors[fieldName]
        }
    }
    return (
        <Layout>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={4}>
                        <PageTitle>Login</PageTitle>
                        <Form onSubmit={formik.handleSubmit}>
                            <FormField
                                {...getFieldProps('email')}
                                label="E-mail"
                                type='email'
                                placeholder='Write your access e-mail'
                            />
                            <FormField
                                {...getFieldProps('password')}
                                label='Password'
                                type='password'
                                placeholder='Write your access password'
                            />
                            <div className="d-grid mb-4">
                                <CustomButton
                                    type="submit"
                                    loading={formik.isValidating || formik.isSubmitting}
                                    disabled={formik.isValidating || formik.isSubmitting}
                                >
                                    Log in
                                </CustomButton>
                            </div>
                            <p className="text-center">Don't have an account?<br /> <Link to='/cadastro'>Sign in</Link></p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}