import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Toast: {
      baseStyle: {
        transition: "bottom 0.5s ease-in-out",
      },
    },
  },
});

export default theme;
