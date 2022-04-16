import styled from 'styled-components'

export const StyledHeader = styled.header`
	height: 4em;
	width: 100%;
	box-shadow: 3px 3px 12px rgba(0,0,0,0.2);
	display: flex;
	align-Items: center;
	background: #fff;
	position: fixed;
	z-index: 1;


	nav {
		display: flex;
		height: 100%;
	}

	span {
		font-weight: bold;
		text-transform: uppercase;
		font-size: 150%;
		cursor: pointer;

		&:last-child  {
			color: #3B74F2;
		}

		@media(max-width: ${({theme}) => theme.mobile}) {
			font-size: 110%;
		}
	}


`

export const Flex = styled.div`
	flex: 50%;
	display: flex;
	align-Items: center;
`

export const Flex2 = styled.div`
	display: flex;
	justify-content: flex-end;
	flex: 50%;
	position: relative;

	div{
		background: red;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-Items: center;
		padding: 0.5em;
		width: 18px;
		height: 18px;
		position: absolute;
		right: -0.6em;
		top: -0.4em;

		p{
			font-size: 70%;
			color: #fff;
			opacity: 1;
		}
	}

	
`