import React from 'react'
import "./switch.scss"

type Switch = {
    isOn: boolean,
    handleToggle: () => void
    colorOne: string,
    colorTwo: string,
}

const Switch = ({ isOn, handleToggle, colorOne, colorTwo }: Switch) => {
    return (
        <>
            <input
                checked={isOn}
                onChange={handleToggle}
                className="switch-checkbox"
                id={`switch`}
                type="checkbox"
            />
            <label
                style={{ background: isOn ? colorOne : colorTwo }}
                className="switch-label"
                htmlFor={`switch`}
            >
                <span className={`switch-button`} />
            </label>
        </>
    );
};

export default Switch