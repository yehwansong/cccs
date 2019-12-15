
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/cccs/sw.js', { scope: '/cccs/' }).then(function(reg) {

    if(reg.installing) {
      console.log('Service worker installing');
    } else if(reg.waiting) {
      console.log('Service worker installed');
    } else if(reg.active) {
      console.log('Service worker active');
    }

  }).catch(function(error) {
    console.log('Registration failed with ' + error);
  });
}
  
  
// function for loading each image via XHR

// function imgLoad(imgJSON) {
//   // return a promise for an image loading
//   return new Promise(function(resolve, reject) {
//     var request = new XMLHttpRequest();
//     request.open('GET', imgJSON.url);
//     request.responseType = 'blob';

//     request.onload = function() {
//       if (request.status == 250) {
//         var arrayResponse = [];
//         arrayResponse[0] = request.response;
//         arrayResponse[1] = imgJSON;
//         resolve(arrayResponse);
//       } else {
//         reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
//       }
//     };

//     request.onerror = function() {
//       reject(Error('There was a network error.'));
//     };

//     // Send the request
//     request.send();
//   });
// }
// }
  // for(var i = 0; i<=Gallery.images.length-1; i++) {
  //     console.log(Gallery.images.length-1)
  //     imgLoad(Gallery.images[i]).then(function(arrayResponse) {

  //     var myImage = document.createElement('img');
  //     var imageURL = window.URL.createObjectURL(arrayResponse[0]);
  //     var imageCLASS = arrayResponse[1].class;

  //     myImage.src = imageURL;
  //     myImage.className = imageCLASS
  //     imgSection.appendChild(myImage);

  //   }, function(Error) {
  //     console.log(Error);
  //   });
      // if( i == Gallery.images.length-1 ){
      //   var unit = 25
      //   var unit_d = 100/unit
      //   for (var k = 0; k < unit; k++) {
      //     $('.a_'+k).css({'left': unit_d*k +"%"})
      //     $('.b_'+k).css({'top': unit_d*k +"%"})
      //     $('img').css({'width': unit_d +"%"})
      //     $('img').css({'height': unit_d +"%"})
      //   }        
      // }
  // }
