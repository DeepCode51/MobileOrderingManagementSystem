NS = new Object();

// 全局对象仅仅存在register函数，参数为名称空间全路径，如"Grandsoft.GEA"
NS.register = function(fullNS){
    // 将命名空间切成N部分, 比如Grandsoft、GEA等
    var nsArray = fullNS.split('.');
    var sEval = "";
    var sNS = "";
    for (var i = 0; i < nsArray.length; i++){
        if (i != 0) sNS += ".";
        sNS += nsArray[i];
        // 依次创建构造命名空间对象（假如不存在的话）的语句
        // 比如先创建Grandsoft，然后创建Grandsoft.GEA，依次下去
        sEval += "if (typeof(" + sNS + ") == 'undefined') " + sNS + " = new Object();"
    }
    if (sEval != "") eval(sEval);
}

//系统管理
NS.register("User");
NS.register("Role");
NS.register("Oper");
NS.register("BasesSetting");

//乐彩管理
NS.register("Lotterymodules");
NS.register("Lottery");
NS.register("Lotteryline");
NS.register("Lotterycode");

//界面管理
NS.register("Slide");