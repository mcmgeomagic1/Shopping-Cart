import {StyledProductCard, ProductCardBackground, ProductCardBody, ProductTitle, ProductPrice, ProductButtonSection} from './StyledProductCard.styled.js'
import {StyledPrimaryButton, StyledSecondaryButton} from '../Button/Button.styled.js'

export default function Product({product, onAddToCard}) {
	return (
		<StyledProductCard>
            <ProductCardBackground>
                <img src={product.imageUrl}/>
            </ProductCardBackground>
            <ProductCardBody>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductPrice color={'#3B74F2'}>R${product.price}</ProductPrice>
            </ProductCardBody>
            <ProductButtonSection>
                <StyledPrimaryButton>Comprar</StyledPrimaryButton>
                <StyledSecondaryButton onClick={()=> onAddToCard(product.id, product.name, product.price, product.imageUrl)}>+ Add no carrinho</StyledSecondaryButton>
            </ProductButtonSection>
        </StyledProductCard>
	)
}