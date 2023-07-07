import { useState, useEffect } from "react";
import { Box, Heading, Flex, Text, Button, Progress } from "@chakra-ui/react";
import { GiWoodAxe } from "react-icons/gi";
import { useAppDispatch } from "../../state/hooks";
import { addItem } from "../../state/slices/inventory/inventorySlice";

const AutoWood = () => {
  const [wood, setWood] = useState(0);
  const [isAutoChopEnabled, setIsAutoChopEnabled] = useState(false);
  const [timeUntilNextWood, setTimeUntilNextWood] = useState(0);
  const [progress, setProgress] = useState(0);

  const dispatch = useAppDispatch();

  const chopTimer = 4000;
  const toggleAutoChop = () => {
    setIsAutoChopEnabled(!isAutoChopEnabled);
  };

  useEffect(() => {
    let timer: any;

    if (isAutoChopEnabled && timeUntilNextWood <= 0) {
      // TODO: Remove fixed item in remake
      dispatch(addItem({ itemId: 4 }));
      setWood((prevWood) => prevWood + 1);
      setTimeUntilNextWood(chopTimer);
      setProgress(0);
    }

    if (timeUntilNextWood > 0) {
      const increment = 100 / (chopTimer / 1000);
      timer = setInterval(() => {
        setProgress((prevProgress) => {
          const nextProgress = prevProgress + increment;
          return nextProgress >= 100 ? 100 : nextProgress;
        });
        setTimeUntilNextWood((prevTime) => prevTime - 1000);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [wood, isAutoChopEnabled, timeUntilNextWood, chopTimer, dispatch]);

  useEffect(() => {
    if (isAutoChopEnabled && timeUntilNextWood <= 0) {
      setTimeUntilNextWood(chopTimer);
    }
  }, [isAutoChopEnabled, timeUntilNextWood, chopTimer]);

  return (
    <Box p="4">
      <Heading>Auto Wood</Heading>
      <Flex direction="column">
        <Text>Total Logs: {wood}</Text>
        <Button
          rightIcon={<GiWoodAxe />}
          leftIcon={<GiWoodAxe />}
          maxW="44"
          colorScheme={isAutoChopEnabled ? "red" : "green"}
          onClick={toggleAutoChop}
        >
          {isAutoChopEnabled ? "Stop Chopping" : "Chop Wood"}
        </Button>
        {isAutoChopEnabled && (
          <Progress
            value={progress}
            max={100}
            maxW="44"
            mt="2"
            transition="width 0.1s ease-in-out"
          />
        )}
      </Flex>
    </Box>
  );
};

export default AutoWood;
