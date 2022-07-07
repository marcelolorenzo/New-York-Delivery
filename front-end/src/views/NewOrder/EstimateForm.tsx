import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import { AutocompleteField } from "../../components/AutocompleteField";
import { CustomButton } from "../../components/CustomButton";
import { FormField } from "../../components/FormField";
import { Address } from "../../entities/Address";

type FormValues = {
    pickupAddress: Address | null
    deliveryAddress: Address | null
    comments: string
}

export function EstimateForm() {
    const formik = useFormik<FormValues>({
        initialValues: {
            pickupAddress: null,
            deliveryAddress: null,
            comments: ''
        },
        onSubmit: async (values) => {
            console.log(values)
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
        <Form onSubmit={formik.handleSubmit}>
            <AutocompleteField
            { ...getFieldProps('pickupAddress')}
                label="Pick up Address (A)"
                placeholder="Inform full address"
                onChange={(address) => formik.setFieldValue('pickupAddress', address)}
            />
            <AutocompleteField
            {...getFieldProps('deliveryAddress')}
                label="Delivery Address (B)"
                placeholder="Inform full address"
                onChange={(address) => formik.setFieldValue('deliveryAddress', address)}
            />
            <FormField
            {...getFieldProps('comments')}
                label="Motoboy instructions"
                placeholder="Describe what the delivery person should do"
                as='textarea'
            />
            <div className='d-grid d-md-block'>
            <CustomButton 
            type='submit'
            loading={formik.isValidating || formik.isSubmitting}
            disabled={formik.isValidating || formik.isSubmitting}
            >Calculate price</CustomButton>
            </div>
        </Form>
    )
}