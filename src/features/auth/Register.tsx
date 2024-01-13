import {
  Anchor,
  Box,
  Button,
  Container,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, registerSchema } from 'features/auth/validations';
import { useRegisterCreateMutation } from 'api/tictactoeApi';
import { errorNotification, successNotification } from 'shared/notification';
import { ApiErrorResponse } from 'types';

export const Register = () => {
  const navigate = useNavigate();
  const [register] = useRegisterCreateMutation();

  const {
    formState: { errors },
    handleSubmit,
    register: registerField,
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit: SubmitHandler<RegisterSchema> = ({ username, password }) =>
    register({ username, password })
      .unwrap()
      .then(() => {
        successNotification({ message: 'Account created successfully' });
        navigate('/login');
      })
      .catch((response: ApiErrorResponse) => {
        errorNotification({ message: response.data.errors[0].message });
      });

  return (
    <Container h="100%" size={460}>
      <Box>
        <Title ta="center">Welcome back!</Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do you already have an account?{' '}
          <Anchor size="sm" component={Link} to="/login">
            Sign in
          </Anchor>
        </Text>
      </Box>
      <Paper
        withBorder
        shadow="md"
        p={30}
        mt={30}
        radius="md"
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput
          label="Username"
          placeholder="username"
          error={errors.username?.message}
          {...registerField('username')}
        />
        <PasswordInput
          mt="md"
          label="Password"
          placeholder="Your password"
          error={errors.password?.message}
          {...registerField('password')}
        />
        <PasswordInput
          mt="md"
          label="Confirm Password"
          placeholder="Confirm password"
          error={errors.confirmPassword?.message}
          {...registerField('confirmPassword')}
        />
        <Button fullWidth mt="xl" type="submit">
          Sign Up
        </Button>
      </Paper>
    </Container>
  );
};
