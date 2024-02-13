import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
const AdminForm = () => {
  return (
    <div>
      <Stack spacing={4}>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Stack spacing={10}></Stack>
      </Stack>
    </div>
  );
};

export default AdminForm;
