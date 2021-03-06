$(document).ready ->
	# Initiate smooth scrolling for navigation anchors
	$("nav a").on 'click', (e)->
		e.preventDefault()
		$.smoothScroll
			scrollTarget: $(this).attr "href"
		return false

	# Initiate custom scrollbar
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
		container: ".skills .tree .mCSB_container"

	# Initialize lightbox for showcase
	$(".showcase .carousel").each ->
		$(this).find('.item .fullsize').colorbox 
			rel:this.id
			maxWidth: "80%"
			close: ""
			next: ""
			previous: ""


	# Initialize fastclick to remove click delay for mobile browsers
	FastClick.attach document.body