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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, loginSchema } from 'features/auth/validations';
import { useLoginCreateMutation } from 'api/tictactoeApi';
import { ApiErrorResponse } from 'types';
import { errorNotification } from 'shared/notification';

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [login] = useLoginCreateMutation();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginSchema> = ({ username, password }) => {
    const params = new URLSearchParams(location.search);
    const from = params.get('from') || '/';
    login({ username, password })
      .unwrap()
      .then(() => navigate(from))
      .catch((response: ApiErrorResponse) =>
        errorNotification({ message: response.data.errors[0].message }),
      );
  };

  return (
    <Container h="100%" size={460}>
      <Box>
        <Title ta="center">Welcome back!</Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{' '}
          <Anchor size="sm" component={Link} to="/register">
            Create account
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
          {...register('username')}
        />
        <PasswordInput
          mt="md"
          label="Password"
          placeholder="Your password"
          error={errors.password?.message}
          {...register('password')}
        />
        <Button fullWidth mt="xl" type="submit">
          Sign in
        </Button>
      </Paper>
    </Container>
  );
};
