import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container } from "react-bootstrap";
import styled from "styled-components";

export function HomeView () {
    return (
        <Container>
    <Title>Uber Jet</Title>
    <Button>Teste</Button>
    <FontAwesomeIcon icon={faFacebookSquare} />
    </Container>
    )
}

const Title = styled.p`
  font-size: 3rem;
`