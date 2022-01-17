import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Paper,

} from "@material-ui/core";

import { 
  makeStyles,

} from "@material-ui/core/styles"

import { NODE_ENV } from "../utils/environment";

// This function is made to test nft_mint contract function.
// import { test_nft_mint } from "../utils/test";

const DEFAULT_ACCOUNT = NODE_ENV == "development" ? "johnq.testnet" : "johnq.near"
  
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    textAlign: 'center',
  }
}));

export default function Home() {
  const classes = useStyles();
  const [account, setAccount] = useState("");
  // const [account, setAccount] = useState("proofofattedanceplayground.testnet.near");
  // const account = "proofofattedanceplayground.testnet.near";
  const location = useLocation(); 
  // const onKeyDown = (event) => {
  //   const value = event.target.value.length ? event.target.value : DEFAULT_ACCOUNT;
  //   console.log('value', value);
  //   setAccount(value);
  //   // TODO: Need to find a way to setAccount when user uses browser prefill.
  //   if(event.key === "Enter") {
  //     console.log(`Hitting Enter navigate to BadgesList with corresponding Account Name from input text${event.target.value}`)
  //   }
  //   if(event.key === "Unidentified") {
  //     console.log("Prefill happening");
  //   }
  // }

  // Cleans up the the input field when navigating out of /home
  useEffect(() => {
     setAccount("") 
  }, [location])

  return (
    <Box className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.title}>
          <Typography variant="h2">Verify attendance with Event Cred</Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <TextField id="standard-basic" label="NEAR Account Name" onChange={(event)=> setAccount(event.target.value)} 
            // onKeyDown={onKeyDown}
            />
          </Paper>
        </Grid>
        
        {/* Below is two column grid */}
        
        {/* column 1 */}
        <Grid item xs={6}>
         <Paper className={classes.paper}>
           <Link to="/new">
             <Button>Create New Badges</Button>
           </Link>
         </Paper>
        </Grid>
        
        {/* column 2 */}
        <Grid item xs={6}>
         <Paper className={classes.paper}>
           <Link to={`/badges/${account}`}>
             <Button disabled={!(account.length)}>View Your Badges</Button>
           </Link>
         </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}