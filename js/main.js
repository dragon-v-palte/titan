$(document).ready(function(){
  $("#thanks-letter").on("click", function() {
	$("#image-preview__content").attr('src', $("#thanks-letter").attr('src'));
    $("#image-preview").modal();
  });
});