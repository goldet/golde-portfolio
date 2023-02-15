import { Inter } from "@next/font/google";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import DirectionsIcon from "@mui/icons-material/Directions";


function handleDialogOpen (e) {
  console.log(e)
} 
const inter = Inter({ subsets: ["latin"] });
const actions = [
  { icon: <Diversity1Icon sx={{ bgcolor: "#DAB7F9" }} />, name: "Collaborators", action: handleDialogOpen(), operation: "collaborators" },
  { icon: <DesktopMacIcon sx={{ bgcolor: "#369CEE" }} />, name: "Tech Stack",  action: handleDialogOpen(), operation: "techstack" },
  { icon: <DirectionsIcon sx={{ bgcolor: "#92CC41" }} />, name: "Go to Project",  action:  handleDialogOpen(), operation: "go"  },
];

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen2 = () => setOpen(true);
  const handleClose2 = () => setOpen(false);


  //handler function
 function handleTap (e,operation){
  e.preventDefault();
  if(operation=="collaborators"){
    console.log("one")
  }else if(operation=="techstack"){
    console.log("two")
  }else if(operation=="go"){
    console.log("three")
  }
  
};

  return (
    <>

      
   
      <div className="portfolioGrid">
        <div className="img nes-container is-centered is-rounded is-dark">
          {" "}
          {/* with-title */}
          <p className="portfolioTitle title">Zero-Waste</p>
          <p className="portfolioDescription">
            This app attempts to reduce food waste while building community.
          </p>
          <Box className="box">
            <SpeedDial

              /*  className="speedDialBox" */
              ariaLabel="SpeedDial"
              className="SpeedDial"
              sx={{
                position: "absolute",
                bottom: 16,
                right: 16,
                color: "#F3ABCB",
              }}
              icon={<SpeedDialIcon />}
              onTap={handleTap}
              onClose={handleClose}
              onOpen={handleOpen}
              open={open}
              FabProps={{
                sx: {
                  color: "none",
                  bgcolor: "#F3ABCB",
                  "&:hover": {
                    bgcolor: "#F3ABCB",
                  },
                },
              }}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  className="SpeedDial"
                  sx={{ color: "primary" }}
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={handleClose}
                  onTap={(e) => {
                    handleTap(e.action.operation)
                  }}
                  FabProps={{
                    sx: {
                      color: "none",
                      bgcolor: "none",
                      "&:hover": {
                        bgcolor: "none",
                      },
                    },
                  }}
                />
              ))}
            </SpeedDial>
          </Box>
        </div>

        <div className="img nes-container is-centered is-rounded is-dark">
          {" "}
          {/* with-title */}
          <p className="portfolioTitle title">Ben Schroeder Poetry</p>
          <p className="portfolioDescription">
           This web app was made to showcase the work of poet and essayist, Ben Shroeder.
            
          </p>
          <Box className="box">
            <SpeedDial
              /*  className="speedDialBox" */
              ariaLabel="SpeedDial"
              className="SpeedDial"
              sx={{
                position: "absolute",
                bottom: 16,
                right: 16,
                color: "#F3ABCB",
              }}
              icon={<SpeedDialIcon />}
              onClos2e={handleClose2}
              onOpen2={handleOpen2}
              open2={open2}
              FabProps={{
                sx: {
                  color: "none",
                  bgcolor: "#F3ABCB",
                  "&:hover": {
                    bgcolor: "#F3ABCB",
                  },
                },
              }}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  className="SpeedDial"
                  sx={{ color: "primary" }}
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={handleClose2}
                  FabProps={{
                    sx: {
                      color: "none",
                      bgcolor: "none",
                      "&:hover": {
                        bgcolor: "none",
                      },
                    },
                  }}
                />
              ))}
            </SpeedDial>
          </Box>
        </div>
      </div>
   
    </>
  );
};

export default Projects;
