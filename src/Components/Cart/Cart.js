import {StyledCart, CartHeader, Flex1, Flex2, Flex3, TotalPriceSection, ProductsContainer, TotalPriceFlex, FreeShippingSection, NothingOnCartMessage} from './StyledCart.styled.js'
import {ProductPrice, ProductButtonSection} from '../Product/StyledProductCard.styled.js'
import {StyledPrimaryButton} from '../Button/Button.styled.js'
import sadEmoji from '../../Public/images/sad.png'
export default function Cart ({cartProducts, changeRoot}) {
	const totalPrice = cartProducts.reduce((a, b) => a + b.price, 0)

	if(!cartProducts.length) {
		return(
			<StyledCart paddingBottom={"2em"}>
				<CartHeader>
					<h2>Meu carrinho</h2>
				</CartHeader>			
				<NothingOnCartMessage>
					<img src={sadEmoji}/>
					<h3>Não adcionou nada no carrinho ainda</h3>
					<p>Vá para o <span onClick={()=> changeRoot("home")}>Home</span> e adcione um produto clicando em "Adcionar ao carrinho"</p>
				</NothingOnCartMessage>
			</StyledCart> 
		)  	
	}else{
		return (
			<StyledCart>
				<CartHeader>
					<h2>Meu carrinho</h2>
				</CartHeader>
				<ProductsContainer>
					{	
						cartProducts.map(product => (
							<Flex1>
								<Flex2>
									<img src={product.imageUrl}/>
								</Flex2>
								<Flex3>
									<h1>{product.name}</h1>
									<p>{product.price}</p>
									<ProductPrice color={"black"}>R${product.price}</ProductPrice>
								</Flex3>
							</Flex1>
						))
					}
				</ProductsContainer>
				<TotalPriceSection>
					<TotalPriceFlex>
						<div>TOTAL</div>
						<div>R${totalPrice.toFixed(2)}</div>
					</TotalPriceFlex>
					{
						totalPrice > 10 ?
							<FreeShippingSection>
								parabéns, sua compra tem frete grátis !
							</FreeShippingSection>
						: ""
					}
				</TotalPriceSection>
				<ProductButtonSection>
	                <StyledPrimaryButton 
	                	Size={'100%'} 
	                	FontSize={'150%'} 
	                	Height={'3em'}
	                >
	               		Finalizar compra
	                </StyledPrimaryButton>
	            </ProductButtonSection>		
			</StyledCart>
	)
	}
	
}