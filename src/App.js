import React from "react"
import { Container, Grid, Typography } from "@mui/material"
import CardComponent from "./components/CardComponent"
import Data from "./Data.json"

export default function App() {
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant='h4' align='center' style={{ marginTop: "50px" }}>
          Material UI Responsive Card
        </Typography>
        <Grid container spacing={5} style={{ marginTop: "20px" }}>
          {Data.map((result, index) => (
            <Grid item xs={12} sm={4} ms={4} key={index}>
              <CardComponent result={result} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}
