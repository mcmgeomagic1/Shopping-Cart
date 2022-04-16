import {Row} from "../../Styled/Row.styled.js"
import {StyledHeader, Flex, Flex2} from './StyledHeader.styled.js'
import { FaCartPlus } from "react-icons/fa";

export default function header ({changeRoot, cartProducts}) {
	return (
		<StyledHeader>
			<Row>
				<nav>				
					<Flex>
							<span onClick={()=> changeRoot("home")}>Codeby</span>
							<span onClick={()=> changeRoot("home")}>ShoppingCart</span>
					</Flex>
					<Flex2>
						<FaCartPlus fontSize="190%" cursor="pointer" onClick={()=> changeRoot("cart")}/>
						{
							!cartProducts.length ? "" 
							: 
								<div>
									<p>{cartProducts.length}</p>
								</div>
						}						
					</Flex2>
				</nav>
			</Row>
		</StyledHeader>
	)
}