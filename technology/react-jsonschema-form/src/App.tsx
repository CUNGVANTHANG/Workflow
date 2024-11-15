import Form from '@rjsf/core';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import './App.css';

const schema: RJSFSchema = {
  title: 'Test form',
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    age: {
      type: 'number',
    },
  },
};


function App() {
  return (
    <div className='container'>
      <h1>Test Form</h1>
      <Form
        schema={schema}
        validator={validator}
      />
    </div>
  );
}

export default App;
