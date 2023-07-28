import { Box, Button } from '@mui/material'
import React from 'react'
import { useCart } from 'react-use-cart'
// import { Toast } from 'react-hot-toast'
// import Layout from '../components/Layout/Layout'

const ItemCard = (props) => {
    const {addItem} =useCart()
  return (
      <>
          <Box >
              <Box >
                  <img style={{width:'60%',minHeight:"60%"}} src={props.image} alt="" />
                  <h1>{ props.name}</h1>
                  <h2>{ props.price}</h2>
                  <h3>{ props.desc}</h3>
                  <Button onClick={()=>addItem(props.item)} style={{margin:'10px'}} variant='contained'>Add To Cart</Button>
              </Box>
          </Box>
      
      
      
      </>
  )
}

export default ItemCard