import { CardContent, Grid, Card } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const Cars = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    const result = await axios.get("http://localhost:5050/cars");
    setdata(result.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {data.map((item) => 
          <Grid item xs={3}>
            <Card sx={{bgcolor:item.color}}>
              <CardContent>
                {item.brand} - {item.model}
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
};
