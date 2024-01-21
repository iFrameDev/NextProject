import React, { useState, useEffect } from 'react';

import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";
const ReactQuill = dynamic(async () => {
  const { default: RQ } = await import('react-quill');
  const Quill = RQ.Quill;
  const QuillResizeImage = await import('quill-resize-image');
  Quill.register("modules/resize", QuillResizeImage.default);
  return RQ;
}, { ssr: false });



const EditorQuill = () => {
  const [value, setValue] = useState('');
  
  

  const Editor = {
    modules: {
      toolbar: {
        container: [
          ['image'],
        ],
      },
      resize: {
        module: 'resize', // Changez 'locale' en 'module'
        // Vous pouvez ajouter d'autres options de redimensionnement ici
      },
    },
    formats: [
      'image',
    ],
  };

  return <ReactQuill 
  theme="snow" 
  value={value} 
  onChange={setValue}
  modules={Editor.modules} />;
}
export default EditorQuill;