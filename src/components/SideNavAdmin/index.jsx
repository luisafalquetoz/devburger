import { SignOut } from '@phosphor-icons/react';

import { useResolvedPath } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { useUser } from '../../hooks/UserContext';
import { navLinks } from './navLinks';
import { Container, Footer, NavLink, NavLinkContainer } from './styles';

export function SideNavAdmin() {
	const { logout } = useUser();
	const { pathname } = useResolvedPath();

	return (
		<Container>
			<img src={Logo} alt="logo DevBurger" />
			<NavLinkContainer>
				{navLinks.map((link) => (
					<NavLink
						key={link.id}
						to={link.path}
						$isActive={pathname === link.path}
					>
						{link.icon}
						<span> {link.label} </span>
					</NavLink>
				))}
			</NavLinkContainer>
			<Footer>
				<NavLink to="/login" onClick={logout}>
					<SignOut />
					<p>Sair</p>
				</NavLink>
			</Footer>
		</Container>
	);
}
