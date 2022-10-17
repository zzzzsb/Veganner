/*검색창*/
import { useState } from "react";
import styled from "styled-components";
import * as Api from "../../api/api";


function MountainSearch() {
  const [posting, setPosting] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // "registration" 엔드포인트로 post요청함.

      const res = await Api.get("board/");
      setPosting(res.data);
      console.log(res.data);
    } catch (err) {
      console.log("목록조회에 실패하였습니다.", err);
    }
    setPosting("");
  };

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value);
//     onChange(e.target.value);
//   };

//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     // 검색 창에 입력된 글자를 받아오는 함수
//     setSearch(e.target.value);
//   };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="검색"
        autoFocus={true}
        // value={value || ""}
        // onChange={handleChange}
      />
      
      <button/>검색<button/>
    </form>
  );
}
export default MountainSearch;
