## Install

```
npm install @rjsf/core @rjsf/utils @rjsf/validator-ajv8 --save
```

## Using

Dùng để validate form

## I. Quickstart

### 1. Form schema

- Với `type` là `string`, `number`

_Example:_

```tsx
import Form from '@rjsf/core';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import './App.css';

const schema: RJSFSchema = {
  title: 'Test form',
  type: 'string',
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
```

![img](https://github.com/user-attachments/assets/9e65a000-0e84-4d22-a962-f8effe164ca0)

- Với `type` là `object` thì ta cần có `properties`

_Example:_

```tsx
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
```

![img](https://github.com/user-attachments/assets/efd57f58-2c69-4adb-a9c3-6d75c8ee1cff)

### 2. Form uiSchema

uiSchema được sử dụng để thêm nhiều tùy chỉnh hơn cho giao diện của form. Sử dụng thuộc tính classNames của uiSchema để thêm tên lớp CSS tùy chỉnh vào form

```tsx
const uiSchema: UiSchema = {
  'ui:classNames': 'custom-css-class',
};
```

_Example:_

```tsx
import Form from '@rjsf/core';
import { RJSFSchema, UiSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import './App.css';

const schema: RJSFSchema = {
  title: 'Test form',
  type: 'object',
  properties: {
    name: { type: "string", title: "Name" },
    email: { type: "string", title: "Email" },
    password: { type: "string", title: "Password" },
  },
};

const uiSchema: UiSchema = {
  name: {
    "ui:placeholder": "Enter your name",
  },
  email: {
    "ui:placeholder": "Enter your email", 
  },
  password: {
    "ui:widget": "password", 
    "ui:placeholder": "Enter a secure password", 
  },
};

function App() {
  return (
    <div className='container'>
      <h1>Test Form</h1>
      <Form
        schema={schema}
        validator={validator}
        uiSchema={uiSchema}
      />
    </div>
  );
}

export default App;
```

![img](https://github.com/user-attachments/assets/c964c351-564b-4845-b7de-7a6a3f2b5204)










