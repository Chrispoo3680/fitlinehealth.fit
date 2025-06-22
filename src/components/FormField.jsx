"use client";

import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import {
  Stack,
  Box,
  Heading,
  Button,
  Input,
  Field,
  AbsoluteCenter,
  Spinner,
} from "@chakra-ui/react";
import { PasswordInput } from "@components/ui/password-input";

function FormField({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post(route, { username, password });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box bg="bg.subtle" w="full" h="100vh">
      <AbsoluteCenter axis="both">
        <Box maxW="xl" mx="auto" px={6}>
          <Box
            p={10}
            bg="bg"
            borderWidth="1px"
            borderColor="border.emphasized"
            borderRadius="lg"
          >
            <form onSubmit={handleSubmit} className="form-container">
              <Stack gap="6" align="center" w="full">
                <Heading
                  as="h3"
                  size="3xl"
                  color="fg"
                  mb={4}
                  alignSelf="center"
                >
                  {name}
                </Heading>
                <Field.Root required>
                  <Field.Label fontSize="md" fontWeight="600" color="fg.muted">
                    Email Address
                    <Field.RequiredIndicator />
                  </Field.Label>
                  <Input
                    className="form-input"
                    type="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    size="xl"
                  />
                </Field.Root>

                <Field.Root required>
                  <Field.Label fontSize="md" fontWeight="600" color="fg.muted">
                    Password
                    <Field.RequiredIndicator />
                  </Field.Label>
                  <PasswordInput
                    className="form-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    size="xl"
                  />
                </Field.Root>

                {loading && (
                  <Spinner
                    size="xl"
                    color="purple.solid"
                    borderWidth="4px"
                    marginTop="4"
                  />
                )}

                <Button
                  className="form-button"
                  type="submit"
                  bg="purple.solid"
                  _hover={{ bg: "purple.fg" }}
                  size="xl"
                  w="full"
                  marginTop="6"
                >
                  {name}
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </AbsoluteCenter>
    </Box>
  );
}

export default FormField;
