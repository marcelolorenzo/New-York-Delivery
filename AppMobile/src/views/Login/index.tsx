import { useFormik } from 'formik';
import React from 'react';
import { Container } from '../../components/Container';
import { CustomButton } from '../../components/CustomButton';
import { FormField } from '../../components/FormField';
import * as yup from 'yup';


type FormValues = {
    email: string;
    password: string;
};

export function LoginView() {
    const formik = useFormik<FormValues>({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: yup.object().shape({
            email: yup
              .string()
              .required('Insert your e-mail.')
              .email('Insert a valid e-mail.'),
            password: yup.string().required('Inform the password.'),
          }),
        onSubmit: async values => {

        },
    });
    const getFieldProps = (fieldName: keyof FormValues) => ({
        value: formik.values[fieldName],
        onChangeText: formik.handleChange(fieldName),
        onBlur: formik.handleBlur(fieldName),
        error: formik.errors[fieldName],
        isInvalid: formik.touched[fieldName] && !!formik.errors[fieldName],
        isValid: formik.touched[fieldName] && !formik.errors[fieldName],
    });
    return (
        <Container padding>
            <FormField
                {...getFieldProps('email')}
                label="E-mail"
                placeholder='Insert your E-mail.'
                keyboardType="email-address"
            />
            <FormField
                {...getFieldProps('password')}
                label="Senha"
                placeholder='Insert your password.'
                secureTextEntry
            />
            <CustomButton
                onPress={formik.handleSubmit}
                disabled={formik.isValidating || formik.isSubmitting}
                loading={formik.isValidating || formik.isSubmitting}>
                Login
            </CustomButton>
        </Container>
    );
}

