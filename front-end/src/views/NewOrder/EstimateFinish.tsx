import { useSelector } from "react-redux";
import { selectCurrentEstimate } from "../../store/slices/estimateSlice";
import { OrderResponseBody } from '@paypal/paypal-js'
import { toast } from "react-toastify";
import { PaypalButton } from "../../components/PaypalButton";
import { createOrder } from "../../services/createOrder";
import { selectUser } from "../../store/slices/userSlice";


export function EstimateFinish() {
    const currentEstimate = useSelector(selectCurrentEstimate)
    const user = useSelector(selectUser)
    if (!currentEstimate || !user) {
        return null
    }
    const handlePaypalSuccess = async (details: OrderResponseBody) => {
        try {
            await createOrder({
                estimate: currentEstimate,
                gatewayId: details.id,
                userId: user.id
            })
        } catch {
            toast.error('Failed to process the payment. Please try again.')
        }
    }
    const handlePaypalError = () => {
        toast.error('An error occurred. Please try again.')
    }
    return (
        <div className="mt-3">
            <PaypalButton
                value={currentEstimate.value}
                onSucess={handlePaypalSuccess}
                onError={handlePaypalError}
            />
        </div>
    )
}