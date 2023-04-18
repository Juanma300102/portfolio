import { createTheme } from "@mui/material";
import a from './theme.json'

declare module '@mui/material/styles' {
    interface Theme {
      schemes: {
        light: any,
        dark: any
      } 
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      schemes?: {
        light?: any,
        dark?: any
      }
    }
  }
  

export const theme = createTheme(a);