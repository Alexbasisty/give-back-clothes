import React from 'react';

const ImportantField = (props) => (
  <div className='important-field'>
    <h1>
      Ważne
    </h1>
    <p>{props.children}</p>
  </div>
);

export default ImportantField;