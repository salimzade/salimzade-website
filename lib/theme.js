import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: {
    body: {
      bg: mode("#E2E8F0", "#202023"),
    },
  }
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, global: {
  body: {
    bg: '#ebebeb'
  }
} });

export default theme;
