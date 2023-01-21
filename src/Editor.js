import React from 'react';
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";  
 

export default function Editor() {
    const { quill, quillRef } = useQuill();
  return (
    <div style={{ width: 1000, height: 300 }}>
      <div ref={quillRef} />
     
    </div>
  )
}
