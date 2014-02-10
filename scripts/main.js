(function() {
  $(document).ready(function() {
    var croppedArea;
    $("nav a").on('click', function(e) {
      e.preventDefault();
      $.smoothScroll({
        scrollTarget: $(this).attr("href")
      });
      return false;
    });
    $(".experience .jobs, .skills .tree").mCustomScrollbar({
      mouseWheel: false,
      horizontalScroll: true,
      theme: "dark-thick",
      scrollButtons: {
        enable: true
      }
    });
    croppedArea = $(".skills .tree .mCSB_container").width() - $("section.skills").width();
    if (croppedArea > 0) {
      $(".skills .tree").mCustomScrollbar("scrollTo", croppedArea / 2);
    }
    $(".skills a").popover({
      animation: 0,
      trigger: 'click hover',
      container: "body"
    });
    return $(".showcase .carousel").each(function() {
      return $(this).find('.item .fullsize').colorbox({
        rel: this.id,
        maxWidth: "80%",
        close: "",
        next: "",
        previous: ""
      });
    });
  });

}).call(this);
