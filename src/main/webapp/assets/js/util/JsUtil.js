String.prototype.Trim = function() {
  return this.replace(/(^\s*)|(\s*$)/g, ""); 
} ;

String.prototype.Ltrim = function() { 
  return this.replace(/(^\s*)/g, ""); 
} ;

String.prototype.Rtrim = function()   { 
  return this.replace(/(\s*$)/g, ""); 
} ;

String.prototype.endWith = function(str){
  if(str == null || str == "" || this.length == 0 || str.length > this.length){
     return false;
  }
  return this.substring(this.length - str.length) == str;
};


String.prototype.startWith = function(str){
 if(str == null || str == ""|| this.length == 0|| str.length > this.length){
     return false;
  }
  return this.substr(0, str.length) == str; 
};

//数字判断
NumUtil = {
    //判断是否为非负数
	checkRate:function (str)
	{
	   if (isNaN(str)) {
		   return false;
	   }
	   if (str < 0) {
		   return false;
	   }
	   return true;
	},
    //判断是否为正整数
    checkPositiveInt:function(str) {
        if (this.checkRate(str) && (str == Math.abs(parseInt(str))) && str > 0) {
            return true;
        }
        return false;
    },
    //判断是否为非负整数(0和正整数)
    checkNotNegativeInt:function(str) {
        if (this.checkRate(str) && (str == Math.abs(parseInt(str)))) {
            return true;
        }
        return false;
    }
		
};
DateUtil ={
    format:function (timestamp) {
        var d = new Date(timestamp);
        return  d.getFullYear()+ "-" +
                ((d.getMonth()+1) < 10 ? ("0" + (d.getMonth()+1)) :(d.getMonth()+1)) + "-" +
                (d.getDate() < 10 ? ("0" + d.getDate()) :d.getDate()) + " "+
                (d.getHours() < 10 ? ("0" + d.getHours()) : d.getHours()) + ":" +
                (d.getMinutes() < 10 ? ("0" + d.getMinutes()) : d.getMinutes()) + ":" +
                (d.getSeconds() < 10 ? ("0" +   d.getSeconds()) :   d.getSeconds());
    },
    formatToDay:function (timestamp){
        var d = new Date(timestamp);
        return   d.getFullYear()+ "-" +
                 ((d.getMonth()+1) < 10 ? ("0" + (d.getMonth()+1)) :(d.getMonth()+1)) + "-" +
                 (d.getDate() < 10 ? ("0" + d.getDate()) :d.getDate());

    },

    getDay : function(addDay){
        var today = new Date();
        var targetday_milliseconds=today.getTime() + 1000 * 60 * 60 * 24 * addDay;
        today.setTime(targetday_milliseconds); //注意，这行是关键代码
        var tYear = today.getFullYear();
        var tMonth = today.getMonth();
        var tDate = today.getDate();
        tMonth = this.doHandleMonth(tMonth + 1);
        tDate = this.doHandleMonth(tDate);
        return tYear+"-"+tMonth+"-"+tDate;
    },
    doHandleMonth : function(month) {
       var m = month;
       if (month.toString().length == 1) {
           m = "0" + month;
       }
       return m;
    }
}