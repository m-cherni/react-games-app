import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchString: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Text>NavBar</Text>
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
