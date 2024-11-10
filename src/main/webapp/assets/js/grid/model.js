(function ($) {
    function _$(t) {
        return $(t);
    }
    var rDrag = {
        move:function (moveId,divId){
            var  $moveX = 0,$moveY = 0;
            var drag = true;
            var  $ID = $("#"+moveId);
            $Handle = $("#"+divId,$ID);
            $Handle.mouseover(function() {
                $(this).css("cursor","move");
            });
            $Handle.mousedown(function(e) {
                drag = true;
                e = window.event?window.event:e;
                var ___ID = document.getElementById(moveId);
                $moveX = e.clientX -  $("#"+moveId).position().left;
                $moveY = e.clientY - $("#"+moveId).position().top;
                $(document).mousemove(function(e) {
                    if(drag){
                        e = window.event?window.event:e;
                        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

                        var ___x = e.clientX - $moveX;
                        var ___y = e.clientY - $moveY;
                        $(___ID).css({
                            left : ___x,
                            top : ___y
                        });
                    }
                });
                $(document).mouseup(function(){
                    drag = false;
                });
            });
        }
    }

    $.Suc = function(content, p){
        var id = (new Date()).getMilliseconds();
        var html = [];
        html.push('<div id="alerts-success'+id+'" data-toggle="modal" tabindex="-1" role="dialog" class="modal modal-alert modal-success fade" aria-hidden="true">');
        html.push('<div class="modal-dialog">');
        html.push('<div class="modal-content">');
        html.push('<div class="modal-header">');
        html.push(' <i class="fa fa-check-circle"></i>');
        html.push('</div>');
        html.push('<div class="modal-title"></div>');
        html.push('<div class="modal-body" style="min-height: 40px;font-size: 22px;font-weight: bold;color: #444">'+ content +'</div>');
        html.push('<div class="modal-footer">');
        html.push('<button type="button" class="btn btn-success" id="suc_modal'+id+'" data-dismiss="modal">确定</button>');
        html.push('</div>');
        html.push('</div>');
        html.push('</div>');
        html.push('</div>');
        $('body').append(html.join(''));
        $('#alerts-success'+id).modal();
        rDrag.move("alerts-success"+id, "modal-header-"+id);
        $('#alerts-success'+id).on('hidden.bs.modal', function () {
            $(this).remove();
        });
        if ( typeof p == 'function') {
            $("#suc_modal"+ id).on('click', function(){
                p();
            });
        }
    }

    $.Alt = function (content, p) {
        var id = (new Date()).getMilliseconds();
        var html = [];
        html.push('<div id="alerts-alt'+id+'" data-toggle="modal" tabindex="-1" role="dialog" class="modal modal-alert modal-warning fade" aria-hidden="true">');
        html.push('<div class="modal-dialog">');
        html.push('<div class="modal-content">');
        html.push('<div class="modal-header">');
        html.push(' <i class="fa fa-warning"></i>');
        html.push('</div>');
        html.push('<div class="modal-title"></div>');
        html.push('<div class="modal-body" style="min-height: 40px;font-size: 22px;font-weight: bold;color: #444">'+ content +'</div>');
        html.push('<div class="modal-footer">');
        html.push('<button type="button" class="btn btn-warning" id="alt_modal'+id+'" data-dismiss="modal">确定</button>');
        html.push('</div>');
        html.push('</div>');
        html.push('</div>');
        html.push('</div>');
        $('body').append(html.join(''));
        $('#alerts-alt'+id).modal();
        $('#alerts-alt'+id).on('hidden.bs.modal', function () {
            $(this).remove();
        });
        if ( typeof p == 'function') {
            $("#alt_modal"+ id).on('click', function(){
                p();
            });
        }
    };
    $.Err = function (content, p) {
        var id = (new Date()).getMilliseconds();
        var html = [];
        html.push('<div id="alerts-error'+id+'" data-toggle="modal" tabindex="-1" role="dialog" class="modal modal-alert modal-danger fade" aria-hidden="true">');
        html.push('<div class="modal-dialog">');
        html.push('<div class="modal-content">');
        html.push('<div class="modal-header">');
        html.push(' <i class="fa fa-times-circle"></i>');
        html.push('</div>');
        html.push('<div class="modal-title"></div>');
        html.push('<div class="modal-body" style="min-height: 40px;font-size: 22px;font-weight: bold;color: #444">'+ content +'</div>');
        html.push('<div class="modal-footer">');
        html.push('<button type="button" class="btn btn-danger" id="err_modal'+id+'" data-dismiss="modal">确定</button>');
        html.push('</div>');
        html.push('</div>');
        html.push('</div>');
        html.push('</div>');
        $('body').append(html.join(''));
        $('#alerts-error'+id).modal();
        $('#alerts-error'+id).on('hidden.bs.modal', function () {
            $(this).remove();
        });
        if ( typeof p == 'function') {
            $("#err_modal"+ id).on('click', function(){
                p();
            });
        }
    };

    $.Cfm = function (content, p) {
        var id = (new Date()).getMilliseconds();
        var html = [];
        html.push('<div id="alerts-cfm'+id+'" data-toggle="modal" tabindex="-1" role="dialog" class="modal modal-alert modal-info fade" aria-hidden="true">');
        html.push('<div class="modal-dialog">');
        html.push('<div class="modal-content">');
        html.push('<div class="modal-header">');
        html.push(' <i class="fa fa-question-circle"></i>');
        html.push('</div>');
        html.push('<div class="modal-title"></div>');
        html.push('<div class="modal-body" style="min-height: 40px;font-size: 22px;font-weight: bold;color: #444">'+ content +'</div>');
        html.push('<div class="modal-footer">');
        html.push('<button type="button" class="btn" id="cfm_modal_close'+id+'" data-dismiss="modal">取消</button>&nbsp;&nbsp;');
        html.push('<button type="button" class="btn btn-info" id="cfm_modal'+id+'" data-dismiss="modal">确定</button>');
        html.push('</div>');
        html.push('</div>');
        html.push('</div>');
        html.push('</div>');
        $('body').append(html.join(''));
        $('#alerts-cfm'+id).modal();
        $('#alerts-cfm'+id).on('hidden.bs.modal', function () {
            $(this).remove();
        });
        if ( typeof p == 'function') {
            $("#cfm_modal"+ id).on('click', function(){
                p();
            });
        }
    };
    $.Mod = function (param) {
        var options = $.extend([], $.Mod.defaults, param);
        var html = [];
        html.push('<div id="Modal_'+ options.id +'" data-backdrop="static" class="modal fade in" data-toggle="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">');
        html.push(' <div class="modal-dialog" id="modal-dialog_'+ options.id +'">');
        html.push('    <div style="cursor: move" id="modal-header-' + options.id +'" class="modal-header">');
        html.push(' <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>');
        html.push('  <h3 class="modal-title">' + options.title + '</h3>');
        html.push('    </div>');
        html.push('<div class="modal-body" id="modal-body_'+ options.id +'"  style="background-color: #ffffff">');
        html.push('<div id="html_content" style="margin: 0 auto;">数据加载中…</div>');
        html.push('</div>');
        html.push('<div class="modal-footer"> <div class="col-sm-8 alert alert-danger modal-err-div" style="display:none;text-align: left;padding: 0 0 0 6px;margin: 0 0;height: 31px;line-height: 31px"><i class="fa fa-times-circle"></i>&nbsp;&nbsp;<span class="modal-err-span" style="font-size: 14px"></span></div>');
        html.push('<button class="btn closeBtn" data-dismiss="modal" aria-hidden="true">关闭</button>&nbsp;&nbsp;');
        html.push('<button class="btn btn-primary" data-loading-text="加载中..." onclick="submit()">确定</button>');
        html.push('</div>');
        html.push('</div>');
        html.push('</div>');
        $('body').append(html.join(''));
        $('#modal-dialog_'+ options.id).css({width:options.width});
        $("#modal-body_"+ options.id).css({height:options.height});
        $('#Modal_'+ options.id).modal();
        $('#Modal_'+ options.id).on('hidden.bs.modal', function () {
            $("#Modal_"+ options.id).remove();
            $(".modal-backdrop").remove();
        });
        rDrag.move('Modal_'+ options.id, "modal-header-" + options.id);
        if(options.url) {
            $.ajax({
                url:options.url,
                data:options.params,
                type:"post",
                dataType:'html',
                success:function (req){
                    try {
                         $("#html_content").html('<div style="margin: 0 auto;font-size: 15px;">' + req + '</div>');
                    }
                    catch (e){
                        $("#html_content").html("加载出错");
                    }

                },
                error:function(){
                    $("#html_content").html("加载出错");
                }
            });
        }
    }
    $.Mod.defaults = {
        "title":"对话框标题",
        "width":"500px",
        "height":"250px",
        "url":"",
        "params":[],
        "submit":"",
        "id":(new Date()).getMilliseconds()
    }
    $.Mod.Close = function(message, type){
        $(".close", ".modal").click();
        if (!type){
            type = 'success';
        }
        if (message != undefined || message != "") {
            if(type == 'success'){
                $.growl.notice({title:'成功', message: message });
                return;
            }
            if(type == 'error'){
                $.growl.error({title:'失败', message: message});
                return;
            }
            if(type == 'warning'){
                $.growl.warning({title:'警告', message: message});
                return;
            }
        }

    }
})(jQuery);