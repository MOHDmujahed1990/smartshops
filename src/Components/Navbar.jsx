import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { useState } from "react";
import {Link} from "react-router-dom"

export const Navbar=()=>{
    const [ex,setEx]=useState(["Home","Services","Contact","About Us"])
    return(
        <React.Fragment>
            <Card sx={{bgcolor:"#EEE8AA"}}>
             <CardContent>
            <Grid container spacing={2}>
                {/* {
                    ex.map((item)=>
                    <Grid item xs={2} sx={{padding:2}}>
                        <Link to={`/${item.toLowerCase()}`}>
                            <Button variant="contained" fullWidth color="secondary">
                                {item}
                            </Button>
                        </Link>
                    </Grid>
                    )
                } */}
                <Grid item xs={2}>
                    <Link to="/home">
                        <Button variant="contained" fullWidth color="secondary">
                            Home
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={2}>
                    <Link to="/services">
                        <Button variant="contained" fullWidth color="secondary">
                            Services
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={2}>
                    <Link to="/shopping">
                        <Button variant="contained" fullWidth color="secondary">
                            Shopping
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={2}>
                    <Link to="/contact">
                        <Button variant="contained" fullWidth color="secondary">
                            Contact
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={2}>
                    <Link to="/aboutus">
                        <Button variant="contained" fullWidth color="secondary">
                            About us
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={2}>
                    <Link to="/help">
                        <Button variant="contained" fullWidth color="secondary">
                            Help
                        </Button>
                    </Link>
                </Grid>
            </Grid>
               </CardContent>
            </Card>
        </React.Fragment>
    )
}