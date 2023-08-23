import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<number | null>(
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
        }}/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre: number) => {
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
