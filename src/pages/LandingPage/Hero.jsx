import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Link,
} from "@chakra-ui/react";

function Hero() {
  return (
    <Box as="section" id="home" bg="bg" py={{ base: 20, lg: 32 }}>
      <Box maxW="container.xl" mx="auto" px={6}>
        <Box maxW="4xl" mx="auto" textAlign="center">
          <Heading
            as="h2"
            size={{ base: "4xl", lg: "6xl" }}
            color="fg"
            mb={6}
            lineHeight="tight"
          >
            Smarter Fitness{" "}
            <Text as="span" color="purple.solid">
              Starts Here
            </Text>
          </Heading>

          <Text
            fontSize={{ base: "xl", lg: "2xl" }}
            color="fg.muted"
            mb={12}
            maxW="3xl"
            mx="auto"
            lineHeight="relaxed"
          >
            Analyze your fitness data, plan your workouts, and stay on track –
            all in one place.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
