$(document).ready ->
	$(".experience .jobs").mCustomScrollbar(
		horizontalScroll: true
		theme: "dark-thick"
		scrollButtons:
			enable: true
		advanced:
			updateOnContentResize: true
			autoExpandHorizontalScroll: true
	)