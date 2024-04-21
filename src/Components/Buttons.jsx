import React from 'react'

export default function Buttons({isDisabled, btnType, containerStyle, title, rightIcon, handleClick}) {
    return (
        <button disabled={isDisabled ?? false} type={btnType || "button"}
            className={`custom-btn py-2 px-6 ${containerStyle}`} onClick={handleClick}>
            <span className='flex-1'>{title}</span>
            {rightIcon && <div className='relative w-6 h-6'>{rightIcon}</div>}
        </button>
    )
}
