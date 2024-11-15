## Reference

https://rjsf-team.github.io/react-jsonschema-form/docs/

Version: 5

## Table of Contents

<details>
  <summary>Quickstart</summary>
  
- [1. Form schema](#1-form-schema)
- [2. Form uiSchema](#2-form-uiSchema)
- [3. Form initialization](#3-form-initialization)
- [4. Form event handlers](#4-form-event-handlers)
- [5. Controlled component](#5-controller-component)

</details>

<details>
  <summary>Advanced Customization</summary>
  
- [1. Custom Templates](#1-custom-templates)
- [2. Custom Themes](#2-custom-themes)
- [3. Custom Widgets and Fields](#3-custom-widgets-and-fields)

</details>

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

Để tùy chỉnh các trường đối tượng trong uiSchema, cấu trúc của uiSchema phải là `{key: value}`, trong đó khóa là khóa thuộc tính và giá trị là một đối tượng có cấu hình uiSchema cho thuộc tính cụ thể đó.

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

### 3. Form initialization

Chú ý trong `formDate` và `schema`, các key phải giống nhau. Như ví dụ dưới đây `title` và `done`

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
    title: { type: 'string' }, 
    done: { type: 'boolean' },  
  },
};

const formData = {
  title: 'First task',
  done: true,
};

function App() {
  return (
    <div className='container'>
      <h1>Test Form</h1>
      <Form
        schema={schema}
        validator={validator}
        formData={formData}
      />
    </div>
  );
}

export default App;
```

![img](https://github.com/user-attachments/assets/7f24033b-78a1-41fd-846a-8205399a3d0d)

### 4. Form event handlers

Ta có thể sử dụng `onChange`, `onError`, `onSubmit`, `onFocus`, `onBlur` trong component `<Form />`

_Example:_

```tsx
import Form from '@rjsf/core';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import './App.css';

const schema: RJSFSchema = {
  title: 'Test form',
  type: 'number',
};


function App() {
  return (
    <div className='container'>
      <h1>Test Form</h1>
      <Form
        schema={schema}
        validator={validator}
        onChange={(e) => console.log(e)}
      />
    </div>
  );
}

export default App;
```

![img](https://github.com/user-attachments/assets/99720179-0455-4eb7-a155-69b76f299e2e)
![img](https://github.com/user-attachments/assets/998d5bc6-3b3b-4648-ba21-49d315ed2c24)

### 5. Controlled component

```tsx
import Form from '@rjsf/core';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import './App.css';
import React from 'react';

const schema: RJSFSchema = {
  title: 'Test form',
  type: 'number',
};


function App() {
  const [formData, setFormData] = React.useState(null);
  return (
    <div className='container'>
      <h1>Test Form</h1>
      <Form
        schema={schema}
        formData={formData}
        validator={validator}
        onChange={(e) => setFormData(e.formData)}
      />
    </div>
  );
}

export default App;
```

![img](https://github.com/user-attachments/assets/99720179-0455-4eb7-a155-69b76f299e2e)

## II. Advanced Customization
### 1. Custom Templates

- [ArrayFieldTemplate](https://rjsf-team.github.io/react-jsonschema-form/docs/advanced-customization/custom-templates#arrayfieldtemplate)

![img](https://github.com/user-attachments/assets/35dd17f9-7979-4fd3-ab52-04798eb103b1)
![img](https://github.com/user-attachments/assets/02fcaf38-d280-455e-b222-893141a447d9)

<details>
  <summary>Source code</summary>

```tsx
import Form from '@rjsf/core';
import { ArrayFieldTemplateProps, RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import './App.css';
import { VscAdd } from "react-icons/vsc";

const schema: RJSFSchema = {
  type: 'array',
  items: {
    type: 'string',
  },
};

function ArrayFieldTemplate(props: ArrayFieldTemplateProps) {
  return (
    <div>
      {props.items.map((element) => element.children)}
      {props.canAdd && <button type='button' onClick={props.onAddClick}><VscAdd /></button>}
    </div>
  );
}

function App() {
  return (
    <div className='container'>
      <h1>Test Form</h1>
      <Form
        schema={schema}
        validator={validator}
        templates={{ ArrayFieldTemplate }}
      />
    </div>
  );
}

export default App;
```
</details>

- [ArrayFieldDescriptionTemplate](https://rjsf-team.github.io/react-jsonschema-form/docs/advanced-customization/custom-templates#arrayfielddescriptiontemplate)


