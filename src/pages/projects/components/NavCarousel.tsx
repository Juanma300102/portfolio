import { Box } from "@mui/material";
import rightArrow from "@/assets/carousel/circle-arrow-right.svg";
import leftArrow from "@/assets/carousel/circle-arrow-left.svg";

export default () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <img src={leftArrow} alt="left arrow" />
      <img src={rightArrow} alt="right arrow" />
    </Box>
  );
};
