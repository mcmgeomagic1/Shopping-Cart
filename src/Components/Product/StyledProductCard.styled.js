import styled from "styled-components"

export const StyledProductCard = styled.div`
	box-shadow: 3px 3px 12px rgba(0,0,0,0.1);
	width: 100%;
    height: 380px;
    background: #fff;
    border-radius: 15px;

    @media(max-width: ${({theme}) => theme.mobile}) {
         height: 450px;
    }

`

export const ProductCardBackground = styled.div`
	height: 50%;
	display: flex;
	justify-content: center;

	@media(max-width: ${({theme}) => theme.mobile}) {
         height: 40%;
    }

	img{
		width: 80%;
		height: 100%;

		@media(max-width: ${({theme}) => theme.mobile}) {
         	width: 60%;
    	}
	}



`

export const ProductCardBody = styled.div`
	padding: 1em 1em;
	height: 105px;
`

export const ProductTitle = styled.h1`
	font-size: 100%;
	margin-bottom: 1em;
`

export const ProductPrice = styled.span`
	font-size: 100%;
	color: ${(props)=> props.color};
	font-weight: bold;
`

export const ProductButtonSection = styled.div`
	display: flex;
	grid-gap: 1em;
	padding:1em 1em;

	@media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
    }

`