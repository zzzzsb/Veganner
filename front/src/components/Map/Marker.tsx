import {MapMarker} from 'react-kakao-maps-sdk'

interface Markerprops {
    location: any;
}

function Marker({location}: Markerprops){
    return (
    location.map((position: any, index: number) => (
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
    )))
};
  


export default Marker;