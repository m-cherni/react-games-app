import { Box } from "@chakra-ui/react";
import { FunctionComponent, ReactNode } from "react";

interface Props {
    children: ReactNode
}
 
const GameCardContainer: FunctionComponent<Props> = ({ children }: Props) => {
    return (
        <Box width='270px' borderRadius={10} overflow="hidden">
            {children}
        </Box>
    );
}
 
export default GameCardContainer;