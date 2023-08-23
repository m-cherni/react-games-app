import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

import useGenres from "../hooks/useGenres";
interface Props {
  onSelectGenre: (genre: number) => void;
  selectedGenre: number | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  return (
    <>
      {error && <Text>`Error during loading genres ${error.message}`</Text>}
      <List>
        {genres?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={4}
                src={genre.image_background}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre ? "bold" : "normal"}
                variant="link"
                fontSize="lg"
                onClick={() => onSelectGenre(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
