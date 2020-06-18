import React, { Fragment } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Divider, Box } from "@material-ui/core"
import { useHistory } from "react-router"

const useStyles = makeStyles({
    media: {
        height: 300,
    },
})

const PokemonListItem = ({ pokemon }) => {
    const classes = useStyles()
    const history = useHistory()
    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardActionArea onClick={() => history.push(`/${pokemon.id}`)}>
                    {pokemon.image ? <CardMedia className={classes.media} image={pokemon.image} title={pokemon.name} /> : null}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {pokemon.number} - {pokemon.name}
                        </Typography>
                        {pokemon.classification ? (
                            <Typography variant="body2" color="textSecondary" component="p">
                                <b>Classification:</b> {pokemon.classification}
                            </Typography>
                        ) : null}
                        {pokemon.types ? (
                            <Typography variant="body2" color="textSecondary" component="p">
                                <b>Types:</b> {pokemon.types.toString()}{" "}
                            </Typography>
                        ) : null}
                        {pokemon.resistant ? (
                            <Typography variant="body2" color="textSecondary" component="p">
                                <b>Resistant:</b> {pokemon.resistant.toString()}{" "}
                            </Typography>
                        ) : null}
                        {pokemon.weaknesses ? (
                            <Typography variant="body2" color="textSecondary" component="p">
                                <b>Weaknesses:</b> {pokemon.weaknesses.toString()}{" "}
                            </Typography>
                        ) : null}
                        {pokemon.evolutions
                            ? pokemon.evolutions.map((pokemonEvo, index) => (
                                  <Fragment key={index}>
                                      <Box pt={1} pb={1}>
                                          <Divider orientation="horizontal" />
                                      </Box>
                                      <Typography variant="body2" color="textSecondary" component="p">
                                          <b>Evolutions:</b>
                                      </Typography>
                                      {pokemonEvo.image ? (
                                          <img src={pokemonEvo.image} className={classes.pokeEvoImg} alt="Pokemon Evolution" />
                                      ) : null}
                                      {pokemonEvo.id ? (
                                          <Typography variant="body2">
                                              <b>ID:</b> {pokemonEvo.id}
                                          </Typography>
                                      ) : null}
                                      {pokemonEvo.number ? (
                                          <Typography variant="body2">
                                              <b>Number:</b> {pokemonEvo.number}
                                          </Typography>
                                      ) : null}
                                      {pokemonEvo.name ? (
                                          <Typography variant="body2">
                                              <b>Name:</b> {pokemonEvo.name}
                                          </Typography>
                                      ) : null}
                                  </Fragment>
                              ))
                            : null}
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="secondary" onClick={() => history.push(`/${pokemon.name}`)}>
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
export default PokemonListItem
