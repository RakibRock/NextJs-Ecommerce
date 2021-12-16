import { Container, AppBar, Typography, Toolbar } from "@mui/material";
import Head from "next/head";
import React from "react";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Next Store</title>
      </Head>
      <AppBar sx={{ backgroundColor: "black" }} position="static">
        <Toolbar>
          <Typography>Next Store</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ minHeight: "80vh" }}>{children}</Container>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
