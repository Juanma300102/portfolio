import { useTheme } from "@emotion/react";
import {
  Box,
  Typography,
  Divider,
  TextField,
  SxProps,
  Button,
} from "@mui/material";
import { useState } from "react";

export default () => {
  /* TODO: change to social media links */
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

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

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
      <TextField
        sx={inputStyle}
        label="Your name"
        variant="outlined"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        sx={inputStyle}
        label="Subject"
        variant="outlined"
        value={subject}
        onChange={(event) => setSubject(event.target.value)}
      />
      <TextField
        sx={inputStyle}
        rows={6}
        label="Body"
        variant="outlined"
        multiline
        value={body}
        onChange={(event) => setBody(event.target.value)}
      />
      <Button
        sx={{
          borderRadius: 3,
          bgcolor: theme.schemes.light.primary,
          color: theme.schemes.light.onPrimary,
        }}
        onClick={() => {
          setBody("");
          setName("");
          setSubject("");
          alert("Email sent.");
        }}
      >
        send
      </Button>
    </Box>
  );
};
