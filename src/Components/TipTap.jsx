import React, { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Styles from './Styles/Tiptap.module.css';
import { Buttons } from './Buttons';
import TextToSpeech from './TextToSpeech';
import "highlight.js/styles/github.css";
import { CodeButtons } from './codeButtons';
import Codelines from './Codelines';

//code editor
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { all, createLowlight } from 'lowlight'



const lowlight = createLowlight(all)
const languages = ["javascript", "python", "html", "css"];





export const Tiptap = ({ handleHtmlContent }) => {
  const [content, setContent] = useState("<p>console.log(`press toggle`)</p>");
  const [button, changeButton] = useState('textButton');
  const [isCodeMode, setIsCodeMode] = useState(true);


  const renderButtons = () => {
    switch (button) {
      case 'textButton':
        return <Buttons changeButton={changeButton} editor={editor} content={content}></Buttons>
      case 'CodeButtons':
        return <CodeButtons changeButton={changeButton} editor={editor}></CodeButtons>
    }
  }


  const editor = useEditor({
    extensions: [
      StarterKit,
      TextToSpeech,
      CodeBlockLowlight.configure({ lowlight }),
      // ...(isCodeMode ? [Codelines] : []),
      
    ],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML()); // Update the state on every change
    },
  });

  

  if (!editor) {
    return null;
  }

  const handleEditorContent = () => {
    const html = editor.getHTML()
    handleHtmlContent(html);

  }


  return (
    <div
      className={`${Styles.mainbox} ${button === 'CodeButtons' ? Styles.codeB : ''}`}>

      {renderButtons()}

      <div>
        <EditorContent editor={editor} className={`${Styles.editor} ${button === 'CodeButtons' ? Styles.codeBM : ''}`} />
      </div>
      <button onClick={handleEditorContent} className={Styles.submitButton}>ADD</button>
    </div>
  );
};