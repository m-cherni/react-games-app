import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const IconMap: { [key: string]: IconType } = {
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
        <Icon
          key={platform.slug}
          as={IconMap[platform.slug]}
          color="gray.500"
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
