import React from "react";
import { Card, CardMedia, CardActions, Button, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CardComponent({ result }) {
  return (
    <Card sx={{ maxWidth: 300, height: '100%', display: 'flex', flexDirection: 'column' }} style={{ padding: "10px", marginBottom: "30px" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={result.img}
        title="test"
        style={{ borderRadius: "5px" }}
      />
      <CardContent style={{ flex: 1 }}>
        <Typography gutterBottom variant="h5" component="div" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {result.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {result.des}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="medium" component={Link} to={`/description/${result.id}`}>
          Read Me
        </Button>
      </CardActions>
    </Card>
  );
}