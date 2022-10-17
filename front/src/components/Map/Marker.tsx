import { MapMarker } from "react-kakao-maps-sdk";
import { Restaurant } from "../../types/restaurant";
interface Markerprops {
  location: Restaurant;
}

function Marker({ location }: Markerprops) {
  return (
    <MapMarker
      position={{ lat: location.y, lng: location.x }}
      image={{
        src: "../assets/image/marker_icon-icons.com_54388.png",
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
