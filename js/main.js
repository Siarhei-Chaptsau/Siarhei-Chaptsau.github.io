(function () {
  $(document).ready(function() {		
		$('#particles-js').css("background-color", "rgb(0,0,0)");
		particlesJS("particles-js", {
			"particles": {
			"number": {
				"value": 80,
				"density": {
				"enable": true,
				"value_area": 800
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
				"width": 0,
				"color": "#000000"
				},
				"polygon": {
				"nb_sides": 5
				},
				"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
				}
			},
			"opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
				}
			},
			"size": {
				"value": 3,
				"random": true,
				"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 6,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
				}
			}
			},
			"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
				"enable": true,
				"mode": "grab"
				},
				"onclick": {
				"enable": true,
				"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
				},
				"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
				},
				"repulse": {
				"distance": 200,
				"duration": 0.4
				},
				"push": {
				"particles_nb": 4
				},
				"remove": {
				"particles_nb": 2
				}
			}
			},
			"retina_detect": true
		});
});

console.log("\n \t Your work is going to fill a large part of your life,\n and the only way to be "+
      "truly satisfied is to do what you \n believe is great work. And the only way to do great"+
      " work \n is to love what you do. If you haven't found it yet, keep \n looking. Don't settle."+
      " As with all matters of the heart, \n you'll know when you find it.\n\n\n \t\t\t\t\t\t\t\t\t\t\t "+
      "Steve Jobs \n\n");
})();
