(function() {
  $(document).ready(function() {
    var current, letters, render;
    letters = "abcdefghijklmnopqrstuvwxyz";
    current = 0;
    render = function() {
      return $("#wrapper").html(_.s(letters, current, 1));
    };
    $("#wrapper").css({
      "height": "" + screen.height + "px",
      "padding": "10px",
      "font": "bold 300px Helvetica"
    });
    $("#wrapper").bind("touchstart", function(e) {
      e.preventDefault();
      current++;
      if (current >= letters.length) {
        current = 0;
      }
      return render();
    });
    return render();
  });
}).call(this);
