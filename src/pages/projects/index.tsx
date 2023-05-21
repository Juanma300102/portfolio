import { useTheme } from "@emotion/react";
import { Typography, Box, Divider } from "@mui/material";
import ProjectsCarousel from "@/pages/projects/components/ProjectsCarousel";

export default () => {
  const theme: any = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        padding: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        height: "100%",
      }}
    >
      <Typography
        component={"h1"}
        fontSize={"45px"}
        fontWeight={"bold"}
        color={theme.schemes.light.onPrimary}
      >
        Projects
      </Typography>
      <Divider sx={{ width: "100%", bgcolor: theme.schemes.light.onPrimary }} />
      <ProjectsCarousel />
    </Box>
  );
};
