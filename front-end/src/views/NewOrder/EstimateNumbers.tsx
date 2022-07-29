import { useSelector } from "react-redux"
import styled from "styled-components"
import { selectCurrentEstimate } from "../../store/slices/estimateSlice"

export function EstimateNumbers() {
    const currentEstimate = useSelector(selectCurrentEstimate)
    if (!currentEstimate) {
        return null
    }
    return (
                <WrapStyled>
        <NumberItem>
                <span>Time</span>
                {currentEstimate.minutes} min
            </NumberItem>
            <NumberItem>
                <span>Distance</span>
                {(currentEstimate.meters / 1000).toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2})} km
            </NumberItem>
            <NumberItem>
                <span>Cost</span>
                {currentEstimate.value.toLocaleString('pt-br', {currency: 'USD', style: 'currency'})}
            </NumberItem>
                </WrapStyled>
        
    )
}

const WrapStyled = styled.div` 
    background: #EAEAEA;
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
`

const NumberItem = styled.p` 
    margin: 0;
    text-align: center;
    span {
        display: block;
        font-size: 0.875rem;
    }
`