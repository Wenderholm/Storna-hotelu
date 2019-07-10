var mapa; // obiekt globalny
var dymek = new google.maps.InfoWindow();

function dodajMarker(opcjeMarkera)
{
	opcjeMarkera.map = mapa;
	var marker = new google.maps.Marker(opcjeMarkera);
}
function mapaStart()  
{  
	var wspolrzedne = new google.maps.LatLng(54.563935, 18.393540);
	var opcjeMapy = 
	{
		center: wspolrzedne,
		zoom: 10,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	mapa = new google.maps.Map(document.getElementById("mapka"), opcjeMapy); 
	
	dymek.setContent("Tu nas znajdziesz")
	dymek.setPosition(new google.maps.LatLng(54.563935, 18.393540));
	dymek.open(mapa);
};