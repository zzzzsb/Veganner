import * as S from "./Write.styled";
import { useEffect, useRef, useState } from "react";
import * as Api from "../../api/api";
import { Editor } from "@toast-ui/react-editor";
import { IEditor } from "../../types/iEditor";
import Category from "./Category";
import Filter from "./Filter";
import TuiEditor from "./Editor";
//import { Post } from "../../types/post";
import { EditorProps } from "../write/Editor";

interface AddPostProps {
  editor?: IEditor;
  //post?: Post;
  tuiEditor?: EditorProps;
}

function AddPost({ editor, tuiEditor }: AddPostProps) {
  // 포스트 제목
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [group, setGroup] = useState<number>(0);

  // editor DOM 선택용
  const editorRef = useRef<Editor>(null);
  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // console.log(editorRef.current?.getInstance().getHTML());
    // console.log(editorRef.current?.getInstance().getMarkdown());
    if (editorRef.current) {
      setContent(editorRef.current.getInstance().getHTML());
    }
    const post = {
      Title: title,
      Content: content,
      Groups: group,
      Types: "",
    };
    try {
      await Api.post("board/", post);
    } catch (e) {
      console.error(e);
    }
  };

  // // 이미지 base64 처리
  // useEffect(() => {
  //   if (editorRef.current) {
  //     // 전달받은 html값으로 초기화
  //     if (editor?.htmlStr) {
  //       editorRef.current.getInstance().setHTML(editor?.htmlStr);
  //     }
  //     // 기존 이미지 업로드 기능 제거
  //     editorRef.current.getInstance().removeHook("addImageBlobHook");
  //     // 이미지 서버로 데이터를 전달하는 기능 추가
  //     editorRef.current
  //       .getInstance()
  //       .addHook("addImageBlobHook", (blob, callback) => {
  //         (async () => {
  //           const formData = new FormData();
  //           formData.append("multipartFiles", blob);

  //           const res = await Api.post(
  //             "http://localhost:8080/uploadImage",
  //             formData
  //           );

  //           callback(res.data, "input alt text");
  //         })();

  //         return false;
  //       });
  //   }
  // }, []);

  return (
    <S.WriteLayout>
      <Category setGroup={setGroup} />
      <S.TitleInput
        type="text"
        value={title}
        placeholder="제목"
        onChange={(e) => setTitle(e.target.value)}
      />
      <S.SearchBar type="text" placeholder="장소를 검색해 등록해주세요." />
      <Filter />
      <TuiEditor editorRef={editorRef} />
      <S.ButtonBox>
        <S.Button onClick={handleRegister}>등록</S.Button>
        <S.Button>취소</S.Button>
      </S.ButtonBox>
    </S.WriteLayout>
  );
}

export default AddPost;
