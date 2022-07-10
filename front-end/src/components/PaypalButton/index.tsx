import { PayPalButtons } from "@paypal/react-paypal-js";
import styled from "styled-components";
import { OrderResponseBody } from '@paypal/paypal-js'

type Props = {
    value: number
    onSucess: (details: OrderResponseBody) => Promise<void>
    onError: () => void 
}

export function PaypalButton({ value, onSucess, onError }: Props) {
    return (
        <PaypalButtonsStyled
            createOrder={(data, actions) => {
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [{
                        amount: {
                            currency_code: 'USD',
                            value: value.toString()
                        }
                    }],
                    application_context: {
                        brand_name: 'New York Delivery',
                        shipping_preference: 'NO_SHIPPING'
                    }
                })
            }}
            onApprove={async (data, actions) => {
                if (actions.order) {
                    const details = await actions.order?.capture()
                    onSucess(details)
                }
            }}
            onError={onError}
            style={{
                layout: 'horizontal',
                color: 'blue',
                shape: 'pill',
                tagline: 'false',
                height: 38
            }}
        />
    )
}

const PaypalButtonsStyled = styled(PayPalButtons)`
    .paypal-buttons {
        display: block !important;
    }
`