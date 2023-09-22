import React from "react";
import "./styles.css";

const { kakao } = window;
const MapContainer = () => {
  React.useEffect(() => {
    const container = document.getElementById("myMap");

    const geocoder = new kakao.maps.services.Geocoder();
    const callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        console.log(result[0].x);
        console.log(result[0].y);
        const options = {
          center: new kakao.maps.LatLng(result[0].y, result[0].x),
          level: 3
        };
        const map = new kakao.maps.Map(container, options);
      }
    };
    geocoder.addressSearch("해남군 송지면", callback);
  }, []);
  return (
    <div
      id="myMap"
      style={{
        width: "500px",
        height: "500px"
      }}
    ></div>
  );
};
export default function App() {
  // const Kakao = withJs(
  //   `//dapi.kakao.com/v2/maps/sdk.js?appkey=48a4c3b1c5d89842bb0408f675c2c154&libraries=services,clusterer,drawing&autoload=false`
  // )(withKakaoMap(KakaoMap));
  // const lng = 36;
  // const lat = 126;
  // const level = 3;
  return (
    <>
      <div className="map">
        <h1>헤이 짱씨!</h1>
        <MapContainer />
      </div>
    </>
  );
}
