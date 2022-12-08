import { Button, Card,CardContent } from "@mui/material";
import React from "react";
import {Link} from "react-router-dom"
import { Branches } from "./Branches";
import { Cars } from "./Cars";
import { Emp } from "./Emp";


export const Home=()=>{
    return(
        <React.Fragment>
            <Card sx={{bgcolor:"#EEE8AA"}}>
                <CardContent>
                <br />
                <br />
                <Emp/>
                <br />
                <br />
                <Cars/>
                <br />
                <br />
                <Branches/>
                <br />
                <br />
                <Link to="/contact">
                   <Button variant="outlined" >Go to Contact</Button>
                </Link>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Link to="/help">
                   <Button variant="outlined" >Go to Help</Button>
                </Link>
                
                </CardContent>
            </Card>
        </React.Fragment>
    )
}
