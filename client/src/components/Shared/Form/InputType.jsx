import React from 'react'

const InputType = ({labelText, labelFor, inputType, value, onChange, name}) => {
  return (
    <div>
        <div className="mb-3">
            <label htmlFor={labelFor} className="form-label">
                {labelText}
            </label>
            <input 
                type={inputType}
                className="form-control" 
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    </div>
  )
}

export default InputType