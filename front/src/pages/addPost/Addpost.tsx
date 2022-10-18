import * as S from "./Post.styled";
import { useEffect, useRef, useState } from "react";
import * as Api from "../../api/api";
import { Editor } from "@toast-ui/react-editor";
import Category from "../../components/category/Category";
import Filter from "../../components/filter/Filter";
import TuiEditor from "../../components/editor/Editor";
import { EditorProps } from "../../components/editor/Editor";
import axios from "axios";

interface AddPostProps {
  tuiEditor?: EditorProps;
}

function AddPost({ tuiEditor }: AddPostProps) {
  // 에디터 initialValue
  const defaultContent = "당신의 채식 경험을 공유해 주세요!";
  // 포스트 제목
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>(defaultContent);
  const [group, setGroup] = useState<number>(0);
  const [address, setAddress] = useState<string>("전체");
  const [type, setType] = useState<string>("전체");

  // editor DOM 선택용
  const editorRef = useRef<Editor>(null);
  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // console.log(editorRef.current?.getInstance().getHTML());
    // console.log(editorRef.current?.getInstance().getMarkdown());
    if (editorRef.current) {
      setContent(editorRef.current.getInstance().getHTML());
    }
    // 예외처리(레시피는 주소 항목 없음.)
    if (group === 1) {
      setAddress("");
    }
    const post = {
      Title: title,
      Content: content,
      Groups: group,
      Address: address,
      Type: type,
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
  //     // // 전달받은 html값으로 초기화
  //     // if (editor?.htmlStr) {
  //     //   editorRef.current.getInstance().setHTML(editor?.htmlStr);
  //     // }
  //     // 기존 이미지 업로드 기능 제거
  //     editorRef.current.getInstance().removeHook("addImageBlobHook");
  //     // 이미지 서버로 데이터를 전달하는 기능 추가
  //     editorRef.current
  //       .getInstance()
  //       .addHook("addImageBlobHook", (blob, callback) => {
  //         (async () => {
  //           console.log("Hi");
  //           console.log("blob:" + blob);
  //           const formData = new FormData();
  //           formData.append("image", blob);
  //           axios.defaults.withCredentials = true;
  //           // const res = await Api.post("board/uploadedImg/", {
  //           //   data: formData,
  //           //   headers: { "Content-type": "multipart/form-data" },
  //           // });
  //           console.log(formData);
  //           const { data: url } = await axios.post(
  //             "http://localhost:8000/board/img/",
  //             formData,
  //             {
  //               headers: { "Content-type": "multipart/formdata" },
  //             }
  //           );

  //           console.log(
  //             `%cPOST 요청 데이터: ${JSON.stringify(url)}`,
  //             "color: #296aba;"
  //           );
  //           callback(url, "input alt text");
  //           console.log(url);
  //         })();
  //         return false;
  //       });
  //   }
  // }, [editorRef]);

  return (
    <S.PostLayout>
      <Category group={group} setGroup={setGroup} />
      <S.TitleInput
        type="text"
        value={title}
        placeholder="제목"
        onChange={(e) => setTitle(e.target.value)}
      />
      <S.LocationRegisterBar
        type="text"
        placeholder="장소를 검색해 등록해주세요."
      />
      <Filter
        address={address}
        type={type}
        group={group}
        setAddress={setAddress}
        setType={setType}
      />
      <TuiEditor editorRef={editorRef} initialValue={defaultContent} />
      <S.ButtonBox>
        <S.Button onClick={handleRegister}>등록</S.Button>
        <S.Button>취소</S.Button>
      </S.ButtonBox>
    </S.PostLayout>
  );
}

export default AddPost;
