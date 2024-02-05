import { Box } from '@chakra-ui/react';
import React from 'react';

interface EllipseProps {
    w?: number;
    h?: number;
    width?: number;
    height?: number;
    top: number;
    left: number;
    sh?: boolean; //Shadow
    rot?: number;
}

const Ellipse: React.FC<EllipseProps> = ({ width=0, height=0, top, left, sh = false, rot = 230, w=0, h=0}) => {
    width = w ? w : width;
    height = h ? h : height;
    return (
        <Box
            width={width + 'px'}
            height={height + 'px'}
            top={top + 'px'}
            left={left + 'px'}
            borderRadius="100%"
            transform={`rotate(`+rot+`deg)`}
            boxShadow={"0px 0px 40px 8px #01aff8cc"} 
            background={sh ? "linear-gradient(180deg, rgb(27.48, 34.62, 97.07) 51.59%, rgb(1, 173, 248) 100%)" : "linear-gradient(180deg, rgb(0, 163, 249) 0%, rgb(1, 233, 241) 100%)"}
            position="absolute"
        ></Box>
    );
};

export default Ellipse;
