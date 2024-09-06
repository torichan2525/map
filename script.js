    
var map = L.map('mapid', { zoomControl: false });
var mpoint = [35.8627, 139.6072];
map.setView(mpoint, 10);


var jawgosm = L.tileLayer('https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
attribution: '<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
minZoom: 0,
maxZoom: 22,
accessToken: 'PyTJUlEU1OPJwCJlW1k0NC8JIt2CALpyuj7uc066O7XbdZCjWEL3WYJIk6dnXtps'

//アクセストークン　APIキー　'PyTJUlEU1OPJwCJlW1k0NC8JIt2CALpyuj7uc066O7XbdZCjWEL3WYJIk6dnXtps'
// 'nSHaogI2OmBTPBkdiMuiYbTggpSBha9lGgtUHT9acTdTffWRYxDyiztvB29pdd7K'
});

var OpenStreetMap_Mapnik = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var gsi = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
});


var pho = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}', {
minZoom: 0,
maxZoom: 20,
attribution: '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
ext: 'jpg'
});





//最初の"”に入る名前は右上の選択肢に表示される名前
//その次は上で指定したvarに続く文字

var baseMaps = {
"OpenStreetMap(Jawg)" : jawgosm,
"OpenSreetMap(Mapnic)" :OpenStreetMap_Mapnik,
"地理院地図" : gsi,
"航空写真" :pho,

};
//下記の"jawgosm"で最初に表示する地図を決定
L.control.layers(baseMaps).addTo(map);
jawgosm.addTo(map);

//ピンを表示
//コピペで使用

//座標の位置にマーカーを追加する。
var marker = L.marker([35.688544,139.764692]).addTo(map);
//上のマーカーにポップアップを追加する。
marker.bindPopup("ポップアップの内容").openPopup();

//座標の位置にマーカーを追加する。
var marker = L.marker([35.688544,139.23514]).addTo(map);
//上のマーカーにポップアップを追加する。
marker.bindPopup(
  "リンクテキスト前の文字<br><a href=#>リンクテキスト</a><br>リンクテキスト後の文字 "
).openPopup();

    //ポップアップする文字（HTML可、ここでは画像を表示）
    var sucontents = "埼玉大学です<br><img src='https://ktgis.net/service/leafletlearn/su.jpg' width='500' height='375'>"
//ポップアップオブジェクトを作成
var popup1 = L.popup({ maxWidth: 550 }).setContent(sucontents);
var popup2 = L.popup().setContent("桜区役所です");
var popup3 = L.popup().setContent("Test");
//マーカーにポップアップを紐付けする。同時にbindTooltipでツールチップも追加
//, {draggable: true } でピンを動かすことができるようにする
//.bindTooltip要素を削除すればホバー時の説明が消える
L.marker(mpoint, { draggable: true }).bindPopup(popup1).bindTooltip("埼玉大学").addTo(map);
L.marker([35.8561, 139.6098]).bindPopup(popup2).bindTooltip("桜区役所").addTo(map);
L.marker([35.8561, 139.4362]).bindPopup(popup3).bindTooltip("test").addTo(map);