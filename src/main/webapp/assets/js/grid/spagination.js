/**
 * @author yu
 */
(function($){
    function _$(t){
        return $(t);
    }
    function render(t,p){
        var data = $.data(t, "spagination");
        var spagination = data.spagination;
        var dom=['<div class="spagination-panel">',
            '<div class="pag-tool"><button class="btn btn-mini pag-first-page">首页</button></div>',
            '<div class="pag-tool"><button class="btn btn-mini pag-prev-page">上一页</button></div>',
            '<div class="pag-tool"><button class="btn btn-mini pag-next-page">下一页</button></div>',
            '<div class="pag-tool"><button class="btn btn-mini pag-last-page">末页</button></div>',
            '<div class="pag-tool"><span>每页:</span></div>',
            '<div class="pag-tool pag-page-size-panel"><select class="pag-page-size form-control">'];
        var rowsList=data.options.rowsList;
        var rows = data.options.rows;
        if(rowsList){
            for(var i=0;i<rowsList.length;i++){
                var selected = "";
                if (rows == rowsList[i]) {
                    selected = "selected";
                }
                dom.push('<option ' + selected + ' value="'+rowsList[i]+'">'+rowsList[i]+'</option>')
            }
        }
        dom.push('</select></div><div class="pag-tool"><span>条</span></div>');
        dom.push('<div class="pag-tool"><span>转到</span></div>');
        dom.push('<div class="pag-tool" style="margin-left:0"><input type="text" noRender="true" class="form-control pag-go-val inputxt"/></div>');
        dom.push('<div class="pag-tool"><span>页</span></div>');
        dom.push('<div class="pag-tool"><button class="btn btn-mini pag-go">Go</button></div>');
        dom.push('<div class="pag-tool pag-info"></div>');
        dom.push('<div class="clear"></div>');
        dom.push('</div>');
        spagination.append(dom.join(''));
        bindEvent(t);
        if (data.options.comboselect) {
            spagination.find('.pag-page-size').combobox({
                width:58,
                onSelect:function(d){
                    if(data.options.loading==true){return;}
                    data.options.loading=true;
                    data.options.rows=parseInt(d.value);
                    if(data.options.total!=0){
                        var rp=Math.ceil(data.options.total/data.options.rows);
                        if(data.options.page>rp){
                            data.options.page=rp;
                        }
                    }
                    data.options.onChange.apply(t);
                    setBtn(t);
                }
            })
        } else {
            spagination.find('.pag-page-size').change(function(){
                if(data.options.loading==true){return;}
                data.options.loading=true;
                data.options.rows=$(this).val();
                if(data.options.total!=0){
                    var rp=Math.ceil(data.options.total/data.options.rows);
                    if(data.options.page>rp){
                        data.options.page=rp;
                    }
                }
                data.options.onChange.apply(t);
                setBtn(t);
            })
        }
        data.isLoaded=true;
        //data.options.onLoad.apply(t, arguments);
    }
    function setBtn(t){
        var data = $.data(t, "spagination");
        var spagination = data.spagination;
        if(data.options.page==1){
            if(data.options.page==data.options.pageTotal){
                spagination.find('.pag-prev-page').prop('disabled',true);
                spagination.find('.pag-first-page').prop('disabled',true);
                spagination.find('.pag-last-page').prop('disabled',true);
                spagination.find('.pag-next-page').prop('disabled',true);
            }else{
                spagination.find('.pag-prev-page').prop('disabled',true);
                spagination.find('.pag-first-page').prop('disabled',true);
                spagination.find('.pag-last-page').prop('disabled',false);
                spagination.find('.pag-next-page').prop('disabled',false);
            }

        }else if(data.options.page==data.options.pageTotal){
            spagination.find('.pag-prev-page').prop('disabled',false);
            spagination.find('.pag-first-page').prop('disabled',false);
            spagination.find('.pag-last-page').prop('disabled',true);
            spagination.find('.pag-next-page').prop('disabled',true);
        }else{
            spagination.find('.pag-prev-page').prop('disabled',false);
            spagination.find('.pag-first-page').prop('disabled',false);
            spagination.find('.pag-last-page').prop('disabled',false);
            spagination.find('.pag-next-page').prop('disabled',false);
        }


    }
    function setBtn2(t,p){
        var data = $.data(t, "spagination");
        var spagination = data.spagination;
        spagination.find('.pag-last-page').hide();
        //spagination.find('.pag-go-panel').hide();

        if(data.options.page==1){
            spagination.find('.pag-prev-page').prop('disabled',true);
            spagination.find('.pag-first-page').prop('disabled',true);
        }else{
            spagination.find('.pag-prev-page').prop('disabled',false);
            spagination.find('.pag-first-page').prop('disabled',false);
        }
        if(p==true){
            spagination.find('.pag-next-page').prop('disabled',false);
        }else{
            spagination.find('.pag-next-page').prop('disabled',true);
        }
    }
    function empty(t){
        var data = $.data(t, "spagination");
        var spagination = data.spagination;
        spagination.find('.pag-prev-page').prop('disabled',true);
        spagination.find('.pag-first-page').prop('disabled',true);
        spagination.find('.pag-next-page').prop('disabled',true);
        spagination.find('.pag-last-page').prop('disabled',true);
    }
    function bindEvent(t){
        var data = $.data(t, "spagination");
        var spagination = data.spagination;
        spagination.delegate( '.pag-first-page', 'click', function(){
            if(data.options.loading==true){return;}
            data.options.loading=true;
            data.options.page=1;
            data.options.onChange.apply(t);
            setBtn(t);
        })
        spagination.delegate( '.pag-prev-page', 'click', function(){
            if(data.options.loading==true){return;}
            data.options.loading=true;
            data.options.page--;
            data.options.onChange.apply(t);
            setBtn(t);
        })
        spagination.delegate( '.pag-next-page', 'click', function(){
            if(data.options.loading==true){return;}
            data.options.loading=true;
            data.options.page++;
            data.options.onChange.apply(t);
            setBtn(t);
        })
        spagination.delegate( '.pag-last-page', 'click', function(){
            if(data.options.loading==true){return;}
            data.options.loading=true;
            data.options.page=data.options.pageTotal;
            data.options.onChange.apply(t);
            setBtn(t);
        })
        /*spagination.delegate( '.pag-page-size', 'change', function(){
         if(data.options.loading==true){return;}
         data.options.loading=true;
         data.options.rows=$(this).val();
         if(data.options.total!=0){
         var rp=Math.ceil(data.options.total/data.options.rows);
         if(data.options.page>rp){
         data.options.page=rp;
         }
         }
         data.options.onChange.apply(t);
         setBtn(t);
         })*/
        spagination.delegate( '.pag-go', 'click', function(e){
            e.preventDefault();
            if(data.options.loading==true){return;}
            var ps=parseInt(spagination.find('.pag-go-val').val());
            if(ps){
                if(data.options.total!=0){
                    if(ps<=data.options.pageTotal && ps>0){
                        data.options.loading=true;
                        data.options.page=ps;
                        data.options.onChange.apply(t);
                        setBtn(t);
                    }
                }else{
                    data.options.loading=true;
                    data.options.page=ps;
                    data.options.onChange.apply(t);
                    setBtn2(t,false);
                }


            }

        })
        spagination.delegate( '.pag-go-val', 'keydown', function(e){

            if(e.keyCode==13){
                if(data.options.loading==true){return;}
                var ps=parseInt(spagination.find('.pag-go-val').val());
                if(ps){
                    if(data.options.total!=0){
                        if(ps<=data.options.pageTotal && ps>0){
                            data.options.loading=true;
                            data.options.page=ps;
                            data.options.onChange.apply(t);
                            setBtn(t);
                        }
                    }else{
                        data.options.loading=true;
                        data.options.page=ps;
                        data.options.onChange.apply(t);
                        setBtn2(t,false);
                    }


                }
            }


        })
    };
    function updatePag(t){
        var data = $.data(t, "spagination");
        var spagination = data.spagination;
        if(data.options.total!=0){
            data.options.pageTotal=Math.ceil(data.options.total/data.options.rows);
        }else{
            data.options.pageTotal=1
        }

        setBtn(t);
        updateInfo(t);
        data.options.loading=false;
    }
    function noLast(t,p){
        var data = $.data(t, "spagination");
        var spagination = data.spagination;
        setBtn2(t,p);
        hideInfo(t);
        data.options.loading=false;
    }
    function hideInfo(t){
        var data = $.data(t, "spagination");
        var spagination = data.spagination;
        spagination.find('.pag-tool.pag-info').hide();
    }
    function updateInfo(t){
        var data = $.data(t, "spagination");
        var spagination = data.spagination;
        var op=data.options;
        var info=op.pageInfo;
        for(var k in op){
            var reg=new RegExp('{'+k+'}');
            if(op[k]!=undefined){
                info=info.replace(reg,op[k].toString());
            }

        }
        spagination.find('.pag-info').html('<span>'+info+'</span>')
    }

    $.fn.spagination=function(o, p) {
        if( typeof o == "string") {
            return $.fn.spagination.methods[o](this, p);
        }
        o = o || {};
        return this.each(function() {
            var data = $.data(this, "spagination");
            var option;
            if(data) {
                option = $.extend(data.options, o);
            } else {
                option = $.extend({}, $.fn.spagination.defaults, $.fn.spagination.parseOptions(this),o);
                $(this).attr("title", "");
                data = $.data(this, "spagination", {
                    options : option,
                    spagination : _$(this),
                    isLoaded : false
                });
            }
            render(this);
        })}
    $.fn.spagination.methods={
        render:function(t,p){
            return t.each(function() {
                render(this, p);
            });
        },
        updateInfo:function(t){
            return t.each(function() {
                updateInfo(this);
            });
        },
        updatePag:function(t){
            return t.each(function() {
                updatePag(this);
            });
        },
        noLast:function(t,p){
            return t.each(function() {
                noLast(this,p);
            });
        },
        empty:function(t){
            return t.each(function() {

                empty(this);
            });
        }
    }
    $.fn.spagination.parseOptions = function(t) {
        var t = $(t);
        return {}
    }
    $.fn.spagination.defaults = {
        page:1,
        pageName:'pageNumber',
        rows:10,
        rowsName:'pageSize',
        total:0,
        pageTotal:0,
        rowsList:[10,20,50,100,500,1000],
        loading:null,
        comboselect:true,
        pageInfo:'第{page}/{pageTotal}页 共{total}条记录',
        onChange:function(){}
    }
})(jQuery)
