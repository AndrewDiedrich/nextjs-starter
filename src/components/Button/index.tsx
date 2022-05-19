import {FC} from 'react'
import {Button as NextButton, ButtonProps as NextButtonProps} from '@nextui-org/react';

interface ButtonProps extends NextButtonProps {

}

const Button: FC<ButtonProps> = ({children, ...rest}) => <NextButton {...rest}>{children}</NextButton>;

export default Button