(function($){
	$("#myForm").on("submit", function(e){
  	e.preventDefault();
    var myMessage = $("#myMessage").val();

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText(myMessage,30,30);
  });

  $("#myDownload").on("click", function(){
  	var canvas = document.getElementById("myCanvas");
    var fullQuality = canvas.toDataURL("image/png", 1.0);
    window.open(fullQuality);
  });
})(jQuery);
