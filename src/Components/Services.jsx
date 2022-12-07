import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ServicesItem } from "./ServicesItem";

export const Services = () => {
  const [data, setData] = useState([]);
  const [origdata, setOrigdata] = useState([]);
  const [text, setText] = useState("");

  const getData = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setData(result.data);
    setOrigdata(result.data);
  };
  const handleStatus = (isCompleted) => {
    const filtered = origdata.filter((item) => item.completed === isCompleted);
    setData(filtered);
  };
  const handleDelete = (index) => {
    const Delete = data.filter((item, ind) => ind !== index);
    // const Delete=origdata.filter((item,ind)=>ind!==index)
    setData(Delete);
    setOrigdata(Delete);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filtered1 = origdata.filter((item) =>
      item.title.toUpperCase().includes(text.toUpperCase())
    );
    setData(filtered1);
  }, [text]);
  return (
    <React.Fragment>
      <Card sx={{ bgcolor: "#EEE8AA" }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                onChange={(e) => setText(e.target.value)}
                variant="outlined"
                fullWidth
                label="Explore here..."
              />
            </Grid>
            <Grid item xs={2}>
              <Card sx={{ height: 55 }}>
                <CardContent>{origdata.length}</CardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Button
                sx={{ height: 55 }}
                variant="contained"
                fullWidth
                color="warning"
                onClick={() => handleStatus(false)}
              >
                In progress
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                sx={{ height: 55 }}
                onClick={() => handleStatus(true)}
                variant="contained"
                fullWidth
                color="success"
              >
                Completed
              </Button>
            </Grid>
          </Grid>
          <br />
          <br />
          <Grid container spacing={2}>
            {data.map((item, index) => (
              <ServicesItem
                item={item}
                index={index}
                handleDelete={handleDelete}
              />
            ))}
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
