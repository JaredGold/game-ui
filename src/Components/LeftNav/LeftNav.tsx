import { Box, Flex, IconButton, VStack, Tooltip } from "@chakra-ui/react";
import { FaHome, FaTree, FaBoxes, FaTimes, FaBars } from "react-icons/fa";
import { GiWoodStick } from "react-icons/gi";
import { Link } from "react-router-dom";

interface LeftNavigationProps {
  handleOpen: () => void;
  handleClose: () => void;
  isNavOpen: boolean;
}

const LeftNavigation: React.FC<LeftNavigationProps> = ({
  handleOpen,
  handleClose,
  isNavOpen,
}) => {
  return (
    <Box>
      <VStack
        bg="gray.100"
        w={isNavOpen ? "200px" : "60px"}
        h="100vh"
        position="fixed"
        top={0}
        left={0}
        overflow="hidden"
        transition="width 0.3s ease"
        zIndex={999}
        boxShadow="md"
        pt={0}
      >
        <Flex align="center" justify="space-between" p={2} w="100%">
          <IconButton
            icon={isNavOpen ? <FaTimes /> : <FaBars />}
            aria-label="Toggle navigation"
            onClick={isNavOpen ? handleClose : handleOpen}
          />
        </Flex>
        <Tooltip label="Home" placement="right">
          <Link to="/">
            {isNavOpen ? (
              "Home"
            ) : (
              <IconButton
                icon={<FaHome />}
                aria-label="Home"
                variant="ghost"
                size="lg"
                colorScheme="purple"
              />
            )}
          </Link>
        </Tooltip>
        <Tooltip label="Inventory" placement="right">
          <Link to="/inventory">
            {isNavOpen ? (
              "Inventory"
            ) : (
              <IconButton
                icon={<FaBoxes />}
                aria-label="Inventory"
                variant="ghost"
                size="lg"
                colorScheme="purple"
              />
            )}
          </Link>
        </Tooltip>
        <Tooltip label="Forage" placement="right">
          <Link to="/forage">
            {isNavOpen ? (
              "Forage"
            ) : (
              <IconButton
                icon={<GiWoodStick />}
                aria-label="Forage"
                variant="ghost"
                size="lg"
                colorScheme="purple"
              />
            )}
          </Link>
        </Tooltip>

        <Tooltip label="Wood Cutting" placement="right">
          <Link to="/wood">
            {isNavOpen ? (
              "Wood Cutting"
            ) : (
              <IconButton
                icon={<FaTree />}
                aria-label="WoodCutting"
                variant="ghost"
                size="lg"
                colorScheme="purple"
              />
            )}
          </Link>
        </Tooltip>
      </VStack>
    </Box>
  );
};

export default LeftNavigation;
