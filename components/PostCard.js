import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import moment from "moment";
import Link from "next/link";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const PostCard = ({ post }) => {
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Paper elevation={3} sx={{ p: 1 }}>
        <Link href={`/post/${post.slug}`}>
          <Box sx={{ cursor: "pointer" }}>
            <img src={post.featuredImage.url} width="100%" />
          </Box>
        </Link>

        <Box
          sx={{
            mt: 1.5,
          }}
        >
          <Link href={`/post/${post.slug}`}>
            <Typography
              variant="h5"
              sx={{ cursor: "pointer", display: "flex" }}
            >
              {post.title}
            </Typography>
          </Link>
        </Box>

        <Box>
          <Typography
            sx={{
              my: 0.5,
              fontSize: 14,
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
            }}
          >
            <CalendarMonthIcon sx={{ fontSize: 15, mr: 0.5 }} />
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </Typography>
        </Box>

        <Box
          sx={{
            mt: 0.4,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>{post.author.name}</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Link href={`/post/${post.slug}`}>
            <Button>Read the post</Button>
          </Link>
        </Box>
      </Paper>
    </Grid>
  );
};

export default PostCard;
