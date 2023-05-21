import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

export default () => {
  const theme: any = useTheme();
  return (
    <Box
      sx={{
        width: "234px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: theme.schemes.light.onPrimaryContainer,
        borderRadius: 2,
        overflow: "clip",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          paddingX: 2,
          display: "flex",
          alignItems: "end",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 31, 42, 1)), url('https://drive.google.com/uc?id=1TW8aWotRgaeb1f-mOn41bRJ66yrCCisP')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          component={"h2"}
          fontSize={"32px"}
          fontWeight={500}
          color={theme.schemes.light.onPrimary}
        >
          WagHotels
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          padding: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          component={"p"}
          fontSize={"14px"}
          color={theme.schemes.light.onPrimary}
        >
          Wag Hotels was founded in 2005 by pet lovers who couldn't find a
          suitable place to leave their pets during business trips. What started
          as a personal quest has grown into the ultimate boarding and daycare
          resort for dogs and cats.
        </Typography>
      </Box>
    </Box>
  );
};
