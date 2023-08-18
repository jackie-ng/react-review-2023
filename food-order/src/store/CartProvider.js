import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item); //concat vs. push: concat create a new array => better cause we don't want to change the original state
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amouunt;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  return defaultCartState;
}

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemToCartHandler = item => {
    dispatchCartAction({type: 'ADD', item: item});
  }

  const removeItemFromCartHandler = id => {
    dispatchCartAction({type: 'REMOVE', id: id});

  }
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }
  return <CartContext.Provider  value={cartContext}>
    {props.children}
  </CartContext.Provider>;
}

export default CartProvider;
