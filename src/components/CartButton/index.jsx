import { ContainerButton } from "./styles";
import Cart from '../../assets/cart-button.svg'

export function CartButton({...props}) {
    return(
        <ContainerButton {...props}>
            <img src={Cart} alt="cesta de compras" />
        </ContainerButton>
    )
}