import React from 'react';

const renderField = ({
    input,
    placeholder,
    type,
    className,
    meta: { touched, error }
}) => 
    <div>
      <div>
        <input {...input} className={className} placeholder={placeholder} type={type} />
        {touched &&
          (error &&  
            <div><br />
                <span style={{ backgroundColor: "white", borderRadius: "5px", padding: "5px"}}>
                {error}
                </span>
                <br /> <br /> 
            </div>) }
      </div>
    </div>

export default renderField;