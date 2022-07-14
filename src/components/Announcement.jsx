import styled from "styled-components"

const Container = styled.div`
height:30px;
background-color:white;
color:#010101;
text-align:center;
display:flex;
justify-content:center;
align-items:center;
font-size:23px;
font-weight:400;
`;

const Announcement = () => {
  return( <Container>
    Announcement!!!
    </Container>


  )
};

export default Announcement;
