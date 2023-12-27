import React from "react";
import Scrollable from "../Components/Scrollable";
import { Box } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box rounded={'xl'}
      style={{
      background:
        "linear-gradient(to top , white 80%, rgb(0, 86, 253), rgb(23, 63,124))",
      padding:"14px"
    }}>
      <Scrollable />
    </Box>
  );
};

export default HomePage;
