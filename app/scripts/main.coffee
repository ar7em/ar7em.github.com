$(document).ready ->
	$(".experience .jobs, .skills .tree").mCustomScrollbar
		mouseWheel: false
		horizontalScroll: true
		theme: "dark-thick"
		scrollButtons:
			enable: true

	# Skill tree is center aligned, 
	# so if looks better if scrolled to middle
	croppedArea = $(".skills .tree .mCSB_container").width() - $("section.skills").width()

	if croppedArea > 0
		$(".skills .tree").mCustomScrollbar	"scrollTo", croppedArea/2

	# Skills popups
	$(".skills a").popover
		animation: 0
		trigger: 'click hover'
		container: "body"