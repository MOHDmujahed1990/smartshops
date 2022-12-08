import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import SaveIcon from "@mui/icons-material/Save";

export const ServicesItem = ({ item, index, handleDelete, handleSave }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [val, setVal] = useState(item.title);
  return (
    <React.Fragment>
      {/* <Grid item xs={3}>
        <Card sx={{ bgcolor: "#E0FFFF" }}>
          <CardContent>
            <Grid container spacing={2} align="center">
              <Grid item xs={12}>
                <strong>User Id:</strong> {item.userId}
              </Grid>
              <Grid item xs={12}>
                <strong>Id:</strong> {item.id}
              </Grid>
              <Grid item xs={12}>
                <strong>Title:</strong> {item.title.slice(0, 37).trim() + "..."}
              </Grid>
              <Grid item xs={12}>
                {item.completed}
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={3} align="right">
                <Button variant="outlined">
                  <BorderColorIcon sx={{ fontSize: 30, color: "#32CD32" }} />
                </Button>
              </Grid>
              <Grid item xs={3} align="left">
                <Button variant="outlined">
                  <DeleteSweepIcon sx={{ fontSize: 30, color: "red" }} />
                </Button>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid> */}
      <Grid xs={12} align="center">
        <Card>
          <CardContent sx={{ bgcolor: "#E0FFFF" }}>
            <Grid container spacing={1}>
              <Grid item xs={1}>
                <Card
                  sx={{
                    height: 75,
                    bgcolor: item.completed ? "green" : "yellow",
                  }}
                >
                  <CardContent></CardContent>
                </Card>
              </Grid>
              <Grid item xs={5}>
                {isUpdate ? (
                  <Card sx={{ height: 75, bgcolor: "#FAEBD7" }}>
                    <CardContent>
                      <TextField
                        value={val}
                        fullWidth
                        variant="outlined"
                        label="Title"
                        onChange={(e) => setVal(e.target.value)}
                      />
                    </CardContent>
                  </Card>
                ) : (
                  <Card sx={{ height: 75, bgcolor: "#FAEBD7" }}>
                    <CardContent>{item.title}</CardContent>
                  </Card>
                )}
              </Grid>
              <Grid item xs={1}>
                <Card sx={{ height: 75, bgcolor: "#FAEBD7" }}>
                  <CardContent>{item.userId}</CardContent>
                </Card>
              </Grid>
              <Grid item xs={1}>
                <Card sx={{ height: 75, bgcolor: "#FAEBD7" }}>
                  <CardContent>
                    {item.completed ? "Completed" : "In Progress"}
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={2}>
                {isUpdate ? (
                  <Card>
                    <CardContent sx={{ bgcolor: "#FAEBD7" }}>
                      <Button
                        variant="outlined"
                        onClick={() => {
                          handleSave(index, val);
                          setIsUpdate(false);
                        }}
                      >
                        <SaveIcon sx={{ color: "#FFD700" }} />
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <Card sx={{ bgcolor: "#FAEBD7" }}>
                    <CardContent>
                      <Button
                        onClick={() => setIsUpdate(true)}
                        variant="outlined"
                      >
                        <BorderColorIcon sx={{ color: "#00FF7F" }} />
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </Grid>
              <Grid item xs={2}>
                <Card sx={{ bgcolor: "#FAEBD7" }}>
                  <CardContent>
                    <Button
                      variant="outlined"
                      onClick={() => handleDelete(index)}
                    >
                      <DeleteSweepIcon sx={{ color: "red" }} />
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <br />
      </Grid>
    </React.Fragment>
  );
};
