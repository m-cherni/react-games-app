import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaXbox,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const IconMap: {[key: string]: IconType} = {
    ios: MdPhoneIphone,
    android: FaAndroid,
    linux: FaLinux,
    nintendo: SiNintendo,
    playstation: FaPlaystation,
    web: BsGlobe,
    max: FaApple,
    xbox: FaXbox,
    pc: FaWindows,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={IconMap[platform.slug]} color="gray.500"/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
