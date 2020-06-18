import ApolloClient from "apollo-boost"
const pokemonClient = new ApolloClient({
    uri: "https://graphql-pokemon.now.sh",
})
export default pokemonClient
