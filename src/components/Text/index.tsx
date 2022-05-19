import {CSSProperties, FC, useMemo} from 'react'
import {Text, TextProps as NextTextProps} from '@nextui-org/react';

interface TextProps extends NextTextProps {
    center: boolean
    style: any
}

const TextComponent: FC<TextProps> = ({children, center, style, ...rest}) => {

    return (
        <Text {...rest}>{children}</Text>
    )
};

export default TextComponent