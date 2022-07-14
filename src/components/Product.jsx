import { ShoppingCartOutlined} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components'
const Info = styled.div`
opacity:0;
width:100%;
height:100%;
top:0;
position:absolute;
left:0;

background-color:rgba(0,0,0,0.3);

justify-content:center;
display:flex;
align-items:center;
z-index:3;
transition : all 0.7s ease;
cursor:pointer;
`;
const Container=styled.div`
flex:1;
margin:5px;
display:flex;
justify-content:center;
align-items:center;
min-width:300px;
background-color:#dfffff;
height:400px;
position:relative;
&:hover ${Info}{
opacity:1;
}
`;
const Circle = styled.div`
width:200px;
height:200px;
border-radius:50%;
background-color:red;
position:absolute;
justify-content:center;

`;
const Image = styled.img`
height:85%;
z-index:2;
overflow:hidden;
`;
const Icon = styled.div`
width:40px;
height:40px;
border-radius:50%;
display:flex;
color:black;
background-color:white;
justify-content:center;
margin:10px;
align-items:center;
cursor:pointer;
transition:all 0.9s ease;
&:hover{
    
    background-color:gray;
    transform:scale(1.2);
}
`;
const Product = ({item}) => {
  return (
      <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
        </Info>
      </Container>
  );
};

export default Product;
