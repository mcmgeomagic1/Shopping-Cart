
import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`

	@import url('https://fonts.google.com/specimen/Poppins');
	
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body,html {
		width: 100%;
		height: 100vh;
		background: #D1D8E5;
		color: #000;
		font-size: 17px;
		font-family: 'Poppins', sans-serif;
		overflow-x: hidden;
	}

	section{	
		padding:6.4em 0;
		display: grid;
		grid-gap: 2em;
		justify-content: space-between;
		grid-template-columns: repeat(3, 2fr);

		@media(max-width: ${({theme}) => theme.tablet}) {
			grid-template-columns: repeat(2, 2fr);
		} 
		

		@media(max-width: ${({theme}) => theme.mobile}) {
			padding: 8em 0;
			grid-template-columns: repeat(1, 2fr);
		}
		@media(max-width: ${({theme}) => theme.smallerDevices}) {
			grid-gap: 2.2em;
		}
	}

	img{
		width: 100%;
		object-fit: cover;
	}

	p {
		opacity: 0.7
	}

`

export default GlobalStyles