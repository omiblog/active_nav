    $(document).scroll(function() {

        myID = document.getElementById("advertisement");

        var myScrollFunc = function () {
            var x = window.scrollTop;
            if (x >= 360) {
                myID.className = "advertisement show"
            } else {
                myID.className = "advertisement hide"
            }
        };

        window.addEventListener("scroll", myScrollFunc);
    });


