import { Box } from "@mui/material";
import CarouselNav from "./NavCarousel";
import ProjectCard from "./ProjectCard";

export default () => {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "-webkit-box",
          overflow: "scroll",
          gap: 2,
        }}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Box>
      <CarouselNav />
    </Box>
  );
};
