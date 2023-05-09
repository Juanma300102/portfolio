import { useTheme } from "@emotion/react";
import { Box, Typography, Divider } from "@mui/material";

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
      }}
    >
      <Typography
        component={"h1"}
        fontSize={"45px"}
        fontWeight={"bold"}
        color={theme.schemes.light.onPrimary}
      >
        About me
      </Typography>
      <Divider sx={{ width: "100%", bgcolor: theme.schemes.light.onPrimary }} />
      <Typography
        component={"p"}
        fontSize={"14px"}
        fontWeight={"regular"}
        color={theme.schemes.light.onPrimary}
      >
        I’m from Argentina, born in January 2002. Since I’m a child, I really
        like all computer related stuff. As a young boy my dream was to be like
        Iron Man.
      </Typography>
      <Typography
        component={"p"}
        fontSize={"14px"}
        fontWeight={"regular"}
        color={theme.schemes.light.onPrimary}
      >
        Now, I’m currently working on my developer journey. I learned the core
        concepts and fundamentals of backend, and starting with Infrastructure
        and Frontend as well.
      </Typography>
      <Typography
        component={"p"}
        fontSize={"14px"}
        fontWeight={"regular"}
        color={theme.schemes.light.onPrimary}
      >
        After a training journey and a couple of projects working with the
        cloud, now I’m AWS Certified Cloud Practitioner and I have been working
        as a DevOps in some of the projects I was part of. Currently going for
        an Architect Associate certification level.
      </Typography>
      <Typography
        component={"p"}
        fontSize={"14px"}
        fontWeight={"regular"}
        color={theme.schemes.light.onPrimary}
      >
        Also, I really care about communication skills and teamwork
        capabilities. I work every day on these aspects of myself to be a good
        team mate and a pro efficient worker on all the projects I can be part
        of.
      </Typography>
    </Box>
  );
};
