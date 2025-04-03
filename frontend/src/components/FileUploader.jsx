import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function FileUploader({ onFileUpload }) {
  const onDrop = useCallback((acceptedFiles) => {
    if (onFileUpload) {
      onFileUpload(acceptedFiles[0]);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="border-4 border-dashed border-primary p-6 rounded-lg text-center bg-light hover:bg-secondary hover:bg-opacity-20">
      <input {...getInputProps()} />
      <p className="text-dark font-heading">Drag & drop your report here, or click to upload</p>
    </div>
  );
}