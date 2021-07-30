import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
import UserListings from "./UserListings";
import { useDispatch, useSelector } from "react-redux";
import { getUserProducts } from "../../store/products";
import { getUserOrders } from "../../store/orders";
import { getUserOrderProducts } from "../../store/order_products";
import "./index.css"

function UserPage() {
  // const [user, setUser] = useState({});
  // Notice we use useParams here instead of getting the params
  // From props.
  // const { userId }  = useParams();
  const { session, products, orders, order_products } = useSelector(state => state)
  const dispatch = useDispatch()
  const user = session.user;
  const userProducts = Object.values(products);
  const userOrders = Object.values(orders);
  const userOrderProducts = Object.values(order_products)
  console.log('user ORDERS', userOrders)
  console.log('ORDER PRODUCTS R U WORKING ?', userOrderProducts)

  const idArray = []
  userOrders.map((userOrder) => {
    idArray.push(userOrder.id)
  })

  console.log(idArray)

  useEffect(() => {
    dispatch(getUserProducts(user.id));
    dispatch(getUserOrders(user.id));
    for (let i = 0; i < idArray.length; i++) {
      dispatch(getUserOrderProducts(idArray[i]))
    }
  }, [dispatch, user.id, idArray]);

  // useEffect(() => {
  //   if (!userId) {
  //     return
  //   }
  //   (async () => {
  //     const response = await fetch(`/api/users/${userId}`);
  //     const user = await response.json();
  //     setUser(user);
  //   })();
  // }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <>
      <div className='welcome-container'>
        <h1 className='welcome'>Hello, {user.username}</h1>
        <div>Account No. {user.id}</div>
        <div>Email: {user.email}</div>
      </div>
      <br/>
      <h2 className='userPage__header'>Here's What You're Selling!</h2>
      <div className='userPage__container'>
        {userProducts?.reverse().map(product => <UserListings key={product.id} product={product}/>)}
      </div>
      <br/>
      <br/>
      <h2 className='userPage__header'>Here's What You Bought!</h2>
      <div className='userPage__container'>
        {userProducts?.reverse().map(product => <UserListings key={product.id} product={product}/>)}
      </div>
    </>
  );
}
export default UserPage;
