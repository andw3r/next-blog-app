import { Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

import PostDetail from "../../components/PostDetail";
import { getPostDetails, getPosts } from "../../services";

const PostDetails = ({ post }) => {
  return (
    <Container maxWidth="lg">
      <Stack spacing={5}>
        <PostDetail post={post} />
      </Stack>
    </Container>
  );
};

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}

export default PostDetails;
