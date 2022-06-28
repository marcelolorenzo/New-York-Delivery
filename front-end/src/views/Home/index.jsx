import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import bgMobile from "../../assets/img/bg-uber-jet-mobile.jpg"
import bgDesktop from "../../assets/img/bg-uber-jet.jpg"
import { CustomButton } from "../../components/CustomButton";
import { Layout } from "../../components/Layout";
import { selectIsUserLoggedIn } from "../../store/slices/userSlice";

export function HomeView () {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
    return (
      <Layout withoutMargin>
      <Banner className="vh-100">
         <Container className="h-100 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
         <Title className="text-white text-center text-lg-start mt-auto mt-lg-0">Take the next best plane to your dream destination.</Title>
         {isUserLoggedIn ? (
          <CustomButton variant="success" size="lg" className="mt-auto mt-lg-3 mb-4" to='/novo-pedido'>New Order</CustomButton>
         ) : (
           <>
          <CustomButton variant="success" size="lg" className="mt-auto mt-lg-3 mb-2" to='/cadastro'>Create an account</CustomButton>
          <CustomButton variant="success" size="lg" className="mb-4" to='/login'>Login</CustomButton>
          </>
         )}
         
      </Container> 
       </Banner>
      </Layout>
    )
}

const Banner = styled.div`
  background: url(${bgMobile}) no-repeat center center;
  background-size: cover;
  @media (min-width: 576px) {
    background-image: url(${bgDesktop});
  }
  @media (min-width: 768px) {
    background-image: url(${bgMobile});
  }
  @media (min-width: 992px) {
    background-image: url(${bgDesktop});
  }
`
const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (min-width: 992px)  {
    font-size: 3rem;
    max-width: 500px;
  }
`