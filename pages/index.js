import PostCard from "../components/PostCard";
import { Container, Grid } from "@mui/material";
import { getPosts } from "../services";
import Categories from "../components/Categories";

const Home = ({ posts }) => {
  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
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
    </Container>
  );
};

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

export default Home;
