import { Components, SxProps, Theme, createTheme } from "@mui/material";
import a from './theme.json'

declare module '@mui/material/styles' {
    interface ITheme {
      components?: Components<Theme>,
      unstable_sx: (props: SxProps<Theme>) => CSSObject,
      unstable_sxConfig: SxConfig,
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