import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [fishCount, setFishCount] = useState(0);

  const addFish = () => {
    setFishCount(fishCount + 1);
  };

  return (
    <div>
      <h1>Idle Game</h1>
      <Button onClick={addFish}>Fish</Button>
      <Text>Fish: {fishCount}</Text>
    </div>
  );
}

export default App;
