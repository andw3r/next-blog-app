import { Box, Container, Divider, Paper, Typography } from "@mui/material";
import moment from "moment/moment";
import Link from "next/link";
import React from "react";

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <Paper sx={{ p: { xs: 1, md: 3 }, mt: { xs: 1.5, md: 3 } }}>
      <Box>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          width="100%"
          style={{ borderRadius: "5px" }}
        />
      </Box>

      <Box>
        <Typography
          variant="h1"
          sx={{
            mt: 1.2,
            mb: 1,
            textAlign: "center",
            fontSize: { xs: "28px", sm: "42px", md: "68px" },
          }}
        >
          {post.title}
        </Typography>

        <Typography
          sx={{
            fontWeight: 300,
            fontSize: { xs: "14px", sm: "22px", md: "30px" },
          }}
        >
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </Typography>
      </Box>

      <Divider sx={{ mt: 5, mb: 2 }} />

      <Box>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ opacity: 0.9, mr: 1 }}>Author:</Typography>

          <Typography>{post.author.name}</Typography>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Typography sx={{ opacity: 0.9, mr: 1 }}>Category:</Typography>
          <Link href={`/category/${post.categories[0].slug}`}>
            <Typography
              sx={{
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {post.categories[0].name}
            </Typography>
          </Link>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Typography sx={{ opacity: 0.9, mr: 1 }}>Posted at:</Typography>

          <Typography>
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default PostDetail;
