import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import{FaShoppingCart} from 'react-icons/fa'

const Header = () => {
    const styles = {
        header: {
            display: 'flex',
            justifyContent:'space-between',
            alignItems: 'center',
            padding: '25px',
            // borderBottom: '1px solid #ccc',
            backgroundColor: 'black',
            
            color: 'white',
            boxShadow:"5px 5px 10px #ccc",
                ":hover":{
                    boxShadow:"10px 10px 20px #ccc",
                }
        }
    }
  return (
      <>
          <Box sx={styles.header}>
              <Box>
                  <h4 style={{fontSize:'30px'}}><FaShoppingCart/> Renu's Cart</h4>
              </Box>

              <Box >
                  <ul style={{display:'flex',flexDirection:"row"}}>
                      <Link to='/' style={{fontSize:'30px',marginRight:"25px",color:'white'}} >Home</Link>
                      <Link to='/cart' style={{fontSize:'30px',color:'white',marginRight:"25px"}}>Cart</Link>
                  </ul>
              </Box>
          </Box>
      
      
      </>
  )
}

export default Header