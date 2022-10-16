import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import styled from "styled-components";
import React, { useRef, useState, Dispatch, SetStateAction } from "react";

export interface EditorProps {
  editorRef: React.ForwardedRef<Editor>;
  initialValue: string;
}

function TuiEditor(props: EditorProps) {
  // const [content, setContent] = useState<string>("");

  // // editor DOM 선택용
  // const editorRef = useRef<Editor>(null);
  // if (editorRef.current) {
  //   setContent(editorRef.current.getInstance().getHTML());
  // }

  return (
    <EditorLayout>
      <Editor
        initialValue={props.initialValue}
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
        toolbarItems={[
          // 툴바 옵션 설정
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task", "indent", "outdent"],
          ["table", "image", "link"],
          ["code", "codeblock"],
        ]}
        ref={props.editorRef}
      />
    </EditorLayout>
  );
}

export const EditorLayout = styled.div`
  display: block;
  height: 700px;
`;

export default TuiEditor;
