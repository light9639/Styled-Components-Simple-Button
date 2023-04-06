export interface ButtonProps {
    children: String
    readonly variant: 'primary' | 'secondary';
    onClick?: () => void;
}