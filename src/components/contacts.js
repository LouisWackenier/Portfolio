import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from  "@material-ui/icons/Send";
import Navbar from "./Navbar";
import { Translate } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  form: {
    top:  "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute"
    },
    button: {
      marginTop: "1rem",
      color: "silver",
      borderColor: "silver",
    },
}));

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "silver",
        },
        "& label": {
           color: "#c0c0c0"
        },
        "& .MuiOutlinedInput-root": {
          "& fields": {
              borderColor: "silver",
          },
          "&:hover fieldset": {
              borderColor: "silver",
          },
          "&.Mui-focused fieldset": {
              borderColor: "silver",
          },
        },
    },
})(TextField);

const Contacts = () => {
  
    const classes = useStyles();

    return (
      <Box components="div" style={{background: "grey", height: "100vh"}}>
        <Navbar/>
         <Grid container justify="center">
           <Box component="form" className={classes.form}>
              <Typography variant="h5" style={{color: "silver", textAlign: "center", textTransform: "uppercase"}}>contact me.</Typography>
              <InputField 
                fullWidth={true} 
                label="Name" 
                variant="outlined" 
                inputProps= {{style: { color: "silver" } }}
                margin="dense"
                size="medium"
               />
               <br />

              <InputField 
                fullWidth={true} 
                label="Email" 
                variant="outlined" 
                inputProps= {{style: { color: "silver" } }}
                margin="dense"
                size="medium"
              />
             <br />

              <InputField 
                fullWidth={true}
                label="Company name"
                variant="outlined"
                inputProps= {{style: { color: "silver" } }}
                margin="dense"
                size="medium"
              />
              <br/>
              <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
                  contact me
              </Button>
            </Box>
         </Grid>
    </Box>
  );
};

export default Contacts
