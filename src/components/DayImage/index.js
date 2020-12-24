import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarsIcon from '@material-ui/icons/Stars';

import useStyles from './styles';

const DayImage = ({ dayImage }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          alt={dayImage.dayImage.title}
          image={dayImage.dayImage.url}
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
      <CardActions>
        <Button size="small" color="primary">
          <StarsIcon />
          Add
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default DayImage;
