import {
  Container,
  AppBar,
  Typography,
  Toolbar,
  Link,
  Switch,
  Badge,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import React, { useContext } from "react";
import Footer from "./Footer/Footer";
import NextLink from "next/link";
import { Store } from "../utils/Store";
import Cookies from "js-cookie";

const Layout = ({ title, description, children }) => {
  const { state } = useContext(Store);
  const { cart } = state;

  const theme = createTheme({
    Typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      palette: {
        type: "light",
        primary: {
          main: "#f0c000",
        },
        secondary: {
          main: "#208080",
        },
      },
    },
  });

  // const darkModeChangeHandler = () => {
  //   dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
  //   const newDarkMode = !darkMode;
  //   Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  // };
  return (
    <div>
      <Head>
        <title>{title ? `${title} - NextStore ` : "Next Store"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar sx={{ backgroundColor: "black" }} position="static">
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography
                  sx={{ color: "red", fontWeight: "bold", fontSize: "25px" }}
                >
                  Next Store
                </Typography>
              </Link>
            </NextLink>
            <div className="grow"></div>
            <div>
              <Switch
              // checked={darkMode}
              // onChange={darkModeChangeHandler}
              ></Switch>
              <NextLink href="/cart" passHref>
                <Link
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    paddingRight: "15px",
                  }}
                >
                  {cart.cartItems.length > 0 ? (
                    <Badge
                      color="secondary"
                      badgeContent={cart.cartItems.length}
                    >
                      Cart
                    </Badge>
                  ) : (
                    "Cart"
                  )}
                </Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link sx={{ color: "white", fontSize: "18px" }}>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container sx={{ minHeight: "80vh" }}>{children}</Container>
        <Footer></Footer>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
