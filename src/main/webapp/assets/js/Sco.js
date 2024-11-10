/* ==========================================================
 * sco.ajax.js
 * http://github.com/terebentina/sco.js
 * ==========================================================
 * Copyright 2013 Dan Caragea.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

/*jshint laxcomma:true, sub:true, browser:true, jquery:true, eqeqeq:false */
/*global Spinner:true */

;(function($, undefined) {
	"use strict";

	var pluginName = 'scojs_ajax';

	$(document).on('click.' + pluginName, '[data-trigger="ajax"]', function() {
		var $this = $(this)
			,data = $this.data()
			,$target
			,spinner
			;
		if (typeof data['target'] != 'undefined') {
			$target = $(data['target']);
			if (typeof Spinner == 'function') {
				spinner = new Spinner({color: '#3d9bce'}).spin($target[0]);
			}
			$target.load($this.attr('href'), function() {
				if (spinner) {
					spinner.stop();
				}
			});
			return false;
		}
	});
})(jQuery);
/* ==========================================================
 * sco.collapse.js
 * http://github.com/terebentina/sco.js
 * ==========================================================
 * Copyright 2013 Dan Caragea.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

/*jshint laxcomma:true, sub:true, browser:true, jquery:true, devel:true, eqeqeq:false */

;(function($, undefined) {
	"use strict";

	var pluginName = 'scojs_collapse';

	function Collapse($trigger, options) {
		this.options = $.extend({}, $.fn[pluginName].defaults, options);
		this.$trigger = $trigger;
		if (this.options.target !== null) {
			this.$target = $(this.options.target);
		} else {
			this.$target = this.$trigger[this.options.mode](this.options.collapseSelector);
		}
		if (this.options.parent !== null) {
			this.$parent = this.$trigger.closest(this.options.parent);
		}
	}

	$.extend(Collapse.prototype, {
		toggle: function() {
			//this.$target.toggleClass(this.options.activeTargetClass);
			if (this.options.ease) {
				this.$target[$.camelCase(this.options.ease + '-toggle')]();
			} else {
				this.$target.toggle();
			}
			if (this.$parent && !this.$trigger.hasClass(this.options.activeTriggerClass)) {
				this.$parent.find(this.options.triggerSelector + '.' + this.options.activeTriggerClass)[pluginName](this.options);
			}
			this.$trigger.toggleClass(this.options.activeTriggerClass);
			if (this.options.triggerHtml !== null) {
				var self = this;
				this.$trigger.html(function() {
					if (self.$trigger.hasClass(self.options.activeTriggerClass)) {
						return self.options.triggerHtml.on;
					} else {
						return self.options.triggerHtml.off;
					}
				});
			}
			return this;
		}
	});


	$.fn[pluginName] = function(options) {
		return this.each(function() {
			var obj;
			if (!(obj = $.data(this, pluginName))) {
				var $this = $(this)
					,data = $this.data()
					,opts = $.extend({}, $.fn[pluginName].defaults, options, data)
					;
				obj = new Collapse($this, opts);
				$.data(this, pluginName, obj);
			}
			obj.toggle();
		});
	};


	$[pluginName] = function(trigger, options) {
		if (typeof trigger === 'string') {
			trigger = $(trigger);
		}
		return new Collapse(trigger, options);
	};


	$.fn[pluginName].defaults = {
		parent: null                        // having a parent activates the accordion mode behaviour
		,target: null                       // the element to show/hide. If null, the target is chosen based on the "mode" selector
		,activeTriggerClass: 'active'       // class to add to the trigger in active (on) state
		//,activeTargetClass: 'in'          // class to add to the target in active (on) state
		,triggerHtml: null                  // if not null, this should be a hash like {off: 'more', on: 'less'}. This text is set on the trigger.
		,mode: 'next'                       // "next" means target is after trigger, "prev" means target is before trigger in html source
		,collapseSelector: '.collapsible'   // used in accordion to find out what to collapse when the current target expands or if the target is null
		,triggerSelector: '[data-trigger="collapse"]'		// used in accordion to find out all triggers
		,ease: 'slide'                      // the animation effect to use. Must support toggle (like slideToggle/fadeToggle or even empty string :))
	};

	$(document).on('click.' + pluginName, '[data-trigger="collapse"]', function(e) {
		$(this)[pluginName]({triggerSelector: e.handleObj.selector});
		if ($(this).is('a')) {
			return false;
		}
	});
})(jQuery);
/* ==========================================================
 * sco.confirm.js
 * http://github.com/terebentina/sco.js
 * ==========================================================
 * Copyright 2013 Dan Caragea.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

/*jshint laxcomma:true, sub:true, browser:true, jquery:true, devel:true */

;(function($, undefined) {
	"use strict";

	var pluginName = 'scojs_confirm';

	function Confirm(options) {
		this.options = $.extend({}, $.fn[pluginName].defaults, options);

		var $modal = $(this.options.target);
		if (!$modal.length) {
			$modal = $('<div class="modal" id="' + this.options.target.substr(1) + '"><div class="modal-body inner"/><div class="modal-footer"><a class="btn cancel" href="#" data-dismiss="modal">cancel</a> <a href="#" class="btn btn-danger" data-action="1">yes</a></div></div>').appendTo(this.options.appendTo).hide();
			if (typeof this.options.action == 'function') {
				var self = this;
				$modal.find('[data-action]').attr('href', '#').on('click.' + pluginName, function(e) {
					e.preventDefault();
					self.options.action.call(self);
					self.close();
				});
			} else if (typeof this.options.action == 'string') {
				$modal.find('[data-action]').attr('href', this.options.action);
			}
		}
		this.scomodal = $.scojs_modal(this.options);
	}

	$.extend(Confirm.prototype, {
		show: function() {
			this.scomodal.show();
			return this;
		}

		,close: function() {
			this.scomodal.close();
			return this;
		}

		,destroy: function() {
			this.scomodal.destroy();
			return this;
		}
	});


	$.fn[pluginName] = function(options) {
		return this.each(function() {
			var obj;
			if (!(obj = $.data(this, pluginName))) {
				var $this = $(this)
					,data = $this.data()
					,title = $this.attr('title') || data.title
					,opts = $.extend({}, $.fn[pluginName].defaults, options, data)
					;
				if (!title) {
					title = 'this';
				}
				opts.content = opts.content.replace(':title', title);
				if (!opts.action) {
					opts.action = $this.attr('href');
				} else if (typeof window[opts.action] == 'function') {
					opts.action = window[opts.action];
				}
				obj = new Confirm(opts);
				$.data(this, pluginName, obj);
			}
			obj.show();
		});
	};

	$[pluginName] = function(options) {
		return new Confirm(options);
	};

	$.fn[pluginName].defaults = {
		content: 'Are you sure you want to delete :title?'
		,cssclass: 'confirm_modal'
		,target: '#confirm_modal'	// this must be an id. This is a limitation for now, @todo should be fixed
		,appendTo: 'body'	// where should the modal be appended to (default to document.body). Added for unit tests, not really needed in real life.
	};

	$(document).on('click.' + pluginName, '[data-trigger="confirm"]', function() {
		$(this)[pluginName]();
		return false;
	});
})(jQuery);
/* ==========================================================
 * sco.countdown.js
 * http://github.com/terebentina/sco.js
 * ==========================================================
 * Copyright 2013 Dan Caragea.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

/*jshint laxcomma:true, sub:true, browser:true, jquery:true, devel:true */

;(function($, undefined) {
	"use strict";

	var pluginName = 'scojs_countdown';

	function doit($elem, data, until) {
		var str = ''
			,started = false
			,left = {d: 0, h: 0, m: 0, s: 0}
			,js_current = Math.round((new Date()).getTime() / 1000)
			;

		left.s = until - js_current;

		if (left.s < 0) {
			return;
		}
		if (Math.floor(left.s / 86400) > 0) {
			left.d = Math.floor(left.s / 86400);
			left.s = left.s % 86400;
			str += left.d + data.strings.d;
			started = true;
		}
		if (Math.floor(left.s / 3600) > 0) {
			left.h = Math.floor(left.s / 3600);
			left.s = left.s % 3600;
			started = true;
		}
		if (started) {
			str += ' ' + left.h + data.strings.h;
			started = true;
		}
		if (Math.floor(left.s / 60) > 0) {
			left.m = Math.floor(left.s / 60);
			left.s = left.s % 60;
			started = true;
		}
		if (started) {
			str += ' ' + left.m + data.strings.m;
			started = true;
		}
		if (left.s > 0) {
			started = true;
		}
		if (started) {
			str += ' ' + left.s + data.strings.s;
			started = true;
		}

		$elem.html(str);
		setTimeout(function() {doit($elem, data, until);}, 500);
	}

	$.fn[pluginName] = function(options) {
		var $this = $(this)
			,data = $this.data()
			,js_current
			;

		data = $.extend({}, $.fn[pluginName].defaults, options, data);

		if (!data.until) {
			return;
		}

		js_current = Math.round((new Date()).getTime() / 1000);
		if (!data.current) {
			data.current = js_current;
		}

		data.until -= (js_current - data.current);

		doit($this, data, data.until);
	};

	$.fn[pluginName].defaults = {
		strings: {d: 'd', h: 'h', m: 'm', s: 's'}
	};
})(jQuery);
/* ==========================================================
 * sco.message.js
 * http://github.com/terebentina/sco.js
 * ==========================================================
 * Copyright 2013 Dan Caragea.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

/*jshint laxcomma:true, sub:true, browser:true, jquery:true, eqeqeq: false */

;(function($, undefined) {
	"use strict";

	var pluginName = 'scojs_message';

	$[pluginName] = function(message, type) {
		clearTimeout($[pluginName].timeout);
		var $selector = $('#' + $[pluginName].options.id);
		if (!$selector.length) {
			$selector = $('<div/>', {id: $[pluginName].options.id}).appendTo($[pluginName].options.appendTo);
		}
		if ($[pluginName].options.animate) {
			$selector.addClass('page_mess_animate');
		} else {
			$selector.removeClass('page_mess_animate');
		}
		$selector.html(message);
		if (type === undefined || type == $[pluginName].TYPE_ERROR) {
			$selector.removeClass($[pluginName].options.okClass).addClass($[pluginName].options.errClass);
		} else if (type == $[pluginName].TYPE_OK) {
			$selector.removeClass($[pluginName].options.errClass).addClass($[pluginName].options.okClass);
		}
		$selector.slideDown('fast', function() {
			$[pluginName].timeout = setTimeout(function() { $selector.slideUp('fast'); }, $[pluginName].options.delay);
		});
	};


	$.extend($[pluginName], {
		options: {
			 id: 'page_message'
			,okClass: 'page_mess_ok'
			,errClass: 'page_mess_error'
			,animate: true
			,delay: 4000
			,appendTo: 'body'	// where should the modal be appended to (default to document.body). Added for unit tests, not really needed in real life.
		},

		TYPE_ERROR: 1,
		TYPE_OK: 2
	});
})(jQuery);
/* ==========================================================
 * sco.modal.js
 * http://github.com/terebentina/sco.js
 * ==========================================================
 * Copyright 2013 Dan Caragea.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

/*jshint laxcomma:true, sub:true, browser:true, jquery:true, devel:true, eqeqeq:false */
/*global Spinner:true */

;(function($, undefined) {
	"use strict";

	var pluginName = 'scojs_modal';

	function Modal(options) {
		this.options = $.extend({}, $.fn[pluginName].defaults, options);
		this.$modal = $(this.options.target).attr('class', 'modal fade').hide();
		var self = this;

		function init() {
			if (self.options.title === '') {
				self.options.title = '&nbsp;';
			}
		};

		init();
	}


	$.extend(Modal.prototype, {
		show: function() {
			var self = this
				,$backdrop;

			if (!this.options.nobackdrop) {
				$backdrop = $('.modal-backdrop');
			}
			if (!this.$modal.length) {
				this.$modal = $('<div class="modal fade" id="' + this.options.target.substr(1) + '"><div class="modal-header"><a class="close" href="#" data-dismiss="modal">×</a><h3>&nbsp;</h3></div><div class="inner"/></div>').appendTo(this.options.appendTo).hide();
			}

			this.$modal.find('.modal-header h3').html(this.options.title);

			if (this.options.cssclass !== undefined) {
				this.$modal.attr('class', 'modal fade ' + this.options.cssclass);
			}

			if (this.options.width !== undefined) {
				this.$modal.width(this.options.width);
			}

			if (this.options.left !== undefined) {
				this.$modal.css({'left': this.options.left});
			}

			if (this.options.height !== undefined) {
				this.$modal.height(this.options.height);
			}

			if (this.options.top !== undefined) {
				this.$modal.css({'top': this.options.top});
			}

			if (this.options.keyboard) {
				this.escape();
			}

			if (!this.options.nobackdrop) {
				if (!$backdrop.length) {
					$backdrop = $('<div class="modal-backdrop fade" />').appendTo(this.options.appendTo);
				}
				$backdrop[0].offsetWidth; // force reflow
				$backdrop.addClass('in');
			}

			this.$modal.off('close.' + pluginName).on('close.' + pluginName, function() {
				self.close.call(self);
			});
			if (this.options.remote !== undefined && this.options.remote != '' && this.options.remote !== '#') {
				var spinner;
				if (typeof Spinner == 'function') {
					spinner = new Spinner({color: '#3d9bce'}).spin(this.$modal[0]);
				}
				this.$modal.find('.inner').load(this.options.remote, function() {
					if (spinner) {
						spinner.stop();
					}
					if (self.options.cache) {
						self.options.content = $(this).html();
						delete self.options.remote;
					}
				});
			} else {
				this.$modal.find('.inner').html(this.options.content);
			}

			this.$modal.show().addClass('in');
			return this;
		}

		,close: function() {
			this.$modal.hide().off('.' + pluginName).find('.inner').html('');
			if (this.options.cssclass !== undefined) {
				this.$modal.removeClass(this.options.cssclass);
			}
			$(document).off('keyup.' + pluginName);
			$('.modal-backdrop').remove();
			if (typeof this.options.onClose === 'function') {
				this.options.onClose.call(this, this.options);
			}
			return this;
		}

		,destroy: function() {
			this.$modal.remove();
			$(document).off('keyup.' + pluginName);
			$('.modal-backdrop').remove();
			this.$modal = null;
			return this;
		}

		,escape: function() {
			var self = this;
			$(document).on('keyup.' + pluginName, function(e) {
				if (e.which == 27) {
					self.close();
				}
			});
		}
	});


	$.fn[pluginName] = function(options) {
		return this.each(function() {
			var obj;
			if (!(obj = $.data(this, pluginName))) {
				var  $this = $(this)
					,data = $this.data()
					,opts = $.extend({}, options, data)
					;
				if ($this.attr('href') !== '' && $this.attr('href') != '#') {
					opts.remote = $this.attr('href');
				}
				obj = new Modal(opts);
				$.data(this, pluginName, obj);
			}
			obj.show();
		});
	};


	$[pluginName] = function(options) {
		return new Modal(options);
	};


	$.fn[pluginName].defaults = {
		title: '&nbsp;'		// modal title
		,target: '#modal'	// the modal id. MUST be an id for now.
		,content: ''		// the static modal content (in case it's not loaded via ajax)
		,appendTo: 'body'	// where should the modal be appended to (default to document.body). Added for unit tests, not really needed in real life.
		,cache: false		// should we cache the output of the ajax calls so that next time they're shown from cache?
		,keyboard: false
		,nobackdrop: false
	};


	$(document).on('click.' + pluginName, '[data-trigger="modal"]', function() {
		$(this)[pluginName]();
		if ($(this).is('a')) {
			return false;
		}
	}).on('click.' + pluginName, '[data-dismiss="modal"]', function(e) {
		e.preventDefault();
		$(this).closest('.modal').trigger('close');
	});
})(jQuery);
/* ==========================================================
 * sco.panes.js
 * http://github.com/terebentina/sco.js
 * ==========================================================
 * Copyright 2013 Dan Caragea.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

/*jshint laxcomma:true, sub:true, browser:true, jquery:true, devel:true */

;(function($, undefined) {
	"use strict";

	var pluginName = 'scojs_panes';

	function Panes($wrapper, options) {
		var self = this;

		this.options = $.extend({}, $[pluginName].defaults, options);
		var transitionEnd = ($.support.transition && this.options.easing) ? $.support.transition.end : null;
		this.$pane_wrapper = $wrapper;
		if (this.options.easing) {
			this.$pane_wrapper.addClass(this.options.easing);
		}

		this.$pane_wrapper.on('select.' + pluginName, function(e, options, index) {
			if (!e.namespace || e.namespace != pluginName) {
				return;
			}
			var  direction = 'left'
				,type = 'next'
				;
			if (options.active > index) {
				direction = 'right';
				type = 'prev';
			}

			function onEnd() {
				self.$panes.eq(options.active).removeClass('active ' + direction);
				self.options.active = index;
				self.$panes.eq(index).removeClass([type, direction].join(' ')).addClass('active');
			}

			if (transitionEnd) {
				self.$pane_wrapper.one(transitionEnd, onEnd);
			}
			self.$panes.eq(index).addClass(type)[0].offsetWidth; // force reflow
			self.$panes.eq(options.active).addClass(direction);
			self.$panes.eq(index).addClass(direction);
			if (!transitionEnd) {
				onEnd();
			}
		});

		this.$panes = this.$pane_wrapper.children();

		this.$panes.eq(this.options.active).addClass('active');
	}

	$.extend(Panes.prototype, {
		select: function(index) {
			if (index !== this.options.active) {
				if (typeof this.options.onBeforeSelect != 'function' || this.options.onBeforeSelect.call(this, index) !== false) {
					this.$pane_wrapper.trigger('select.' + pluginName, [this.options, index]);
					return true;
				}
			}
			return false;
		}

		,next: function() {
			var  tab_count = this.$panes.length
				,next
				;
			if (this.options.active === tab_count - 1) {
				next = 0;
			} else {
				next = this.options.active + 1;
			}
			return this.select(next);
		}

		,prev: function() {
			var prev;
			if (this.options.active === 0) {
				prev = this.$panes.length - 1;
			} else {
				prev = this.options.active - 1;
			}
			return this.select(prev);
		}
	});

	$[pluginName] = function(elem, options) {
		if (typeof elem === 'string') {
			elem = $(elem);
		}
		return new Panes(elem, options);
	};

	$[pluginName].defaults = {
		active: 0
		,easing: ''
	}
})(jQuery);
/* ==========================================================
 * sco.tab.js
 * http://github.com/terebentina/sco.js
 * ==========================================================
 * Copyright 2013 Dan Caragea.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

/*jshint laxcomma:true, sub:true, browser:true, jquery:true, devel:true */

;(function($, undefined) {
	"use strict";

	var pluginName = 'scojs_tab';

	function Tab($header_wrapper, options) {
		this.options = $.extend({}, $.fn[pluginName].defaults, options);
		this.$header_wrapper = $header_wrapper;

		if (this.options.content === undefined) {
			this.options.content = this.$header_wrapper[this.options.mode]('.pane-wrapper');
		}

		var  self = this
			,auto_click = false
			;
		if (typeof this.options.onBeforeSelect == 'function') {
			this.options.onBeforeSelect = $.proxy(this.options.onBeforeSelect, self);
		}

		this.panes = $.scojs_panes(this.options.content, this.options);
		this.$header_wrapper.find('> li').removeClass('active').eq(this.options.active).addClass('active');

		this.$header_wrapper.on('click.' + pluginName, 'a', function(e) {
			var  $this = $(this)
				,$my_li = $this.closest('li')
				,my_index = $my_li.index()
				;

			if (!$.address || $this.attr('href') == '#') {
				e.preventDefault();
			}

			if (self.panes.select(my_index)) {
				self.$header_wrapper.find('> li.active').removeClass('active');
				$my_li.addClass('active');
			}
		});

		if ($.address) {
			$.address.externalChange(function(e) {
				var hash = '#' + e.value.slice(1);
				self.$header_wrapper.find('> li a').each(function() {
					var $this = $(this);
					if ($this.attr('href') === hash) {
						$this.trigger('click');
						return false;
					}
				});
			}).history(true);
		}
	}

	$.extend(Tab.prototype, {
		select: function(index) {
			this.$header_wrapper.find('> li:eq(' + index + ') a').trigger('click');
			return this;
		}
	});


	$.fn[pluginName] = function(options) {
		return this.each(function() {
			var obj;
			if (!(obj = $.data(this, pluginName))) {
				var $this = $(this)
					,data = $this.data()
					,opts = $.extend({}, $.fn[pluginName].defaults, options, data)
					;
				obj = new Tab($this, opts);
				$.data(this, pluginName, obj);
			}
		});
	};


	$[pluginName] = function(elem, options) {
		if (typeof elem === 'string') {
			elem = $(elem);
		}
		return new Tab(elem, options);
	};


	$.fn[pluginName].defaults = {
		active: 0
		,mode: 'next'                       // "next" means panes are under headers, "prev" means panes are above headers
		,easing: ''
	};

	$(function() {
		$('[data-trigger="tab"]')[pluginName]();
	});
})(jQuery);
/* ==========================================================
 * sco.tooltip.js
 * http://github.com/terebentina/sco.js
 * ==========================================================
 * Copyright 2013 Dan Caragea.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

/*jshint laxcomma:true, sub:true, browser:true, jquery:true, smarttabs:true, eqeqeq:false */

;(function($, undefined) {
	"use strict";

	var pluginName = 'scojs_tooltip';

	function Tooltip($trigger, options) {
		this.options = $.extend({}, $.fn[pluginName].defaults, options);
		this.$trigger = this.$target = $trigger;
		this.leaveTimeout = null;

		this.$tooltip = $('<div class="tooltip"><span></span><div class="pointer"></div></div>').appendTo(this.options.appendTo).hide();
		if (this.options.contentElem !== undefined && this.options.contentElem !== null) {
			this.options.content = $(this.options.contentElem).html();
		} else if (this.options.contentAttr !== undefined && this.options.contentAttr !== null) {
			this.options.content = this.$trigger.attr(this.options.contentAttr);
		}
		if (this.$trigger && this.$trigger.attr('title')) {
			this.$trigger.data('originalTitle', this.$trigger.attr('title'));
		}
		this.$tooltip.find('span').html(this.options.content);
		if (this.options.cssclass != '') {
			this.$tooltip.addClass(this.options.cssclass);
		}
		if (this.options.target !== undefined) {
			this.$target = $(this.options.target);
		}
		if (this.options.hoverable) {
			var self = this;
			this.$tooltip.on('mouseenter.' + pluginName, $.proxy(this.do_mouseenter, self))
						 .on('mouseleave.' + pluginName, $.proxy(this.do_mouseleave, self))
						 .on('close.' + pluginName, $.proxy(this.hide, self));
		}
	}


	$.extend(Tooltip.prototype, {
		show: function(allowMirror) {
			if (allowMirror === undefined) {
				allowMirror = true;
			}
			this.$tooltip.removeClass('pos_w pos_e pos_n pos_s pos_nw pos_ne pos_se pos_sw pos_center').addClass('pos_' + this.options.position);
			var  targetBox = this.$target.offset()
				,tooltipBox = {left: 0, top: 0, width: Math.floor(this.$tooltip.outerWidth()), height: Math.floor(this.$tooltip.outerHeight())}
				,pointerBox = {left: 0, top: 0, width: Math.floor(this.$tooltip.find('.pointer').outerWidth()), height: Math.floor(this.$tooltip.find('.pointer').outerHeight())}
				,docBox = {left: $(document).scrollLeft(), top: $(document).scrollTop(), width: $(window).width(), height: $(window).height()}
				;
			targetBox.left = Math.floor(targetBox.left);
			targetBox.top = Math.floor(targetBox.top);
			targetBox.width = Math.floor(this.$target.outerWidth());
			targetBox.height = Math.floor(this.$target.outerHeight());

			if (this.options.position === 'w') {
				tooltipBox.left = targetBox.left - tooltipBox.width - pointerBox.width;
				tooltipBox.top = targetBox.top + Math.floor((targetBox.height - tooltipBox.height) / 2);
				pointerBox.left = tooltipBox.width;
				pointerBox.top = Math.floor(targetBox.height / 2);
			} else if (this.options.position === 'e') {
				tooltipBox.left = targetBox.left + targetBox.width + pointerBox.width;
				tooltipBox.top = targetBox.top + Math.floor((targetBox.height - tooltipBox.height) / 2);
				pointerBox.left = -pointerBox.width;
				pointerBox.top = Math.floor(tooltipBox.height / 2);
			} else if (this.options.position === 'n') {
				tooltipBox.left = targetBox.left - Math.floor((tooltipBox.width - targetBox.width) / 2);
				tooltipBox.top = targetBox.top - tooltipBox.height - pointerBox.height;
				pointerBox.left = Math.floor(tooltipBox.width / 2);
				pointerBox.top = tooltipBox.height;
			} else if (this.options.position === 's') {
				tooltipBox.left = targetBox.left - Math.floor((tooltipBox.width - targetBox.width) / 2);
				tooltipBox.top = targetBox.top + targetBox.height + pointerBox.height;
				pointerBox.left = Math.floor(tooltipBox.width / 2);
				pointerBox.top = -pointerBox.height;
			} else if (this.options.position === 'nw') {
				tooltipBox.left = targetBox.left - tooltipBox.width + pointerBox.width;	// +pointerBox.width because pointer is under
				tooltipBox.top = targetBox.top - tooltipBox.height - pointerBox.height;
				pointerBox.left = tooltipBox.width - pointerBox.width;
				pointerBox.top = tooltipBox.height;
			} else if (this.options.position === 'ne') {
				tooltipBox.left = targetBox.left + targetBox.width - pointerBox.width;
				tooltipBox.top = targetBox.top - tooltipBox.height - pointerBox.height;
				pointerBox.left = 1;
				pointerBox.top = tooltipBox.height;
			} else if (this.options.position === 'se') {
				tooltipBox.left = targetBox.left + targetBox.width - pointerBox.width;
				tooltipBox.top = targetBox.top + targetBox.height + pointerBox.height;
				pointerBox.left = 1;
				pointerBox.top = -pointerBox.height;
			} else if (this.options.position === 'sw') {
				tooltipBox.left = targetBox.left - tooltipBox.width + pointerBox.width;
				tooltipBox.top = targetBox.top + targetBox.height + pointerBox.height;
				pointerBox.left = tooltipBox.width - pointerBox.width;
				pointerBox.top = -pointerBox.height;
			} else if (this.options.position === 'center') {
				tooltipBox.left = targetBox.left + Math.floor((targetBox.width - tooltipBox.width) / 2);
				tooltipBox.top = targetBox.top + Math.floor((targetBox.height - tooltipBox.height) / 2);
				allowMirror = false;
				this.$tooltip.find('.pointer').hide();
			}

			// if the tooltip is out of bounds we first mirror its position
			if (allowMirror) {
				var  newpos = this.options.position
					,do_mirror = false;
				if (tooltipBox.left < docBox.left) {
					newpos = newpos.replace('w', 'e');
					do_mirror = true;
				} else if (tooltipBox.left + tooltipBox.width > docBox.left + docBox.width) {
					newpos = newpos.replace('e', 'w');
					do_mirror = true;
				}
				if (tooltipBox.top < docBox.top) {
					newpos = newpos.replace('n', 's');
					do_mirror = true;
				} else if (tooltipBox.top + tooltipBox.height > docBox.top + docBox.height) {
					newpos = newpos.replace('s', 'n');
					do_mirror = true;
				}
				if (do_mirror) {
					this.options.position = newpos;
					this.show(false);
					return this;
				}
			}

			// if we're here, it's definitely after the mirroring or the position is center
			// this part is for slightly moving the tooltip if it's still out of bounds
			var pointer_left = null,
				pointer_top = null;
			if (tooltipBox.left < docBox.left) {
				pointer_left = tooltipBox.left - docBox.left - pointerBox.width / 2;
				tooltipBox.left = docBox.left;
			} else if (tooltipBox.left + tooltipBox.width > docBox.left + docBox.width) {
				pointer_left = tooltipBox.left - docBox.left - docBox.width + tooltipBox.width - pointerBox.width / 2;
				tooltipBox.left = docBox.left + docBox.width - tooltipBox.width;
			}
			if (tooltipBox.top < docBox.top) {
				pointer_top = tooltipBox.top - docBox.top - pointerBox.height / 2;
				tooltipBox.top = docBox.top;
			} else if (tooltipBox.top + tooltipBox.height > docBox.top + docBox.height) {
				pointer_top = tooltipBox.top - docBox.top - docBox.height + tooltipBox.height - pointerBox.height / 2;
				tooltipBox.top = docBox.top + docBox.height - tooltipBox.height;
			}

			this.$tooltip.css({left: tooltipBox.left, top: tooltipBox.top});
			if (pointer_left !== null) {
				this.$tooltip.find('.pointer').css('margin-left', pointer_left);
			}
			if (pointer_top !== null) {
				this.$tooltip.find('.pointer').css('margin-top', '+=' + pointer_top);
			}

			this.$trigger.removeAttr('title');
			this.$tooltip.show();
			return this;
		}

		,hide: function() {
			if (this.$trigger.data('originalTitle')) {
				this.$trigger.attr('title', this.$trigger.data('originalTitle'));
			}
			if (typeof this.options.on_close == 'function') {
				this.options.on_close.call(this);
			}
			this.$tooltip.hide();
		}

		,do_mouseenter: function() {
			if (this.leaveTimeout !== null) {
				clearTimeout(this.leaveTimeout);
				this.leaveTimeout = null;
			}
			this.show();
		}

		,do_mouseleave: function() {
			var self = this;
			if (this.leaveTimeout !== null) {
				clearTimeout(this.leaveTimeout);
				this.leaveTimeout = null;
			}
			if (this.options.autoclose) {
				this.leaveTimeout = setTimeout(function() {
					clearTimeout(self.leaveTimeout);
					self.leaveTimeout = null;
					self.hide();
				}, this.options.delay);
			}
		}
	});

	$.fn[pluginName] = function(options) {
		var  method = null
			,first_run = false
			;
		if (typeof options == 'string') {
			method = options;
		}
		return this.each(function() {
			var obj;
			if (!(obj = $.data(this, pluginName))) {
				var  $this = $(this)
					,data = $this.data()
					,opts
					;
				first_run = true;
				if (typeof options === 'object') {
					opts = $.extend({}, options, data);
				} else {
					opts = data;
				}
				obj = new Tooltip($this, opts);
				$.data(this, pluginName, obj);
			}
			if (method) {
				obj[method]();
			} else if (first_run) {
				$(this).on('mouseenter.' + pluginName, function() {
					obj.do_mouseenter();
				}).on('mouseleave.' + pluginName, function() {
					obj.do_mouseleave();
				});
			} else {
				obj.show();
			}
		});
	};


	$[pluginName] = function(elem, options) {
		if (typeof elem === 'string') {
			elem = $(elem);
		}
		return new Tooltip(elem, options);
	};


	$.fn[pluginName].defaults = {
		 contentElem: null
		,contentAttr: null
		,content: ''
		,hoverable: true		// should mouse over tooltip hold the tooltip or not?
		,delay: 200
		,cssclass: ''
		,position: 'n'			// n,s,e,w,ne,nw,se,sw,center
		,autoclose: true
		,appendTo: 'body'	// where should the tooltips be appended to (default to document.body). Added for unit tests, not really needed in real life.
	};

	$(document).on('mouseenter.' + pluginName, '[data-trigger="tooltip"]', function() {
		$(this)[pluginName]('do_mouseenter');
	}).on('mouseleave.' + pluginName, '[data-trigger="tooltip"]', function() {
		$(this)[pluginName]('do_mouseleave');
	});
	$(document).off('click.' + pluginName, '[data-dismiss="tooltip"]').on('click.' + pluginName, '[data-dismiss="tooltip"]', function(e) {
		$(this).closest('.tooltip').trigger('close');
	});
})(jQuery);
/* ==========================================================
 * sco.valid.js
 * http://github.com/terebentina/sco.js
 * ==========================================================
 * Copyright 2013 Dan Caragea.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

/*jshint laxcomma:true, sub:true, browser:true, jquery:true, smarttabs:true */

;(function($, undefined) {
	"use strict";

	var pluginName = 'scojs_valid';

	function Valid($form, options) {
		this.options = $.extend({}, $.fn[pluginName].defaults, options);
		this.$form = $form;
		this.allowed_rules = [];
		this.errors = {};
		var self = this;
		$.each(this.methods, function(k, v) {
			self.allowed_rules.push(k);
		});
	}

	$.extend(Valid.prototype, {
		// this is the main function - it returns either true if the validation passed or false
		validate: function() {
			this.$form.find(".error").removeClass('error');
			this.$form.find('.message').empty();
			var  self = this
				,form_fields = this.$form.serializeArray()
				,all_fields = this.$form.find(':input[name]').map(function() {return this.name;}).get()
				;

			// remove any possible displayed errors from previous runs
			$.each(this.errors, function(field_name, error) {
				var $input = self.$form.find('[name="' + field_name + '"]');
				$input.siblings('span.message').html('');
				if (self.options.wrapper !== null) {
					$input.closest(self.options.wrapper).removeClass('error');
				}
			});
			this.errors = {};

			$.each(self.options.rules, function(field_name, rules) {
				var  field = null
					,normalized_rules = {}
					;
				// find the field in the form
				$.each(form_fields, function(k, v) {
					if (v.name === field_name) {
						field = v;
						return false;
					}
				});

				// if field was not found, it could mean 2 things: mispelled field name in the rules or the field is not a successful control
				// even if it's not successful we have to validate it
				if (field === null) {
					if ($.inArray(field_name, all_fields) !== -1) {
						field = {name: field_name, value: self.get_field_value(field_name)};
					}
				}

				// if it's still null then it's either mispelled or disabled. We don't care either way
				if (field !== null) {
					$.each(rules, function(rule_idx, rule_value) {
						// determine the method to call and its args
						// only string and objects are allowed
						if ($.type(rule_value) === 'string') {
							// make sure the requested method actually exists.
							if ($.inArray(rule_value, self.allowed_rules) !== -1) {
								normalized_rules[rule_value] = null;
							}
						} else {
							// if not string then we assume it's a {key: val} object. Only 1 key is allowed
							$.each(rule_value, function(k, v) {
								// make sure the requested method actually exists.
								if ($.inArray(k, self.allowed_rules) !== -1) {
									normalized_rules[k] = v;
									return false;
								}
							});
						}
					});

					$.each(normalized_rules, function(fn_name, fn_args) {
						// call the method with the requested args
						if (self.methods[fn_name].call(self, field.name, field.value, fn_args, normalized_rules) !== true) {
							self.errors[field.name] = self.format.call(self, field.name, fn_name, fn_args);
						}
					});
				}
			});

			if (!$.isEmptyObject(this.errors)) {
				this.show(this.errors);
				return false;
			} else {
				return true;
			}
		},


		show: function(errors) {
			var self = this;
			$.each(errors, function(k, v) {
				var $input = self.$form.find('[name="' + k + '"]'),
					$span = $input.siblings('.message');
				if (self.options.wrapper !== null) {
					$input.closest(self.options.wrapper).addClass('error');
				}
				if ($span.length === 0) {
					$span = $('<span/>', {'class': 'message'});
					$input.after($span);
				}
				$span.html(v);
			});
		},


		methods: {
			not_empty: function(field, value) {
				return value !== null && $.trim(value).length > 0;
			},

			min_length: function(field, value, min_len, all_rules) {
				var length = $.trim(value).length
					,result = (length >= min_len);
				if (!all_rules['not_empty']) {
					result = result || length === 0;
				}
				return result;
			},

			max_length: function(field, value, max_len) {
				return $.trim(value).length <= max_len;
			},

			regex: function(field, value, regexp) {
				return regexp.test(value);
			},

			email: function(field, value) {
				// by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
				var regex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
				return regex.test($.trim(value));
			},

			url: function(field, value) {
				// by Scott Gonzalez: http://projects.scottsplayground.com/iri/
				var regex = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
				return regex.test(value);
			},

			exact_length: function(field, value, exact_length, all_rules) {
				var  length = $.trim(value).length
					,result = (length === exact_length);
				if (!all_rules['not_empty']) {
					result = result || length === 0;
				}
				return result;
			},

			equals: function(field, value, target) {
				return value === target;
			},

			ip: function(field, value) {
				var regex = /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i;
				return regex.test($.trim(value));
			},

			credit_card: function(field, value) {
				// accept only spaces, digits and dashes
				if (/[^0-9 \-]+/.test(value)) {
					return false;
				}
				var  nCheck = 0
					,nDigit = 0
					,bEven = false;

				value = value.replace(/\D/g, "");

				for (var n = value.length - 1; n >= 0; n--) {
					var cDigit = value.charAt(n);
					nDigit = parseInt(cDigit, 10);
					if (bEven) {
						if ((nDigit *= 2) > 9) {
							nDigit -= 9;
						}
					}
					nCheck += nDigit;
					bEven = !bEven;
				}

				return (nCheck % 10) === 0;
			},

			alpha: function(field, value) {
				var regex = /^[a-z]*$/i;
				return regex.test(value);
			},

			alpha_numeric: function(field, value) {
				var regex = /^[a-z0-9]*$/i;
				return regex.test(value);
			},

			alpha_dash: function(field, value) {
				var regex = /^[a-z0-9_\-]*$/i;
				return regex.test(value);
			},

			digit: function(field, value) {
				var regex = /^\d*$/;
				return regex.test(value);
			},

			numeric: function(field, value) {
				var regex = /^([\+\-]?[0-9]+(\.[0-9]+)?)?$/;
				return regex.test(value);
			},

			// same as numeric
			decimal: function(field, value) {
				var regex = /^([\+\-]?[0-9]+(\.[0-9]+)?)?$/;
				return regex.test(value);
			},

			matches: function(field, value, param) {
				return value === this.$form.find('[name="' + param + '"]').val();
			}
		},


		messages: {
			not_empty: '必填.'
			,min_length: '长度不能小于 :value 位.'
			,max_length: '长度不能超过 :value 位.'
			,regex: ''
			,email: 'Please enter a valid email address.'
			,url: 'Please enter a valid URL.'
			,exact_length: 'Please enter exactly :value characters.'
			,equals: ''
			,ip: ''
			,credit_card: 'Please enter a valid credit card number.'
			,alpha: ''
			,alpha_numeric: ''
			,alpha_dash: ''
			,digit: 'Please enter only digits.'
			,numeric: 'Please enter a valid number.'
			,decimal: 'Please enter a decimal number.'
			,matches: 'Must match the previous value.'
		},


		/**
		 * finds the most specific error message string and replaces any ":value" substring with the actual value
		 */
		format: function(field_name, rule, params) {
			var message;
			if (typeof this.options.messages[field_name] !== 'undefined' && typeof this.options.messages[field_name][rule] !== 'undefined') {
				message = this.options.messages[field_name][rule];
			} else {
				message = this.messages[rule];
			}

			if ($.type(params) !== 'undefined' && params !== null) {
				if ($.type(params) === 'boolean' || $.type(params) === 'string' || $.type(params) === 'number') {
					params = {value: params};
				}
				$.each(params, function(k, v) {
					message = message.replace(new RegExp(':' + k, 'ig'), v);
				});
			}
			return message;
		},


		/**
		 * get a normalized value for a form field.
		 */
		get_field_value: function(field_name) {
			var $input = this.$form.find('[name="' + field_name + '"]');
			if ($input.is('[type="checkbox"], [type="radio"]')) {
				return $input.is(':checked') ? $input.val() : null;
			} else {
				return $input.val();
			}
		}
	});


	/**
	 * main function to use on a form (like $('#form).scojs_valid({...})). Performs validation of the form, sets the error messages on form inputs and returns
	 * true/false depending on whether the form passed validation or not
	 *
	 * @param {hash|string} options the hash of rules and messages to validate the form against (and messages to show if failed validation) or the string "option"
	 * @param {string} key the option key to retrieve or set. If the third param of the function is available then act as a setter, otherwise as a getter.
	 * @param {mixed} value the value to set on the key
	 */
	$.fn[pluginName] = function(options, key, value) {
		return this.each(function(idx, form) {
			var $form = $(form)
				,validator = $form.data(pluginName)
				;
			if ($.type(options) === 'object') {
				if (!validator) {
					var opts = $.extend({}, $.fn[pluginName].defaults, options, $form.data());
					validator = new Valid($form, opts);
					$form.data(pluginName, validator).attr('novalidate', 'novalidate');
				}
				$form.ajaxForm({
					beforeSerialize: function() {
						if (typeof validator.options.onBeforeValidate === 'function') {
							validator.options.onBeforeValidate.call(validator);
						}
					}
					,beforeSubmit: function() {
						return validator.validate();
					}
					,dataType: 'json'
					,success: function(response, status, xhr, $form) {
						if (response.status === 'fail') {
							if (typeof options.onFail !== 'function' || options.onFail.call(this, response, validator, $form) !== false) {
								validator.show(response.data.errors);
							}
						} else if (response.status === 'error') {
							if (typeof options.onError !== 'function' || options.onError.call(this, response, validator, $form) !== false) {
								$.scojs_message(response.message, $.scojs_message.TYPE_ERROR);
							}
						} else if (response.status === 'success') {
							if (typeof options.onSuccess !== 'function' || options.onSuccess.call(this, response, validator, $form) !== false) {
								if (response.data.next) {
									if (response.data.next === '.') {			// refresh current page
										window.location.href = window.location.href.replace(/#.*$/, '');
									} else if (response.data.next === 'x') {	// close the parent modal
										$form.closest('.modal').trigger('close');
									} else {
										window.location.href = response.data.next;
									}
								}
								if (response.data.message) {
									$.scojs_message(response.data.message, $.scojs_message.TYPE_OK);
								}
							}
						}
					}
				});
				// allow chaining
				return this;
			} else if (options === 'option') {
				if ($.type(value) === 'undefined') {
					return validator.options[key];
				} else {
					validator.options[key] = value;
					return validator;
				}
			} else {
				return validator ? validator : this;
			}
		});
	};


	$[pluginName] = function(form, options) {
		if (typeof form === 'string') {
			form = $(form);
		}
		return new Valid(form, options);
	};


	$.fn[pluginName].defaults = {
		wrapper: 'label'	// the html tag that wraps the field and which defines a "row" of the form
		,rules: {}			// array of rules to check the form against. Each value should be either a string with the name of the method to use as rule or a hash like {method: <method params>}
		,messages: {}		// custom error messages like {username: {not_empty: 'hey you forgot to enter your username', min_length: 'come on, more than 2 chars, ok?'}, password: {....}}
	};
})(jQuery);
