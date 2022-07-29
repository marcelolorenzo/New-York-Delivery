import { useDispatch, useSelector } from "react-redux";
import { clearCurrentEstimate, selectCurrentEstimate } from "../../store/slices/estimateSlice";
import { OrderResponseBody } from '@paypal/paypal-js'
import { toast } from "react-toastify";
import { PaypalButton } from "../../components/PaypalButton";
import { createOrder } from "../../services/createOrder";
import { selectUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";


export function EstimateFinish() {
    const currentEstimate = useSelector(selectCurrentEstimate)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
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
            dispatch(clearCurrentEstimate())
            navigate('/novo-pedido/sucesso')
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