import styled from 'styled-components'

export const StyledPrimaryButton = styled.button`
	padding: 1em 1em;
	font-weight: bold;
	background: #3B74F2;
	color: #fff;
	border: 0;
	border-radius: 10px;
	box-shadow: 3px 4px 12px rgba(0,0,0,0.1);
	cursor: pointer;
	width: ${(props)=> props.Size};
	height: ${(props)=> props.Height};
	font-size: ${(props)=> props.FontSize};

	@media(max-width: ${({theme}) => theme.mobile}) {
         font-size: 100%;
    }

	
`

export const StyledSecondaryButton = styled.button`
	padding: 1em 1em;
	font-weight: bold;
	background: #fff;
	color: #000;
	border: 1px solid rgba(0,0,0,0.1);
	border-radius: 5px;
	cursor: pointer;
	width: 100%;
	&:hover {
		box-shadow: 3px 4px 12px rgba(0,0,0,0.1);
	}
	&:active {
		opacity: 0;
	}
	transition: all ease-in 0.1s;

	@media(max-width: ${({theme}) => theme.mobile}) {
         font-size: 100%;
    }
`