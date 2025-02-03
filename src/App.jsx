import { useState } from 'react'
import { Tiptap } from './Components/TipTap'
import { DisplayText } from './Components/DisplayText';
import './App.css'

function App() {

  const [text,setText] = useState('');
  
  const handleHtmlContent = (html) =>{
    // console.log(html);
    setText(html);
  }

  return (
    <div className='maincontainer'>
      <Tiptap handleHtmlContent={handleHtmlContent}></Tiptap>
      <DisplayText text={text}></DisplayText>
    </div>
  )
}

export default App
