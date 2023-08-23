import { Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedSort, setSelectedSort] = useState<string>('Relevance');
  const [searchString, setSearchString] = useState<string>('');

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchString) => {
          setSearchString(searchString);
          console.log("hhhh", searchString);
        }}/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre: Genre) => {
              setSelectedGenre(genre);
            }}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack paddingLeft={2} marginBottom={5} spacing={5}>
          <PlatformSelector
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            selectedPlatform={selectedPlatform}
          />
          <SortSelector selectedSort={selectedSort} onSelectSort={(orderBy) => setSelectedSort(orderBy)}/>
        </HStack>

        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          selectedSort={selectedSort}
          searchString={searchString}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
