// Button.tsx
import React, { FC } from 'react';
import { ButtonProps } from './types';
import StyledButton from './StyledButton';

const Button: FC<ButtonProps> = ({ children, variant = 'primary' }) => {
    return <StyledButton variant={variant}>{children}</StyledButton>;
};

export default Button;