import React from 'react';
import {Map} from 'react-kakao-maps-sdk'
import Marker from './Marker'




interface MainMapprops {
  items: Array<any>;
}
function MainMap({items} :MainMapprops){
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
        level={7} // 지도의 확대 레벨
      >
        {/* Marker 컴포넌트로 카테고리 한 식당만 마커표시 */}
        {items.map((item) => (
                <Marker location={item}/>
              ))}
      </Map>

      </div>
    );
};



export default MainMap;