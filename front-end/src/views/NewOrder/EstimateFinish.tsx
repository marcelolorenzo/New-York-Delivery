import { useSelector } from "react-redux";
import { selectCurrentEstimate } from "../../store/slices/estimateSlice";
import { OrderResponseBody } from '@paypal/paypal-js'
import { toast } from "react-toastify";
import { PaypalButton } from "../../components/PaypalButton";


export function EstimateFinish() {
    const currentEstimate = useSelector(selectCurrentEstimate)
    if (!currentEstimate) {
        return null
    }
    const handlePaypalSuccess = async (details: OrderResponseBody) => {

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