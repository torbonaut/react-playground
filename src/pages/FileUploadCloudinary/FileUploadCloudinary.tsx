import { useState } from 'react';
import { Button, FileInput, Loader, Title } from '@mantine/core';

const FileUploadCloudinary = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (files: FileList | null) => {
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      setIsLoading(true);

      // Perform Cloudinary upload logic here
      // Example: const response = await cloudinary.upload(selectedFile);

      setIsLoading(false);
      setSelectedFile(null);
    }
  };

  return (
    <div>
      <Title>File Upload with Cloudinary</Title>
      <FileInput onChange={() => handleFileChange} accept="image/*" />
      <Button onClick={handleUpload} disabled={!selectedFile || isLoading}>
        {isLoading ? <Loader /> : 'Upload'}
      </Button>
    </div>
  );
};

export default FileUploadCloudinary;
