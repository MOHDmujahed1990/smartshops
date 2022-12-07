import { Button, Card,CardContent } from "@mui/material";
import React from "react";
import {Link} from "react-router-dom"


export const Home=()=>{
    return(
        <React.Fragment>
            <Card>
                <CardContent>
                <h1>My Home...</h1>
                <br />
                <br />
                <br />
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
