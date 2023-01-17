  $(function(){
     $.ajaxSetup({  
       headers:{
      "X-CSRF-TOKEN" : $('meta[name="csrf-token"]').attr("content")
       }
      });
    $("#sortable").sortable({
    revert: true,
    handle: ".sortable",
    stop: function (event, ui){
      var data = $(this).sortable('serialize');
      $.ajax({
        type: "POST",
        data: data,
        url: "",
        success: function(msg){
          if(msg){
            alert("islem basarili...");
          }
          else{
            alert("islem basarisiz...")
          }
        }
      });
    }
  });

 
 $("#sortable").disableSelection();
});
