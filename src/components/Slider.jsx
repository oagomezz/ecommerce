import { useState } from "react";
import styled from "styled-components"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import {sliderItems} from "../data";
import {mobile} from "../responsive"

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
background-color: white;
position: relative;
overflow: hidden;
${mobile({display: 'none'})}
`

const Arrow = styled.div`  
width: 50px;
height: 50px;
background-color: lightgray;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom:0;
left: ${props => props.direction === 'left' && '10px'};
right: ${props => props.direction === 'right' && '10px'};
margin:auto;
opacity: 0.5;
cursor: pointer;
z-index: 2;
`

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props => props.slideIndex * -99}vw)
`
const Slide = styled.div`
display: flex;
align-items: center;
weight: 100vw;
height: 100vh;
padding: 0px 10px;
background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
height: 100%;
flex:1;
`
const InfoContainer = styled.div`
flex:1;
padding: 50px;
`
const Image = styled.img`
height: 80%;
`
const Title = styled.h1`
font-size: 75px;
// font-weight: 700;
// color: white;
`
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
// color: white;
letter-spacing: 3px;
`
const Button = styled.button`
font-size: 20px;
// font-weight: 700;
background-color: transparent;
cursor: pointer;

padding: 10px;
`
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if(direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
}
  return (
    <Container>
        <Arrow direction='left' onClick={() => handleClick("left")}>
            <ArrowBackIosNewOutlinedIcon />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems?.map(item => (
                    <Slide key={item.Id} bg={item.bg}>
                    <ImgContainer>
                        <Image src={item.Img} />
                    </ImgContainer>
                <InfoContainer>
                    <Title>{item.Title}</Title>
                    <Desc>
                        {item.Desc}               
                    </Desc>
                    <Button>Shop Now</Button>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction='right' onClick={() => handleClick("right")}>
            <ArrowForwardIosOutlinedIcon />
        </Arrow>
    </Container>
  )
}
export default Slider