$(function(){
   $('#pastejsonform').submit(function(e){
      e.preventDefault();
      $('#optionzone').html('<form class="form-horizontal" id="json_analisys_zone">'
         +'                 <h2>Json analysis</h2>'
         +'                 <div id="alertplace"></div>'
         +'                 <div id="classesplace"></div>'
         +'                 <button type="submit" class=" pull-right btn btn-primary"><i class="icon-cogs"></i> re-generate</button>'
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
      
      $('input.class_name').change(maj_name);
      
      $('#classesplace input').change(re_generate_scala);
      
      
   });

});

var analyse_object = function(o, oname){
   oname = generate_name(oname);
   var sign = generate_signature(o);
   if($('#class_'+sign).length > 0){
      console.log('class already analyse');
   }else{
   var elem = $(t.one_class({oname:oname, sha: sign}));
   var elem_u = elem.find('div.ul');
   if(_.size(o) > 22){
      $('#alertplace').append(t.error({value:'the '+ oname + ' class is exceding 22 fields'}));
   }else{
   
   
   _.each(o, function(value, key, list){
      var ts = "String";
      var sha = "";
      var disabled = "";
      
      
      if(_.isString(value)){
         ts = "String";
      }
      if(_.isNumber(value)){
         ts = "Double";
      }
      if(_.isBoolean(value)){
         ts = "Boolean";
      }
      
      if(_.isArray(value)){
         ts = "ARRAY";
      }
      
      if(_.isObject(value) && !_.isArray(value)){
         ts = generate_name(key);
         disabled = "disabled";
         sha = generate_signature(value);
         analyse_object(value, key);
      }
      if(_.isDate(value)){
         ts = "Date";
      }
      
      
      elem_u.append(t.one_line({name:key,typescala:ts,sha:sha,disabled:disabled}));
   }, this); 
   elem.append(t.info({value:elem_u.find('.li').length+' fields'}));
   
   $('#classesplace').append(elem);
   }
   }
};

var generate_scala = function(el){
   var content = "";
   _.each(el.find('.one_class'), function(value, key, list){
      value = $(value);
      var props = _.map(value.find('.li'), function(v, k, l){ 
         var v = $(v);
         return v.find('label').text() + ':' + v.find('input.typescala').val(); 
      }, this);
      content += t.one_scala_cclass({cname:value.find('input.class_name').val(), ccontent: props.join(', ')}) + '\n';
   }, this); 
   $('#caseclassform textarea').val(content);
};

var maj_name = function(e){
   var elem = $(e.target);
   $('input[data-signature-class="'+elem.attr('data-signature-class')+'"]').val(elem.val());
};

var re_generate_scala =function(e){
      e.preventDefault();
      generate_scala($('#classesplace'));
};

var generate_signature =function(o){
   return SHA1(_.map(_.keys(o), function(n){ return n.toLowerCase(); }).sort().join('|'));
};

var generate_name = function(oname){
   return (oname.charAt(0).toUpperCase() + oname.substring(1));
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
   info :  _.template('<div class="alert alert-info">'
         +'<button type="button" class="close" data-dismiss="alert">&times;</button>'
         +'<%= value %>'
         +'</div>'),
   one_line :  _.template('<div class="li control-group">'
         +'<label class="control-label"><%= name %></label> ' 
         +'<div class="controls">' 
         +'<input class="typescala" <%= disabled %> type="text" data-signature-class="<%= sha %>" value="<%= typescala %>" />'
         +'</div>'
         +'</div>'
         +''),         
   one_class :  _.template('<div id="class_<%= sha %>" class="one_class">'
         +'<fieldset>'
         +'<i class="icon-bookmark"></i> <input class="class_name" data-signature-class="<%= sha %>" type="text" value="<%= oname %>" />'
         +'<div class="ul"></div>'
         +'</fieldset>'
         +'</div>'),        
   one_scala_cclass : _.template('case class <%= cname %>(<%= ccontent %>)'),
   one_scala_props : _.template('<%= pname %>\:<%= ptype %>')

};