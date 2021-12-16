import { Container, AppBar, Typography, Toolbar, Link } from "@mui/material";
import Head from "next/head";
import React from "react";
import Footer from "./Footer/Footer";
import NextLink from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Next Store</title>
      </Head>
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
                sx={{ color: "white", fontSize: "18px", paddingRight: "15px" }}
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
    </div>
  );
};

export default Layout;
