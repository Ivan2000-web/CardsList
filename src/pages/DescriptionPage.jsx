import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardMedia, Typography } from '@mui/material';
import Data from "../Data.json";

const DescriptionPage = () => {
  const { id } = useParams();
  const filteredData = Data.filter(item => item.id === parseInt(id, 10));

  if (filteredData.length === 0) {
    return <div>No data found for this ID</div>;
  }

  const { title, des, img } = filteredData[0];
  const videoUrl = `http://localhost/${id}.mp4`;

  return (
    <>
      <Card sx={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <Typography variant="h5" component="div" style={{ marginTop: '20px'}}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ marginTop: '20px', marginBottom: '20px' }}>
          {des}
        </Typography>
        <CardMedia
          component="video"
          src={videoUrl}
          title="Selected Video"
          controls
          sx={{ width: '100%', height: 'auto' }}
        />
      </Card>
    </>
  );
};

export default DescriptionPage;