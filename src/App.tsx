import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="pink">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="blue">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="orange">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
