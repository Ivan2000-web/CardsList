import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import CardComponent from "./components/CardComponent";
import { Routes, Route } from 'react-router-dom'
import DescriptionPage from './pages/DescriptionPage'
import Data from "./Data.json";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/description/:id" element={<DescriptionPage />} />
        <Route path="/" element={
          <Container maxWidth="lg">
            <Typography variant="h4" align="center" style={{ marginTop: "50px" }}>
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
        } />
      </Routes>
    </>
  );
}

