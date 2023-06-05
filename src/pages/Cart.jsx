import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material"

const Container = styled.div``

const Wrapper = styled.div`
padding: 20px;
`

const Title = styled.h1`
font-weight: 300;
text-align: center;`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${(props) => props.type === "filled" && "none"};
background-color: ${(props) => props.type === "filled" ? "black" :'trasparent'};
color: ${(props) => props.type === "filled" && 'white'};
`
const TopTexts = styled.div``
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`
const Bottom = styled.div`
display: flex;
justify-content: space-between;`

const Info = styled.div`
flex: 3;`

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius:10px;
padding: 20px;
height: 50vh;`


const Image = styled.img`
width: 200px;
height: 200px;`

const Details = styled.span`
padding: 0px;
display: flex;
flex-direction: column;
justify-content: space-around;`

const Product = styled.div`
display: flex;
justify-content: space-between;
`
const ProductDetail = styled.div`
flex: 2;
display: flex;`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.span`
height: 20px;
width: 20px;
border-radius: 50%;
background-color: ${(props) => props.color};`
const ProductSize = styled.span``

const PriceDetail = styled.span`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;`

const Price = styled.span``
const ProductPrice = styled.span`
font-size: 30px;
font-weight: 200;`
const ProductAmountContainer = styled.span`
display: flex;
align-items: center;
justify-content: center;`
const SummaryTitle = styled.h1`
font-weight: 300`
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${(props) => props.type === "total" && "500"};
font-weight: ${(props) => props.type === "total" && "24px"};
`; 
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const SummaryButton = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight:600;
`

const ProductAmount = styled.span`
font-size: 24px;
margin: 5px;`

const Hr = styled.hr`
background-color: #eee;
border:none;
height: 1px;`

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>Your Cart</Title>
            <Top>
                <TopButton type='none'>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled" >CHECKOUT</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                        <Image src="https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                            <Details>
                                <ProductName><b>Product:</b>TOTE BAG</ProductName>
                                <ProductId><b>ID:</b>437485966</ProductId>
                                <ProductColor color="red"/>
                                <ProductSize><b>Size: </b>N/A</ProductSize>
                            </Details>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                            <Add />
                                            <ProductAmount>2</ProductAmount>
                                            <Remove />
                                    </ProductAmountContainer>    
                                    <ProductPrice> $30</ProductPrice>
                                </PriceDetail>
                        </ProductDetail>
                    </Product>
                        <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src="https://images.pexels.com/photos/3185223/pexels-photo-3185223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                            <Details>
                                <ProductName><b>Product:</b>TOTE BAG</ProductName>
                                <ProductId><b>ID:</b>437485966</ProductId>
                                <ProductColor color="lightpink"/>
                                <ProductSize><b>Size: </b>N/A</ProductSize>
                            </Details>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                            <Add />
                                            <ProductAmount>1</ProductAmount>
                                            <Remove />
                                    </ProductAmountContainer>    
                                    <ProductPrice> $15</ProductPrice>
                                </PriceDetail>
                        </ProductDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type='total'>
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton> Checkout Now</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart