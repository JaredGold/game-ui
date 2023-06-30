import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { BiCoin } from "react-icons/bi";
import { useState } from "react";

function App() {
  const [coins, setCoins] = useState(0);
  const [clickValue, setClickValue] = useState(1);
  const [upgradeCost, setUpgradeCost] = useState(25);

  const addCoin = () => {
    setCoins(coins + clickValue);
  };

  const upgradeClick = () => {
    if (coins >= upgradeCost) {
      setCoins(coins - upgradeCost);
      setClickValue(clickValue + 1);
      setUpgradeCost(Math.round(upgradeCost * (clickValue * 1.2)));
    }
  };

  const bigUpgrade = () => {
    if (coins >= 1000) {
      setClickValue(clickValue + 15);
      setCoins(coins - 1000);
    }
  };

  return (
    <Box p="4">
      <Heading>Idle Game</Heading>
      <Flex direction="column">
        <Text>Coint: {coins}</Text>
        <Text>Click Value: {clickValue}</Text>
        <Button
          rightIcon={<BiCoin />}
          leftIcon={<BiCoin />}
          maxW="40"
          colorScheme="purple"
          onClick={addCoin}
        >
          Gather Coins
        </Button>
        <Text>Upgrade cost: {upgradeCost}</Text>
        <Button maxW="36" colorScheme="yellow" onClick={upgradeClick}>
          Upgrade Coins
        </Button>
        <Text>Big Upgrade cost: 1000</Text>
        <Button maxW="36" colorScheme="yellow" onClick={bigUpgrade}>
          Upgrade Coins
        </Button>
      </Flex>
    </Box>
  );
}

export default App;
