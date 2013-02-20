$(function(){
   $('#pastejsonform').submit(function(e){
      e.preventDefault();
      $('#optionzone').html('<form id="pastejsonform">'
         +'                 <fieldset>'
         +'                 <legend>Json analysis</legend>'
         +'                 <div id="classesplace"></div>'
         +'                 </fieldset>'
         +'                 </form>');
      
   });

});