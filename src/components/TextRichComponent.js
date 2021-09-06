import React, {useState} from 'react'
import {Editor, EditorState} from 'draft-js'
var parse = require('html-react-parser');

export const TextRichComponent = ({ textData }) => {
    const [editorState, setEditorState] = useState(()=> EditorState.createEmpty())
    let fieldFormat;
    textData.textType === "plain" ? fieldFormat = <p>{textData.text}</p> : fieldFormat = parse(<div>{textData.text}</div>)
    return (
        <Editor editorState={editorState} onChange={setEditorState} className={textData.className} defaultValue={fieldFormat}/>
    )
  }