import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
flex:1;
margin: 3px;
height: 50vh;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({height: '40vh'})}
`
const Info = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 90px;
left: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Title = styled.h1`
color: white;
margin-bottom: 10px;
`
const Button = styled.button`
border: none;
padding: 10px;
width: 10vw;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 600;
`
const CategoryItem = ({category}) => {
  return (
    <Container>
        <Image src={category.img}/>
        <Info>
            <Title>{category.title}</Title>
            <Button>Shop Now</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem