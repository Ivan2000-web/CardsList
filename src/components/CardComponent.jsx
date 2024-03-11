import React from "react"
import { Card, CardMedia, CardActions, Button, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function CardComponent({ result }) {
  return (
    <>
    <Card sx={{ maxWidth: 345 }} style={{ padding: "10px", marginBottom: "30px" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={result.img}
        title="test"
        style={{ borderRadius: "5px" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {result.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {result.des}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="medium" component={Link} to={`/description/${result.id}`}>
          Read Me
        </Button>
      </CardActions>
    </Card>
    </>
  )
}
