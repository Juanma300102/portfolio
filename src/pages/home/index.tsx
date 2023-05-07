import { Box, Divider, Typography, useTheme } from "@mui/material";
import PythonIcon from "../../assets/mdi_language-python.svg";
import TypescriptIcon from "../../assets/mdi_language-typescript.svg";
import JavascriptIcon from "../../assets/mdi_language-javascript.svg";
import AwsIcon from "../../assets/mdi_aws.svg";

export default () => {
  const theme: any = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: 3,
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Typography
        variant="h1"
        fontWeight={"bold"}
        fontSize={45}
        color={theme.schemes.light.onPrimary}
      >
        Juan Martin Pedrozo
      </Typography>
      <Divider sx={{ width: "100%", bgcolor: theme.schemes.light.onPrimary }} />
      <Typography
        variant="h2"
        fontWeight={"light"}
        fontSize={24}
        color={theme.schemes.light.onPrimary}
      >
        Cloud Architect and Backend Developer
      </Typography>
      <Box sx={{ display: "flex", gap: 2, paddingY: 1, width: "100%" }}>
        <img src={PythonIcon} />
        <img src={TypescriptIcon} />
        <img src={JavascriptIcon} />
        <img src={AwsIcon} />
      </Box>
    </Box>
  );
};
