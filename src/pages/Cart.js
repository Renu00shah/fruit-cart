import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Button} from '@mui/material'
import{useCart} from 'react-use-cart'

const Cart = () => {
   const styles={
        center: {
           
            backgroundColor: "aliceblue",
      borderRadius:'15px',
      color:"black",
      width:"300px",
      height: "35vh",
      boxShadow:"5px 5px 10px #ccc",
                ":hover":{
                    boxShadow:"10px 10px 20px #ccc",
                }
        }
    }
  const { isEmpty,
    totalItems,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
  emptyCart
  } = useCart()
  if (isEmpty) return <h2 style={{fontSize:'30px',fontWeight:'bold'}} >Your Cart Is Empty</h2>
    


  
  return (
    <Layout>
      <Box>

        <h2 style={{fontSize:"30px"}}>Cart({totalUniqueItems}) Total Items:({totalItems})</h2>
        
        <Box sx={{display:"flex",flexDirection:"row",justifyContent:'space-evenlly'}}>
        <table >
          {
            items.map((item, index) => {
              return (
                <tr sx={styles.center} style={{ marginLeft: '20px' }} key={index}>
                  <td>
                  <img style={{height:"7rem",marginTop:'10px'}} src={item.image} alt="" />
                  <td style={{fontSize:"20px"}}>{item.name}</td>
                  <td style={{fontSize:"20px"}}>|Price:{item.price}</td>
                  <td style={{fontSize:"20px"}}>|Quantity:{item.quantity}</td>
                  <td>
                    <Button style={{margin:'5px'}} variant='contained' onClick={()=>updateItemQuantity(item.id,item.quantity +1)}>+</Button>
                    <Button style={{margin:'10px'}} variant='contained'  onClick={()=>updateItemQuantity(item.id,item.quantity -1)}>-</Button>
                    <Button variant='contained' color='error' onClick={()=>removeItem(item.id)}>Remove Item</Button>
                    </td>
                    </td>
                </tr>
              )
            })
          }

          
          </table>
          <Box style={{margin:'100px'}}>
                 <h1 style={{fontSize:"30px"}}>Total Price:{cartTotal}</h1>
                <Button style={{margin:'10px'}} variant='contained' color='error' onClick={() => emptyCart()}>Clear Cart</Button>
                    <Button variant='contained' >Pay Now</Button>
                    </Box>
          </Box>
      </Box>
    </Layout>
  )
}

export default Cart