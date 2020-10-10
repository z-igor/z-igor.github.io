import React, { useState } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { PokemonContainer } from "./containers/Pokemon";
import "./App.css";

const client = new ApolloClient({
  uri: "https://mazipan-gql-pokeapi.herokuapp.com/graphql",
  cache: new InMemoryCache()
});

function App(props) {
  const [show, setShowAll] = useState(2);

  const onShowAllClick = () => {
    setShowAll(50);
  }

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1 className="App__title">Pokemons</h1>
        <button className="App__btn-show" onClick={onShowAllClick}>Show 50 (now {show})</button>
        <PokemonContainer show={show} setShowAll={setShowAll} />
      </div>
    </ApolloProvider>
  );
}

export default App;