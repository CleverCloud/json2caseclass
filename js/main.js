$(function(){
   $("#caseclassform textarea").change(function(e){
      $('#mycodeis').html(t.scala_code({code:$(e.target).val()}));
      sh_highlightDocument();
   });
   $("#test_button").click(function(){
      $('#pastejsonform textarea').val('[{"coordinates":null,"favorited":false,"truncated":false,"created_at":"Mon Sep 03 13:24:14 +0000 2012","id_str":"242613977966850048","entities":{"urls":[],"hashtags":[],"user_mentions":[{"name":"Jason Costa","id_str":"14927800","id":14927800,"indices":[0,11],"screen_name":"jasoncosta"},{"name":"Matt Harris","id_str":"777925","id":777925,"indices":[12,26],"screen_name":"themattharris"},{"name":"ThinkWall","id_str":"117426578","id":117426578,"indices":[109,119],"screen_name":"thinkwall"}]},"in_reply_to_user_id_str":"14927800","contributors":null,"text":"@jasoncosta @themattharris Hey! Going to be in Frisco in October. Was hoping to have a meeting to talk about @thinkwall if you\'re around?","retweet_count":0,"in_reply_to_status_id_str":null,"id":242613977966850048,"geo":null,"retweeted":false,"in_reply_to_user_id":14927800,"place":null,"user":{"profile_sidebar_fill_color":"EEEEEE","profile_sidebar_border_color":"000000","profile_background_tile":false,"name":"Andrew Spode Miller","profile_image_url":"http://a0.twimg.com/profile_images/1227466231/spode-balloon-medium_normal.jpg","created_at":"Mon Sep 22 13:12:01 +0000 2008","location":"London via Gravesend","follow_request_sent":false,"profile_link_color":"F31B52","is_translator":false,"id_str":"16402947","entities":{"url":{"urls":[{"expanded_url":null,"url":"http://www.linkedin.com/in/spode","indices":[0,32]}]},"description":{"urls":[]}},"default_profile":false,"contributors_enabled":false,"favourites_count":16,"url":"http://www.linkedin.com/in/spode","profile_image_url_https":"https://si0.twimg.com/profile_images/1227466231/spode-balloon-medium_normal.jpg","utc_offset":0,"id":16402947,"profile_use_background_image":false,"listed_count":129,"profile_text_color":"262626","lang":"en","followers_count":2013,"protected":false,"notifications":null,"profile_background_image_url_https":"https://si0.twimg.com/profile_background_images/16420220/twitter-background-final.png","profile_background_color":"FFFFFF","verified":false,"geo_enabled":true,"time_zone":"London","description":"Co-Founder/Dev (PHP/jQuery) @justFDI. Run @thinkbikes and @thinkwall for events. Ex tech journo, helps run @uktjpr. Passion for Linux and customises everything.","default_profile_image":false,"profile_background_image_url":"http://a0.twimg.com/profile_background_images/16420220/twitter-background-final.png","statuses_count":11550,"friends_count":770,"following":null,"show_all_inline_media":true,"screen_name":"spode"},"in_reply_to_screen_name":"jasoncosta","source":"<a href=\\"http://www.journotwit.com\\" rel=\\"nofollow\\">JournoTwit</a>","in_reply_to_status_id":null},{"coordinates":{"coordinates":[121.0132101,14.5191613],"type":"Point"},"favorited":false,"truncated":false,"created_at":"Mon Sep 03 08:08:02 +0000 2012","id_str":"242534402280783873","entities":{"urls":[],"hashtags":[{"text":"twitter","indices":[49,57]}],"user_mentions":[{"name":"Jason Costa","id_str":"14927800","id":14927800,"indices":[14,25],"screen_name":"jasoncosta"}]},"in_reply_to_user_id_str":null,"contributors":null,"text":"Got the shirt @jasoncosta thanks man! Loving the #twitter bird on the shirt :-)","retweet_count":0,"in_reply_to_status_id_str":null,"id":242534402280783873,"geo":{"coordinates":[14.5191613,121.0132101],"type":"Point"},"retweeted":false,"in_reply_to_user_id":null,"place":null,"user":{"profile_sidebar_fill_color":"EFEFEF","profile_sidebar_border_color":"EEEEEE","profile_background_tile":true,"name":"Mikey","profile_image_url":"http://a0.twimg.com/profile_images/1305509670/chatMikeTwitter_normal.png","created_at":"Fri Jun 20 15:57:08 +0000 2008","location":"Singapore","follow_request_sent":false,"profile_link_color":"009999","is_translator":false,"id_str":"15181205","entities":{"url":{"urls":[{"expanded_url":null,"url":"http://about.me/michaelangelo","indices":[0,29]}]},"description":{"urls":[]}},"default_profile":false,"contributors_enabled":false,"favourites_count":11,"url":"http://about.me/michaelangelo","profile_image_url_https":"https://si0.twimg.com/profile_images/1305509670/chatMikeTwitter_normal.png","utc_offset":28800,"id":15181205,"profile_use_background_image":true,"listed_count":61,"profile_text_color":"333333","lang":"en","followers_count":577,"protected":false,"notifications":null,"profile_background_image_url_https":"https://si0.twimg.com/images/themes/theme14/bg.gif","profile_background_color":"131516","verified":false,"geo_enabled":true,"time_zone":"Hong Kong","description":"Android Applications Developer,  Studying Martial Arts, Plays MTG, Food and movie junkie","default_profile_image":false,"profile_background_image_url":"http://a0.twimg.com/images/themes/theme14/bg.gif","statuses_count":11327,"friends_count":138,"following":null,"show_all_inline_media":true,"screen_name":"mikedroid"},"in_reply_to_screen_name":null,"source":"<a href=\\"http://twitter.com/download/android\\" rel=\\"nofollow\\">Twitter for Android</a>","in_reply_to_status_id":null}]');
      $('#pastejsonform').submit();
   });
   
   $("#test_button2").click(function(){
      $('#pastejsonform textarea').val('{"results":[{"address_components":[{"long_name":"1600","short_name":"1600","types":["street_number"]},{"long_name":"Amphitheatre Pkwy","short_name":"Amphitheatre Pkwy","types":["route"]},{"long_name":"Mountain View","short_name":"Mountain View","types":["locality","political"]},{"long_name":"Santa Clara","short_name":"Santa Clara","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94043","short_name":"94043","types":["postal_code"]}],"formatted_address":"1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA","geometry":{"location":{"lat":37.42291810,"lng":-122.08542120},"location_type":"ROOFTOP","viewport":{"northeast":{"lat":37.42426708029149,"lng":-122.0840722197085},"southwest":{"lat":37.42156911970850,"lng":-122.0867701802915}}},"types":["street_address"]}],"status":"OK"}');
      $('#pastejsonform').submit();
   });
   
});
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
         o = JSON.parse($(e.target).find('textarea').val());
      }catch(e){
         $('#alertplace').append(t.error({value:'The json root is invalid...'}));
         return 1;
      }
      
      if(_.isArray(o)){
         $('#alertplace').append(t.alert({value:'The json root is an array, only the first entity will be analyse...'}));
         o = o[0];
      }
      
      if(!_.isObject(o)){
         $('#alertplace').append(t.error({value:'The json root is not an object, cannot do anything for you...'}));
         return 1;
      }
      
      
      
      
      analyse_object(o, 'r00tJsonObject');
      
      
      $('#alertplace').append(t.info({value:$('#classesplace div.one_class').length+' case class generated'}));
      
      $('input.class_name').each(function(i,ii){
         maj_name({target:ii});
      });
      
      generate_scala($('#classesplace'));
      
      $('input.class_name').change(maj_name);
      
      $('#classesplace input').change(re_generate_scala);
      
      
   });

});

var analyse_object = function(o, oname){
   oname = generate_name(oname);
   var sign = generate_signature(o);
   if($('#class_'+sign).length > 0){
   //   console.log('class already analyse');
   }else{
   var elem = $(t.one_class({oname:oname, sha: sign}));
   var elem_u = elem.find('div.ul');
   if(_.size(o) > 22){
      $('#alertplace').append(t.error({value:'the '+ oname + ' class is exceding 22 fields, generated but it will not work, due to the Product arity limitation'}));
   }
   
   
   _.each(o, function(value, key, list){
      var ts = "String";
      var sha = "";
      var list = "";
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
      if(_.isDate(value)){
         ts = "Date";
      }
      
      if(_.isArray(value)){
         if(is_value_consistent(value)){        
            list='List';
            disabled = "disabled";
            ts = generate_name(list + '['+generate_name(key)+']');
            if(_.size(value) == 0){
               $('#alertplace').append(t.error({value:'the '+ oname +' '+key+ ' field is an empty array : cannot analyse :-('}));
            }else{
               if(_.isObject(value[0])){
                  sha=generate_signature_collection(value);
                  analyse_object(value[0], key);
               }else{
                  var vv = value[0];
                  var ts2 = "String"
                  disabled = "";    
                  if(_.isString(vv)){
                     ts2 = "String";
                  }
                  if(_.isNumber(vv)){
                     ts2 = "Double";
                  }
                  if(_.isBoolean(vv)){
                     ts2 = "Boolean";
                  }
                  if(_.isDate(vv)){
                     ts2 = "Date";
                  }
                  ts = generate_name(list + '['+ts2+']');
               }
            }
         }else{
            $('#alertplace').append(t.error({value:'the '+ oname +' '+key+ ' field is prentending an array but not consistent'}));
         }
      }
      
      if(_.isObject(value) && !_.isArray(value)){
         /* THERE IS THE MAP CODE 
         
         looking for a good way to choose between map and object
         
          if(is_value_consistent(value)){
             list='Map';
             
             for(var i in value){
                var ts2 = "ERRORFOUND";
                var vv = value[i];
                if(_.isString(vv)){
                   ts2 = "String";
                }
                if(_.isNumber(vv)){
                   ts2 = "Double";
                }
                if(_.isBoolean(vv)){
                   ts2 = "Boolean";
                }
                if(_.isDate(vv)){
                   ts2 = "Date";
                }
                ts="Map[String,"+ts2+"]";
                
                if(_.isObject(vv)){
                   ts2 = "Object";
                   sha = generate_signature(vv);
                   disabled = "disabled";
                   ts="Map[String,"+generate_name(key)+"]";
                   analyse_object(vv, key);
                }
                if(_.isArray(vv)){
                   ts2 = "Array";
                }
                break;
             }
          }else{
          */
         ts = generate_name(key);
         disabled = "disabled";
         sha = generate_signature(value);
         analyse_object(value, key);
      //   }
      }
     
      
      
      elem_u.append(t.one_line({name:key,typescala:ts,sha:sha,disabled:disabled,list:list, oname:oname}));
   }, this); 
   elem.append(t.info({value:elem_u.find('.li').length+' fields'}));
   
   $('#classesplace').append(elem);
   }
   
};

var generate_scala = function(el){
   var content = "";
   _.each(el.find('.one_class'), function(value, key, list){
      value = $(value);
      var props = _.map(value.find('.li'), function(v, k, l){ 
         var v = $(v);
         var sst = v.find('input.typescala').val();
          if ( v.find('input.optional_value[type="checkbox"]').prop("checked") ){
             sst = 'Option['+sst+']';
          } 
         return v.find('label.keyname').text() + ':' + sst; 
      }, this);
      content += t.one_scala_cclass({cname:value.find('input.class_name').val(), ccontent: props.join(', ')}) + '\n';
   }, this); 
   $('#caseclassform textarea').val(content);
   $('#mycodeis').html(t.scala_code({code:content}));
   sh_highlightDocument();
};

var maj_name = function(e){
   var elem = $(e.target);
   var tochange = $('div.ul input[data-signature-class="'+elem.attr('data-signature-class')+'"]');
   tochange.filter('input[data-list=""]').val(elem.val());
   tochange.filter('input[data-list="List"]').each(function(i){
      var ee = $(this);
      ee.val(ee.attr('data-list')+'['+elem.val()+']');
   });
   tochange.filter('input[data-list="Map"]').each(function(i){
      var ee = $(this);
      ee.val(ee.attr('data-list')+'[Map,'+elem.val()+']');
   });
};

var re_generate_scala =function(e){
      e.preventDefault();
      generate_scala($('#classesplace'));
};

var is_value_consistent = function(o){
   if(_.size(o) == 0){
      return true;
   }else{
   if(!_.isArray(o)){
      o = _.values(o);
   } 
   var n = o[0];
   var nn = (_.isObject(n) ? generate_signature(n) : typeof n);
   return _.every(o, function(n){ return (_.isObject(n) ? generate_signature(n) : typeof n) == nn; }, this);
   }
};
var generate_signature_collection =function(o){
   if(_.size(o) == 0){
      return 0;
   }else{
   if(!_.isArray(o)){
      o = _.values(o);
   } 
   return generate_signature(o[0]);
}  
};
var generate_signature =function(o){
   if(_.isObject(o)){
      return SHA1(_.map(_.keys(o), function(n){ return n.toLowerCase(); }).sort().join('|'));
   }else{
      return SHA1(_.map(o, function(n){ return typeof n; }).sort().join('|'));
   }
};

var generate_name = function(oname){
   return (oname.charAt(0).toUpperCase() + oname.substring(1));
};


var t = {
   alert :  _.template('<div class="alert">'
         +'<button type="button" class="close" data-dismiss="alert">&times;</button>'
         +'<i class="icon-warning-sign"></i> <%= value %>'
         +'</div>'),
   error :  _.template('<div class="alert alert-error">'
         +'<button type="button" class="close" data-dismiss="alert">&times;</button>'
         +'<i class="icon-warning-sign"></i> <%= value %>'
         +'</div>'),
   info :  _.template('<div class="alert alert-info">'
         +'<button type="button" class="close" data-dismiss="alert">&times;</button>'
         +'<%= value %>'
         +'</div>'),
   one_line :  _.template('<div class="li control-group">'
         +'<label class="keyname control-label"><%= name %></label> ' 
         +'<div class="controls">' 
         +'<div class="input-append"><input class="typescala" <%= disabled %> type="text" data-signature-class="<%= sha %>" data-list="<%= list %>" value="<%= typescala %>" />'
         +' <span class="add-on"><input class="optional_value" type="checkbox" value="" id="chkb_<%= oname %>_<%= name %>" /><label class="label_chkbr" for="chkb_<%= oname %>_<%= name %>"> optional</label></span>'
         +'</div>'
         +'</div>'
         +'</div>'
         +''),         
   one_class :  _.template('<div id="class_<%= sha %>" class="one_class">'
         +'<fieldset>'
         +'<div class="class_title"><i class="icon-leaf"></i> <input class="class_name" data-signature-class="<%= sha %>" type="text" value="<%= oname %>" /></div>'
         +'<div class="ul"></div>'
         +'</fieldset>'
         +'</div>'),        
   one_scala_cclass : _.template('case class <%= cname %>(<%= ccontent %>)'),
   one_scala_props : _.template('<%= pname %>\:<%= ptype %>'),
   scala_code : _.template('<pre class="sh_scala"><%= code %></pre>')

};