import Form from '@rjsf/core';
import { ArrayFieldTemplateItemType, RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

const schema: RJSFSchema = {
  type: 'array',
  items: {
    type: 'string',
  },
};

function ArrayFieldItemTemplate(props: ArrayFieldTemplateItemType) {
  const { children, className } = props;
  return <div className={className}>{children}</div>;
}

const App = () => {
  return (
    <div className='container'>
      <Form schema={schema} validator={validator} templates={{ ArrayFieldItemTemplate }} />
    </div>
  );
};

export default App;
