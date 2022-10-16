import { MapMarker } from "react-kakao-maps-sdk";
import { Restaurant } from "../../types/restaurant";
interface Markerprops {
  location: Restaurant;
}

function Marker({ location }: Markerprops) {
  return (
    // location.map((position: any, index: number) => (
    <MapMarker
      // key={i}
      position={{ lat: location.y, lng: location.x }}
      image={{
        // 이미지 왜 오류 이미지 뜨지?
        src: "./assets/image/marker_icon-icons.com_54388.png",
        size: {
          width: 24,
          height: 35,
        },
      }}
      title={location.name}
    />
  );
}

export default Marker;
