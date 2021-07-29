let firebase = require('../configs/firebase')
const dbRef = firebase.firebaseRef()
const eventsRef = dbRef.child('Post')

exports.findAll = () => {
    return new Promise((resolve, reject) => {
      eventsRef.on("value", function (snapshot) {
        let events = snapshot.val()
        console.log(events)
        if (events) {
          resolve(events);
        } else {
          reject(null)
        }
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
    })
  }