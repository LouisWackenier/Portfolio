import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import {makeStyles} from "@material-ui/styles"


const useStyles = makeStyles({
  particlesCanva: {
    postion: "absolute",
    opacity: "0.5"
  }
})

const Home = () => {
  const  classes = useStyles();

  return (
    <>
      <Navbar/>
      <Header/>
      <Particles
       canvasClassName={classes.particlesCanva}
        params={{
          particles:{
            line_linked:{
              "color": "ADD8E6",
            },
             number:{
                value: 100,
                density: {
                  enable: true,
                  value_area: 900
                }
             },
             color: {
               "value": ["BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#86363"]
             },
             shape: {
               type: "circle",
               stroke: {
                 width: 0,
                 color: '0000FF'
               }
             },
             size: {
               value: 8,
               random: true,
               anim: {
                 enable: true,
                 speed: 10,
                 size_min: 1,
                 sync: true
               }
             },
             opacity: {
               value: 0.1,
               random: true,
               anim: {
                 enable: false,
                 speed: 1,
                 opacity_min: 1,
                 sync: true
               }
             }
           }
        }}
        />
    </>
  );
};

export default Home;
