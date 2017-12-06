window.onload = function(){
      var overlayDiv;
      var imgBox;
      var prevButt;
      var nextButt;
      var sliderBox;
      var closeButt;
      var count;
      var images;
      var imgDivs;
      var imgObjectArray;
      var thumbCount;

    imgObjectArray = [];
    thumbCount = 18;

  var createThumb = function(imgSource){
          this.imgSource = imgSource;
          imgObjectArray.push(imgSource);
      };

     img = new createThumb('url(https://farm1.staticflickr.com/695/22618827597_fcca45ef4d_c.jpg)');
     img = new createThumb('url(https://farm1.staticflickr.com/606/21893822586_c3e48f224e_c.jpg)');
     img = new createThumb('url(https://farm6.staticflickr.com/5701/19951998424_3797aa642d_c.jpg)');
     img = new createThumb('url(https://farm4.staticflickr.com/3787/20030125948_c3ecf392ba_c.jpg)');
     img = new createThumb('url(https://farm1.staticflickr.com/263/19037242528_2be9de9948_c.jpg)');
     img = new createThumb('url(https://farm8.staticflickr.com/7486/15595599858_3e4a35fb96_c.jpg)');
     img = new createThumb('url(https://farm6.staticflickr.com/5333/17668757336_f0c64cfd6f_c.jpg)');
     img = new createThumb('url(https://farm9.staticflickr.com/8766/17304198655_6eac16760a_c.jpg)');
     img = new createThumb('url(https://farm8.staticflickr.com/7627/16193390644_9f6c7648e2_c.jpg)');
     img = new createThumb('url(https://farm8.staticflickr.com/7362/16538135571_4d1246cfca_c.jpg)');
     img = new createThumb('url(https://farm8.staticflickr.com/7538/16263391731_28ce593800_c.jpg)');
     img = new createThumb('url(https://farm8.staticflickr.com/7581/15216495424_421b55419b_c.jpg)');
     img = new createThumb('url(https://farm9.staticflickr.com/8896/18310898258_e42798b6b0_c.jpg)');
     img = new createThumb('url(https://farm4.staticflickr.com/3938/15005623764_3fae74df31_c.jpg)');
     img = new createThumb('url(https://farm4.staticflickr.com/3897/14949377887_7ee567f802_c.jpg)');
     img = new createThumb('url(https://farm4.staticflickr.com/3895/14948809319_a0a99afb78_c.jpg)');
     img = new createThumb('url(https://farm6.staticflickr.com/5567/14948971307_a0088a26be_c.jpg)');
     img = new createThumb('url(https://farm4.staticflickr.com/3903/14948992927_57a1e4e748_c.jpg)');

    var header = document.createElement("DIV");
        header.className = "header";
    var headerText = document.createTextNode("My Gallery");
        header.appendChild(headerText);
        document.body.appendChild(header);

    var container = document.createElement("DIV");
        container.className = "container";
        document.body.appendChild(container);

    var thumbnailBody = document.createElement("DIV");
        thumbnailBody.className = "thumbnailBody";
        container.appendChild(thumbnailBody);

      for (var i = 0; i < thumbCount; i++) {

              imgDivs = document.createElement("DIV");
              imgDivs.className = "imgBox";
              imgDivs.style.background = imgObjectArray[i];
              imgDivs.style.backgroundSize = "cover";

              imgDivs.onclick = function(){

                createPopup();

                  container.classList.add("blur");

                  imgBox = document.createElement("DIV");
                  imgBox.className = "popUpImg";

                  var currentImage = this.style.backgroundImage;
                      imgBox.style.backgroundImage = currentImage;

                  imgBox.style.backgroundSize = "cover";
                  sliderBox.appendChild(imgBox);

            for (var j = 0; j < thumbCount; j++) {


                      if (currentImage === imgObjectArray[j] || currentImage.replace(/["]/g, '') === imgObjectArray[j]) {

                          return count = j;
                      }
                  }
              }

              thumbnailBody.appendChild(imgDivs);

            }

function createPopup(){

            sliderBox = document.createElement("DIV");
            sliderBox.className = "sliderBox";
            document.body.appendChild(sliderBox);

            overlayDiv = document.createElement("DIV");
            overlayDiv.className = "overlay";
            overlayDiv.onclick = function(){
            closeOverlay();
          };

            document.body.appendChild(overlayDiv);

            closeButt = document.createElement("DIV");
        var closeText = document.createTextNode("Close");
            closeButt.appendChild(closeText);
            closeButt.className = "closeButt";
            closeButt.onclick = closeOverlay;
            overlayDiv.appendChild(closeButt);

            prevButt = document.createElement("DIV");
            prevButt.className = "prevButt";
            prevButt.id = "navButt";
            prevButt.onclick = prevImage;
            sliderBox.appendChild(prevButt);

            nextButt = document.createElement("DIV");
            nextButt.className = "nextButt";
            nextButt.id = "navButt";
            nextButt.onclick = nextImage;
            sliderBox.appendChild(nextButt);
}

      function nextImage() {

        count++;

        imgBox.style.background = imgObjectArray[count];
        imgBox.style.backgroundSize = "cover";

        if (count >= imgObjectArray.length - 1) {
          count = -1;
        }
      }

      function prevImage() {

        count--;

        if (count < 0) {
          count = imgObjectArray.length - 1;
        }

        imgBox.style.background = imgObjectArray[count];
        imgBox.style.backgroundSize = "cover";
      }

    function closeOverlay(){
      overlayDiv.style.display = "none";
      sliderBox.style.display = "none";
      container.classList.remove("blur");
    }


    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 37:
                prevImage();
                break;
            case 39:
                nextImage();
                break;
            case 27:
                closeOverlay();
                break;

        };
    };
};
