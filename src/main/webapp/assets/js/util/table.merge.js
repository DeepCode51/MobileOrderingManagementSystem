$.fn.MergeColumns = function() {  
    return this.each(function() {  
        for (var i = $(this).find('tr:first th').size() - 1; i >= 0; i--) {  //获取表格td的数量进行循环  
            var s = null;  
            var prevTd = null;  
            $(this).find('tr').each(function() {  
            	if ($(this).attr("id") != 'projectLeaderInfo') {
            		var td = $(this).find('td').eq(i);  
                    var s1 = td.text();  
                    if (s1 != '' && s1.length != 0) {
                    	if (s1 == s) { //相同即执行合并操作  
                            td.hide(); //hide() 隐藏相同的td ,remove()会让表格错位 此处用hide  
                            prevTd.attr('rowspan', prevTd.attr('rowspan') ? parseInt(prevTd.attr('rowspan')) + 1 : 2); //赋值rowspan属性
                        } else {  
                            s = s1;  
                            prevTd = td;
                        } 
                    } else {
                    	 s = s1;  
                         prevTd = td;
                    }
            	}                                 
            });  
        }  
    });  
};