import React from "react";
import { Stack, Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { IoIosSearch } from "react-icons/io";

export const SearchBoxNav = () => {
  return (
    <div>
      <Stack spacing={4} ml={"120px"}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<IoIosSearch size={"24px"} fontWeight={100} color="gray.300"/>}
          />
          <Input type="text" w={"250px"} bg={"rgb(244,244,244)"} placeholder="Search on Nykaa" />
        </InputGroup>
      </Stack>
    </div>
  );
};
