/**
 * @author yu
 */
(function($){
    function _$(t){
        return $(t);
    }
    function render(t,p){
        var data = $.data(t, "scombo");
        var scombo = data.scombo;
        scombo.addClass('scombo');
        if(data.options.cls!=''){
            scombo.addClass(data.options.cls);
        }
        renderCombo(t);
        bindEvent(t);
        data.isLoaded=true;
    }
    function renderCombo(t){
        var data = $.data(t, "scombo");
        var scombo = data.scombo;
        var dom=['<div class="scombo-outer scombo-close">',
            '<div class="scombo-combo">',
            '<span class="scombo-arrow"></span>',
            '</div>',
            '<div class="scombo-panel">',
            '<div class="scombo-panel-outer">',
            '<div class="scombo-panel-inner"></div>',
            '</div>',
            '<div class="clear"></div>',
            '</div>',
            '</div>'
        ].join('');
        scombo.after(dom);
        var out=scombo.parent()
        var combopanel=out.find('.scombo-combo');
        scombo.prependTo(combopanel);
        data.comboouter=out.find('.scombo-outer');
        data.combopanel=out.find('.scombo-panel-inner')
        resizeCombo(t);
        data.options.onLoad.call(t);
    }
    function resizeCombo(t){
        var data = $.data(t, "scombo");
        var scombo = data.scombo;
        var comboouter=data.comboouter;
        var width=scombo.outerWidth();
        var height=scombo.outerHeight();
        comboouter.css({
            height:height,
            width:width
        })
        scombo.parent().css({
            height:height,
            width:width
        })
        comboouter.find('.scombo-arrow').height(height);
        resizeComboPanel(t);
    }
    function resizeComboPanel(t,p){
        var data = $.data(t, "scombo");
        var scombo = data.scombo;
        var comboouter = data.comboouter;
        var combopanel=data.combopanel;
        var size=data.options.size;
        var ns=$.extend({},{
            top:-1,
            left:0,
            height:'auto',
            width:scombo.outerWidth()-2
        },size,p)
        combopanel.css(ns);
    }

    function bindEvent(t){
        var data = $.data(t, "scombo");
        var scombo = data.scombo;
        var comboouter = data.comboouter;
        scombo.focus(function(){
            openComboPanel(t);
        })
        comboouter.delegate('.scombo-arrow', 'click', function(){
            switchComboPanel(t);
        })
    }
    function switchComboPanel(t){
        var data = $.data(t, "scombo");
        var scombo = data.scombo;
        var comboouter = data.comboouter;
        if(comboouter.hasClass('scombo-close')){
            openComboPanel(t)
        }else{
            closeComboPanel(t)
        }
    }
    function openComboPanel(t){
        var data = $.data(t, "scombo");
        var scombo = data.scombo;
        var comboouter = data.comboouter;
        comboouter.removeClass('scombo-close');
        data.options.onOpen.call(t);
    }
    function closeComboPanel(t){
        var data = $.data(t, "scombo");
        var scombo = data.scombo;
        var comboouter = data.comboouter;
        comboouter.addClass('scombo-close');
        data.options.onClose.call(t);
    }
    function options(t,p){
        var data = $.data(t, "scombo");
        var opts=$.extend({},data.options,p);
        data.options=opts;
    }
    function setValue(t,p){
        var data = $.data(t, "scombo");
        var scombo = data.scombo;
        if(typeof p=='string'){
            scombo.val(p);
            data.options.onChange.call(t,p);
        }
    }
    $.fn.scombo=function(o, p) {
        if( typeof o == "string") {
            return $.fn.scombo.methods[o](this, p);
        }
        o = o || {};
        if(o.combourl==''&&o.treeurl==''){return false;}
        return this.each(function() {
            var data = $.data(this, "scombo");
            var option;
            if(data) {
                option = $.extend(data.options, o);
            } else {
                option = $.extend({}, $.fn.scombo.defaults, $.fn.scombo.parseOptions(this),o);
                //$(this).attr("title", "scombo");
                data = $.data(this, "scombo", {
                    options : option,
                    scombo : _$(this),
                    isLoaded : false
                });
            }
            render(this);
        })}
    $.fn.scombo.methods={
        options:function(t,p){
            return t.each(function() {
                options(this, p);
            });
        },
        resize:function(t,p){
            return t.each(function() {
                resizeComboPanel(this,p);
            });
        },
        open:function(t){
            return t.each(function() {
                openComboPanel(this);
            });
        },
        close:function(t){
            return t.each(function() {
                closeComboPanel(this);
            });
        },
        setValue:function(t,p){
            return t.each(function(){
                setValue(this,p);
            });
        }
    }
    $.fn.scombo.parseOptions = function(t) {
        var t = $(t);
        return {}
    }
    $.fn.scombo.defaults = {
        size:{},
        cls:'',
        onOpen:function(){},
        onClose:function(){},
        onChange:function(){},
        onLoad:function(){}
    }
})(jQuery)
