import FormField from "@components/FormField";
import SimpleHeader from "@components/SimpleHeader";
import SimpleFooter from "@components/SimpleFooter";
import { Flex } from "@chakra-ui/react";

function Register() {
  return (
    <Flex direction="column" height="100vh" overflow="hidden">
      <SimpleHeader />
      <FormField route="/fitline/user/register/" method="register" />
      <SimpleFooter />
    </Flex>
  );
}

export default Register;
