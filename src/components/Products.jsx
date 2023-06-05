import styled from "styled-components"
import {products} from "../data"
import Product from "../components/Product"
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = () => {
  return (
    <Container>
      {products.map(product => (
        <Product key={product.id} product={product} />
        ))}
    </Container>
  )
}

export default Products