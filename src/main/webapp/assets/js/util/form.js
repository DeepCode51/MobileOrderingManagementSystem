function frmFieldErr(id,txt){
    $("#"+id).parents(".form-group").addClass("has-error");
    $("#validation-"+id).html(txt).show();
}

function frmValidate(){
    $(".form-group").removeClass("has-error");
    $(".validate-error").html("").hide();
    $(".modal-err-div").hide();
    $(".modal-err-span").html("");
}

function modalErr(message){
    $(".modal-err-div").show();
    $(".modal-err-span").html(message);
}

// 提交
function formSubmit(gridId) {
    hideJwpopover();
    if (!gridId) {
        gridId = "openAppGrid";
    }
    $("#" + gridId).sgrid("reload");
}

//重置页面
function formReset(formId) {
    if (!formId) {
        formId = "searchForm";
    }
    $ ("#" + formId).find('input').each(function (){
        $(this).val('');
    });
    $ ("#" + formId).find('select').each(function (){
        $(this).val('');
    });
}

function getDivFormParam(id){
    var searchParam = {};
    var $searchForm = $("#"+ id);
    if ( $searchForm.length > 0 ) {
        var input =  $("input", $searchForm);
        input.each(function(index, obj){
            var name = $(this).attr("name");
            var val = $(this).val();
            if (name && name != "") {
                searchParam[name] = val;
            }
        });
        var select =  $("select", $searchForm);
        select.each(function(index, obj){
            var name = $(this).attr("name");
            var val = $(this).val();
            if (name) {
                searchParam[name] = val;
            }
        });
    }
    return searchParam;
}

// 回车提交表单
function enterSubmitForm(id, func){
    $(document).delegate("#"+id,'keydown', function (e){
    	var e = e || event, keycode = e.which || e.keyCode;
        if (keycode == 13) {
            if ( typeof func == 'function') {
                func();
            }
        }
    });
}