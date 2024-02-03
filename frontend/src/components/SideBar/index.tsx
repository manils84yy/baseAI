import { Box, Text, HStack, Avatar, useMediaQuery } from "@chakra-ui/react";
import { MdHomeFilled } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { FaGithub, FaRobot } from "react-icons/fa";
import { useGlobalContext } from "@/contexts/GlobalContext";

export default function SideBar() {
  const { isCollapsed, setIsCollapsed, index, setIndex } = useGlobalContext();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const menuItems = [
    {
      title: "Home",
      icon: <MdHomeFilled />,
    },
    {
      title: "Marketplace",
      icon: <BiStore />,
    },
  ];

  return (
    <>
      {/* Sidebar */}

      <Box
        zIndex={isMobile && isCollapsed ? -1 : "tooltip"}
        position={"fixed"}
        top={0}
        left={0}
        px={[1, 1, 4]}
        bg="#121212"
        w={`${isCollapsed ? (isMobile ? 0 : "100px") : "250px"}`}
        display={isMobile && isCollapsed ? "none" : "flex"}
        flexDir={"column"}
        alignItems={`${isCollapsed ? "center" : "flex-start"}`}
      >
        <Box h="80px" display={"flex"} alignItems={"center"}>
          <Avatar
            icon={<FaRobot />}
            h="50px"
            rounded={"full"}
            border={"2px solid #D968D0"}
            w="50px"
            color={"#D968D0"}
            bg="whiteAlpha.900"
          />
          {!isCollapsed && (
            <Text
              ml="3"
              fontSize={"3xl"}
              fontWeight={"light"}
              letterSpacing={"1.25px"}
              color={"white"}
            >
              ZeroAI
            </Text>
          )}
        </Box>

        <Box
          px={isCollapsed ? (isMobile ? 0 : 3) : 0}
          w={`${isCollapsed ? "100px" : "250px"}`}
          h="calc(100vh - 80px)"
        >
          <Box
            py={4}
            px={4}
            borderRadius={"20px"}
            bg={"#1e1f23"}
            w="100%"
            h="300px"
          >
            {menuItems.map((item: any, i: number) => (
              <HStack
                bg={index === i ? "#2c2d31" : "transparent"}
                _hover={{ bg: "#2c2d31" }}
                color={index === i ? "white" : "#7c8693"}
                py={3}
                px={2}
                borderRadius={"12px"}
                key={i}
                mb={4}
                onClick={() => setIndex(i)}
                cursor={"pointer"}
              >
                <Avatar
                  icon={item.icon}
                  h="30px"
                  rounded={"full"}
                  w="30px"
                  bg="#1e1f23"
                  color={index === i ? "#D968D0" : "#7c8693"}
                />

                {!isCollapsed && (
                  <Text
                    ml={1}
                    fontSize={"md"}
                    fontWeight={"bold"}
                    letterSpacing={"1.25px"}
                    color={index === i ? "#D968D0" : "#7c8693"}
                  >
                    {item.title}
                  </Text>
                )}
              </HStack>
            ))}
          </Box>

          <Box
            mt={4}
            py={4}
            px={4}
            borderRadius={"20px"}
            bg={"#1e1f23"}
            w="100%"
            h="fit-content"
          >
            <HStack
              bg={"transparent"}
              color={"#7c8693"}
              py={3}
              px={2}
              borderRadius={"12px"}
              mb={4}
              cursor={"pointer"}
            >
              <Avatar
                icon={<FaGithub />}
                h="30px"
                rounded={"full"}
                w="30px"
                bg="#1e1f23"
                color={"#7c8693"}
              />

              {!isCollapsed && (
                <Text
                  ml={1}
                  fontSize={"md"}
                  fontWeight={"bold"}
                  letterSpacing={"1.25px"}
                >
                  Source
                </Text>
              )}
            </HStack>
          </Box>
        </Box>
      </Box>
    </>
  );
}
