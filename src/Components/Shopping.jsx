import { Card, CardContent, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ShoppingItem } from './ShoppingItem'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

export const Shopping=()=>{
    const [data,setData]=useState([])
    const [text,setText]=useState("")
    const [origdata,setOrigdata]=useState([])
     const getData= async ()=>{
        const result= await axios.get("https://fakestoreapi.com/products")
        setData(result.data)
        setOrigdata(result.data)
     };
       useEffect(()=>{
          const filtered=origdata.filter((item)=>item.title.toUpperCase().includes(text.toUpperCase())
          );
          setData(filtered)
       },[text])

      useEffect(()=>{
         getData()
      },[])
  return (
        <React.Fragment>
            <Card sx={{bgcolor:"#EEE8AA"}}>
                <CardContent>
                    <Grid container spacing={1}>
                    <Grid item xs={2} align="right">
                        <TravelExploreIcon sx={{color:"#0000CD",height:55,fontSize:70}}/>
                    </Grid>
                        <Grid item xs={8}>
                            <TextField onChange={(e)=>setText(e.target.value)} label="Explore here...." variant="outlined" fullWidth/>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid> <br />
                    <Grid container spacing={2}> 
                    {
                        data.map((item)=>
                          <ShoppingItem item={item}/>
                        )
                    }
                    </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
  )
}
