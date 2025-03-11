"use client";
import { faker } from "@faker-js/faker";
import { Box, Container, Grid2 } from "@mui/material";
import MediaCard from "./MediaCard";

const Homepage = () => {
  const data = Array.from({ length: 24 }).map(() => ({
    id: faker.string.uuid(),
    title: faker.lorem.lines(1),
    content: faker.lorem.sentences(4),
    src: faker.image.urlPicsumPhotos({ width: 1200, height: 1200 }),
  }));
  return (
    <Box
      sx={[
        (theme) => ({
          backgroundColor: theme.palette.grey[300],
          ...theme.applyStyles("dark", {
            backgroundColor: theme.palette.grey[600],
          }),
        }),
      ]}
    >
      <Container maxWidth="xl" sx={{ pt: 3, pr: 2 }}>
        <Grid2 container spacing={2}>
          {data.map((item) => (
            <Grid2 key={item.id} size={{ lg: 3, md: 4, sm: 12, xs: 12 }}>
              <MediaCard item={item} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default Homepage;
