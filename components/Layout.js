import { Container, AppBar, Typography, Toolbar, Link } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import React from "react";
import Footer from "./Footer/Footer";
import NextLink from "next/link";

const Layout = ({ title, description, children }) => {
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
              <NextLink href="/cart" passHref>
                <Link
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    paddingRight: "15px",
                  }}
                >
                  Cart
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
