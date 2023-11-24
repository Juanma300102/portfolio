import { Box } from "@mui/material";
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
        <ProjectCard
          title="WagHotels"
          description="Wag Hotels was founded in 2005 by pet lovers who couldn't find a
          suitable place to leave their pets during business trips. What started
          as a personal quest has grown into the ultimate boarding and daycare
          resort for dogs and cats."
          imgUrl="https://drive.google.com/uc?id=1TW8aWotRgaeb1f-mOn41bRJ66yrCCisP"
          siteUrl="https://www.waghotels.com/"
        />
        <ProjectCard
          title="RedCoatic"
          description="RedCoatic is a Learning Management System used by Misiones Province in Argentina. They offer several IT related courses and you can enroll and participate through this platform."
          imgUrl="https://drive.google.com/uc?id=1azmO2bUSdHqlRuPtxcDqzN3ObC2IssEt"
          siteUrl="https://redcoatic.com/"
        />
        <ProjectCard
          title="Decidirte"
          description="Decidirte is a online vocational test that you can take to know more about yourself and your possible vocation."
          imgUrl="https://drive.google.com/uc?id=1lkydYT_8bsouvWI2Irhr3hMOplN6p5lA"
          siteUrl="https://universidades-frontend.fly.dev/"
        />
        <ProjectCard
          title="Noticias Industriales"
          description="Noticias industrailes is a industrial news portal from Pilar Argentina."
          imgUrl="https://drive.google.com/uc?id=1Ll2Wr_HEsrsH3LtZUCWkwLBdyJo8Uugf"
          siteUrl="https://noticiasindustriales.com.ar/"
        />
      </Box>
    </Box>
  );
};
