# retina.coffee
# Source for retina.js, a high-resolution image swapper (http://www.retinajs.com)

#= require retina_image.coffee


# First check that we're on a retina device.
# We don't even want this guy executing if we're not.
# Bind everything to the window object's onload.
# This helps wait for the images to get loaded into the DOM.

window.onload = ->
  new RetinaHandler(window).handleRetina()


class RetinaHandler
  handleRetina: () ->
    if window.devicePixelRatio > 1
      new RetinaImage(image) for image in document.getElementsByTagName("img")

root = exports ? window
root.RetinaHandler = RetinaHandler