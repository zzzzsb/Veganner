import React from "react";
import { Map, CustomOverlayMap, MapMarker } from "react-kakao-maps-sdk";
import { Restaurant } from "../../types/restaurant";
import * as S from "../../pages/map/Map.styled";

interface itemProps {
  item: Restaurant;
}

function MiniMap({ item }: itemProps) {
  return (
    <S.MainMap>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: item.y,
          lng: item.x,
        }}
        style={{
          // 지도의 크기
          position: "relative",
          width: "100%",
          height: "90%",
        }}
        level={4} // 지도의 확대 레벨
      >
        <MapMarker
          position={{ lat: item.y, lng: item.x }}
          image={{
            src: "./assets/image/marker_icon-icons.com_54388.png",
            size: {
              width: 24,
              height: 35,
            },
          }}
          title={item.name}
        />
        <CustomOverlayMap position={{ lat: item.y, lng: item.x }}>
          <div className="wrap">
            <div className="info">
              <div className="title">{item.name}</div>
              <div className="body">
                <div className="desc">
                  <div className="ellipsis">{item.location}</div>
                </div>
              </div>
            </div>
          </div>
          ;
        </CustomOverlayMap>
      </Map>
    </S.MainMap>
  );
}

export default MiniMap;
