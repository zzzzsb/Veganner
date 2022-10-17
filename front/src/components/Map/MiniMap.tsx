import React from 'react';
import {Map, CustomOverlayMap} from 'react-kakao-maps-sdk'
import {Restaurant} from "../../types/restaurant";

interface itemProps {
    item: Restaurant;
}

function MiniMap({item}: itemProps) {
    
    return (
        <div>
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
                height: "100%",
                }}
                level={9} // 지도의 확대 레벨
            >
            </Map>
        
        </div>
    );
};

export default MiniMap;