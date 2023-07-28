import React from 'react'
import Layout from '../components/Layout/Layout'
import ItemCard from './ItemCard'
import data from './Data'
import { Box } from '@mui/material'

const Home = () => {
  return (
      <Layout>
          <Box  sx={{display:'flex',flexDirection:"row",textAlign:"center",marginTop:"20px", width:"200vh",height:"70%"}}>
              {
                  data.map((item, index) => {
                      return (
                          <ItemCard key={index}
                              item={item}
                              image={item.image}
                              name={item.name}
                              price={item.price}
                              desc={item.desc}
                          
                          />

                      )
                  })
              }
          </Box>

      </Layout>
  )
}

export default Home