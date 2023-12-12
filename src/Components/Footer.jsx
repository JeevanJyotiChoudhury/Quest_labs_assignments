import React, { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { BsChatRightTextFill, BsChatRightText } from "react-icons/bs";
import { FaRegEnvelopeOpen, FaEnvelopeOpen } from "react-icons/fa";
import { IoHelpCircle, IoHelpCircleOutline } from "react-icons/io5";
import { HiSpeakerphone, HiOutlineSpeakerphone } from "react-icons/hi";
import { Link } from "react-router-dom";

const iconData = [
  { icon: active => (active ? <FaEnvelopeOpen color={"blue"} size="20px" /> : <FaRegEnvelopeOpen size="20px" />), label: "Home", path: "/" },
  { icon: active => (active ? <BsChatRightTextFill color={'blue'} size="20px" /> : <BsChatRightText size="20px" />), label: "Messages", path: "/messages" },
  { icon: active => (active ? <IoHelpCircle color={'blue'} size="25px" /> : <IoHelpCircleOutline size="25px" />), label: "Help", path: "/help" },
  { icon: active => (active ? <HiSpeakerphone color={'blue'} size="25px" /> : <HiOutlineSpeakerphone size="25px" />), label: "News", path: "/news" },
];

const Footer = () => {
  const [activeIcon, setActiveIcon] = useState("home");

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <Flex justify="space-around" w="100%">
      {iconData.map(({ icon, label, path }) => (
        <Link to={path} key={label.toLowerCase()}>
          <Flex
            direction="column"
            w="20%"
            justify="center"
            align="center"
            onClick={() => handleIconClick(label.toLowerCase())}
            cursor="pointer"
          >
            {icon(activeIcon === label.toLowerCase())}
            <Text fontWeight='semibold' fontSize={'sm'} color={activeIcon === label.toLowerCase() ? "blue" : ""}>{label}</Text>
          </Flex>
        </Link>
      ))}
    </Flex>
  );
};

export default Footer;
