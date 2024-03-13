import "@fontsource/poppins";
import { createTheme, useTheme, useMediaQuery } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});

const Theme = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const tablet = useMediaQuery(theme.breakpoints.down("lg"));
  return { mobile, tablet };
};
export default Theme;
