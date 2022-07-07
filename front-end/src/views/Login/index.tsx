import { useFormik } from "formik";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton";
import { FormField } from "../../components/FormField";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import * as yup from 'yup'
import { loginUser } from "../../services/loginUser";
import { AuthErrorCodes } from "firebase/auth";
import { toast } from "react-toastify";
import { updateUser } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { FirebaseError } from "firebase/app";

type FormValues = {
    email: string
    password: string
}

export function LoginView() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string()
                .required('Write your e-mail.')
                .email('Write a valid e-mail.'),
            password: yup.string()
                .required('Write your password.')
        }),
        onSubmit: async (values) => {
            try {
                const user = await loginUser(values)
                dispatch(updateUser(user))
                navigate('/novo-pedido')
            } catch (error) {
                const errorMsg = error instanceof FirebaseError &&
                    (error.code === AuthErrorCodes.INVALID_PASSWORD ||
                        error.code === AuthErrorCodes.USER_DELETED) ? 'Invalid Login or Password.' : 'Failed to Login.'
                toast.error(errorMsg)
            }
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