$(document).ready () ->
  letters = "abcdefghijklmnopqrstuvwxyz"
  current = 0
  render =()->
    $("#wrapper").html _.s letters, current, 1
  $("#wrapper").css 
    "height" : "#{screen.height}px" 
    "padding":"10px" 
    "font":"bold 300px Helvetica"
  $("#wrapper").bind "touchstart", (e)->
    e.preventDefault() 
    current++
    if current >= letters.length
      current = 0
    render()
  render()
