import styled from "styled-components"
import { Footer } from "./Footer"
import { Header } from "./Header"

type Props = {
    children: React.ReactNode
    withoutMargin?: boolean 
}

export const Layout: React.FC<Props> = ({ children, withoutMargin }) => {
    return (
        <>
        <Header />
        <MainStyled>
        {children}
        </MainStyled>
        <Footer withoutMargin={withoutMargin} />
         </>
    )
}

const MainStyled = styled.main`
    padding-top: 77px;
    @media (min-width: 992px) {
        padding-top: 100px;
    }
`