import { Avatar, Box, Flex, Image, Link, Select, Text } from "@chakra-ui/react";
import React from "react";

const InnerModal = ({ el }) => {
  return (
    <Box>
      <Text fontSize={"2xl"} as="b">
        {el}
      </Text>
      <Box color={"black"}>
        <Text my={3} fontSize={"0.9rem"} color={"gray"}>
          Update your company logo, address or social media links in your email
          templates.
        </Text>
        <Flex my={5}>
          <Avatar
            name="Image"
            src="https://static.intercomassets.com/avatars/5355539/square_128/5355539-1665143317.jpg"
          />
          <Box pl={4} fontSize={"0.9rem"} color={"gray"}>
            <Text>written by Beth-Ann Sher</Text>
            <Text>I.Jpdated over a week ago</Text>
          </Box>
        </Flex>
        <Box my={5}>
          <Select placeholder="Table of contents">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
        <Text fontSize={"0.9rem"}>
          Intercom Messages includes{" "}
          <Link color="blue" as="u">
            three pre-made email templates. The Company template
          </Link>{" "}
          includes your logo at the top and company address in the footer. The
          Personal template includes the name and the avatar of the teammate
          that the email is sent from.
        </Text>
        <Box
          fontSize={"0.9rem"}
          bg="#feeced"
          border="1px"
          borderColor="#ffc9cf"
          py={4}
          px={3}
          rounded={"xl"}
          my={8}
        >
          <Text as="b">Note:</Text> When you update your logo, address, or
          social accounts, all other messages using the templates will update as
          well (current or future),
        </Box>
        <Text fontWeight={"semibold"} fontSize={"2xl"}>
          How to update your templates
        </Text>
        <Box>
          <Text fontSize={"0.9rem"} my={4}>
            Go to <Link color="blue">Proactive Support</Link> and{" "}
            <Link color="blue">create a new email message</Link> or edit an
            existing one:
          </Text>
          <Image src="https://downloads.intercomcdn.com/i/o/695051468/9e92b757364e409ea5501657/1.png" />
          <Text fontSize={"0.9rem"} my={4}>
            Then, under{" "}
            <Link color="black" as="b">
              Content
            </Link>
            , select the Company or Personal email template:
          </Text>
          <Image src="https://downloads.intercomcdn.com/i/o/695051575/c3bc0e18b8ac0d0d19d0c25b/2.png" />
          <Text fontWeight={"semibold"} fontSize={"xl"} color="black">
            Update your logo
          </Text>
          <Text fontSize={"0.9rem"} my={4}>
            In the footer, select the current address and click{" "}
            <Link as="b">Change physical address</Link> to edit the text. You
            can also delete the text to remove the address completely.
          </Text>
          <Image src="https://downloads.intercomcdn.com/i/o/695055136/814ace3fb70a152f14ff5193/4.png" />
          <Box
            fontSize={"0.9rem"}
            bg="#fef6d7"
            border="1px"
            borderColor="#feedb0"
            py={4}
            px={3}
            rounded={"xl"}
            my={8}
          >
            <Text as="b">Note:</Text> Including a valid physical address is
            important to comply with anti-spam legislation in many countries, to
            show that you're not sending unsolicited or fraudulent emails.
          </Box>
          <Text fontSize='0.9rem' mb='25px'>
            Finally, save your message. Your logor address, and social accounts
            will update for all company and personal templates currently live or
            in draft mode, and any new messages you create.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default InnerModal;
