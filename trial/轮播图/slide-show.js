;(function() {
	var RoomSlider = function(slideId) {
		this.slide = document.getElementById(slideId)
		this.room = this.slide.getElementsByTagName('div')[0]
		this.img = this.room.getElementsByTagName('img')
		this.slideWidth = parseInt(getComputedStyle(this.slide).width)
		this.slideHeight = parseInt(getComputedStyle(this.slide).height)

		this.up = null
		this.down = null
		this.navButton = null

		this.time = null
		this.imgIndex = 1
		this.speed = -(this.slideWidth/10)

		this.resetAllButton()

		this.slide.onmouseenter = this.onmouseenter.bind(this)
		this.slide.onmouseleave = this.onmouseleave.bind(this)
		this.down.onclick = this.nextStart.bind(this)
		this.up.onclick = this.prevStart.bind(this)
		this.autoStart = setInterval(this.nextStart.bind(this), 3000)

		for (var j=0; j<this.navButton.length; j++) {
			this.navButton[j].onclick = this.navButtonClick.bind(this)
		}

		RoomSlider.prototype.resetCss = function() {
			
		}
	}
})();