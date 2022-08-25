import React from "react";
import { Image, Box } from "@chakra-ui/react";

const Logobox = () => {
  return (
    <Box 
    ml={'60px'}
    mr={'25px'}
    mt={'16px'}
    mb={'20px'}
    maxW="80px"
    maxH="30px"
    >
      <Image
        src="https://logos-download.com/wp-content/uploads/2021/01/Nykaa_Logo.png"
        alt="mainlogo"
      />
    </Box>
  );
};

export default Logobox;
