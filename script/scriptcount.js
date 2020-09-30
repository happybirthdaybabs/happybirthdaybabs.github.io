const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date("OCT 01, 2020 00:00:00").getTime(),
    x = setInterval(function() {    

      let now = new Date().getTime(),
          distance = countDown - now;

		document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      if (distance < 0) {
        let headline = document.getElementById("headline"),
            countdown = document.getElementById("countdown"),
            content = document.getElementById("content");
        
        headline.innerText = "It's my Baby Bhoo's Birthday!";
        countdown.style.display = "none";
        content.style.display = "block";

        clearInterval(x);
      }

    }, second)
