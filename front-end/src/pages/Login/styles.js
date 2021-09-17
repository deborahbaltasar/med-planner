import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
	display: flex;
`;

export const Leftside = styled.div`
	flex: 3;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	img {
		width: 300px;
		margin-bottom: 2rem;
	}

	a {
		line-height: 4rem;
	}

	@media (max-width: 700px) {
		width: 100%;

	}
`;

export const RightSide = styled.div`
	flex: 4;
	background-color: var(--light-blue);
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 560px;
		max-width: 80%;
	}

	@media (max-width: 700px) {
		display: none;
	}
`;

