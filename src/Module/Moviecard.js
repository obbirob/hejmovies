import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MovieCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card  sx={{  backgroundColor:props.bgColor, width:"80vw", marginBottom:"10px"} } >
      <CardMedia
        component="img"
        height="auto"
        image={props.movieImage}
        alt=""
        margin="20px"
        loading="lazy"
      />

      <Typography variant='h5' color="white" fontWeight="600" padding="20px">{props.movieName}</Typography>
    
      <CardActions disableSpacing>

      

        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <Typography color="white">{props.indexNummer}</Typography>
          <ExpandMoreIcon color='white' />
          
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        

          <Typography paragraph color="white">
            {props.detailtext} 
          </Typography>
      <Button href={props.link} size="small" variant="contained" sx={{ backgroundColor: 'black' }} >Wikipedia Artikel durchlesen</Button>

        </CardContent>
      </Collapse>
    </Card>
  );
}