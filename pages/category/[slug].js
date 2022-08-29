import { Container, Grid, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Categories from "../../components/Categories";
import PostCard from "../../components/PostCard";
import Loader from "../../components/Loader";
import { getCategories, getCategoryPost } from "../../services";

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <Container maxWidth="lg">
      <Paper sx={{ mt: 3, p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} lg={2}>
            <Categories />
          </Grid>

          <Grid item xs={12} md={9} lg={10}>
            <Grid container spacing={{ xs: 2, lg: 4 }}>
              {posts.map((post, index) => (
                <PostCard post={post.node} key={index} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}

export default CategoryPost;
