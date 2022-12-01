import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const CardSkeleton = ({ rows = 1 }) => {
  const rowArray = [];
  for (let i = 0; i < rows; i++) {
    rowArray.push(rows);
  }
  console.log(rowArray);
  return (
    <Box sx={{marginTop: "2rem"}}>
      {rowArray.map((row, i) => (
       <Box key={i} sx={{marginBottom: "1rem"}}>
         <Skeleton
        sx={{ bgcolor: '#d3d3d3' }}
        variant="rectangular"
        width={"100%"}
        height={218}
        animation="wave"
      />
       </Box>
      ))}
    </Box>
  );
};

export default CardSkeleton;
