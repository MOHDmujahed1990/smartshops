import { Card, CardContent, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const Branches = () => {
    const [data,setData]=useState([])
      const getData= async()=>{
        const result= await axios.get("http://localhost:5050/branches")
        setData(result.data)
      }
       
      useEffect(()=>{
        getData()
      },[])

  return (
    <React.Fragment>
        <Grid container spacing={2}>
            {
               data.map((item)=>
               <Grid item xs={4}>
                <Card sx={{bgcolor:"#ADD8E6"}}>
                    <CardContent>
                        {item.name}-{item.city}
                    </CardContent>
                </Card>
               </Grid>
               )
            }
        </Grid>
    </React.Fragment>
  )
};
