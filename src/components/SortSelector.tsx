import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

interface Props {
  onSelectSort: (orderBy: string) => void;
  selectedSort: string;
}

const SortSelector = ({ onSelectSort, selectedSort }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const orderBy = sortOrders.find(order => order.value === selectedSort);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order by {selectedSort.startsWith('-') ? orderBy?.label +' (in reverse order)' : 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((orderBy) => (
          <MenuItem
            key={orderBy.label}
            value={orderBy.value}
            onClick={() => onSelectSort(orderBy.value)}
          >
            {orderBy.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
