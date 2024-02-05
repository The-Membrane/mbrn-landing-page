import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "#d6f1ff",
      },
    },
  },
});

export default customTheme;
