
// function of everything

window.onload = function(){

  // image and popup variables

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

  // image and popup variables

// object array

    imgObjectArray = [];

// object array

// thumbnail count (increment the number of little thumbnails to be shown as you wish)

    thumbCount = 12;

// thumbnail count end

// image objects function

  var createThumb = function(imgSource){
          this.imgSource = imgSource;
          imgObjectArray.push(imgSource);
      };

// image objects function

// image objects


     img = new createThumb('url(https://farm1.staticflickr.com/695/22618827597_fcca45ef4d_c.jpg)');
     img = new createThumb('url(https://farm1.staticflickr.com/606/21893822586_c3e48f224e_c.jpg)');
     img = new createThumb('url(https://farm6.staticflickr.com/5701/19951998424_3797aa642d_c.jpg)');
     img = new createThumb('url(https://farm4.staticflickr.com/3787/20030125948_c3ecf392ba_c.jpg)');
     img = new createThumb('url(https://farm1.staticflickr.com/263/19037242528_2be9de9948_c.jpg)');
     img = new createThumb('url(https://farm1.staticflickr.com/270/18331518113_fccbc98f23_c.jpg)');
     img = new createThumb('url(https://farm8.staticflickr.com/7486/15595599858_3e4a35fb96_c.jpg)');
     img = new createThumb('url(https://farm6.staticflickr.com/5333/17668757336_f0c64cfd6f_c.jpg)');
     img = new createThumb('url(https://farm9.staticflickr.com/8766/17304198655_6eac16760a_c.jpg)');
     img = new createThumb('url(https://farm8.staticflickr.com/7627/16193390644_9f6c7648e2_c.jpg)');
     img = new createThumb('url(https://farm9.staticflickr.com/8580/16521420529_6d9c24e42f_c.jpg)');
     img = new createThumb('url(https://farm8.staticflickr.com/7362/16538135571_4d1246cfca_c.jpg)');
     img = new createThumb('url(https://farm8.staticflickr.com/7538/16263391731_28ce593800_c.jpg)');
     img = new createThumb('url(https://farm8.staticflickr.com/7581/15216495424_421b55419b_c.jpg)');
     img = new createThumb('url(https://farm9.staticflickr.com/8896/18310898258_e42798b6b0_c.jpg)');
     img = new createThumb('url(https://farm4.staticflickr.com/3938/15005623764_3fae74df31_c.jpg)');
     img = new createThumb('url(https://farm4.staticflickr.com/3897/14949377887_7ee567f802_c.jpg)');
     img = new createThumb('url(https://farm4.staticflickr.com/3895/14948809319_a0a99afb78_c.jpg)');
     img = new createThumb('url(https://farm6.staticflickr.com/5567/14948971307_a0088a26be_c.jpg)');
     img = new createThumb('url(https://farm4.staticflickr.com/3903/14948992927_57a1e4e748_c.jpg)');

// image objects

// structure of the html

    // header

    var header = document.createElement("DIV");
        header.className = "header";
    var headerText = document.createTextNode("My Gallery");
        header.appendChild(headerText);
        document.body.appendChild(header);

    // header


    // container

    var container = document.createElement("DIV");
        container.className = "container";
        document.body.appendChild(container);

    // thumbnailBody

    var thumbnailBody = document.createElement("DIV");
        thumbnailBody.className = "thumbnailBody";
        container.appendChild(thumbnailBody);

    // thumbnailBody

    // thumbnail divs

      for (var i = 0; i < thumbCount; i++) {

              imgDivs = document.createElement("DIV");
              imgDivs.className = "imgBox";
              imgDivs.style.background = imgObjectArray[i];
              imgDivs.style.backgroundSize = "cover";

              imgDivs.onclick = function(){

                createPopup();

                // popUp image box


                // background blur effect

                  container.classList.add("blur");

                // background blur effect

                  imgBox = document.createElement("DIV");
                  imgBox.className = "popUpImg";

                  // clicked image

                  var currentImage = this.style.backgroundImage;
                      imgBox.style.backgroundImage = currentImage;


                  // clicked image

                  imgBox.style.backgroundSize = "cover";
                  sliderBox.appendChild(imgBox);

                // popUp image box


            for (var j = 0; j < thumbCount; j++) {


                      if (currentImage === imgObjectArray[j] || currentImage.replace(/["]/g, '') === imgObjectArray[j]) {

                          return count = j;
                      }
                  }
              }

              thumbnailBody.appendChild(imgDivs);

            }

      // thumbnail divs

    // container


    // footer

    var footer = document.createElement("DIV");
        footer.className = "footer";
    var footerText = document.createTextNode("© Orkhan Farmanli");
        footer.appendChild(footerText);
        document.body.appendChild(footer);

    // footer

// structure of the html


// popup function

function createPopup(){



// slider box inside overlay

            sliderBox = document.createElement("DIV");
            sliderBox.className = "sliderBox";
            document.body.appendChild(sliderBox);

// slider box inside overlay


// dark overlay

            overlayDiv = document.createElement("DIV");
            overlayDiv.className = "overlay";
            overlayDiv.onclick = function(){
            closeOverlay();
          };

            document.body.appendChild(overlayDiv);

// dark overlay

// close button

            closeButt = document.createElement("DIV");
        var closeText = document.createTextNode("Close");
            closeButt.appendChild(closeText);
            closeButt.className = "closeButt";
            closeButt.onclick = closeOverlay;
            overlayDiv.appendChild(closeButt);

// close button


// Button to previous image

            prevButt = document.createElement("DIV");
            prevButt.className = "prevButt";
            prevButt.id = "navButt";
            prevButt.onclick = prevImage;
            sliderBox.appendChild(prevButt);

// Button to previous image


// Button to next image

            nextButt = document.createElement("DIV");
            nextButt.className = "nextButt";
            nextButt.id = "navButt";
            nextButt.onclick = nextImage;
            sliderBox.appendChild(nextButt);

// Button to next imag

}

// popup function


// slider function

  // next image


      function nextImage() {

        count++;

        imgBox.style.background = imgObjectArray[count];
        imgBox.style.backgroundSize = "cover";

        if (count >= imgObjectArray.length - 1) {
          count = -1;
        }
      }

  // next image

  // previous image

      function prevImage() {

        count--;

        if (count < 0) {
          count = imgObjectArray.length - 1;
        }

        imgBox.style.background = imgObjectArray[count];
        imgBox.style.backgroundSize = "cover";
      }

  // previous image

// slider function

// close overlay function

    function closeOverlay(){
      overlayDiv.style.display = "none";
      sliderBox.style.display = "none";
      container.classList.remove("blur");
    }

// close overlay function


// keyboard image switch

    document.onkeydown = function(e) {
        switch (e.keyCode) {
          // switch previous
            case 37:
                prevImage();
                break;
          // switch previous

          // switch next
            case 39:
                nextImage();
                break;
          // switch next

          // close the overlay
            case 27:
                closeOverlay();
                break;
          // close the overlay

        };
    };

// keyboard image switch



};
// function of everything
