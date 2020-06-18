import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core"
import Navbar from "./Navbar";
/*import project1 from "img.png" */

const useStyles = makeStyles({
    mainContainer: {
        background: "grey",
        height: "100%"
    },
    cardContainer: {
      maxWidth: 345,
      margin: "3rem",
      margin: "5rem auto",
    }
});

const Portfolio = () => {
    const classes = useStyles()
    return (
    <Box component="div" className={classes.mainContainer}> 
       <Navbar />
      <Grid container justify="center">
         {/* Project 1 */}
         <Grid item xs={12} sm={8} md={6}>  
         <Card className={classes.cardContainer}>
             <CardActionArea>
                <CardMedia
                components="img"
                alt="project 1"
                height="140"
                /*image={}*/
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                     project 1 N/A
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                     description
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="black">
                        Share
                    </Button>
                    <Button size="small" color="black">
                        Live Demo
                    </Button>
                </CardActions>             
             </Card>
           </Grid>
                      {/* Project 1 */}
         <Grid item xs={12} sm={8} md={6}>  
         <Card className={classes.cardContainer}>
             <CardActionArea>
                <CardMedia
                components="img"
                alt="project 1"
                height="140"
                /*image={}*/
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                     project 2 N/A
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                     description
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="black">
                        Share
                    </Button>
                    <Button size="small" color="black">
                        Live Demo
                    </Button>
                </CardActions>            
             </Card>
         </Grid>  
         {/* Project 1 */}
         <Grid item xs={12} sm={8} md={6}>  
         <Card className={classes.cardContainer}>
             <CardActionArea>
                <CardMedia
                components="img"
                alt="project 1"
                height="140"
                /*image={}*/
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                     project 3 N/A
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                     description
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="black">
                        Share
                    </Button>
                    <Button size="small" color="black">
                        Live Demo
                    </Button>
                </CardActions>            
             </Card>
         </Grid>
                  {/* Project 1 */}
                  <Grid item xs={12} sm={8} md={6}>  
         <Card className={classes.cardContainer}>
             <CardActionArea>
                <CardMedia
                components="img"
                alt="project 1"
                height="140"
                /*image={}*/
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                     project 4 N/A
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                     description
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="black">
                        Share
                    </Button>
                    <Button size="small" color="black">
                        Live Demo
                    </Button>
                </CardActions>             
             </Card>
         </Grid>
      </Grid>
    </Box>
    );
};

export default Portfolio;
