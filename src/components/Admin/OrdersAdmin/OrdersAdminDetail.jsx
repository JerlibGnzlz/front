import { useSelector, useDispatch } from "react-redux";
import { getAdminOrderDetail } from "../../Redux/action";
import { useEffect} from "react";
import { useParams,useNavigate} from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
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
    <Grid item xs> Información del Usuario
        <div>Id Usuario: {Order[0]?.userId}</div>
        <div>Email Usuario: {Order[0]?.user.email}</div>
        <div>Nombre: {Order[0]?.user.names} Surname: {Order[0]?.user.lastNames}</div>
        <div>Número de Teléfono: {Order[0]?.user.phone} Fecha de Nacimiento: {Order[0]?.user.birthDate}</div>
    </Grid>
    <Grid item xs={6}> Información del Producto
        {
            Order[0]?.orderItems.map(o => {
                return(
                    <ul key={o.id} className="product-detail">
                        <li>Nombre: {o.product.name}</li>
                        <li>Cantidad: {o.quantity}</li>
                        <li>Marca: {o.product.brand.name}</li>
                        <li>Precio: {o.product.price} AR$</li>
                    </ul>
                )
            })
        }
        <div>Total: {parseFloat(Order[0]?.total).toFixed(2)} AR$</div>
    </Grid>
    <Grid item xs> Información de la Orden
        <div>Id: {Order[0]?.id}</div>
        <div>Estado: {Order[0]?.state}</div>
        <div>Fecha: {Order[0]?.date}</div>
    </Grid>
    </Grid>
  );
}