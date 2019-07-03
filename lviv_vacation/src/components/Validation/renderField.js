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
                <span className="error_bdg">
                {error}
                </span>
                <br /> <br /> 
            </div>) }
      </div>
    </div>

export default renderField;