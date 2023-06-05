import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
height:  30px;
background-color: teal;
color:white;
display:flex;
justify-content:center;
${mobile({display: 'none'})}
`

const Announcement = () => {
  return (
        <Container>
            Super Deal! Free Shipping on Orders Over $50
        </Container>
  )
}

export default Announcement