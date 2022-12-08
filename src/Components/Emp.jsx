import { CardContent, Grid,Card } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const Emp=()=>{
    const [data,setData]=useState([])
       const getData= async ()=>{
        const result= await axios.get("http://localhost:5050/emp")
          setData(result.data)
       }

       useEffect(()=>{
          getData()
       },[])
  return (
    <React.Fragment>
       <Grid container spacing={2}>
        {data.map((item)=>
         <Grid item xs={3}>
            <Card sx={{bgcolor:"#00FF7F"}}>
                <CardContent>
                    {item}
                </CardContent>
            </Card>
         </Grid>
         )}
       </Grid>
    </React.Fragment>
  )
};
