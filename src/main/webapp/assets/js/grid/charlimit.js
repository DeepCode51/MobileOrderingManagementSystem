/*Author:Vufong*/
(function($) {
	$.fn.charlimit = function(options) {
		this.each(function(){
			var ojtxt = $(this).text().replace(/\s/ig,'');
			var ojlen = ojtxt.length;
			var finish='';
			var settings={
				'len':0,
				'title':true,
				'ellipsis':true,
				'half':true
			}
			if (typeof(options)=='number') {
				settings=$.extend(settings,{'len':options})
			} else {
				settings=$.extend(settings,options)
			}
			var limit = settings.len;
			if (ojlen>settings.len) {
				if (settings.ellipsis) {
					finish='...'
				}
				if (settings.title) {
					$(this).attr('title',ojtxt).text(ojtxt.substr(0,limit)+finish);
				} else {
					$(this).text(ojtxt.substr(0,limit)+finish);
				}
			}
		})
	}
})(jQuery)