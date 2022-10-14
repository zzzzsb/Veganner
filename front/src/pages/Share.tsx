import { useNavigate } from "react-router-dom";

function Share() {
  const navigate = useNavigate();
  const navigateToWrite = () => {
    navigate("/write");
  };
  return (
    <>
      <button onClick={navigateToWrite}>글쓰기</button>
    </>
  );
}

export default Share;
