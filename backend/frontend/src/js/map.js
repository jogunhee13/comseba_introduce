const mapOptions = {
    center: new naver.maps.LatLng(37.3980292, 126.6438333),
    zoom: 14,
};

const map = new naver.maps.Map("map", mapOptions);

const marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.3980292, 126.6438333),
    map: map,
});
 

