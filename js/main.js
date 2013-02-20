$(function(){
   $('#pastejsonform').submit(function(e){
      e.preventDefault();
      $('#optionzone').html('<form id="json_analisys_zone">'
         +'                 <fieldset>'
         +'                 <legend>Json analysis</legend>'
         +'                 <div id="alertplace"></div>'
         +'                 <div id="classesplace"></div>'
         +'                 <button type="submit" class=" pull-right btn btn-primary"><i class="icon-bolt"></i> re-generate</button>'
         +'                 </fieldset>'
         +'                 </form>');
         
      $('#json_analisys_zone').submit(re_generate_scala);
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
      
      
      
      
      analyse_object(o, 'r00t');
      
      generate_scala($('#classesplace'));
      
   });

});

var analyse_object = function(o, oname){
   oname = (oname.charAt(0).toUpperCase() + oname.substring(1));
   var elem = $(t.one_class({oname:oname}));
   var elem_u = elem.find('ul');
   
   _.each(o, function(value, key, list){
      
      
      elem_u.append(t.one_line({name:key,typescala:'dummy'}));
   }, this); 
   
   $('#classesplace').append(elem);
   
};

var generate_scala = function(el){
   var content = "";
   _.each(el.find('.one_class'), function(value, key, list){
      value = $(value)
      content += t.one_scala_cclass({cname:value.find('input.class_name').val(), ccontent:''}) + '\n';
   }, this); 
   $('#caseclassform textarea').val(content);
};

var re_generate_scala =function(e){
      e.preventDefault();
      generate_scala($('#classesplace'));
};


var t = {
   alert :  _.template('<div class="alert">'
         +'<button type="button" class="close" data-dismiss="alert">&times;</button>'
         +'<%= value %>'
         +'</div>'),
   error :  _.template('<div class="alert alert-error">'
         +'<button type="button" class="close" data-dismiss="alert">&times;</button>'
         +'<%= value %>'
         +'</div>'),
   one_line :  _.template('<li>'
         +'<%= name %> : ' 
         +'<%= typescala %>'
         +'</li>'),         
   one_class :  _.template('<div id="class_<%= oname %>" class="one_class">'
         +'<input class="class_name" type="text" value="<%= oname %>" />'
         +'<ul></ul>'
         +'</div>'),
   one_scala_cclass : _.template('case class <%= cname %>(<%= ccontent %>)')

};