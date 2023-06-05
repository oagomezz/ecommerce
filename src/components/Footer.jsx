import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from "../responsive";

const Container = styled.div`
display: flex;
${mobile({flexDirection: 'column'})}`
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1``

const Desc = styled.p`
margin: 20px 0;

`
const SocialContainer = styled.div`
display: flex;`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;`



const Center = styled.div`
flex:1;
padding: 20px;
${mobile({display: 'none'})}
`

const Title = styled.h3`
margin-bottom: 30px;
`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;`

const ListItem = styled.li`
width:50%;
margin-bottom: 10px;`

const Right = styled.div`
flex:1;
padding: 20px;
${mobile({backgroundColor: '#eee'})}
`
const ContactItem = styled.div`
padding:10px;`
const Payment = styled.img`
padding-top: 10px;`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo> OAGOMEZZ.</Logo>
            <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dicta. Vitae dolorem officiis magnam quibusdam aliquid recusandae perspiciatis cum, necessitatibus at animi sit eum ullam atque. Nulla necessitatibus officia a!</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FacebookIcon />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterIcon />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
                <ContactItem>
                    <RoomIcon/> 622 Dixie Path, South Westchester
                </ContactItem>
                <ContactItem> 
                    <PhoneIphoneIcon /> +1(234) 456-7890
                </ContactItem>
                <ContactItem>
                    <EmailIcon/> contact@oagomezz.dev
                </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/> 
        </Right>
    </Container>
  )
}

export default Footer