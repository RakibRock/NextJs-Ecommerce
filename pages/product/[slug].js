import {
  Button,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/layout";
import data from "../../utils/products";
import NextLink from "next/link";
import Image from "next/image";

const ProductScreen = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <h1>Product not found</h1>;
  }
  return (
    <Layout title={product.name} description={product.description}>
      <div style={{ marginTop: "15px", marginBottom: "15px" }}>
        <NextLink href="/" passHref>
          <Link
            sx={{
              textDecoration: "none",
              color: "black",
              fontWeight: "500",
              fontSize: "20px",
            }}
          >
            <Typography variant="bold">Back to Products</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List sx={{ fontWeight: "500", fontSize: "18px" }}>
            <ListItem>
              <Typography component="h1" variant="bold">
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="bold">
                Category: {product.category}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="bold">Brand: {product.brand}</Typography>{" "}
            </ListItem>
            <ListItem>
              <Typography variant="bold">
                Ratings: {product.rating} stars ({product.numReviews} reviews)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="bold">
                Description: {product.description}
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid sx={{ fontWeight: "500", fontSize: "18px" }} container>
                  <Grid item xs={6}>
                    <Typography variant="bold">Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="bold">$ {product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid sx={{ fontWeight: "500", fontSize: "18px" }} container>
                  <Grid item xs={6}>
                    <Typography variant="bold">Status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="bold">
                      {product.countInStock > 0 ? "In stock" : "Unavailable"}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant="contained">
                  <Typography>Add to cart</Typography>
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProductScreen;
