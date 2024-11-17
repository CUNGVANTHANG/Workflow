import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function MyDropzone() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps({ refKey: "innerRef" })}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
}
