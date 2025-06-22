import FormField from "@components/FormField";
import SimpleHeader from "@components/SimpleHeader";
import SimpleFooter from "@components/SimpleFooter";
import { Flex } from "@chakra-ui/react";

function Login() {
  return (
    <Flex direction="column" height="100vh" overflow="hidden">
      <SimpleHeader />
      <FormField route="/fitline/token/" method="login" />
      <SimpleFooter />
    </Flex>
  );
}

export default Login;
