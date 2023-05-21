import { useTheme } from "@emotion/react";
import { Box, Typography, Divider, TextField, SxProps } from "@mui/material";

export default () => {
  const theme: any = useTheme();

  const inputStyle: SxProps = {
    bgcolor: theme.schemes.light.onPrimaryContainer,
    borderRadius: "9px",
    "& label.MuiFormLabel-root": {
      color: theme.schemes.light.primaryContainer,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.schemes.light.onPrimaryContainer,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.schemes.light.primaryContainer,
      },
    },
  };

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
        Contact me
      </Typography>
      <Divider sx={{ width: "100%", bgcolor: theme.schemes.light.onPrimary }} />
      <TextField sx={inputStyle} label="Your name" variant="outlined" />
      <TextField sx={inputStyle} label="Subject" variant="outlined" />
      <TextField
        sx={inputStyle}
        rows={6}
        label="Body"
        variant="outlined"
        multiline
      />
    </Box>
  );
};
