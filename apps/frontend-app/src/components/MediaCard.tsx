import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type Item = { id: string; title: string; src: string; content: string };

export default function MediaCard({ item }: { item: Item }) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia sx={{ height: 140 }} image={item.src} title={item.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {item.content}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button color="inherit" variant="outlined" size="small">
          Share
        </Button>
        <Button color="inherit" variant="outlined" size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
