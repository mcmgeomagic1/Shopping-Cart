import styled from 'styled-components'

export const StyledCart = styled.div`
	box-shadow: 3px 3px 12px rgba(0,0,0,0.1);
	width: 600px;
    background: #fff;
    border-radius: 15px;
    margin: 0 auto;
    padding-bottom: ${(props)=> props.paddingBottom};

    @media(max-width: ${({theme}) => theme.mobile}) {
        width: 100%;
    }
`

export const CartHeader = styled.div`
    padding: 1.2em 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    text-align: center;
    margin-bottom: 2em; 

`
export const ProductsContainer = styled.div`
    height: 400px;
    overflow-y: scroll;
    
    &::-webkit-scrollbar {
      width: 8px;
      margin-right: 2em;
    }

    &::-webkit-scrollbar-thumb {
        background: #3B74F2;
        border-radius: 15px;
    }
`

export const Flex1 = styled.div`
    display: flex;
    margin-bottom: 2em;
    height: 140px;
`


export const Flex2 = styled.div`
    flex: 30%;
    display: flex;
    justify-content: center;
    align-Items: center;

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex: 50%;
    }

    img{
        width:80%; 
        height: 100%;
        border: 1px solid rgba(0,0,0,0.1);
        margin: 0 auto;
    }

    
`

export const Flex3 = styled.div`
    flex: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0.8em 0 0;

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex: 50%;
    }


    h1 {
        font-size: 120%;
        margin-bottom: 1em;

        @media(max-width: ${({theme}) => theme.mobile}) {
            font-size: 100%;
        }
    }

    p{
        opacity: 0.7;
        margin-bottom: 0.1em;
    }
    
`

export const TotalPriceSection = styled.div`

    border: 1px solid rgba(0,0,0,0.1);
    padding: 2em 1.2em;

    
`

export const TotalPriceFlex = styled.div`
    display: flex;
    div {
        font-weight: bold;
        font-size: 140%; 

        &:last-child {
            flex: 50%;
            text-align: right;
        }
    }
`

export const  FreeShippingSection = styled.div`
    width: 80%;
    border-radius: 50px;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-Items: center;
    background: #C7FFA6;
    margin: 1em auto 0 auto;
    transition: all ease-in-out 0.2s;
    font-weight: bold;
    color: #257A00;

    @media(max-width: ${({theme}) => theme.mobile}) {
        width: 100%;
        font-size: 90%;
        margin: 1.2em auto 0em auto;
    }
`

export const NothingOnCartMessage = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 2em 1em;
    text-align: center;
    border-radius: 15px;
    box-shadow: 3px 3px 12px rgba(0,0,0,0.1);
    background: #F8F3D6;


    img {
        opacity: 0.7;
        width: 10%;
        margin-bottom: 1em;
    }
    h3{
        font-size: 110%;
        margin-bottom: 0.5em;
        color: #9B783D;
    }

    p {
        font-size: 80%;

        span{
            font-weight: bold;
            cursor: pointer;
        }
    }

`