import React from 'react'
import { Grid,Card,CardContent,Rating,Badge } from '@mui/material'

export const ShoppingItem=({item})=>{
  return (
        <Grid item xs={3}>
           <Card sx={{bgcolor:"#E0FFFF"}}>
             <CardContent>
                <Grid align="center" container spacing={2}>
                  <Grid item xs={12}>
                     <Badge badgeContent={item.price+" "+"$"} max={9999} color="primary">
                    <img src={item.image} width="120px" height={"160px"} alt="" />
                    </Badge>
                  </Grid>
                  <Grid item xs={12}>
                   <strong>{item.title.slice(0,19).trim()+"..."}</strong> 
                  </Grid>
                  <Grid item xs={12}>
                     {item.description.slice(0,60).trim()+"..."}
                  </Grid>
                  <Grid item xs={8}>
                     <Rating value={item.rating.rate}/>
                  </Grid>
                  <Grid item xs={4} align="left">
                     {`(${item.rating.count})`}
                  </Grid>
                </Grid>
            </CardContent>
            </Card>
        </Grid>
  )
}
