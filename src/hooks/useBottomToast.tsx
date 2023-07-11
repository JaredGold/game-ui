import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useEffect, useState } from "react";

type ToastOptions = {
  title: string;
  text: string;
  icon?: IconType;
  colorScheme?: string;
  time?: number;
};

const useBottomToast = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [toastOptions, setToastOptions] = useState<ToastOptions>({
    title: "",
    text: "",
    icon: undefined,
    colorScheme: "purple",
    time: 3,
  });

  const showToast = (options: ToastOptions) => {
    setIsVisible(true);
    setToastOptions({
      ...toastOptions,
      ...options,
      colorScheme: options.colorScheme || toastOptions.colorScheme,
    });
  };

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, toastOptions.time! * 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isVisible]);

  const Toast = () => {
    const { title, text, icon: IconComponent, colorScheme } = toastOptions;

    return (
      <Box
        position="fixed"
        bottom={isVisible ? "20px" : "-100px"}
        left="50%"
        transform="translateX(-50%)"
        width="300px"
        maxWidth="90%"
        bg={`${colorScheme}.500`}
        color="white"
        borderRadius="full"
        boxShadow="lg"
      >
        <Flex p={3} alignItems="center">
          {IconComponent && (
            <Box
              bg="white"
              color={`${colorScheme}.500`}
              borderRadius="full"
              width="40px"
              height="40px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={IconComponent} boxSize={4} />
            </Box>
          )}
          <Box ml={3}>
            <Text fontWeight="bold">{title}</Text>
            <Text>{text}</Text>
          </Box>
        </Flex>
      </Box>
    );
  };

  return {
    showToast,
    Toast,
  };
};

export default useBottomToast;
