// StyledButton.tsx
import styled from 'styled-components';

const backgroundColor = {
    primary: '#1c7ed6',
    secondary: '#ae3ec9',
};

const hoverBackgroundColor = {
    primary: '#1971c2',
    secondary: '#9c36b5',
};

export interface StyledButtonProps {
    readonly variant: 'primary' | 'secondary';
}

const StyledButton = styled.button<StyledButtonProps>`
    background-color: ${(props) => backgroundColor[props.variant]};
    color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 12px 24px;
    margin: 0;
    cursor: pointer;
    transition: 0.1s background-color ease-in-out;

    &:hover {
        background-color: ${(props) => hoverBackgroundColor[props.variant]};
    }
`;

export const StyledRoundButton = styled(StyledButton)`
    border-radius: 24px;
`;

export default StyledButton;