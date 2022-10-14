import React from 'react';
import {Map} from 'react-kakao-maps-sdk'


function MainMap(){
  
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
          width: "100%",
          height: "450px",
        }}
        level={3} // 지도의 확대 레벨
      />
      </div>
    );
};

export default MainMap;