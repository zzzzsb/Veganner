import * as S from "../../pages/map/Map.styled";
import { Restaurant } from "../../types/restaurant";
import MiniMap from "./MiniMap";

interface ItemProps {
  detail: Restaurant;
}

function ResitemDetail({ detail }: ItemProps) {
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
              <S.restaurant>
                <h3>{`${detail.name}`}</h3>
                <p>주소 : {`${detail.location}`}</p>
                <p>전화번호 : {`${detail.number}`}</p>
              </S.restaurant>
            </S.resContainer>
          </S.searchContainer>
        </S.resMenu>
        <MiniMap item={detail} />
      </S.Layout>
    </>
  );
}

export default ResitemDetail;
