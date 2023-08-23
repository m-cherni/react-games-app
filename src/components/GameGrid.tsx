import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

import InfiniteScroll from "react-infinite-scroll-component";

import React from "react";
import useGames from "../hooks/useGames";

interface Props {
  selectedGenre: number | null;
  selectedPlatform: number | null;
  selectedSort: string;
  searchString: string;
}

const GameGrid = ({
  selectedGenre,
  selectedPlatform,
  selectedSort,
  searchString,
}: Props) => {
  const { data, error, isLoading, isFetching, hasNextPage, fetchNextPage } =
    useGames(selectedGenre, selectedPlatform, selectedSort, searchString);
  const skeletonList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <>
      {error && <Text>`Error during loading games ${error.message}`</Text>}
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={5}>
          {isLoading &&
            skeletonList.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page?.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
