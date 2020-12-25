import Jumbo from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import boatImage from "../assets/boat.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${boatImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

const Jumbotron = (props) => {
  return (
    <Styles>
      <Jumbo fluid className='jumbo'>
        <div className='overlay'></div>
        <Container>
          <h1>Welcome</h1>
          <p>Learn to Code from my Github</p>
        </Container>
      </Jumbo>
    </Styles>
  );
};

export default Jumbotron;
