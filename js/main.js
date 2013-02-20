$(function(){
   $('#pastejsonform').submit(function(e){
      e.preventDefault();
      $('#optionzone').html('<form id="json_analisys_zone">'
         +'                 <fieldset>'
         +'                 <legend>Json analysis</legend>'
         +'                 <div id="alertplace"></div>'
         +'                 <div id="classesplace"></div>'
         +'                 </fieldset>'
         +'                 </form>');
         
      var o = null;
      try{
         o = eval($(e.target).find('textarea').val());
      }catch(e){
         $('#alertplace').append(t.error({value:'The json root is invalid...'}));
         return 1;
      }
      console.log(o);
      
      if(_.isArray(o)){
         $('#alertplace').append(t.alert({value:'The json root is an array, only the first entity will be analyse...'}));
         o = o[0];
      }
      
      if(!_.isObject(o)){
         $('#alertplace').append(t.error({value:'The json root is not an object, cannot do anything for you...'}));
         return 1;
      }
      
      
      
      
      
   });

});

var t = {
   alert :  _.template('<div class="alert">'
         +'<button type="button" class="close" data-dismiss="alert">&times;</button>'
         +'<%= value %>'
         +'</div>'),
   error :  _.template('<div class="alert alert-error">'
         +'<button type="button" class="close" data-dismiss="alert">&times;</button>'
         +'<%= value %>'
         +'</div>')
};