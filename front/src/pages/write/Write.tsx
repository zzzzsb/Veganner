import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import * as S from "./Write.styled";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
// interface WriteProps {
//   categories: Array<string>;
//   category: string;
//   setCategory: Dispatch<SetStateAction<boolean>>;
// }

export interface IEditor {
  htmlStr?: string;
  setHtmlStr?: React.Dispatch<React.SetStateAction<string>>;
}
function Write(props: IEditor) {
  // editor DOM 선택용
  const editorRef = useRef<Editor>(null);
  // const [text, setText] = useState<string>("");
  const handleRegisterButton = () => {
    console.log(editorRef.current?.getInstance().getHTML());
    console.log(editorRef.current?.getInstance().getMarkdown());
    if (editorRef.current) {
      if (props.setHtmlStr) {
        props.setHtmlStr(editorRef.current.getInstance().getHTML());
      }
    }
  };
  useEffect(() => {
    if (editorRef.current) {
      // 전달받은 html값으로 초기화
      if (props.htmlStr) editorRef.current.getInstance().setHTML(props.htmlStr);

      // 기존 이미지 업로드 기능 제거
      editorRef.current.getInstance().removeHook("addImageBlobHook");
      // 이미지 서버로 데이터를 전달하는 기능 추가
      editorRef.current
        .getInstance()
        .addHook("addImageBlobHook", (blob, callback) => {
          (async () => {
            const formData = new FormData();
            formData.append("multipartFiles", blob);

            const res = await axios.post(
              "http://localhost:8080/uploadImage",
              formData
            );

            callback(res.data, "input alt text");
          })();

          return false;
        });
    }
  }, []);

  const location = [
    "전체",
    "서울",
    "경기",
    "강원",
    "인천",
    "세종",
    "충북",
    "충남",
    "대전",
    "광주",
    "전남",
    "경북",
    "대구",
    "경남",
    "울산",
    "부산",
    "제주도",
  ];
  const type = [
    "전체",
    "한식",
    "양식",
    "카페",
    "분식",
    "동남아",
    "술집",
    "베이커리",
    "인도/중동",
    "중국식",
  ];
  const locationButtons = location.map((v) => (
    <S.FilterButton>{v}</S.FilterButton>
  ));
  const typeButtons = type.map((v) => <S.FilterButton>{v}</S.FilterButton>);
  return (
    <S.WriteLayout>
      <S.CategoryButtonBox>
        <S.CategoryButton>식당</S.CategoryButton>
        <S.CategoryButton>레시피</S.CategoryButton>
      </S.CategoryButtonBox>
      <S.TitleInput type="text" placeholder="제목" />
      <S.SearchBar type="text" placeholder="장소를 검색해 등록해주세요." />
      <S.FilterLayout>
        <S.FilterBox>지역별 | {locationButtons}</S.FilterBox>
        <S.FilterBox>종류별 | {typeButtons}</S.FilterBox>
      </S.FilterLayout>
      <S.EditorLayout>
        <Editor
          initialValue="당신의 채식 경험을 공유해 주세요!"
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
          ref={editorRef}
        />
      </S.EditorLayout>
      <S.ButtonBox>
        <S.Button onClick={handleRegisterButton}>등록</S.Button>
        <S.Button>취소</S.Button>
      </S.ButtonBox>
    </S.WriteLayout>
  );
}

export default Write;
