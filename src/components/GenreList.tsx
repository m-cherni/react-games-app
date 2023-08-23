import { HStack, List, ListItem, Text, Image, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
    onSelectGenre: (genre:Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
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
                <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} variant='link' fontSize='lg' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
            </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
