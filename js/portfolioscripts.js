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

     img = new createThumb('url(img/slide1.png)');
     img = new createThumb('url(img/slide2.png)');
     img = new createThumb('url(img/slide3.png)');
     img = new createThumb('url(img/tomatoholder.png)');
     img = new createThumb('url(img/tomatoholder.png)');
     img = new createThumb('url(img/tomatoholder.png)');
     img = new createThumb('url(img/tomatoholder.png)');
     img = new createThumb('url(img/tomatoholder.png)');
     img = new createThumb('url(img/tomatoholder.png)');
     img = new createThumb('url(img/tomatoholder.png)');
     img = new createThumb('url(img/tomatoholder.png)');
     img = new createThumb('url(img/tomatoholder.png)');
     img = new createThumb('url(img/tomatoholder.png)');
     img = new createThumb('url(img/tomatoholder.png)');
     img = new createThumb('url(img/tomatoholder.png)');
     img = new createThumb('url(img/tomatoholder.png)');
     img = new createThumb('url(img/tomatoholder.png)');
     img = new createThumb('url(img/tomatoholder.png)');

    var header = document.createElement("DIV");
        header.className = "header";
    var headerText = document.createTextNode("Portfolio");
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
