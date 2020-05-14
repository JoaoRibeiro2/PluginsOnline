// This is a JavaScript file

$(document).on("click","#alerta",function(){
  navigator.notification.alert("Deu certo",null,"Ola mundo","Okay")
})

$(document).on("click","#confirm",function(){
  function confirm(ButtonIndex){
   if(ButtonIndex == 1){
     navigator.notification.alert("a de abacate",null,"Botao A","Ok")
   }else{
     navigator.notification.alert("b de banana",null,"Botao B","Ok")
   }
  }
  navigator.notification.confirm("Escolha A ou B",confirm,"Escolha:",["A","B"])
})

$(document).on("click","#beep",function(){
  navigator.notification.beep(1);
})

$(document).on("click","#vibration",function(){
 navigator.vibrate(1000)
})

function mostraMapa(lat, long){
   L.mapquest.key = 'JQjHAYDCimvT8WkCf2KSIvtLuaRMwIuw';

  var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 15
        });

        map.addControl(L.mapquest.control());
}

$(document).on("click","#local",function(){
     var onSuccess = function(position) {
        mostraMapa( position.coords.latitude, position.coords.longitude)
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
})