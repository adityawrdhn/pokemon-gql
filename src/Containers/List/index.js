import React, { useState, Fragment } from "react"
import { Container, Grid, Box } from "@material-ui/core"
import { useQuery } from "@apollo/react-hooks"
import POKEMONS_QUERY from "Graphql/Pokemons"
import PokemonListItem from "Components/PokemonListItem"
import Header from "Components/Header"

const Index = () => {
    const [variables, setVariables] = useState({ first: 12 })
    const [keywords, setKeywords] = useState("")
    const { loading, error, data: { pokemons = [] } = {} } = useQuery(POKEMONS_QUERY, {
        variables,
    })
    return (
        <Fragment>
            <Header onChange={(e) => setKeywords(e.target.value)} keywords={keywords} />
            <Box m={2}>
                <Container>
                    <Grid container spacing={3}>
                        {loading ? <p>Loading...</p> : null}
                        {error ? <p>{error}</p> : null}
                        {pokemons.length > 0
                            ? pokemons.map((pokemon, index) => (
                                  <Fragment key={index}>
                                      <PokemonListItem pokemon={pokemon} />
                                  </Fragment>
                              ))
                            : null}
                    </Grid>
                </Container>
            </Box>
        </Fragment>
    )
}

export default Index
