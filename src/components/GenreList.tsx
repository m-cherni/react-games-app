import { HStack, List, ListItem, Text, Image, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />
  return (
    <>
      {error && <Text>{error}</Text>}
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
            <HStack>
                <Image boxSize='32px' borderRadius={4} src={genre.image_background} />
                <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
