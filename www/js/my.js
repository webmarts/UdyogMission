document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady(){
  // alert("Device Ready")
  var push = PushNotification.init({
    android: {
      senderID: "488007969052",
        "icon": "icon",
            "iconColor": "#FFFFFF",
            alert: "true",
      badge: "true",
      sound: "true"
    },
    ios: {
      alert: "true",
      badge: "true",
      sound: "true"
    },
    windows: {}
  });
  push.on('registration', function(data) {
    // alert(data.registrationId);
   // $("#regid").val(data.registrationId);

    $.post('http://www.bramhodyogexpo.in/UdyogMission/index.php/home/get_app_regid',{reg_id:data.registrationId},
            function(datareg, status){ 

               var jsondata = $.parseJSON(datareg)
               // alert(jsondata)  
               var user_id = window.localStorage["id"];
               if(jsondata.length==0)
               {
                $.post('http://www.bramhodyogexpo.in/UdyogMission/index.php/home/post_app_regid',{reg_id:data.registrationId},
                  function(postreg, status){ 
                  })

               }
               else if(jsondata.length==1 || user_id!='' || user_id!='undefined')
               {
                
                $.post('http://www.bramhodyogexpo.in/UdyogMission/index.php/home/post_app_regid',{reg_id:data.registrationId,user_id:user_id},
                  function(postreg, status){ 
                  })
               }

            });
   
 });
  push.on('notification', function(data) {


    // alert(data);
     navigator.notification.alert(
                    
                    data.title,
                    data.city,           // title
                    'Ok'                  // buttonName
            );
     document.location.href='requirement.html'
  });
  push.on('error', function(e) {
  });
}
