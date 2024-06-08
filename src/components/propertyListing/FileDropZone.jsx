 'use client';

import React, { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import Image from 'next/image'; 

const FileDropzone = ({ onFilesDrop, description }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleDrop = useCallback((item) => {
    if (item.files) {
      handleFiles(item.files);
    }
  }, []);

  const handleFiles = (files) => {
    const validFiles = Array.from(files).filter((file) => file.type.startsWith('image/'));

    console.log('Accepted files:', validFiles);

    setSelectedFiles((prevFiles) => [...prevFiles, ...validFiles]);

    if (onFilesDrop) {
      onFilesDrop(validFiles);
    }
  };

  const removeFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: NativeTypes.FILE,
    drop: handleDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const handleUploadButtonClick = () => {
    
    document.getElementById('file-input').click();
  };

  const handleFileInputChange = (event) => {
  
    handleFiles(event.target.files);
  };

  return (
    <div>
      <div ref={drop} className='bg-[#f1f6fd] md:bg-[#e6f1f8] px-4 sm:px-8  flex flex-col items-center justify-center max-md:text-center max-md:rounded-[10px]'>
        <Image src={'/propertyListing/assets/upload.png'} alt='upload' width={60} height={60} className='mt-10 md:mt-5' />
        <p className='font-bold text-sm sm:text-base'>{isOver && canDrop ? 'Drop the images here' : 'Drag & drop Image here'}</p>
        <p className='text-xs'>{description}</p>
        <button onClick={handleUploadButtonClick} className='bg-blue-600 rounded-md px-6 py-1 font-bold text-white mt-4 mb-8 text-sm xs:text-base'>Upload Media</button>
        <input id="file-input" type="file" onChange={handleFileInputChange} style={{ display: 'none' }} />
      </div>
     {selectedFiles.length > 0 && <div className='py-1 xs:py-2 '>
        {selectedFiles.map((file, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <img src={URL.createObjectURL(file)} alt={`Image ${index}`} style={{ maxWidth: '100%', maxHeight: '100px', width: "100%" }} />
            <button onClick={() => removeFile(index)}>Remove</button>
          </div>
        ))}
      </div>}
    </div>
  );
};

export default FileDropzone;
