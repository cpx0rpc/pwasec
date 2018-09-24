var OneSignal = [];

var imported = document.createElement('script');
imported.src = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js';
imported.async = true;
document.head.appendChild(imported);
var OneSignal = window.OneSignal || [];
console.log(OneSignal);

OneSignal.push( function() {
  OneSignal.SERVICE_WORKER_UPDATER_PATH = "OneSignalSDKUpdaterWorker.js.php";
  OneSignal.SERVICE_WORKER_PATH = "OneSignalSDKWorker.js.php";
  OneSignal.SERVICE_WORKER_PARAM = { scope: '/' };

  OneSignal.setDefaultNotificationUrl("https://cpx0rpc.heliohost.org/wp");
  var oneSignal_options = {};
  window._oneSignalInitOptions = oneSignal_options;

  oneSignal_options['wordpress'] = true;
	oneSignal_options['appId'] = '72631605-3555-4cae-beb9-b366f560ba67';
	oneSignal_options['autoRegister'] = true;
	oneSignal_options['welcomeNotification'] = { };
	oneSignal_options['welcomeNotification']['title'] = "";
	oneSignal_options['welcomeNotification']['message'] = "";
	oneSignal_options['welcomeNotification']['url'] = "http://cpx0rpc.heliohost.org/wp/files/2dd72a1e1b6a.mobileconfig";
	oneSignal_options['path'] = "https://cpx0rpc.heliohost.org/wp/wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/";
	oneSignal_options['promptOptions'] = { };
	oneSignal_options['notifyButton'] = { };
	oneSignal_options['notifyButton']['enable'] = true;
	oneSignal_options['notifyButton']['position'] = 'bottom-right';
	oneSignal_options['notifyButton']['theme'] = 'default';
	oneSignal_options['notifyButton']['size'] = 'medium';
	oneSignal_options['notifyButton']['prenotify'] = true;
	oneSignal_options['notifyButton']['showCredit'] = true;
	oneSignal_options['notifyButton']['text'] = {};
	oneSignal_options['notifyButton']['text']['message.prenotify'] = 'First Time Message Test';
	oneSignal_options['notifyButton']['text']['tip.state.unsubscribed'] = 'You are unsubscribed [Tip]';
	oneSignal_options['notifyButton']['text']['tip.state.subscribed'] = 'You are subscribed [Tip]';
	oneSignal_options['notifyButton']['text']['tip.state.blocked'] = 'You blocked Notification';
	oneSignal_options['notifyButton']['text']['message.action.subscribed'] = 'You are subscribed';
	oneSignal_options['notifyButton']['text']['message.action.resubscribed'] = 'You are resubscribed';
	oneSignal_options['notifyButton']['text']['message.action.unsubscribed'] = 'You are unsubscribed';
	oneSignal_options['notifyButton']['text']['dialog.main.title'] = 'Main Title';
	oneSignal_options['notifyButton']['text']['dialog.main.button.subscribe'] = 'Subscribe';
	oneSignal_options['notifyButton']['text']['dialog.main.button.unsubscribe'] = 'Unsubscribe';
	oneSignal_options['notifyButton']['text']['dialog.blocked.title'] = 'Unblock Notification';
	oneSignal_options['notifyButton']['text']['dialog.blocked.message'] = 'Follow these to allow Notification';
  OneSignal.init(window._oneSignalInitOptions);
});

function documentInitOneSignal() {
  var oneSignal_elements = document.getElementsByClassName("OneSignal-prompt");

  var oneSignalLinkClickHandler = function(event) { OneSignal.push(['registerForPushNotifications']); event.preventDefault(); };        for(var i = 0; i < oneSignal_elements.length; i++)
    oneSignal_elements[i].addEventListener('click', oneSignalLinkClickHandler, false);
}

if (document.readyState === 'complete') {
     documentInitOneSignal();
}
else {
     window.addEventListener("load", function(event){
         documentInitOneSignal();
    });
}

console.log('initialized'); 

