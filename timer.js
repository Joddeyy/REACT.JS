window.onload = function() {

    function play() { document.getElementById("wave").innerHTML = "<audio src=\"https://dwweb.ru/__a-data/mp3/windows_xp_start.mp3\" autoplay></audio>" }

    setInterval(MY_FOO_3, 1000);

    function MY_FOO_3() {

        peremennaya_1 = document.getElementById("show_3").innerHTML;

        if (peremennaya_1)

        {

            if (peremennaya_1 !== "stop timer")

            {

                if (peremennaya_1 !== "0")

                {

                    peremennaya_1 = peremennaya_1 - 1;

                    document.getElementById("show_3").innerHTML = peremennaya_1;

                } else

                {

                    play();

                    document.getElementById("show_3").innerHTML = "stop timer";

                }

            }

        }

    }

};