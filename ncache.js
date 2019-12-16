
$(document).ready(function(){
    loading_img()
    function loading_img(){
        console.log(imageloaded)
        if(typeof imageloaded === 'undefined' || imageloaded == false){
            setTimeout(function(){loading_img()}, 500);
        }else if(imageloaded){   
            console.log(document.getElementById('wrapper')) 
            var imgSection = document.querySelector('section');
            for (var i = 25; i >= 1; i--) {
                for (var j = 25; j >= 1; j--) {
                    if($('.a_'+i+'.b_'+j).length == 0){
                    var at_image = document.createElement('img');

                    at_image.src = 'gallery/pix-ncache.png';
                    at_image.className = 'a_'+i+' b_'+j
                    at_image.style.top  = (100/25)*(i-1) +"%"
                    at_image.style.left = (100/25)*(j-1) +"%"
                    imgSection.appendChild(at_image);
                    } 
                }
            }
        }
    }
})
  