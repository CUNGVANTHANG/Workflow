## react-dropzone

## Reference

https://react-dropzone.js.org/

## Install

```
npm install --save react-dropzone
yarn add react-dropzone
```

## Usage

**1. Sử dụng hook**

```tsx
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function MyDropzone() {
  const onDrop = useCallback(acceptedFiles: File[] => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}
```

trong đó:

`getRootProps` Trả về các thuộc tính cần thiết để biến một phần tử thành **khu vực kéo/thả file**.

`getInputProps` Trả về các thuộc tính cần thiết cho phần tử <input> để người dùng cũng có thể **chọn file bằng cách nhấn**.

`isDragActive` Trạng thái boolean xác định liệu người dùng có đang kéo file vào khu vực dropzone hay không.

`<div {...getRootProps()}>` Biến `<div>` này thành khu vực kéo/thả file. Các thuộc tính từ `getRootProps()` được truyền vào `<div>`.

`<input {...getInputProps()} />` Ẩn một `<input>` HTML cơ bản bên trong `<div>` để người dùng có thể chọn file bằng cách nhấn vào khu vực kéo/thả. Các thuộc tính từ `getInputProps()` giúp kết nối input với logic của dropzone.

Hiển thị thông báo động:

- Nếu người dùng đang kéo file (`isDragActive`), hiển thị thông báo "Drop the files here...".

- Nếu không, hiển thị thông báo "Drag 'n' drop some files here, or click to select files".

![image](https://github.com/user-attachments/assets/f145b38d-0e5d-4938-9b05-7e322793ec51)

**2. Sử dụng components**

```tsx
import Dropzone from "react-dropzone";

<Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
  {({getRootProps, getInputProps}) => (
    <section>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </section>
  )}
</Dropzone>
```

hoạt động tương tự sử dụng hook

![image](https://github.com/user-attachments/assets/f145b38d-0e5d-4938-9b05-7e322793ec51)

**3. Truy cập vào tệp tin**

Dùng để đọc file upload

```tsx
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function MyDropzone() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })
    
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  )
}
```

Kết quả: 

![image](https://github.com/user-attachments/assets/ab0d360c-cad1-4ccd-8d7e-f44fcfdcf6a9)


