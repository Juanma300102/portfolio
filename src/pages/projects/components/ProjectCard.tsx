import { useTheme } from "@emotion/react";
import { Box, Typography, Button } from "@mui/material";

type ProjectCardProps = {
  title: string;
  description: string;
  imgUrl: string;
  siteUrl: string;
};

export default (props: ProjectCardProps) => {
  const theme: any = useTheme();
  const bgConfig: string = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 31, 42, 1)), url('${props.imgUrl}')`;
  return (
    <Box
      sx={{
        width: "70vw",
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
          backgroundImage: bgConfig,
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
          {props.title}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          component={"p"}
          fontSize={"14px"}
          color={theme.schemes.light.onPrimary}
        >
          {props.description}
        </Typography>
        <Button
          sx={{
            borderRadius: 3,
            bgcolor: theme.schemes.light.primary,
            color: theme.schemes.light.onPrimary,
          }}
          onClick={() => window.open(props.siteUrl, "_blank")}
        >
          Visit
        </Button>
      </Box>
    </Box>
  );
};
