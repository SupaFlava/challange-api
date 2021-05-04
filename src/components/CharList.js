import axios from "axios";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    direction: "row",
  },
  media: {
    height: 140,
  },
});

const CharList = () => {
  const classes = useStyles();
  const [charecters, setCharecters] = useState([]);
  const result = axios.get("https://breakingbadapi.com/api/characters");
  useEffect(() => {
    result.then((response) => setCharecters(response.data));
  }, []);
  console.log(charecters);

  return (
    <Card className={classes.root}>
      {charecters.map((char) => (
        <Grid container justify="center">
          <Grid item xs={12}>
            <CardActionArea key={char.id}>
              <CardMedia className={classes.media} image={char.img} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {char.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Birthday : {char.birthday}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Occupation :{" "}
                  {char.occupation.map((occ) => (
                    <span>{occ}</span>
                  ))}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      ))}
    </Card>
  );
};
export default CharList;
