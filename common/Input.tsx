import React from 'react';
import styled from 'styled-components';

import colors from '../util/colors';

type InputProps = {
	id: string;
	name: string;
	type: string;
	label: string;
	value: string;
	placeholder: string;
	icon?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ id, label, icon, ...props }) => (
	<Container>
		<Label htmlFor={id}>{label}</Label>
		<InputField id={id} {...props} />
		{icon && <Icon src={icon} aria-hidden="true" />}
	</Container>
);

const Container = styled.div`
	position: relative;
`;

const Label = styled.label`
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap; /* added line */
	border: 0;
`;

const InputField = styled.input`
	height: 40px;
	font-size: 13px;
	padding: 5px 15px;
	border-radius: 4px;
	border: 1px solid #ddd;
	background-color: ${colors.SUPER_LIGHT_GRAY};
	color: ${colors.PRIMARY};
	min-width: 230px;
	width: 100%;
	margin: 5px 0px;

	&:focus {
		outline: 1px solid ${colors.PRIMARY};
	}
`;

const Icon = styled.img`
	position: absolute;
	right: 10px;
	top: 18px;
	width: 16px;
	cursor: pointer;
`;

export default Input;
