import * as S from "../../pages/map/Map.styled";
import MiniMap from "./MiniMap";
import { useParams, Link } from "react-router-dom";

interface ItemProps {
  detail: any[];
}

function ResitemDetail({ detail }: ItemProps) {
  const { id } = useParams();
  const matched = detail.find((item) => item.index == id);
  return (
    <>
      <S.Title>
        <div>Explore the Vegan World.</div>
        <div>비거너의 비건 맛집 지도를 자유롭게 이용해 보세요.</div>
      </S.Title>

      <S.Layout>
        <S.resMenu>
          <S.searchContainer>
            <S.resContainer>
              <Link to="/explore">
                <img
                  src="../../../public/assets/image/back.png"
                  width="24"
                  height="24"
                  className="backIcon"
                />
              </Link>
              <S.restaurant>
                <h3>{`${matched.name}`}</h3>
                <p>주소 : {`${matched.location}`}</p>
                <p>전화번호 : {`${matched.number}`}</p>
              </S.restaurant>
            </S.resContainer>
          </S.searchContainer>
        </S.resMenu>
        <MiniMap item={matched} />
      </S.Layout>
    </>
  );
}

export default ResitemDetail;
