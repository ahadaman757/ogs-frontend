import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { useState } from "react";
import Styles from "./textediter.module.css";
const TextEditer = () => {
  const [editorState, seteditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (e) => {
    seteditorState(e);
    e.getCurrentContent().getPlainText();
    console.log(e)
  };
  return (
    <div>
      <h1 className="ogsfonts16 my-2">Job Description </h1>
      <div className={`p-3 my-3 ${Styles.texteditermain}`}>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          toolbar={{
            options: ["history", "inline", "textAlign"],
            inline: {
              options: ["bold", "underline", "italic"],
            },
          }}
        />
      </div>
    </div>
  );
};

export default TextEditer;
