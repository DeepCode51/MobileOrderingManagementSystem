/**
 * @author yu
 *
 */
(function ($) {
    function _$(t) {
        return $(t);
    }

    function render(t, isReload) {
        var data = $.data(t, "sgrid");
        var sgrid = data.sgrid;
        if (data.options.cls != '') {
            sgrid.addClass(data.options.cls)
        }
        var pageSize ;
        if($('.pag-page-size').length > 0) {
            pageSize = $('.pag-page-size').val();
        }
        sgrid.html('');
        if (isReload) {
            initGrid(t);
        }
        sgrid.addClass('sgrid');
        if (data.options.pagination) {
            renderPagination(t, pageSize);
        }
        loadData(t);
        if (!isReload) {
             bindEvent(t);
        }
        //data.options.onLoad.apply(t, arguments);
    }

    function loadData(t) {
        var data = $.data(t, "sgrid");
        var url = data.options.url;
        var param = data.options.param;
        if (url) {
            data.options.loading = true;
            var page = data.options.page;
            var rows = data.options.rows;
            if ($(".pag-page-size").length > 0) {
                rows = $(".pag-page-size").val();
            }
            var pageName = data.options.pageName;
            var rowsName = data.options.rowsName;
            var ajaxParam = {};
            ajaxParam[pageName] = page;
            ajaxParam[rowsName] = rows;
            if (data.options.sort != null) {
                var sortName = data.options.sortName;
                var orderName = data.options.orderName;
                var order = data.options.order;
                var sort = data.options.sort;
                ajaxParam[sortName] = sort;
                ajaxParam[orderName] = order;
            }
            var searchParam = {};
            var $searchForm = $("#"+ data.options.searchFormId);
            if ( $searchForm.length > 0 ) {
               var input =  $("input", $searchForm);
               input.each(function(index, obj){
                  var name = $(this).attr("name");
                  var val = $(this).val();
                   if (name && name != "" && val != "") {
                       searchParam[name] = val;
                   }
               });
                var select =  $("select", $searchForm);
                select.each(function(index, obj){
                    var name = $(this).attr("name");
                    var val = $(this).val();
                    if (name && name != ""  && val != "") {
                        searchParam[name] = val;
                    }
                });
            }
            var params = $.extend({}, param, ajaxParam, searchParam);

            $.ajax({
                url:url,
                data:params,
                type:"post",
                dataType:'json',
                success:function (resdata, textStatus, jqXHR) {
                    //console.log(textStatus, jqXHR)
                    var dr = resdata.rows;
                    data.options.loading = false;
                    if (dr && dr.length > 0 && typeof dr[0] == 'object') {
                        data.data = resdata;
                        var g = data.grid;
                        var sgrid = data.sgrid;
                        if (g) {
                            g.find('.sgrid-tr-body').remove();
                            g.find('.sgrid-empty').remove();
                            try {
                                g.append(renderGrid(t, dr, false));
                            } catch (e) {

                            }
                        } else {
                            g = $('<table>');
                            try {
                                g.append(renderGrid(t, dr, true));
                            } catch (e) {
                                console.error(e);
                            }
                            $('<div class="datalist sgrid-panel">').append(g).prependTo(sgrid);
                            g.after('<div class="dataline"></div>');
                            g.before('<div class="dataline"></div>');
                            data.grid = g;
                        }
                        if (data.options.pagination) {
                            try {
                                showPagination(t);
                            } catch (e) {
                                setTimeout(function () {
                                    showPagination(t);
                                }, 500)
                            }
                            if (data.options.paginationType == 's') {
                                if (resdata.total) {
                                    updatePagination(t, resdata.total);
                                } else {
                                    update2Pagination(t, resdata.hasNext);
                                }
                            }
                            if (data.options.paginationType == 'o') {
                                if (resdata.total) {
                                    updatePagination(t);
                                } else {
                                    update2Pagination(t, resdata.hasNext);
                                }
                            }
                            if (data.options.paginationType == 't') {
                                if (resdata.total) {
                                    update3Pagination(t, resdata.total);
                                }
                            }
                        }
                    } else {
                        var g = data.grid;
                        var sgrid = data.sgrid;
                        delete data.data;
                        if (g) {
                            g.find('.sgrid-tr').remove();
                            g.append(EmptyTable(t));
                        } else {
                            g = $('<table>');
                            g.append(EmptyTable(t));
                            $('<div class="datalist sgrid-panel">').append(g).prependTo(sgrid);
                            g.after('<div class="dataline"></div>');
                            g.before('<div class="dataline"></div>');
                            data.grid = g;
                        }
                        if (data.options.pagination) {
                            hidePagination(t)
                            /*if(data.options.paginationType=='s'){
                             if(resdata.total==0){
                             if(resdata.hasNext==false){
                             update2Pagination(t,resdata.hasNext);
                             }else{
                             updatePagination(t,resdata.total);
                             }
                             }else{
                             if(resdata.hasNext==false){
                             update2Pagination(t,resdata.hasNext);
                             }
                             }
                             }
                             if(data.options.paginationType=='t'){
                             if(resdata.total==0){
                             update3Pagination(t,resdata.total);
                             }
                             }*/
                        }
                    }
                    data.options.onLoad.call(t);
                }
            });
        }
    }

    function hidePagination(t) {
        var data = $.data(t, "sgrid");
        var pagination = data.pagination;
        pagination.hide();
    }

    function showPagination(t) {
        try {
            var data = $.data(t, "sgrid");
            var pagination = data.pagination;
            pagination.show();
        } catch (e) {

        }
    }

    function getHeaderDom(rh, v) {
        if (v.width) {
            rh.push('<th style="text-align: center" width="' + v.width + '">')
        } else {
            rh.push('<th style="text-align: center">')
        }
        if (v.sortColumn) {
            rh.push('<div class="sgrid-sortabel datalist-content" field="' + v.sortColumn + '">' + v.text + '&nbsp;&nbsp;&nbsp;&nbsp;</div>')
        } else {
            rh.push('<div class="datalist-content" field="' + v.field + '">' + v.text + '</div>')
        }
        rh.push('</th>');
    }

    function getJsonData(f, d) {
        var a = f.split('.');
        if (a.length > 1) {
            var res = d;
            for (var i = 0; i < a.length; i++) {
                res = res[a[i]];
            }
            return res;
        } else {
            return d[f];
        }
    }

    function getBodyDom(rb, i, v, d) {
        var fieldJsonData = getJsonData(v.field, d);
        if (fieldJsonData === 0){
            fieldJsonData = '0';
        }
        var content = fieldJsonData ?  fieldJsonData : '';
        var title = '';
        if (v.formatter) {
            content = v.formatter(i, content, d);
        } else {
            if (v.limit && v.limit > 0) {
                if (content.length > v.limit) {
                    var limitContent = content.substr(0, v.limit) + "...";
                }
            }
        }
        var tdContent =  limitContent ? limitContent : content;
        if (v.title && fieldJsonData != null){
            title = (fieldJsonData + "").replace(new RegExp(" ","gm"), "&nbsp;&nbsp;");
        }
        else{
            title = limitContent ? fieldJsonData : '';
        }

        var cls = v.cls ? ' ' + v.cls : '';
        var style = '';
        if (v.style && v.style != undefined) {
            style = "style=\""+v.style+"\"";
        }
        if (v.width) {
            rb.push('<td title=' + title + '><div class="datalist-content' + cls + '" ' + style + ' style="width:' + v.width + 'px;">' + tdContent + '</div></td>');
        } else {
            rb.push('<td title=' + title + '><div class="datalist-content' + cls + '" ' + style + '>' + tdContent + '</div></td>');
        }
    }

    function getBodyDom2(rb, i, v, d) {
        var content = '';
        var  title = d[v.field];
        if (v.formatter) {
            content = v.formatter(i, d[v.field], d);
        } else {
            content = d[v.field];
            if (v.limit && v.limit > 0) {
                if (content.length > v.limit) {
                    var limitContent = content.substr(0, v.limit) + "...";
                }
            }
        }
        var tdContent =  limitContent ? limitContent :  content;
        rb.push('<td rowspan="{index}" title = ' + content +'><p>' + tdContent + '</p></td>');
    }

    function EmptyTable(t) {
        var data = $.data(t, "sgrid");
        var sgrid = data.sgrid;
        var rh = getHeaderEl(t);
        var columns = data.options.columns;
        var len = columns.length;
        var rb = '<tr class="sgrid-tr sgrid-empty"><td colspan="' + len + '"><p style="text-align:center;">' + data.options.emptyText + '</p></td></tr>'
        data.isLoaded = true;

        if (data.options.paginationType == 's') {
            var spagination = data.pagination;
            if (spagination) {

                spagination.spagination('empty');
            }
        }
        if (data.options.paginationType == 'o') {
            var spagination = data.pagination;
            if (spagination) {

                spagination.spagination('empty');
            }
        }
        if (data.options.paginationType == 't') {
            var tpagination = data.pagination;
            if (tpagination) {
                tpagination.tpagination('empty');
            }
        }


        return rh.join('') + rb;
    }

    function getHeaderEl(t) {
        var data = $.data(t, "sgrid");
        var sgrid = data.sgrid;
        var columns = data.options.columns;
        var rh = ['<tr class="sgrid-tr sgrid-tr-header">'];

        //Header
        $.each(columns, function (k, v) {
            if (v.field == "checkbox" && data.options.isMultiSelected == true) {
                rh.push('<th width="'+ v.width +'" style="text-align: center"><p class="sgrid-checkbox"><span class="tbc-checkbox sgrid-ckb-all"></span></p></th>')
            }
            else if(v.field == "#"){
                rh.push('<th width="'+ v.width +'" style="text-align: center">#</th>')
            }
            else {
                var multirow = v.multirow;
                if (multirow) {
                    $.each(multirow, function (kk, vv) {
                        getHeaderDom(rh, vv);
                    })
                    data.hasMulti++;
                } else {
                    getHeaderDom(rh, v);
                }
            }
        })
        rh.push('</tr>');
        return rh;
    }

    function renderGrid(t, d, hasHeader) {
        var data = $.data(t, "sgrid");
        var sgrid = data.sgrid;
        var columns = data.options.columns;
        var hasMulti = data.hasMulti = 0;
        if (hasHeader == true) {
            var rh = getHeaderEl(t);
        }
        hasMulti = data.hasMulti;
        //Body
        var rbs = [];
        $.each(d, function (i, j) {
            var rb = ['<tr class="sgrid-tr sgrid-tr-body">'];
            rb.extra = [];
            $.each(columns, function (k, v) {
                try{
                    if (v.field == "checkbox") {
                        rb.push('<td style="text-align: center"><p class="sgrid-checkbox"><span class="tbc-checkbox sgrid-ckb" row="' + (i + 1) + '"></span></p></td>');
                    }
                    else if (v.field == "#"){
                        rb.push('<td style="text-align: center">'+(i + 1)+'</td>');
                    }
                    else {
                        var multirow = v.multirow;
                        if (multirow) {
                            var jd = j[v.field];
                            $.each(multirow, function (kk, vv) {
                                getBodyDom(rb, i, vv, jd[0]);
                            });

                            if (hasMulti == 1) {
                                for (var ii = 1; ii < jd.length; ii++) {

                                    var rb2 = ['<tr class="sgrid-tr sgrid-tr-body">'];
                                    $.each(multirow, function (kk, vv) {
                                        getBodyDom(rb2, i, vv, jd[ii]);
                                    });
                                    rb2.push('</tr>');
                                    rb.extra.push(rb2.join(''));
                                }
                            }
                        } else {
                            if (hasMulti == 1) {
                                getBodyDom2(rb, i, v, j);
                            } else {
                                getBodyDom(rb, i, v, j);
                            }

                        }
                    }
                }catch (e){
                    rb.push('<td style="text-align: center"></td>');
                }

            })
            rb.push('</tr>');
            if (hasMulti == 1) {
                var len = rb.extra.length + 1;
                rb.push(rb.extra.join(''));
            }
            var rbDom = rb.join('');
            if (len) {
                rbDom = rbDom.replace(/{index}/g, len);
            }
            rbs.push(rbDom);
        })


        if (rh) {
            var rr = rh.concat(rbs);
        } else {
            var rr = rbs;
        }
        data.isLoaded = true;
        return rr.join('');

    }

    function getSelectRows(t, p) {
        var data = $.data(t, "sgrid");
        var sgrid = data.sgrid;
        var trs = $.makeArray(sgrid.find('.sgrid-tr-body'));
        var selecttrs = sgrid.find('.sgrid-row-select');
        var res = [];
        selecttrs.each(function () {
            var index = $.inArray(this, trs);
            var rowDatas = data.data.rows[index];
            if (typeof p == "string" && rowDatas[p]) {
                res.push(rowDatas[p]);
            }
        });
        return res;
    }

    function getRowsCount(t) {
        var data = $.data(t, "sgrid");
        var sgrid = data.sgrid;
        var trs = $.makeArray(sgrid.find('.sgrid-tr-body'));
        var selecttrs = sgrid.find('.sgrid-row-select');
        return selecttrs.length;
    }

    function getRow(t, index) {
        var data = $.data(t, "sgrid").data;
        if (data.rows[index]) {
            return data.rows[index];
        } else {
            return '';
        }

    }

    function selectAll(t) {
        var data = $.data(t, "sgrid");
        var sgrid = data.sgrid;
        sgrid.find('.sgrid-tr-body:not(.sgrid-row-select) .sgrid-ckb').addClass('checked');
        sgrid.find('.sgrid-tr-body:not(.sgrid-row-select)').addClass('sgrid-row-select');
        sgrid.find('.tbc-checkbox.sgrid-ckb-all').addClass('checked');
    }

    function clearAll(t) {
        var data = $.data(t, "sgrid");
        var sgrid = data.sgrid;
        sgrid.find('.sgrid-tr-body .sgrid-ckb').removeClass('checked');
        sgrid.find('.sgrid-tr-body').removeClass('sgrid-row-select');
        sgrid.find('.tbc-checkbox.sgrid-ckb-all').removeClass('checked');
    }

    function selectRows(t, p) {
        var data = $.data(t, "sgrid");
        var sgrid = data.sgrid;
        if (!data.data) {
            return;
        }
        var d = data.data.rows;
        clearAll(t);
        for (var i = 0; i < d.length; i++) {
            if ($.inJson(p, d[i])) {
                var rowc = sgrid.find('.sgrid-tr-body:not(.sgrid-row-select) .sgrid-ckb[row="' + (i + 1) + '"]').addClass('checked');
                rowc.addClass('checked');
                rowc.parents('.sgrid-tr-body').addClass('sgrid-row-select');
            }
        }
    }

    function bindEvent(t) {
        var data = $.data(t, "sgrid");
        var sgrid = data.sgrid;
        sgrid.delegate('.sgrid-ckb', 'click', function () {
            $(this).toggleClass('checked')
            var c = $(this);
            var index = c.attr('row');
            if (data.options.isMultiSelected == false) {
                sgrid.find('.sgrid-tr').removeClass('sgrid-row-select');
            }
            if (c.hasClass('checked')) {
                sgrid.find('.sgrid-tr:eq(' + index + ')').addClass('sgrid-row-select')
            } else {
                sgrid.find('.sgrid-tr:eq(' + index + ')').removeClass('sgrid-row-select')
            }
            if (sgrid.find('.sgrid-tr-body.sgrid-row-select').length == data.options.rows) {
                sgrid.find('.sgrid-tr-header .sgrid-ckb-all').addClass('checked');
            } else {
                sgrid.find('.sgrid-tr-header .sgrid-ckb-all').removeClass('checked');
            }

        })
        sgrid.delegate('.sgrid-ckb-all', 'click', function () {
            $(this).toggleClass('checked')
            var c = $(this);
            if (c.hasClass('checked')) {
                sgrid.find('.sgrid-tr-body:not(.sgrid-row-select) .sgrid-ckb').addClass('checked');
                sgrid.find('.sgrid-tr-body:not(.sgrid-row-select)').addClass('sgrid-row-select');
            } else {
                sgrid.find('.sgrid-tr-body .sgrid-ckb').removeClass('checked');
                sgrid.find('.sgrid-tr-body').removeClass('sgrid-row-select');
            }

        })
        if (data.options.hover == true) {
            sgrid.delegate('.sgrid-tr-body', 'mouseenter', function () {
                $(this).addClass('sgrid-tr-hover')
            })
            sgrid.delegate('.sgrid-tr-body', 'mouseleave', function () {
                $(this).removeClass('sgrid-tr-hover')
            })

        }
        sgrid.delegate('.sgrid-sortabel', "click", function () {
            if (data.options.loading == true) {
                return;
            }
            var tOrder = $(this).data('order');
            if (!tOrder) {
                $('.sgrid-sortabel').each(function () {
                    if ($(this).data('order')) {
                        $(this).removeData('order');
                        $(this).removeClass('sgrid-sortabel-asc')
                        $(this).removeClass('sgrid-sortabel-desc')
                    }
                })
                data.options.order = 'asc';
                $(this).addClass('sgrid-sortabel-asc');
            } else {
                if (data.options.order == 'asc') {
                    data.options.order = 'desc';
                    $(this).removeClass('sgrid-sortabel-asc');
                    $(this).addClass('sgrid-sortabel-desc');
                } else {
                    data.options.order = 'asc';
                    $(this).removeClass('sgrid-sortabel-desc');
                    $(this).addClass('sgrid-sortabel-asc');
                }

            }
            $(this).data('order', data.options.order);
            data.options.sort = $(this).attr('field');
            sgrid.find('.sgrid-ckb-all').removeClass('checked');
            loadData(t);

        })
    }

    //TODO:渲染分页条
    function renderPagination(t, pageSize) {
        var data = $.data(t, "sgrid");
        var sgrid = data.sgrid;
        var pagination = $('<div class="' + data.options.paginationType + 'pagination">');
        if (!pageSize) {
            pageSize = data.options.rows;
        }
        if (data.options.paginationType == 's') {
            pagination.spagination({
                pageName:data.options.pageName,
                rowsName:data.options.rowsName,
                rows: pageSize,
                onRender:function () {

                },
                comboselect:data.options.comboselect,
                onChange:function () {
                    var d = $.data(this, "spagination");
                    updateGridPageInfo(t, d);
                    loadData(t);
                    sgrid.find('.sgrid-ckb-all').removeClass('checked');
                }
            });
        }
        if (data.options.paginationType == 'o') {
            pagination = $('<div class="spagination">');
            pagination.spagination({
                pageName:data.options.pageName,
                rowsName:data.options.rowsName,
                rows:data.options.rows,
                onRender:function () {

                },
                comboselect:data.options.comboselect,
                onChange:function () {
                    var d = $.data(this, "spagination");
                    updateGridPageInfo(t, d);
                    loadData(t);
                    sgrid.find('.sgrid-ckb-all').removeClass('checked')
                }
            });
        }
        if (data.options.paginationType == 't') {
            pagination.tpagination({
                pageName:data.options.pageName,
                rowsName:data.options.rowsName,
                onRender:function () {

                },
                onChange:function () {
                    var d = $.data(this, "tpagination");
                    updateGridPageInfo(t, d);
                    loadData(t);
                    sgrid.find('.sgrid-ckb-all').removeClass('checked')
                }
            });
        }
        $('<div class="pagination-panel-outer">').append(pagination).appendTo(sgrid);
        data.pagination = pagination;
    }

    function updatePagination(t, rtotal) {
        var data = $.data(t, "sgrid");
        var spagination = data.pagination;
        var pd = $.data(spagination[0], "spagination");
        pd.options.total = rtotal;
        spagination.spagination('updatePag');
    }

    function update3Pagination(t, rtotal) {
        try {
            var data = $.data(t, "sgrid");
            var tpagination = data.pagination;
            var pd = $.data(tpagination[0], "tpagination");
            pd.options.total = rtotal;
            tpagination.tpagination('updatePag');
        } catch (e) {
            //alert(e)
        }
    }

    function update2Pagination(t, next) {
        var data = $.data(t, "sgrid");
        var spagination = data.pagination;
        var pd = $.data(spagination[0], "spagination");
        spagination.spagination('noLast', next);
    }

    function updateGridPageInfo(t, d) {
        var data = $.data(t, "sgrid");
        data.options.page = d.options.page;
        data.options.rows = d.options.rows;
    }

    function changePage(t, page) {
        refresh(t);
    }

    function sortPage(t, sort) {
        refresh(t);
    }

    function initGrid(t) {
        var data = $.data(t, "sgrid");
        data.options.page = 1;
        data.options.rows = 10;
        data.options.sort = null;
        data.options.order = null;
        data.isLoaded = false;
        delete data.grid;
        delete data.pagination;
        delete data.data;
    }

    function load(t, p) {
        var data = $.data(t, "sgrid");
        if (p.url) {
            data.options.url = p.url;
        }
        if (p.param) {
            data.options.param = p.param;
        }
        render(t, true);
    }

    function reload(t) {
        render(t, true);
    }
    function refresh(t, p) {
        var data = $.data(t, "sgrid");
        var sgrid = data.sgrid;
        sgrid.find('.sgrid-ckb-all').removeClass('checked')


        if (p == true) {

            sgrid.css('position', 'relative');
            var h = sgrid.find('table').height();
            var w = sgrid.find('table').width();
            var div = $('<div>');
            div.addClass('ajax-loader');
            div.css({
                height:h,
                width:w
            })
            sgrid.append(div);
            /*去掉延迟加载setTimeout(function(){
             sgrid.find('.ajax-loader').remove();
             sgrid.css('position','static');
             loadData(t);
             },data.options.loadTime)*/
            //	ajax-loader2.gif
            sgrid.find('.ajax-loader').remove();
            sgrid.css('position', 'static');
            loadData(t);
        } else {
            loadData(t);
        }

    }

    function getTrEl(t, index) {
        var data = $.data(t, "sgrid");
        var sgrid = data.sgrid;
        var res = null;
        if (index) {
            res = sgrid.find('.sgrid-tr-body:eq(' + index + ')');
        } else {
            res = sgrid.find('.sgrid-row-select');
        }
        return res;
    }

    function handleRow(t, fn, index) {
        var data = $.data(t, "sgrid");
        if (index) {
            var d = getRow(t, index);
            var el = getTrEl(t, index);
        } else {
            var d = getSelectRows(t);
            var el = getTrEl(t);
        }
        fn.call(t, d, el);
        /*apply和call的区别
         fn.apply(t,arguments);
         如果d为数组,fn(a,b,c){
         a==arguments[0]b==arguments[0]c==arguments[0]
         }
         fn.callt(t,arguments1,arguments2);
         如果d为数组,fn(a){
         a==arguments1
         }
         apply的第二个参数必须是数组


         */
    }

    function isSelected(t) {
        var data = $.data(t, "sgrid");
        var sgrid = data.sgrid;
        var selecttrs = sgrid.find('.sgrid-row-select');
        return selecttrs.length > 0;
    }

    function getTotal(t) {
        var data = $.data(t, "sgrid");
        return data.data.total;
    }

    function getPageNumber(t) {
        var data = $.data(t, "sgrid");
        return data.options.page;
    }

    $.fn.sgrid = function (o, p) {
        if (typeof o == "string") {
            return $.fn.sgrid.methods[o](this, p);
        }
        o = o || {};

        return this.each(function () {
            var data = $.data(this, "sgrid");
            var option;
            if (data) {
                option = $.extend(data.options, o);
            } else {
                option = $.extend({}, $.fn.sgrid.defaults, $.fn.sgrid.parseOptions(this), o);
                data = $.data(this, "sgrid", {
                    options:option,
                    sgrid:_$(this),
                    isLoaded:false
                });
            }
            render(this);
        })
    }
    $.fn.sgrid.methods = {
        render:function (t, p) {
            return t.each(function () {
                render(this, p);
            });
        },
        getSelectRows:function (t, p) {
            return getSelectRows(t[0], p);
        },
        reload:function (t) {
            return t.each(function () {
                reload(this);
            });
        },
        searchLoad:function (t) {
            return t.each(function () {
                searchLoad(this);
            });
        },
        refresh:function (t, p) {
            return t.each(function () {
                refresh(this, p);
            });
        },
        load:function (t, p) {
            return t.each(function () {
                load(this, p);
            });
        },
        getRowsCount:function (t) {
            return getRowsCount(t[0]);
        },
        handleRow:function (t, o) {

            if (!o || !o.fn) {
                return;
            }
            return t.each(function () {
                handleRow(this, o.fn, o.index);
            });
        },
        isSelected:function (t) {
            return isSelected(t[0]);
        },
        selectAll:function (t) {
            return selectAll(t[0]);
        },
        clearAll:function (t) {
            return clearAll(t[0]);
        },
        selectRows:function (t, p) {
            return selectRows(t[0], p);
        },
        getTotal:function (t) {
            return getTotal(t[0]);
        },
        getPageNumber:function (t) {
            return getPageNumber(t[0]);
        }
    }
    $.fn.sgrid.parseOptions = function (t) {
        var t = $(t);
        return {}
    }
    $.fn.sgrid.defaultcolumn = {
        field:'',
        text:'',
        width:'auto',
        style:'',
        limit:0,
        formatter:function () {
        }
    }
    var _emptyTextStr = '暂无数据';
    try {
        _emptyTextStr = _emptyText();
    } catch (e) {

    }
    $.fn.sgrid.defaults = {
        url:null,
        param:null,
        cls:'',
        isLoading:false,
        paginationType:'s',
        pagination:true,
        order:"asc",
        orderName:'sortOrder',
        page:1,
        pageName:'pageNo',
        rows:10,
        rowsName:'pageSize',
        sort:null,
        sortName:'sortName',
        searchFormId:'searchForm',
        isMultiSelected:true,
        loadTime:5000,
        emptyText:_emptyTextStr,
        hover:false,
        comboselect:false,
        onLoad:function () {
        }
    }
})(jQuery)