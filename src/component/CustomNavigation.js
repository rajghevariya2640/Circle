import React from 'react'
import { CLArrow, CRArrow } from './CArrow';

const CustomNavigation = ({className, ...props}) => {

    return (
        <div className={`cstm-slide-nav ${className}`} {...props}>    
            <div className={`custom-left-arr ${props.prevClass}`}>
                <CLArrow />
            </div>
            <div className={`custom-right-arr ${props.nextClass}`}>
                <CRArrow />
            </div>
        </div>
    )
}

export default CustomNavigation
