import { useCart } from "../../Context"
import { CartList } from "./components/CartList"
import { CartEmpty } from "./components/Cartempty"

export const CartPage = () => {

    const {cartList} = useCart();
    return (
      <main>   

        {cartList.length ? <CartList /> : <CartEmpty />}       
      </main>
    )
  }