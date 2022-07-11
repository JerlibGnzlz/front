import { useSelector, useDispatch } from "react-redux";
import { getAdminOrderDetail } from "../Redux/action";
import { useEffect} from "react";
import { useParams,useNavigate} from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./OrdersAdminDetail.css";
import {Grid} from "@mui/material"

export default function OrdersAdminDetail() {
  const navigate = useNavigate();
  const { user} = useAuth()
  const dispatch = useDispatch();
  const Order = useSelector((state) => state.adminOrderDetail);
  const { id } = useParams();
  

  // console.log(productDetail, "prodDetail");
  useEffect(() => {
    if(user){
    dispatch(getAdminOrderDetail(user.email ,id));
    }
  }, [dispatch, user]);

  console.log(Order)
  return (
    <Grid container spacing={3}>
    <Grid item xs> User Info
        <div>User Id: {Order[0]?.userId}</div>
        <div>User Email: {Order[0]?.user.email}</div>
        <div>Name: {Order[0]?.user.names} Surname: {Order[0]?.user.lastNames}</div>
        <div>Phone: {Order[0]?.user.phone} Birth date: {Order[0]?.user.birthDate}</div>
    </Grid>
    <Grid item xs={6}> Product Info
        {
            Order[0]?.orderItems.map(o => {
                return(
                    <ul key={o.id} className="product-detail">
                        <li>Name: {o.product.name}</li>
                        <li>Quantity: {o.quantity}</li>
                        <li>Brand: {o.product.brand.name}</li>
                        <li>Price: {o.product.price} USD</li>
                    </ul>
                )
            })
        }
        <div>Total: {parseFloat(Order[0]?.total).toFixed(2)} USD</div>
    </Grid>
    <Grid item xs> Order Info
        <div>Id: {Order[0]?.id}</div>
        <div>State: {Order[0]?.state}</div>
        <div>Date: {Order[0]?.date}</div>
    </Grid>
    </Grid>
  );
}