import styled from 'styled-components'
import { mobile } from '../responsive';
import Announcement from './Announcement';
import Navbar from './Navbar';


const Container = styled.div`
`

const Image = styled.img`
width:100%;
height: 90vh;
object-fit: cover;
// ${mobile({width: '40vw'})}
`

const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({ padding: '10px', flexDirection: 'column'})}
`
const ImgContainer = styled.div`
flex: 1;`
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;`
const Title = styled.h1`
font-weight: 100`
const Desc = styled.p`
margin: 20px 0px;`

const Product = ({product}) => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img}/>
        </ImgContainer>
        <InfoContainer>
            <Title>Denim Jumpsuit</Title>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illum delectus autem dolores eum ipsum corrupti quam nesciunt consequatur ullam asperiores sed quibusdam, repellendus debitis officia qui ducimus quis fugiat?</Desc>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default Product