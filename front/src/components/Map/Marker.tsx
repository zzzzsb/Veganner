import { MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import { Restaurant } from "../../types/restaurant";
import { useState } from "react";
import * as S from "./DetailMap.styled";
interface Markerprops {
  location: Restaurant;
}

function Marker({ location }: Markerprops) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isOpen && (
        <MapMarker
          onClick={() => setIsOpen(!isOpen)}
          position={{ lat: location.y, lng: location.x }}
          image={{
            src: "./assets/image/marker.png",
            size: {
              width: 24,
              height: 35,
            },
          }}
          title={location.name}
        />
      )}
      {isOpen && (
        <CustomOverlayMap position={{ lat: location.y, lng: location.x }}>
          <S.wrap>
            <S.info>
              <S.title>{location.name}</S.title>
              <S.close
                src="../assets/img/closeimg/png"
                onClick={() => setIsOpen(false)}
                title="닫기"
              ></S.close>
            </S.info>
            <S.body>
              <S.desc>
                <S.ell>{location.location}</S.ell>
              </S.desc>
            </S.body>
          </S.wrap>
        </CustomOverlayMap>
      )}
    </>
  );
}

export default Marker;
