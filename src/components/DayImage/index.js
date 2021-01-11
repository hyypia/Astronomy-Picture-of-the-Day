import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const DayImage = ({ dayImage }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="iframe"
          alt={dayImage.dayImage.title}
          src={dayImage.dayImage.url}
          title={dayImage.dayImage.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {dayImage.dayImage.title}
          </Typography>
          <Typography
            className={classes.paragraph}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {dayImage.dayImage.explanation}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DayImage;
