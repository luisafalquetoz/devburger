import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import {
	Container,
	Form,
	InputContainer,
	LeftContainer,
	Link,
	RightContainer,
	Title,
} from './styles';

export function Register() {
	const navigate = useNavigate();

	const schema = yup
		.object({
			name: yup.string().required('O nome é obrigatório'),
			email: yup
				.string()
				.email('Digite um e-mail válido')
				.required('O e-mail é obrigatório'),
			password: yup
				.string()
				.min(6, 'A senha deve conter no mínimo 6 caracteres')
				.required('Digite uma senha'),
			confirmPassword: yup
				.string()
				.oneOf([yup.ref('password')], 'As senhas devem ser iguais')
				.required('Confirme sua senha'),
		})
		.required();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	console.log(errors);

	const onSubmit = async (data) => {
		try {
			const { status } = await api.post(
				'/users',
				{
					name: data.name,
					email: data.email,
					password: data.password,
				},
				{
					validateStatus: () => true,
				},
			);
			if (status === 200 || status === 201) {
				setTimeout(() => {
					navigate('/login');
				}, 2000);
				toast.success('Conta criada com sucesso! 🙌');
			} else if (status === 409 || status === 400) {
				toast.error('E-mail já cadastrado! Faça o login para continuar');
			} else {
				throw new Error();
			}
		} catch (error) {
			toast.error('😭 Falha no sistema! Tente novamente');
		}
	};

	return (
		<Container>
			<LeftContainer>
				<img src={Logo} alt="logo devburger" />
			</LeftContainer>
			<RightContainer>
				<Title>Criar conta</Title>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<InputContainer>
						<label>Nome</label>
						<input type="text" {...register('name')} />
						<p>{errors?.name?.message}</p>
					</InputContainer>

					<InputContainer>
						<label>E-mail</label>
						<input type="email" {...register('email')} />
						<p>{errors?.email?.message}</p>
					</InputContainer>

					<InputContainer>
						<label>Senha</label>
						<input type="password" {...register('password')} />
						<p>{errors?.password?.message}</p>
					</InputContainer>

					<InputContainer>
						<label>Confirmar senha</label>
						<input type="password" {...register('confirmPassword')} />
						<p>{errors?.confirmPassword?.message}</p>
					</InputContainer>
					<Button type="submit">Confirmar cadastro</Button>
				</Form>
				<p>
					Já possui conta? <Link to="/login">Clique aqui.</Link>
				</p>
			</RightContainer>
		</Container>
	);
}
