var refreshId = setInterval(function() { var bid = document.getElementById('banner'); var i = Math.floor(Math.random() * 4); bid.src = "img/banner/totoro/" + i + ".jpg"; i += 1; i %= 4; }, 3000);
