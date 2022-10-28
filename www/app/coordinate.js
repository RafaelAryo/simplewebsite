let  homeLat = -6.976154,
homeLong = 107.630210;

var paramMaps = {
        lintang 	: -6.9147439 , //Bandung
        bujur 		: 107.609809875, //Bandung
        setLintang : function(data){
            this.lintang = parseFloat(data);
        },
        setBujur : function(data){
            this.bujur = parseFloat(data);
        },
        getLintang : function(){
           return this.lintang;
        },
        getBujur : function(){
           return this.bujur  ;
        }
    };
var lineCoordinatesArray = [];

var param = {
    datalintang 	: -6.9147439 , //Bandung
    databujur 		: 107.609809875, //Bandung
    graph : {
        datalintang : [],
        databujur : []
    },
    setdatalintang : function(data){
        this.datalintang = parseFloat(data);
    },
    setdatabujur : function(data){
        this.databujur = parseFloat(data);
    },
    getdatalintang : function(){
      return this.datalintang;
    },
     getdatabujur: function(){
      return this.databujur;
    },
  };

function mapUpdate(){

	var socket = io.connect();

	socket.on('dataCoordinate' , function(data) {
		paramMaps.setLintang(data.data[0]);
        paramMaps.setBujur(data.data[1]);

		redraw(paramMaps.getLintang(), paramMaps.getBujur());
    });

    socket.on('kirim', (data)=>{

          param.setdatalintang(data.parsingData[5]);
          param.setdatabujur(data.parsingData[6]);
          
          
        calculateDistance();
        });
	 //Make map
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          mapTypeId: 'satellite',
          center: {lat: paramMaps.getLintang(), lng : paramMaps.getBujur(), alt: 0}
        });

        //make marker
        map_marker = new google.maps.Marker({position: {lat: paramMaps.getLintang(), lng: paramMaps.getBujur()}, map: map});
        map_marker.setMap(map);
     

        function redraw(Lintang, Bujur) {
          map.setCenter({lat: Lintang, lng : Bujur, alt: 0}); // biar map ketengah
          map_marker.setPosition({lat: Lintang, lng : Bujur, alt: 0}); // biar map ketengah

          pushCoordToArray(Lintang, Bujur); //masukin nilai lintan dan bujur ke array coordinates

          var lineCoordinatesPath = new google.maps.Polyline({
              path: lineCoordinatesArray,
              geodesic: true,
              strokeColor: '#ffeb3b',
              strokeOpacity: 1.0,
              strokeWeight: 2
            });

            lineCoordinatesPath.setMap(map); 
        }

        function pushCoordToArray(latIn, lngIn) {
          lineCoordinatesArray.push(new google.maps.LatLng(latIn, lngIn));
        }

}

function calculateDistance() {

    var origin = new google.maps.LatLng(homeLat,homeLong);
    var destination = new google.maps.LatLng(param.getdatalintang(), param.getdatabujur());
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
        {
            origins: [origin],
            destinations: [destination],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.IMPERIAL, // miles and feet.
            // unitSystem: google.maps.UnitSystem.metric, // kilometers and meters.
            avoidHighways: false,
            avoidTolls: false
        }, callback);
}
// get distance results
function callback(response, status) {
    if (status != google.maps.DistanceMatrixStatus.OK) {
        $('#result').html(err);
    } else {
        var origin = response.originAddresses[0];
        var destination = response.destinationAddresses[0];
            var distance = response.rows[0].elements[0].distance;
            var duration = response.rows[0].elements[0].duration;
            console.log('res: ', response);
            var distance_in_kilo = distance.value / 1000; // the kilom
            var distance_in_mile = distance.value / 1609; // the mile
            var distance_in_meter = (distance_in_mile * 1000)/0.621371;
            var duration_text = duration.text;
            var duration_value = duration.value;
            console.log(param.getdatalintang());    
            $('#in_mile').html(distance_in_mile.toFixed(2));
            $('#in_kilo').html(distance_in_kilo.toFixed(2));
            $('#duration_text').html(duration_text);
            $('#duration_value').html(duration_value);
            $('#from').html(origin);
            $('#to').html(destination);
        
    }
}