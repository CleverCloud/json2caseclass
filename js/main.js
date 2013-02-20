$(function(){
   $('#pastejsonform').submit(function(e){
      e.preventDefault();
      $('#optionzone').html('<form id="json_analisys_zone">'
         +'                 <fieldset>'
         +'                 <legend>Json analysis</legend>'
         +'                 <div id="classesplace"></div>'
         +'                 </fieldset>'
         +'                 </form>');
         
         
      
   });

});