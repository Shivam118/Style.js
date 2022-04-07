import React, { useState } from 'react'
import defaultHelper from '../defaultHelper';

const Button8 = ({ color1, color2, value, Link, Target, size }) => {

    const [aStyleColorBtn8, setAStyleColorBtn8] = useState(color1);
    const [aStyleBeforeOpacityBtn8, setAStyleBeforeOpacityBtn8] = useState('0');
    const [aStyleBeforeTransformBtn8, setAStyleBeforeTransformBtn8] = useState('');
    const [aStyleBeforeSpanFontSizeBtn8, setAStyleBeforeSpanFontSizeBtn8] = useState('25px');
    const [aStyleBeforeSpanTransformBtn8, setAStyleBeforeSpanTransformBtn8] = useState('');

    const styleButton8 = {
        display: 'flex',
        margin: (size / 10) + 'px',
    }
    const styleButton8A = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: (size / 8) + 'px',
        width: size + 'px',
        height: (size / 3) + 'px',
        border: (size / 95) + 'px solid ' + color1,
        textDecoration: 'none',
        color: aStyleColorBtn8,
        position: 'relative',
        transition: 'all 0.2s',
        textTransform: 'uppercase',
        zIndex:'99',
    }

    const styleButton8ABefore = {
        position: 'absolute',
        top: '0%',
        left: '0%',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        zIndex: '95',
        opacity: aStyleBeforeOpacityBtn8,
        transition: 'all 0.8s',
        transform: aStyleBeforeTransformBtn8,
    }

    const styleButton8ASpan = {
        color: 'transparent',
        position: 'relative',
    }
    const styleButton8ASpanBefore = {
        position: 'absolute',
        left: '0%',
        top: '0%',
        fontSize: aStyleBeforeSpanFontSizeBtn8,
        color: aStyleColorBtn8,
        transition: 'all 0.2s',
        transform: aStyleBeforeSpanTransformBtn8,
        zIndex:'99',
    }

    const MouseEnterBtn8 = () => {
        setAStyleColorBtn8(color2);
        setAStyleBeforeTransformBtn8('rotate(10deg)');
        setAStyleBeforeOpacityBtn8('1');
        setAStyleBeforeSpanFontSizeBtn8('60px');
        setAStyleBeforeSpanTransformBtn8('translate(-65%, -40%) rotate(360deg)');
    }
    const MouseLeaveBtn8 = () => {
        setAStyleColorBtn8(color1);
        setAStyleBeforeTransformBtn8('');
        setAStyleBeforeOpacityBtn8('0');
        setAStyleBeforeSpanFontSizeBtn8('25px');
        setAStyleBeforeSpanTransformBtn8('');

    }

    return (
        <div
            className="button8"
            style={styleButton8}
        >
            <a
                href={Link}
                target={Target}
                style={styleButton8A}
                onMouseEnter={MouseEnterBtn8}
                onMouseLeave={MouseLeaveBtn8}
            >
                <span style={styleButton8ASpan}>
                    <span style={{ styleButton8ASpanBefore }}>B</span>
                </span>
                <span style={styleButton8ABefore} />
                {value}
            </a>
        </div>
    )
}
Button8.defaultProps = {
    color1: defaultHelper.colorB,
    color2: defaultHelper.colorW,
    size: defaultHelper.size,
    value: 'utton',
    Link: defaultHelper.Link,
    Target: defaultHelper.Target,
};

export default Button8;