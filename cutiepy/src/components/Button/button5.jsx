import React, { useState } from 'react'
import defaultHelper from '../../../../cutiefy/src/Lib/Buttons/defaultHelper';

const Button5 =(props) => {
    
    const { color1, color2, value, Link, Target, size } = props;

    const [aColorBtn5, setAColorBtn5] = useState(color1);
    
    
    const styleButton5 = {
        display: 'flex',
    }

    const styleButton5ASmall = {
        textDecoration:'none',
        padding:'15px 30px',
        color:'acolorBtn5',
        fontSize:'18px',
        letterSpacing:'2px',
        border:'3px solid aqua',
        textTransform:'uppercase',
        position:'relative',
    }
    }
export default Button5;