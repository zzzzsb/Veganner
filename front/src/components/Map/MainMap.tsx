import React from 'react';
import {Map, MapMarker} from 'react-kakao-maps-sdk'

import Location from '../../datas/seoul.json'

const location = Location.data;

function MainMap(){
  // type image={
  //   src: string,
  //   title: string
  // }

  return (
    <div style={{ height: "100%", width: "100%" }}>
    <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 37.5642135,
          lng: 127.0016985,
        }}
        style={{
          // 지도의 크기
          width: "870px",
          height: "730px",
        }}
        level={3} // 지도의 확대 레벨
      >
        {location.map((position, index) => (
        <MapMarker
          position={{lat: position.y, lng: position.x}}
          image={{
            src: "./marker_icon-icons.com_54388.png",
            size: {
              width: 24,
              height: 35
            }
            // title = {position.name}
          }}
          
          
        />
      ))}
      </Map>

      </div>
    );
};



export default MainMap;