import { Formik, useFormik } from "formik";
import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton";
import { FormField } from "../../components/FormField";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import * as yup from 'yup';
import { createUser } from "../../services/createUser";
import { FirebaseError } from 'firebase/app';
import { AuthErrorCodes } from "firebase/auth";
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { updateUser } from "../../store/slices/userSlice";


type FormValues = {
    name: string
    email: string
    phone: string
    password: string
    agree: boolean
}


export function RegisterView() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik<FormValues>({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            agree: false
        },
        validationSchema: yup.object().shape({
            name: yup.string()
            .required('Fill up your name.')
            .min(5),
            email: yup.string()
            .required('Fill up the e-mail.')
            .email('Write a valid e-mail.'),
            phone: yup.string()
            .required('Write your phone number.'),
            password: yup.string()
            .required('Write your password.')
            .min(8, '8 characters minimum.')
            .max(50, '50 characters maximum'),
            agree: yup.boolean()
            .equals([true], 'It is necessary to accept the terms.')
        }),
        onSubmit: async (values, { setFieldError }) => {
            try {
               const user = await createUser(values)
               dispatch(updateUser(user))
               navigate('/novo-pedido')
            } catch(error) {
                if (error instanceof FirebaseError && error.code === AuthErrorCodes.EMAIL_EXISTS) {
                    setFieldError('email', 'This email is already in use')
                    return
                }
                toast.error('An error occured. Try again.')
            }
        }
    })
     const getFieldProps = (fieldName: keyof FormValues) => {
        return {
            ... formik.getFieldProps(fieldName),
            controlId: `input-${fieldName}`,
            error: formik.errors[fieldName],
            isInvalid: formik.touched[fieldName] && !!formik.errors[fieldName], 
            isValid: formik.touched[fieldName] && !formik.errors[fieldName]
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
                                {formik.touched.agree && formik.errors.agree && (
                                    <Form.Control.Feedback type='invalid' className='d-block'>
                                        {formik.errors.agree}
                                    </Form.Control.Feedback>
                                )}
                            </Form.Group>
                            <div className="d-grid mb-4">
                                <CustomButton
                                 type='submit'
                                 loading={formik.isValidating || formik.isSubmitting}
                                 disabled={formik.isValidating || formik.isSubmitting}
                                 >
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