var Ins = {

  /** function to register new objects in the namespace.
   *  @param {String} path dot separated path of the new object. e.g. 'a.b' => Ins.a.b
   */
  register: function (path) {
    var obj = this,
        levels = path.split('.');

    for (var i = 0, l = levels.length; i < l; i++) {
      // Only add a new object if the object isn't already defined.
      if (typeof obj[levels[i]] == "undefined") {
        obj[levels[i]] = {};
      }

      // Reset object to the new level for the next time round the loop.
      obj = obj[levels[i]];
    }
    return obj;
  }
}

Ins.register('notify');

/**
 * Ins.notify: function that makes the notifications appear.
 * @param firstTime {Boolean} Is this the first time the function is being run on Chrome load.
 */
Ins.notify = function notify (firstTime) {
  var notification,
      notificationTimer,
      shouldNotify = false;

  if (firstTime) {
    // Set mute to true until confirmed otherwise (in case an alert comes up before an answer is received).
    localStorage['mute'] = true;
    // Create and show the first time notification.
    notification = webkitNotifications.createHTMLNotification('firstTimeNotification.html');
    notification.show();
  }
  else if (shouldNotify) {
    notification = webkitNotifications.createHTMLNotifications('notification.html');
    notification.show();
  }

  notificationTimer = setTimeout(fucntion() {
    // TODO: get browser connection status (probably in another function).
    // shouldNotify = Ins.shouldNotify();
  }, 60000);
};
