function banner() {
	var moveUl = document.querySelector('.banner_images')
	var moveUlArr = document.querySelectorAll('.banner_images li')
	var indexLiArr = document.querySelectorAll('.banner_index li')
	var width = getComputedStyle(moveUlArr[0]).width

	var index = 1
	var tagIndex = 0

	var startTransition = function() {
		moveUl.style.transition = 'all .3s'
	}
	var endTransition = function() {
		moveUl.style.transition = ''
	}

	var setTransform = function(distance) {
		moveUl.style.transform = `translateX(${distance}px)`
	}

	var autoTransform = function() {
		index++
		tagIndex = index -1 // 单独定义一个控制标签页‘current’类显示的tagIndex变量，让index和tagIndex的循环变化分开，使得动画更加流畅

		startTransition()

		setTransform(index* width *-1)

		for (var i =0; i< indexLiArr.length; i++) {
			indexLiArr[i].className = ''
		}

		if (index> moveUlArr.length- 2) {
			tagIndex = 0
		}
		if (index< 1) {
			tagIndex = indexLiArr.length- 1
		}

		indexLiArr[tagIndex].className = 'current'
	}

	var time = setInterval(autoTransform, 2000)

	moveUl.addEventListener('webkitTransitionEnd', function() {
		if (index> moveUlArr.length- 2) {
			index = 1

			endTransition()
			setTransform(index* width * -1)
		}
		if (index< 1) {
			index = moveUlArr.length- 2

			endTransition()
			setTransform(index* width * -1)
		}
	})

	var startX = 0
	var moveX = 0
	var distanceX = 0

	moveUl.addEventListener('touchstart', function(event) {
		event = event || window.event

		clearInterval(time)
		endTransition()

		startX = event.touches[0].clientX
	})

	moveUl.addEventListener('touchmove', function(event) {
		event = event || window.event

		moveX = event.touches[0].clientX - startX

		setTransform(moveX + index* width *-1)
	})

	moveUl.addEventListener('touchend', function(event) {
		var maxDistance = width/3

		if (Math.abs(moveX)> maxDistance) {
			if (moveX> 0) {
				index--
				tagIndex = index -1
			} else {
				index++
				tagIndex = index -1
			}

			for (var i =0; i< indexLiArr.length; i++) {
				indexLiArr[i].className = ''
			}

			if (index> moveUlArr.length- 2) {
				tagIndex = 0
			}
			if (index< 1) {
				tagIndex = indexLiArr.length- 1
			}

			indexLiArr[tagIndex].className = 'current'

			startTransition()

			setTransform(index* width *-1)
		} else {
			startTransition()

			setTransform(index* width *-1)
		}

		time = setInterval(autoTransform, 2000)
	})
}