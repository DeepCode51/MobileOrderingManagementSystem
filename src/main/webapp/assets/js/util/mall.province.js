function provinceList()
{
	this.length=32;
	this[0] = new Option("请选择省份","");
	this[1] = new Option("北京市","北京市#110000");
	this[2] = new Option("天津市","天津市#120000");
	this[3] = new Option("河北省","河北省#130000");
	this[4] = new Option("山西省","山西省#140000");
	this[5] = new Option("内蒙古自治区","内蒙古自治区#150000");
	this[6] = new Option("辽宁省","辽宁省#210000");
	this[7] = new Option("吉林省","吉林省#220000");
	this[8] = new Option("黑龙江省","黑龙江省#230000");
	this[9] = new Option("上海市","上海市#310000");
	this[10] = new Option("江苏省","江苏省#320000");
	this[11] = new Option("浙江省","浙江省#330000");
	this[12] = new Option("安徽省","安徽省#340000");
	this[13] = new Option("福建省","福建省#350000");
	this[14] = new Option("江西省","江西省#360000");
	this[15] = new Option("山东省","山东省#370000");
	this[16] = new Option("河南省","河南省#410000");
	this[17] = new Option("湖北省","湖北省#420000");
	this[18] = new Option("湖南省","湖南省#430000");
	this[19] = new Option("广东省","广东省#440000");
	this[20] = new Option("广西壮族自治区","广西壮族自治区#450000");
	this[21] = new Option("海南省","海南省#460000");
	this[22] = new Option("重庆市","重庆市#500000");
	this[23] = new Option("四川省","四川省#510000");
	this[24] = new Option("贵州省","贵州省#520000");
	this[25] = new Option("云南省","云南省#530000");
	this[26] = new Option("西藏自治区","西藏自治区#540000");
	this[27] = new Option("陕西省","陕西省#610000");
	this[28] = new Option("甘肃省","甘肃省#620000");
	this[29] = new Option("青海省","青海省#630000");
	this[30] = new Option("宁夏回族自治区","宁夏回族自治区#640000");
	this[31] = new Option("新疆维吾尔自治区","新疆维吾尔自治区#650000");
	return this;
}
function cityList(i)
{
	var co = new Array();
	if(i == 0){
		co[i] = new Array();
	    co[i][0] = new Option("请选择城市","");
	}else if(i == 1){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("北京市","北京市#110100");
	
	}else if(i == 2){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("天津市","天津市#120100");
	
	}else if(i == 3){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("石家庄市","石家庄市#130100");
		co[i][2] = new Option("唐山市","唐山市#130200");
		co[i][3] = new Option("秦皇岛市","秦皇岛市#130300");
		co[i][4] = new Option("邯郸市","邯郸市#130400");
		co[i][5] = new Option("邢台市","邢台市#130500");
		co[i][6] = new Option("保定市","保定市#130600");
		co[i][7] = new Option("张家口市","张家口市#130700");
		co[i][8] = new Option("承德市","承德市#130800");
		co[i][9] = new Option("沧州市","沧州市#130900");
		co[i][10] = new Option("廊坊市","廊坊市#131000");
		co[i][11] = new Option("衡水市","衡水市#131100");
	
	}else if(i == 4){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("太原市","太原市#140100");
		co[i][2] = new Option("大同市","大同市#140200");
		co[i][3] = new Option("阳泉市","阳泉市#140300");
		co[i][4] = new Option("长治市","长治市#140400");
		co[i][5] = new Option("晋城市","晋城市#140500");
		co[i][6] = new Option("朔州市","朔州市#140600");
		co[i][7] = new Option("晋中市","晋中市#140700");
		co[i][8] = new Option("运城市","运城市#140800");
		co[i][9] = new Option("忻州市","忻州市#140900");
		co[i][10] = new Option("临汾市","临汾市#141000");
		co[i][11] = new Option("吕梁市","吕梁市#141100");
	
	}else if(i == 5){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("呼和浩特市","呼和浩特市#150100");
		co[i][2] = new Option("包头市","包头市#150200");
		co[i][3] = new Option("乌海市","乌海市#150300");
		co[i][4] = new Option("赤峰市","赤峰市#150400");
		co[i][5] = new Option("通辽市","通辽市#150500");
		co[i][6] = new Option("鄂尔多斯市","鄂尔多斯市#150600");
		co[i][7] = new Option("呼伦贝尔市","呼伦贝尔市#150700");
		co[i][8] = new Option("巴彦淖尔市","巴彦淖尔市#150800");
		co[i][9] = new Option("乌兰察布市","乌兰察布市#150900");
		co[i][10] = new Option("兴安盟","兴安盟#152200");
		co[i][11] = new Option("锡林郭勒盟","锡林郭勒盟#152500");
		co[i][12] = new Option("阿拉善盟","阿拉善盟#152900");
	
	}else if(i == 6){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("沈阳市","沈阳市#210100");
		co[i][2] = new Option("大连市","大连市#210200");
		co[i][3] = new Option("鞍山市","鞍山市#210300");
		co[i][4] = new Option("抚顺市","抚顺市#210400");
		co[i][5] = new Option("本溪市","本溪市#210500");
		co[i][6] = new Option("丹东市","丹东市#210600");
		co[i][7] = new Option("锦州市","锦州市#210700");
		co[i][8] = new Option("营口市","营口市#210800");
		co[i][9] = new Option("阜新市","阜新市#210900");
		co[i][10] = new Option("辽阳市","辽阳市#211000");
		co[i][11] = new Option("盘锦市","盘锦市#211100");
		co[i][12] = new Option("铁岭市","铁岭市#211200");
		co[i][13] = new Option("朝阳市","朝阳市#211300");
		co[i][14] = new Option("葫芦岛市","葫芦岛市#211400");
	
	}else if(i == 7){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("长春市","长春市#220100");
		co[i][2] = new Option("吉林市","吉林市#220200");
		co[i][3] = new Option("四平市","四平市#220300");
		co[i][4] = new Option("辽源市","辽源市#220400");
		co[i][5] = new Option("通化市","通化市#220500");
		co[i][6] = new Option("白山市","白山市#220600");
		co[i][7] = new Option("松原市","松原市#220700");
		co[i][8] = new Option("白城市","白城市#220800");
		co[i][9] = new Option("延边朝鲜族自治州","延边朝鲜族自治州#222400");
	
	}else if(i == 8){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("哈尔滨市","哈尔滨市#230100");
		co[i][2] = new Option("齐齐哈尔市","齐齐哈尔市#230200");
		co[i][3] = new Option("鸡西市","鸡西市#230300");
		co[i][4] = new Option("鹤岗市","鹤岗市#230400");
		co[i][5] = new Option("双鸭山市","双鸭山市#230500");
		co[i][6] = new Option("大庆市","大庆市#230600");
		co[i][7] = new Option("伊春市","伊春市#230700");
		co[i][8] = new Option("佳木斯市","佳木斯市#230800");
		co[i][9] = new Option("七台河市","七台河市#230900");
		co[i][10] = new Option("牡丹江市","牡丹江市#231000");
		co[i][11] = new Option("黑河市","黑河市#231100");
		co[i][12] = new Option("绥化市","绥化市#231200");
		co[i][13] = new Option("大兴安岭地区","大兴安岭地区#232700");
	
	}else if(i == 9){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("上海市","上海市#310100");
	
	}else if(i == 10){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("南京市","南京市#320100");
		co[i][2] = new Option("无锡市","无锡市#320200");
		co[i][3] = new Option("徐州市","徐州市#320300");
		co[i][4] = new Option("常州市","常州市#320400");
		co[i][5] = new Option("苏州市","苏州市#320500");
		co[i][6] = new Option("南通市","南通市#320600");
		co[i][7] = new Option("连云港市","连云港市#320700");
		co[i][8] = new Option("淮安市","淮安市#320800");
		co[i][9] = new Option("盐城市","盐城市#320900");
		co[i][10] = new Option("扬州市","扬州市#321000");
		co[i][11] = new Option("镇江市","镇江市#321100");
		co[i][12] = new Option("泰州市","泰州市#321200");
		co[i][13] = new Option("宿迁市","宿迁市#321300");
	
	}else if(i == 11){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("杭州市","杭州市#330100");
		co[i][2] = new Option("宁波市","宁波市#330200");
		co[i][3] = new Option("温州市","温州市#330300");
		co[i][4] = new Option("嘉兴市","嘉兴市#330400");
		co[i][5] = new Option("湖州市","湖州市#330500");
		co[i][6] = new Option("绍兴市","绍兴市#330600");
		co[i][7] = new Option("金华市","金华市#330700");
		co[i][8] = new Option("衢州市","衢州市#330800");
		co[i][9] = new Option("舟山市","舟山市#330900");
		co[i][10] = new Option("台州市","台州市#331000");
		co[i][11] = new Option("丽水市","丽水市#331100");
	
	}else if(i == 12){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("合肥市","合肥市#340100");
		co[i][2] = new Option("芜湖市","芜湖市#340200");
		co[i][3] = new Option("蚌埠市","蚌埠市#340300");
		co[i][4] = new Option("淮南市","淮南市#340400");
		co[i][5] = new Option("马鞍山市","马鞍山市#340500");
		co[i][6] = new Option("淮北市","淮北市#340600");
		co[i][7] = new Option("铜陵市","铜陵市#340700");
		co[i][8] = new Option("安庆市","安庆市#340800");
		co[i][9] = new Option("黄山市","黄山市#341000");
		co[i][10] = new Option("滁州市","滁州市#341100");
		co[i][11] = new Option("阜阳市","阜阳市#341200");
		co[i][12] = new Option("宿州市","宿州市#341300");
		co[i][13] = new Option("巢湖市","巢湖市#341400");
		co[i][14] = new Option("六安市","六安市#341500");
		co[i][15] = new Option("亳州市","亳州市#341600");
		co[i][16] = new Option("池州市","池州市#341700");
		co[i][17] = new Option("宣城市","宣城市#341800");
	
	}else if(i == 13){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("福州市","福州市#350100");
		co[i][2] = new Option("厦门市","厦门市#350200");
		co[i][3] = new Option("莆田市","莆田市#350300");
		co[i][4] = new Option("三明市","三明市#350400");
		co[i][5] = new Option("泉州市","泉州市#350500");
		co[i][6] = new Option("漳州市","漳州市#350600");
		co[i][7] = new Option("南平市","南平市#350700");
		co[i][8] = new Option("龙岩市","龙岩市#350800");
		co[i][9] = new Option("宁德市","宁德市#350900");
	
	}else if(i == 14){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("南昌市","南昌市#360100");
		co[i][2] = new Option("景德镇市","景德镇市#360200");
		co[i][3] = new Option("萍乡市","萍乡市#360300");
		co[i][4] = new Option("九江市","九江市#360400");
		co[i][5] = new Option("新余市","新余市#360500");
		co[i][6] = new Option("鹰潭市","鹰潭市#360600");
		co[i][7] = new Option("赣州市","赣州市#360700");
		co[i][8] = new Option("吉安市","吉安市#360800");
		co[i][9] = new Option("宜春市","宜春市#360900");
		co[i][10] = new Option("抚州市","抚州市#361000");
		co[i][11] = new Option("上饶市","上饶市#361100");
	
	}else if(i == 15){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("济南市","济南市#370100");
		co[i][2] = new Option("青岛市","青岛市#370200");
		co[i][3] = new Option("淄博市","淄博市#370300");
		co[i][4] = new Option("枣庄市","枣庄市#370400");
		co[i][5] = new Option("东营市","东营市#370500");
		co[i][6] = new Option("烟台市","烟台市#370600");
		co[i][7] = new Option("潍坊市","潍坊市#370700");
		co[i][8] = new Option("济宁市","济宁市#370800");
		co[i][9] = new Option("泰安市","泰安市#370900");
		co[i][10] = new Option("威海市","威海市#371000");
		co[i][11] = new Option("日照市","日照市#371100");
		co[i][12] = new Option("莱芜市","莱芜市#371200");
		co[i][13] = new Option("临沂市","临沂市#371300");
		co[i][14] = new Option("德州市","德州市#371400");
		co[i][15] = new Option("聊城市","聊城市#371500");
		co[i][16] = new Option("滨州市","滨州市#371600");
		co[i][17] = new Option("菏泽市","菏泽市#371700");
	
	}else if(i == 16){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("郑州市","郑州市#410100");
		co[i][2] = new Option("开封市","开封市#410200");
		co[i][3] = new Option("洛阳市","洛阳市#410300");
		co[i][4] = new Option("平顶山市","平顶山市#410400");
		co[i][5] = new Option("安阳市","安阳市#410500");
		co[i][6] = new Option("鹤壁市","鹤壁市#410600");
		co[i][7] = new Option("新乡市","新乡市#410700");
		co[i][8] = new Option("焦作市","焦作市#410800");
		co[i][9] = new Option("濮阳市","濮阳市#410900");
		co[i][10] = new Option("许昌市","许昌市#411000");
		co[i][11] = new Option("漯河市","漯河市#411100");
		co[i][12] = new Option("三门峡市","三门峡市#411200");
		co[i][13] = new Option("南阳市","南阳市#411300");
		co[i][14] = new Option("商丘市","商丘市#411400");
		co[i][15] = new Option("信阳市","信阳市#411500");
		co[i][16] = new Option("周口市","周口市#411600");
		co[i][17] = new Option("驻马店市","驻马店市#411700");
	
	}else if(i == 17){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("武汉市","武汉市#420100");
		co[i][2] = new Option("黄石市","黄石市#420200");
		co[i][3] = new Option("十堰市","十堰市#420300");
		co[i][4] = new Option("宜昌市","宜昌市#420500");
		co[i][5] = new Option("襄樊市","襄樊市#420600");
		co[i][6] = new Option("鄂州市","鄂州市#420700");
		co[i][7] = new Option("荆门市","荆门市#420800");
		co[i][8] = new Option("孝感市","孝感市#420900");
		co[i][9] = new Option("荆州市","荆州市#421000");
		co[i][10] = new Option("黄冈市","黄冈市#421100");
		co[i][11] = new Option("咸宁市","咸宁市#421200");
		co[i][12] = new Option("随州市","随州市#421300");
		co[i][13] = new Option("恩施土家族苗族自治州","恩施土家族苗族自治州#422800");
	
	}else if(i == 18){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("长沙市","长沙市#430100");
		co[i][2] = new Option("株洲市","株洲市#430200");
		co[i][3] = new Option("湘潭市","湘潭市#430300");
		co[i][4] = new Option("衡阳市","衡阳市#430400");
		co[i][5] = new Option("邵阳市","邵阳市#430500");
		co[i][6] = new Option("岳阳市","岳阳市#430600");
		co[i][7] = new Option("常德市","常德市#430700");
		co[i][8] = new Option("张家界市","张家界市#430800");
		co[i][9] = new Option("益阳市","益阳市#430900");
		co[i][10] = new Option("郴州市","郴州市#431000");
		co[i][11] = new Option("永州市","永州市#431100");
		co[i][12] = new Option("怀化市","怀化市#431200");
		co[i][13] = new Option("娄底市","娄底市#431300");
		co[i][14] = new Option("湘西土家族苗族自治州","湘西土家族苗族自治州#433100");
	
	}else if(i == 19){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("广州市","广州市#440100");
		co[i][2] = new Option("韶关市","韶关市#440200");
		co[i][3] = new Option("深圳市","深圳市#440300");
		co[i][4] = new Option("珠海市","珠海市#440400");
		co[i][5] = new Option("汕头市","汕头市#440500");
		co[i][6] = new Option("佛山市","佛山市#440600");
		co[i][7] = new Option("江门市","江门市#440700");
		co[i][8] = new Option("湛江市","湛江市#440800");
		co[i][9] = new Option("茂名市","茂名市#440900");
		co[i][10] = new Option("肇庆市","肇庆市#441200");
		co[i][11] = new Option("惠州市","惠州市#441300");
		co[i][12] = new Option("梅州市","梅州市#441400");
		co[i][13] = new Option("汕尾市","汕尾市#441500");
		co[i][14] = new Option("河源市","河源市#441600");
		co[i][15] = new Option("阳江市","阳江市#441700");
		co[i][16] = new Option("清远市","清远市#441800");
		co[i][17] = new Option("东莞市","东莞市#441900");
		co[i][18] = new Option("中山市","中山市#442000");
		co[i][19] = new Option("潮州市","潮州市#445100");
		co[i][20] = new Option("揭阳市","揭阳市#445200");
		co[i][21] = new Option("云浮市","云浮市#445300");
	
	}else if(i == 20){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("南宁市","南宁市#450100");
		co[i][2] = new Option("柳州市","柳州市#450200");
		co[i][3] = new Option("桂林市","桂林市#450300");
		co[i][4] = new Option("梧州市","梧州市#450400");
		co[i][5] = new Option("北海市","北海市#450500");
		co[i][6] = new Option("防城港市","防城港市#450600");
		co[i][7] = new Option("钦州市","钦州市#450700");
		co[i][8] = new Option("贵港市","贵港市#450800");
		co[i][9] = new Option("玉林市","玉林市#450900");
		co[i][10] = new Option("百色市","百色市#451000");
		co[i][11] = new Option("贺州市","贺州市#451100");
		co[i][12] = new Option("河池市","河池市#451200");
		co[i][13] = new Option("来宾市","来宾市#451300");
		co[i][14] = new Option("崇左市","崇左市#451400");
	
	}else if(i == 21){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("海口市","海口市#460100");
		co[i][2] = new Option("三亚市","三亚市#460200");
	
	}else if(i == 22){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("重庆市","重庆市#500100");
	
	}else if(i == 23){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("成都市","成都市#510100");
		co[i][2] = new Option("自贡市","自贡市#510300");
		co[i][3] = new Option("攀枝花市","攀枝花市#510400");
		co[i][4] = new Option("泸州市","泸州市#510500");
		co[i][5] = new Option("德阳市","德阳市#510600");
		co[i][6] = new Option("绵阳市","绵阳市#510700");
		co[i][7] = new Option("广元市","广元市#510800");
		co[i][8] = new Option("遂宁市","遂宁市#510900");
		co[i][9] = new Option("内江市","内江市#511000");
		co[i][10] = new Option("乐山市","乐山市#511100");
		co[i][11] = new Option("南充市","南充市#511300");
		co[i][12] = new Option("眉山市","眉山市#511400");
		co[i][13] = new Option("宜宾市","宜宾市#511500");
		co[i][14] = new Option("广安市","广安市#511600");
		co[i][15] = new Option("达州市","达州市#511700");
		co[i][16] = new Option("雅安市","雅安市#511800");
		co[i][17] = new Option("巴中市","巴中市#511900");
		co[i][18] = new Option("资阳市","资阳市#512000");
		co[i][19] = new Option("阿坝藏族羌族自治州","阿坝藏族羌族自治州#513200");
		co[i][20] = new Option("甘孜藏族自治州","甘孜藏族自治州#513300");
		co[i][21] = new Option("凉山彝族自治州","凉山彝族自治州#513400");
	
	}else if(i == 24){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("贵阳市","贵阳市#520100");
		co[i][2] = new Option("六盘水市","六盘水市#520200");
		co[i][3] = new Option("遵义市","遵义市#520300");
		co[i][4] = new Option("安顺市","安顺市#520400");
		co[i][5] = new Option("铜仁地区","铜仁地区#522200");
		co[i][6] = new Option("黔西南布依族苗族自治州","黔西南布依族苗族自治州#522300");
		co[i][7] = new Option("毕节地区","毕节地区#522400");
		co[i][8] = new Option("黔东南苗族侗族自治州","黔东南苗族侗族自治州#522600");
		co[i][9] = new Option("黔南布依族苗族自治州","黔南布依族苗族自治州#522700");
	
	}else if(i == 25){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("昆明市","昆明市#530100");
		co[i][2] = new Option("曲靖市","曲靖市#530300");
		co[i][3] = new Option("玉溪市","玉溪市#530400");
		co[i][4] = new Option("保山市","保山市#530500");
		co[i][5] = new Option("昭通市","昭通市#530600");
		co[i][6] = new Option("丽江市","丽江市#530700");
		co[i][7] = new Option("普洱市","普洱市#530800");
		co[i][8] = new Option("临沧市","临沧市#530900");
		co[i][9] = new Option("楚雄彝族自治州","楚雄彝族自治州#532300");
		co[i][10] = new Option("红河哈尼族彝族自治州","红河哈尼族彝族自治州#532500");
		co[i][11] = new Option("文山壮族苗族自治州","文山壮族苗族自治州#532600");
		co[i][12] = new Option("西双版纳傣族自治州","西双版纳傣族自治州#532800");
		co[i][13] = new Option("大理白族自治州","大理白族自治州#532900");
		co[i][14] = new Option("德宏傣族景颇族自治州","德宏傣族景颇族自治州#533100");
		co[i][15] = new Option("怒江傈僳族自治州","怒江傈僳族自治州#533300");
		co[i][16] = new Option("迪庆藏族自治州","迪庆藏族自治州#533400");
	
	}else if(i == 26){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("拉萨市","拉萨市#540100");
		co[i][2] = new Option("昌都地区","昌都地区#542100");
		co[i][3] = new Option("山南地区","山南地区#542200");
		co[i][4] = new Option("日喀则地区","日喀则地区#542300");
		co[i][5] = new Option("那曲地区","那曲地区#542400");
		co[i][6] = new Option("阿里地区","阿里地区#542500");
		co[i][7] = new Option("林芝地区","林芝地区#542600");
	
	}else if(i == 27){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("西安市","西安市#610100");
		co[i][2] = new Option("铜川市","铜川市#610200");
		co[i][3] = new Option("宝鸡市","宝鸡市#610300");
		co[i][4] = new Option("咸阳市","咸阳市#610400");
		co[i][5] = new Option("渭南市","渭南市#610500");
		co[i][6] = new Option("延安市","延安市#610600");
		co[i][7] = new Option("汉中市","汉中市#610700");
		co[i][8] = new Option("榆林市","榆林市#610800");
		co[i][9] = new Option("安康市","安康市#610900");
		co[i][10] = new Option("商洛市","商洛市#611000");
	
	}else if(i == 28){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("兰州市","兰州市#620100");
		co[i][2] = new Option("嘉峪关市","嘉峪关市#620200");
		co[i][3] = new Option("金昌市","金昌市#620300");
		co[i][4] = new Option("白银市","白银市#620400");
		co[i][5] = new Option("天水市","天水市#620500");
		co[i][6] = new Option("武威市","武威市#620600");
		co[i][7] = new Option("张掖市","张掖市#620700");
		co[i][8] = new Option("平凉市","平凉市#620800");
		co[i][9] = new Option("酒泉市","酒泉市#620900");
		co[i][10] = new Option("庆阳市","庆阳市#621000");
		co[i][11] = new Option("定西市","定西市#621100");
		co[i][12] = new Option("陇南市","陇南市#621200");
		co[i][13] = new Option("临夏回族自治州","临夏回族自治州#622900");
		co[i][14] = new Option("甘南藏族自治州","甘南藏族自治州#623000");
		co[i][15] = new Option("定西市","定西市#623100");
	
	}else if(i == 29){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("西宁市","西宁市#630100");
		co[i][2] = new Option("海东地区","海东地区#632100");
		co[i][3] = new Option("海北藏族自治州","海北藏族自治州#632200");
		co[i][4] = new Option("黄南藏族自治州","黄南藏族自治州#632300");
		co[i][5] = new Option("海南藏族自治州","海南藏族自治州#632500");
		co[i][6] = new Option("果洛藏族自治州","果洛藏族自治州#632600");
		co[i][7] = new Option("玉树藏族自治州","玉树藏族自治州#632700");
		co[i][8] = new Option("海西蒙古族藏族自治州","海西蒙古族藏族自治州#632800");
	
	}else if(i == 30){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("银川市","银川市#640100");
		co[i][2] = new Option("石嘴山市","石嘴山市#640200");
		co[i][3] = new Option("吴忠市","吴忠市#640300");
		co[i][4] = new Option("固原市","固原市#640400");
		co[i][5] = new Option("中卫市","中卫市#640500");
	
	}else if(i == 31){
		co[i] = new Array();
		co[i][0] = new Option("请选择城市","");
		co[i][1] = new Option("乌鲁木齐市","乌鲁木齐市#650100");
		co[i][2] = new Option("克拉玛依市","克拉玛依市#650200");
		co[i][3] = new Option("石河子市","石河子市#650300");
		co[i][4] = new Option("吐鲁番地区","吐鲁番地区#652100");
		co[i][5] = new Option("哈密地区","哈密地区#652200");
		co[i][6] = new Option("昌吉回族自治州","昌吉回族自治州#652300");
		co[i][7] = new Option("博尔塔拉蒙古自治州","博尔塔拉蒙古自治州#652700");
		co[i][8] = new Option("巴音郭楞蒙古自治州","巴音郭楞蒙古自治州#652800");
		co[i][9] = new Option("阿克苏地区","阿克苏地区#652900");
		co[i][10] = new Option("克孜勒苏柯尔克孜自治州","克孜勒苏柯尔克孜自治州#653000");
		co[i][11] = new Option("喀什地区","喀什地区#653100");
		co[i][12] = new Option("和田地区","和田地区#653200");
		co[i][13] = new Option("伊犁哈萨克自治州","伊犁哈萨克自治州#654000");
		co[i][14] = new Option("塔城地区","塔城地区#654200");
		co[i][15] = new Option("阿勒泰地区","阿勒泰地区#654300");
	}
	return co;	
}

function areaList(p , i){
	var co = new Array();
	if(p == 0){
		co[p] = new Array();
		co[p][i] = new Array();
	    co[p][i][0] = new Option("请选择区","");
	}else if(p == 1){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("东城区","东城区#110101");
			co[p][i][1] = new Option("西城区","西城区#110102");
			co[p][i][2] = new Option("崇文区","崇文区#110103");
			co[p][i][3] = new Option("宣武区","宣武区#110104");
			co[p][i][4] = new Option("朝阳区","朝阳区#110105");
			co[p][i][5] = new Option("丰台区","丰台区#110106");
			co[p][i][6] = new Option("石景山区","石景山区#110107");
			co[p][i][7] = new Option("海淀区","海淀区#110108");
			co[p][i][8] = new Option("门头沟区","门头沟区#110109");
			co[p][i][9] = new Option("房山区","房山区#110111");
			co[p][i][10] = new Option("通州区","通州区#110112");
			co[p][i][11] = new Option("顺义区","顺义区#110113");
			co[p][i][12] = new Option("昌平区","昌平区#110114");
			co[p][i][13] = new Option("大兴区","大兴区#110115");
			co[p][i][14] = new Option("怀柔区","怀柔区#110116");
			co[p][i][15] = new Option("平谷区","平谷区#110117");
		}
	
	}else if(p == 2){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("和平区","和平区#120101");
			co[p][i][1] = new Option("河东区","河东区#120102");
			co[p][i][2] = new Option("河西区","河西区#120103");
			co[p][i][3] = new Option("南开区","南开区#120104");
			co[p][i][4] = new Option("河北区","河北区#120105");
			co[p][i][5] = new Option("红桥区","红桥区#120106");
			co[p][i][6] = new Option("塘沽区","塘沽区#120107");
			co[p][i][7] = new Option("汉沽区","汉沽区#120108");
			co[p][i][8] = new Option("大港区","大港区#120109");
			co[p][i][9] = new Option("东丽区","东丽区#120110");
			co[p][i][10] = new Option("西青区","西青区#120111");
			co[p][i][11] = new Option("津南区","津南区#120112");
			co[p][i][12] = new Option("北辰区","北辰区#120113");
			co[p][i][13] = new Option("武清区","武清区#120114");
			co[p][i][14] = new Option("宝坻区","宝坻区#120115");
			co[p][i][15] = new Option("蓟县","蓟县#120225");
		}
	
	}else if(p == 3){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("长安区","长安区#130102");
			co[p][i][1] = new Option("桥东区","桥东区#130103");
			co[p][i][2] = new Option("桥西区","桥西区#130104");
			co[p][i][3] = new Option("新华区","新华区#130105");
			co[p][i][4] = new Option("井陉矿区","井陉矿区#130107");
			co[p][i][5] = new Option("裕华区","裕华区#130108");
			co[p][i][6] = new Option("井陉县","井陉县#130121");
			co[p][i][7] = new Option("正定县","正定县#130123");
			co[p][i][8] = new Option("栾城县","栾城县#130124");
			co[p][i][9] = new Option("行唐县","行唐县#130125");
			co[p][i][10] = new Option("灵寿县","灵寿县#130126");
			co[p][i][11] = new Option("高邑县","高邑县#130127");
			co[p][i][12] = new Option("深泽县","深泽县#130128");
			co[p][i][13] = new Option("赞皇县","赞皇县#130129");
			co[p][i][14] = new Option("无极县","无极县#130130");
			co[p][i][15] = new Option("平山县","平山县#130131");
			co[p][i][16] = new Option("元氏县","元氏县#130132");
			co[p][i][17] = new Option("赵县","赵县#130133");
			co[p][i][18] = new Option("辛集市","辛集市#130181");
			co[p][i][19] = new Option("藁城市","藁城市#130182");
			co[p][i][20] = new Option("晋州市","晋州市#130183");
			co[p][i][21] = new Option("新乐市","新乐市#130184");
			co[p][i][22] = new Option("鹿泉市","鹿泉市#130185");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("路南区","路南区#130202");
			co[p][i][1] = new Option("路北区","路北区#130203");
			co[p][i][2] = new Option("古冶区","古冶区#130204");
			co[p][i][3] = new Option("开平区","开平区#130205");
			co[p][i][4] = new Option("丰南区","丰南区#130207");
			co[p][i][5] = new Option("丰润区","丰润区#130208");
			co[p][i][6] = new Option("滦县","滦县#130223");
			co[p][i][7] = new Option("滦南县","滦南县#130224");
			co[p][i][8] = new Option("乐亭县","乐亭县#130225");
			co[p][i][9] = new Option("迁西县","迁西县#130227");
			co[p][i][10] = new Option("玉田县","玉田县#130229");
			co[p][i][11] = new Option("唐海县","唐海县#130230");
			co[p][i][12] = new Option("遵化市","遵化市#130281");
			co[p][i][13] = new Option("迁安市","迁安市#130283");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("海港区","海港区#130302");
			co[p][i][1] = new Option("山海关区","山海关区#130303");
			co[p][i][2] = new Option("北戴河区","北戴河区#130304");
			co[p][i][3] = new Option("青龙满族自治县","青龙满族自治县#130321");
			co[p][i][4] = new Option("昌黎县","昌黎县#130322");
			co[p][i][5] = new Option("抚宁县","抚宁县#130323");
			co[p][i][6] = new Option("卢龙县","卢龙县#130324");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("邯山区","邯山区#130402");
			co[p][i][1] = new Option("丛台区","丛台区#130403");
			co[p][i][2] = new Option("复兴区","复兴区#130404");
			co[p][i][3] = new Option("峰峰矿区","峰峰矿区#130406");
			co[p][i][4] = new Option("邯郸县","邯郸县#130421");
			co[p][i][5] = new Option("临漳县","临漳县#130423");
			co[p][i][6] = new Option("成安县","成安县#130424");
			co[p][i][7] = new Option("大名县","大名县#130425");
			co[p][i][8] = new Option("涉县","涉县#130426");
			co[p][i][9] = new Option("磁县","磁县#130427");
			co[p][i][10] = new Option("肥乡县","肥乡县#130428");
			co[p][i][11] = new Option("永年县","永年县#130429");
			co[p][i][12] = new Option("邱县","邱县#130430");
			co[p][i][13] = new Option("鸡泽县","鸡泽县#130431");
			co[p][i][14] = new Option("广平县","广平县#130432");
			co[p][i][15] = new Option("馆陶县","馆陶县#130433");
			co[p][i][16] = new Option("魏县","魏县#130434");
			co[p][i][17] = new Option("曲周县","曲周县#130435");
			co[p][i][18] = new Option("武安市","武安市#130481");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("桥东区","桥东区#130502");
			co[p][i][1] = new Option("桥西区","桥西区#130503");
			co[p][i][2] = new Option("邢台县","邢台县#130521");
			co[p][i][3] = new Option("临城县","临城县#130522");
			co[p][i][4] = new Option("内丘县","内丘县#130523");
			co[p][i][5] = new Option("柏乡县","柏乡县#130524");
			co[p][i][6] = new Option("隆尧县","隆尧县#130525");
			co[p][i][7] = new Option("任县","任县#130526");
			co[p][i][8] = new Option("南和县","南和县#130527");
			co[p][i][9] = new Option("宁晋县","宁晋县#130528");
			co[p][i][10] = new Option("巨鹿县","巨鹿县#130529");
			co[p][i][11] = new Option("新河县","新河县#130530");
			co[p][i][12] = new Option("广宗县","广宗县#130531");
			co[p][i][13] = new Option("平乡县","平乡县#130532");
			co[p][i][14] = new Option("威县","威县#130533");
			co[p][i][15] = new Option("清河县","清河县#130534");
			co[p][i][16] = new Option("临西县","临西县#130535");
			co[p][i][17] = new Option("南宫市","南宫市#130581");
			co[p][i][18] = new Option("沙河市","沙河市#130582");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("新市区","新市区#130602");
			co[p][i][1] = new Option("北市区","北市区#130603");
			co[p][i][2] = new Option("南市区","南市区#130604");
			co[p][i][3] = new Option("满城县","满城县#130621");
			co[p][i][4] = new Option("清苑县","清苑县#130622");
			co[p][i][5] = new Option("涞水县","涞水县#130623");
			co[p][i][6] = new Option("阜平县","阜平县#130624");
			co[p][i][7] = new Option("徐水县","徐水县#130625");
			co[p][i][8] = new Option("定兴县","定兴县#130626");
			co[p][i][9] = new Option("唐县","唐县#130627");
			co[p][i][10] = new Option("高阳县","高阳县#130628");
			co[p][i][11] = new Option("容城县","容城县#130629");
			co[p][i][12] = new Option("涞源县","涞源县#130630");
			co[p][i][13] = new Option("望都县","望都县#130631");
			co[p][i][14] = new Option("安新县","安新县#130632");
			co[p][i][15] = new Option("易县","易县#130633");
			co[p][i][16] = new Option("曲阳县","曲阳县#130634");
			co[p][i][17] = new Option("蠡县","蠡县#130635");
			co[p][i][18] = new Option("顺平县","顺平县#130636");
			co[p][i][19] = new Option("博野县","博野县#130637");
			co[p][i][20] = new Option("雄县","雄县#130638");
			co[p][i][21] = new Option("涿州市","涿州市#130681");
			co[p][i][22] = new Option("定州市","定州市#130682");
			co[p][i][23] = new Option("安国市","安国市#130683");
			co[p][i][24] = new Option("高碑店市","高碑店市#130684");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("桥东区","桥东区#130702");
			co[p][i][1] = new Option("桥西区","桥西区#130703");
			co[p][i][2] = new Option("宣化区","宣化区#130705");
			co[p][i][3] = new Option("下花园区","下花园区#130706");
			co[p][i][4] = new Option("宣化县","宣化县#130721");
			co[p][i][5] = new Option("张北县","张北县#130722");
			co[p][i][6] = new Option("康保县","康保县#130723");
			co[p][i][7] = new Option("沽源县","沽源县#130724");
			co[p][i][8] = new Option("尚义县","尚义县#130725");
			co[p][i][9] = new Option("蔚县","蔚县#130726");
			co[p][i][10] = new Option("阳原县","阳原县#130727");
			co[p][i][11] = new Option("怀安县","怀安县#130728");
			co[p][i][12] = new Option("万全县","万全县#130729");
			co[p][i][13] = new Option("怀来县","怀来县#130730");
			co[p][i][14] = new Option("涿鹿县","涿鹿县#130731");
			co[p][i][15] = new Option("赤城县","赤城县#130732");
			co[p][i][16] = new Option("崇礼县","崇礼县#130733");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("双桥区","双桥区#130802");
			co[p][i][1] = new Option("双滦区","双滦区#130803");
			co[p][i][2] = new Option("鹰手营子矿区","鹰手营子矿区#130804");
			co[p][i][3] = new Option("承德县","承德县#130821");
			co[p][i][4] = new Option("兴隆县","兴隆县#130822");
			co[p][i][5] = new Option("平泉县","平泉县#130823");
			co[p][i][6] = new Option("滦平县","滦平县#130824");
			co[p][i][7] = new Option("隆化县","隆化县#130825");
			co[p][i][8] = new Option("丰宁满族自治县","丰宁满族自治县#130826");
			co[p][i][9] = new Option("宽城满族自治县","宽城满族自治县#130827");
			co[p][i][10] = new Option("围场满族蒙古族自治县","围场满族蒙古族自治县#130828");
		
		} else if(i == 9){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("新华区","新华区#130902");
			co[p][i][1] = new Option("运河区","运河区#130903");
			co[p][i][2] = new Option("沧县","沧县#130921");
			co[p][i][3] = new Option("青县","青县#130922");
			co[p][i][4] = new Option("东光县","东光县#130923");
			co[p][i][5] = new Option("海兴县","海兴县#130924");
			co[p][i][6] = new Option("盐山县","盐山县#130925");
			co[p][i][7] = new Option("肃宁县","肃宁县#130926");
			co[p][i][8] = new Option("南皮县","南皮县#130927");
			co[p][i][9] = new Option("吴桥县","吴桥县#130928");
			co[p][i][10] = new Option("献县","献县#130929");
			co[p][i][11] = new Option("孟村回族自治县","孟村回族自治县#130930");
			co[p][i][12] = new Option("泊头市","泊头市#130981");
			co[p][i][13] = new Option("任丘市","任丘市#130982");
			co[p][i][14] = new Option("黄骅市","黄骅市#130983");
			co[p][i][15] = new Option("河间市","河间市#130984");
		
		} else if(i == 10){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("安次区","安次区#131002");
			co[p][i][1] = new Option("广阳区","广阳区#131003");
			co[p][i][2] = new Option("固安县","固安县#131022");
			co[p][i][3] = new Option("永清县","永清县#131023");
			co[p][i][4] = new Option("香河县","香河县#131024");
			co[p][i][5] = new Option("大城县","大城县#131025");
			co[p][i][6] = new Option("文安县","文安县#131026");
			co[p][i][7] = new Option("大厂回族自治县","大厂回族自治县#131028");
			co[p][i][8] = new Option("霸州市","霸州市#131081");
			co[p][i][9] = new Option("三河市","三河市#131082");
		
		} else if(i == 11){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("桃城区","桃城区#131102");
			co[p][i][1] = new Option("枣强县","枣强县#131121");
			co[p][i][2] = new Option("武邑县","武邑县#131122");
			co[p][i][3] = new Option("武强县","武强县#131123");
			co[p][i][4] = new Option("饶阳县","饶阳县#131124");
			co[p][i][5] = new Option("安平县","安平县#131125");
			co[p][i][6] = new Option("故城县","故城县#131126");
			co[p][i][7] = new Option("景县","景县#131127");
			co[p][i][8] = new Option("阜城县","阜城县#131128");
			co[p][i][9] = new Option("冀州市","冀州市#131181");
			co[p][i][10] = new Option("深州市","深州市#131182");
		}
	
	}else if(p == 4){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("小店区","小店区#140105");
			co[p][i][1] = new Option("迎泽区","迎泽区#140106");
			co[p][i][2] = new Option("杏花岭区","杏花岭区#140107");
			co[p][i][3] = new Option("尖草坪区","尖草坪区#140108");
			co[p][i][4] = new Option("万柏林区","万柏林区#140109");
			co[p][i][5] = new Option("晋源区","晋源区#140110");
			co[p][i][6] = new Option("清徐县","清徐县#140121");
			co[p][i][7] = new Option("阳曲县","阳曲县#140122");
			co[p][i][8] = new Option("娄烦县","娄烦县#140123");
			co[p][i][9] = new Option("古交市","古交市#140181");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("矿区","矿区#140203");
			co[p][i][1] = new Option("南郊区","南郊区#140211");
			co[p][i][2] = new Option("新荣区","新荣区#140212");
			co[p][i][3] = new Option("阳高县","阳高县#140221");
			co[p][i][4] = new Option("天镇县","天镇县#140222");
			co[p][i][5] = new Option("广灵县","广灵县#140223");
			co[p][i][6] = new Option("灵丘县","灵丘县#140224");
			co[p][i][7] = new Option("浑源县","浑源县#140225");
			co[p][i][8] = new Option("左云县","左云县#140226");
			co[p][i][9] = new Option("大同县","大同县#140227");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("矿区","矿区#140303");
			co[p][i][1] = new Option("平定县","平定县#140321");
			co[p][i][2] = new Option("盂县","盂县#140322");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("长治县","长治县#140421");
			co[p][i][1] = new Option("襄垣县","襄垣县#140423");
			co[p][i][2] = new Option("屯留县","屯留县#140424");
			co[p][i][3] = new Option("平顺县","平顺县#140425");
			co[p][i][4] = new Option("黎城县","黎城县#140426");
			co[p][i][5] = new Option("壶关县","壶关县#140427");
			co[p][i][6] = new Option("长子县","长子县#140428");
			co[p][i][7] = new Option("武乡县","武乡县#140429");
			co[p][i][8] = new Option("沁县","沁县#140430");
			co[p][i][9] = new Option("沁源县","沁源县#140431");
			co[p][i][10] = new Option("潞城市","潞城市#140481");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("沁水县","沁水县#140521");
			co[p][i][1] = new Option("阳城县","阳城县#140522");
			co[p][i][2] = new Option("陵川县","陵川县#140524");
			co[p][i][3] = new Option("泽州县","泽州县#140525");
			co[p][i][4] = new Option("高平市","高平市#140581");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("朔城区","朔城区#140602");
			co[p][i][1] = new Option("平鲁区","平鲁区#140603");
			co[p][i][2] = new Option("山阴县","山阴县#140621");
			co[p][i][3] = new Option("应县","应县#140622");
			co[p][i][4] = new Option("右玉县","右玉县#140623");
			co[p][i][5] = new Option("怀仁县","怀仁县#140624");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("榆次区","榆次区#140702");
			co[p][i][1] = new Option("榆社县","榆社县#140721");
			co[p][i][2] = new Option("左权县","左权县#140722");
			co[p][i][3] = new Option("和顺县","和顺县#140723");
			co[p][i][4] = new Option("昔阳县","昔阳县#140724");
			co[p][i][5] = new Option("寿阳县","寿阳县#140725");
			co[p][i][6] = new Option("太谷县","太谷县#140726");
			co[p][i][7] = new Option("祁县","祁县#140727");
			co[p][i][8] = new Option("平遥县","平遥县#140728");
			co[p][i][9] = new Option("灵石县","灵石县#140729");
			co[p][i][10] = new Option("介休市","介休市#140781");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("盐湖区","盐湖区#140802");
			co[p][i][1] = new Option("临猗县","临猗县#140821");
			co[p][i][2] = new Option("万荣县","万荣县#140822");
			co[p][i][3] = new Option("闻喜县","闻喜县#140823");
			co[p][i][4] = new Option("稷山县","稷山县#140824");
			co[p][i][5] = new Option("新绛县","新绛县#140825");
			co[p][i][6] = new Option("绛县","绛县#140826");
			co[p][i][7] = new Option("垣曲县","垣曲县#140827");
			co[p][i][8] = new Option("夏县","夏县#140828");
			co[p][i][9] = new Option("平陆县","平陆县#140829");
			co[p][i][10] = new Option("芮城县","芮城县#140830");
			co[p][i][11] = new Option("永济市","永济市#140881");
			co[p][i][12] = new Option("河津市","河津市#140882");
		
		} else if(i == 9){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("忻府区","忻府区#140902");
			co[p][i][1] = new Option("定襄县","定襄县#140921");
			co[p][i][2] = new Option("五台县","五台县#140922");
			co[p][i][3] = new Option("代县","代县#140923");
			co[p][i][4] = new Option("繁峙县","繁峙县#140924");
			co[p][i][5] = new Option("宁武县","宁武县#140925");
			co[p][i][6] = new Option("静乐县","静乐县#140926");
			co[p][i][7] = new Option("神池县","神池县#140927");
			co[p][i][8] = new Option("五寨县","五寨县#140928");
			co[p][i][9] = new Option("岢岚县","岢岚县#140929");
			co[p][i][10] = new Option("河曲县","河曲县#140930");
			co[p][i][11] = new Option("保德县","保德县#140931");
			co[p][i][12] = new Option("偏关县","偏关县#140932");
			co[p][i][13] = new Option("原平市","原平市#140981");
		
		} else if(i == 10){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("尧都区","尧都区#141002");
			co[p][i][1] = new Option("曲沃县","曲沃县#141021");
			co[p][i][2] = new Option("翼城县","翼城县#141022");
			co[p][i][3] = new Option("襄汾县","襄汾县#141023");
			co[p][i][4] = new Option("洪洞县","洪洞县#141024");
			co[p][i][5] = new Option("古县","古县#141025");
			co[p][i][6] = new Option("安泽县","安泽县#141026");
			co[p][i][7] = new Option("浮山县","浮山县#141027");
			co[p][i][8] = new Option("吉县","吉县#141028");
			co[p][i][9] = new Option("乡宁县","乡宁县#141029");
			co[p][i][10] = new Option("大宁县","大宁县#141030");
			co[p][i][11] = new Option("隰县","隰县#141031");
			co[p][i][12] = new Option("永和县","永和县#141032");
			co[p][i][13] = new Option("蒲县","蒲县#141033");
			co[p][i][14] = new Option("汾西县","汾西县#141034");
			co[p][i][15] = new Option("侯马市","侯马市#141081");
			co[p][i][16] = new Option("霍州市","霍州市#141082");
		
		} else if(i == 11){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("离石区","离石区#141102");
			co[p][i][1] = new Option("文水县","文水县#141121");
			co[p][i][2] = new Option("交城县","交城县#141122");
			co[p][i][3] = new Option("兴县","兴县#141123");
			co[p][i][4] = new Option("临县","临县#141124");
			co[p][i][5] = new Option("柳林县","柳林县#141125");
			co[p][i][6] = new Option("石楼县","石楼县#141126");
			co[p][i][7] = new Option("岚县","岚县#141127");
			co[p][i][8] = new Option("方山县","方山县#141128");
			co[p][i][9] = new Option("中阳县","中阳县#141129");
			co[p][i][10] = new Option("交口县","交口县#141130");
			co[p][i][11] = new Option("孝义市","孝义市#141181");
			co[p][i][12] = new Option("汾阳市","汾阳市#141182");
		}
	
	}else if(p == 5){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("新城区","新城区#150102");
			co[p][i][1] = new Option("回民区","回民区#150103");
			co[p][i][2] = new Option("玉泉区","玉泉区#150104");
			co[p][i][3] = new Option("赛罕区","赛罕区#150105");
			co[p][i][4] = new Option("土默特左旗","土默特左旗#150121");
			co[p][i][5] = new Option("托克托县","托克托县#150122");
			co[p][i][6] = new Option("和林格尔县","和林格尔县#150123");
			co[p][i][7] = new Option("清水河县","清水河县#150124");
			co[p][i][8] = new Option("武川县","武川县#150125");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("东河区","东河区#150202");
			co[p][i][1] = new Option("昆都仑区","昆都仑区#150203");
			co[p][i][2] = new Option("青山区","青山区#150204");
			co[p][i][3] = new Option("石拐区","石拐区#150205");
			co[p][i][4] = new Option("白云矿区","白云矿区#150206");
			co[p][i][5] = new Option("九原区","九原区#150207");
			co[p][i][6] = new Option("土默特右旗","土默特右旗#150221");
			co[p][i][7] = new Option("固阳县","固阳县#150222");
			co[p][i][8] = new Option("达尔罕茂明安联合旗","达尔罕茂明安联合旗#150223");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("海勃湾区","海勃湾区#150302");
			co[p][i][1] = new Option("海南区","海南区#150303");
			co[p][i][2] = new Option("乌达区","乌达区#150304");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("红山区","红山区#150402");
			co[p][i][1] = new Option("元宝山区","元宝山区#150403");
			co[p][i][2] = new Option("松山区","松山区#150404");
			co[p][i][3] = new Option("阿鲁科尔沁旗","阿鲁科尔沁旗#150421");
			co[p][i][4] = new Option("巴林左旗","巴林左旗#150422");
			co[p][i][5] = new Option("巴林右旗","巴林右旗#150423");
			co[p][i][6] = new Option("林西县","林西县#150424");
			co[p][i][7] = new Option("克什克腾旗","克什克腾旗#150425");
			co[p][i][8] = new Option("翁牛特旗","翁牛特旗#150426");
			co[p][i][9] = new Option("喀喇沁旗","喀喇沁旗#150428");
			co[p][i][10] = new Option("宁城县","宁城县#150429");
			co[p][i][11] = new Option("敖汉旗","敖汉旗#150430");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("科尔沁区","科尔沁区#150502");
			co[p][i][1] = new Option("科尔沁左翼中旗","科尔沁左翼中旗#150521");
			co[p][i][2] = new Option("科尔沁左翼后旗","科尔沁左翼后旗#150522");
			co[p][i][3] = new Option("开鲁县","开鲁县#150523");
			co[p][i][4] = new Option("库伦旗","库伦旗#150524");
			co[p][i][5] = new Option("奈曼旗","奈曼旗#150525");
			co[p][i][6] = new Option("扎鲁特旗","扎鲁特旗#150526");
			co[p][i][7] = new Option("霍林郭勒市","霍林郭勒市#150581");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("东胜区","东胜区#150602");
			co[p][i][1] = new Option("达拉特旗","达拉特旗#150621");
			co[p][i][2] = new Option("准格尔旗","准格尔旗#150622");
			co[p][i][3] = new Option("鄂托克前旗","鄂托克前旗#150623");
			co[p][i][4] = new Option("鄂托克旗","鄂托克旗#150624");
			co[p][i][5] = new Option("杭锦旗","杭锦旗#150625");
			co[p][i][6] = new Option("乌审旗","乌审旗#150626");
			co[p][i][7] = new Option("伊金霍洛旗","伊金霍洛旗#150627");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("海拉尔区","海拉尔区#150702");
			co[p][i][1] = new Option("阿荣旗","阿荣旗#150721");
			co[p][i][2] = new Option("莫力达瓦达斡尔族自治旗","莫力达瓦达斡尔族自治旗#150722");
			co[p][i][3] = new Option("鄂伦春自治旗","鄂伦春自治旗#150723");
			co[p][i][4] = new Option("鄂温克族自治旗","鄂温克族自治旗#150724");
			co[p][i][5] = new Option("陈巴尔虎旗","陈巴尔虎旗#150725");
			co[p][i][6] = new Option("新巴尔虎左旗","新巴尔虎左旗#150726");
			co[p][i][7] = new Option("新巴尔虎右旗","新巴尔虎右旗#150727");
			co[p][i][8] = new Option("满洲里市","满洲里市#150781");
			co[p][i][9] = new Option("牙克石市","牙克石市#150782");
			co[p][i][10] = new Option("扎兰屯市","扎兰屯市#150783");
			co[p][i][11] = new Option("额尔古纳市","额尔古纳市#150784");
			co[p][i][12] = new Option("根河市","根河市#150785");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("临河区","临河区#150802");
			co[p][i][1] = new Option("五原县","五原县#150821");
			co[p][i][2] = new Option("磴口县","磴口县#150822");
			co[p][i][3] = new Option("乌拉特前旗","乌拉特前旗#150823");
			co[p][i][4] = new Option("乌拉特中旗","乌拉特中旗#150824");
			co[p][i][5] = new Option("乌拉特后旗","乌拉特后旗#150825");
			co[p][i][6] = new Option("杭锦后旗","杭锦后旗#150826");
		
		} else if(i == 9){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("集宁区","集宁区#150902");
			co[p][i][1] = new Option("卓资县","卓资县#150921");
			co[p][i][2] = new Option("化德县","化德县#150922");
			co[p][i][3] = new Option("商都县","商都县#150923");
			co[p][i][4] = new Option("兴和县","兴和县#150924");
			co[p][i][5] = new Option("凉城县","凉城县#150925");
			co[p][i][6] = new Option("察哈尔右翼前旗","察哈尔右翼前旗#150926");
			co[p][i][7] = new Option("察哈尔右翼中旗","察哈尔右翼中旗#150927");
			co[p][i][8] = new Option("察哈尔右翼后旗","察哈尔右翼后旗#150928");
			co[p][i][9] = new Option("四子王旗","四子王旗#150929");
			co[p][i][10] = new Option("丰镇市","丰镇市#150981");
		
		} else if(i == 10){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("乌兰浩特市","乌兰浩特市#152201");
			co[p][i][1] = new Option("阿尔山市","阿尔山市#152202");
			co[p][i][2] = new Option("科尔沁右翼前旗","科尔沁右翼前旗#152221");
			co[p][i][3] = new Option("科尔沁右翼中旗","科尔沁右翼中旗#152222");
			co[p][i][4] = new Option("扎赉特旗","扎赉特旗#152223");
			co[p][i][5] = new Option("突泉县","突泉县#152224");
		
		} else if(i == 11){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("二连浩特市","二连浩特市#152501");
			co[p][i][1] = new Option("锡林浩特市","锡林浩特市#152502");
			co[p][i][2] = new Option("阿巴嘎旗","阿巴嘎旗#152522");
			co[p][i][3] = new Option("苏尼特左旗","苏尼特左旗#152523");
			co[p][i][4] = new Option("苏尼特右旗","苏尼特右旗#152524");
			co[p][i][5] = new Option("东乌珠穆沁旗","东乌珠穆沁旗#152525");
			co[p][i][6] = new Option("西乌珠穆沁旗","西乌珠穆沁旗#152526");
			co[p][i][7] = new Option("太仆寺旗","太仆寺旗#152527");
			co[p][i][8] = new Option("镶黄旗","镶黄旗#152528");
			co[p][i][9] = new Option("正镶白旗","正镶白旗#152529");
			co[p][i][10] = new Option("正蓝旗","正蓝旗#152530");
			co[p][i][11] = new Option("多伦县","多伦县#152531");
		
		} else if(i == 12){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("阿拉善左旗","阿拉善左旗#152921");
			co[p][i][1] = new Option("阿拉善右旗","阿拉善右旗#152922");
			co[p][i][2] = new Option("额济纳旗","额济纳旗#152923");
		}
	
	}else if(p == 6){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("和平区","和平区#210102");
			co[p][i][1] = new Option("沈河区","沈河区#210103");
			co[p][i][2] = new Option("大东区","大东区#210104");
			co[p][i][3] = new Option("皇姑区","皇姑区#210105");
			co[p][i][4] = new Option("铁西区","铁西区#210106");
			co[p][i][5] = new Option("苏家屯区","苏家屯区#210111");
			co[p][i][6] = new Option("东陵区","东陵区#210112");
			co[p][i][7] = new Option("新城子区","新城子区#210113");
			co[p][i][8] = new Option("于洪区","于洪区#210114");
			co[p][i][9] = new Option("辽中县","辽中县#210122");
			co[p][i][10] = new Option("康平县","康平县#210123");
			co[p][i][11] = new Option("法库县","法库县#210124");
			co[p][i][12] = new Option("新民市","新民市#210181");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("中山区","中山区#210202");
			co[p][i][1] = new Option("西岗区","西岗区#210203");
			co[p][i][2] = new Option("沙河口区","沙河口区#210204");
			co[p][i][3] = new Option("甘井子区","甘井子区#210211");
			co[p][i][4] = new Option("旅顺口区","旅顺口区#210212");
			co[p][i][5] = new Option("金州区","金州区#210213");
			co[p][i][6] = new Option("长海县","长海县#210224");
			co[p][i][7] = new Option("瓦房店市","瓦房店市#210281");
			co[p][i][8] = new Option("普兰店市","普兰店市#210282");
			co[p][i][9] = new Option("庄河市","庄河市#210283");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("铁东区","铁东区#210302");
			co[p][i][1] = new Option("铁西区","铁西区#210303");
			co[p][i][2] = new Option("立山区","立山区#210304");
			co[p][i][3] = new Option("千山区","千山区#210311");
			co[p][i][4] = new Option("台安县","台安县#210321");
			co[p][i][5] = new Option("岫岩满族自治县","岫岩满族自治县#210323");
			co[p][i][6] = new Option("海城市","海城市#210381");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("新抚区","新抚区#210402");
			co[p][i][1] = new Option("东洲区","东洲区#210403");
			co[p][i][2] = new Option("望花区","望花区#210404");
			co[p][i][3] = new Option("顺城区","顺城区#210411");
			co[p][i][4] = new Option("抚顺县","抚顺县#210421");
			co[p][i][5] = new Option("新宾满族自治县","新宾满族自治县#210422");
			co[p][i][6] = new Option("清原满族自治县","清原满族自治县#210423");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("平山区","平山区#210502");
			co[p][i][1] = new Option("溪湖区","溪湖区#210503");
			co[p][i][2] = new Option("明山区","明山区#210504");
			co[p][i][3] = new Option("南芬区","南芬区#210505");
			co[p][i][4] = new Option("本溪满族自治县","本溪满族自治县#210521");
			co[p][i][5] = new Option("桓仁满族自治县","桓仁满族自治县#210522");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("元宝区","元宝区#210602");
			co[p][i][1] = new Option("振兴区","振兴区#210603");
			co[p][i][2] = new Option("振安区","振安区#210604");
			co[p][i][3] = new Option("宽甸满族自治县","宽甸满族自治县#210624");
			co[p][i][4] = new Option("东港市","东港市#210681");
			co[p][i][5] = new Option("凤城市","凤城市#210682");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("古塔区","古塔区#210702");
			co[p][i][1] = new Option("凌河区","凌河区#210703");
			co[p][i][2] = new Option("太和区","太和区#210711");
			co[p][i][3] = new Option("黑山县","黑山县#210726");
			co[p][i][4] = new Option("义县","义县#210727");
			co[p][i][5] = new Option("凌海市","凌海市#210781");
			co[p][i][6] = new Option("北宁市","北宁市#210782");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("站前区","站前区#210802");
			co[p][i][1] = new Option("西市区","西市区#210803");
			co[p][i][2] = new Option("鲅鱼圈区","鲅鱼圈区#210804");
			co[p][i][3] = new Option("老边区","老边区#210811");
			co[p][i][4] = new Option("盖州市","盖州市#210881");
			co[p][i][5] = new Option("大石桥市","大石桥市#210882");
		
		} else if(i == 9){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("海州区","海州区#210902");
			co[p][i][1] = new Option("新邱区","新邱区#210903");
			co[p][i][2] = new Option("太平区","太平区#210904");
			co[p][i][3] = new Option("清河门区","清河门区#210905");
			co[p][i][4] = new Option("细河区","细河区#210911");
			co[p][i][5] = new Option("阜新蒙古族自治县","阜新蒙古族自治县#210921");
			co[p][i][6] = new Option("彰武县","彰武县#210922");
		
		} else if(i == 10){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("白塔区","白塔区#211002");
			co[p][i][1] = new Option("文圣区","文圣区#211003");
			co[p][i][2] = new Option("宏伟区","宏伟区#211004");
			co[p][i][3] = new Option("弓长岭区","弓长岭区#211005");
			co[p][i][4] = new Option("太子河区","太子河区#211011");
			co[p][i][5] = new Option("辽阳县","辽阳县#211021");
			co[p][i][6] = new Option("灯塔市","灯塔市#211081");
		
		} else if(i == 11){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("双台子区","双台子区#211102");
			co[p][i][1] = new Option("兴隆台区","兴隆台区#211103");
			co[p][i][2] = new Option("大洼县","大洼县#211121");
			co[p][i][3] = new Option("盘山县","盘山县#211122");
		
		} else if(i == 12){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("银州区","银州区#211202");
			co[p][i][1] = new Option("清河区","清河区#211204");
			co[p][i][2] = new Option("铁岭县","铁岭县#211221");
			co[p][i][3] = new Option("西丰县","西丰县#211223");
			co[p][i][4] = new Option("昌图县","昌图县#211224");
			co[p][i][5] = new Option("调兵山市","调兵山市#211281");
			co[p][i][6] = new Option("开原市","开原市#211282");
		
		} else if(i == 13){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("双塔区","双塔区#211302");
			co[p][i][1] = new Option("龙城区","龙城区#211303");
			co[p][i][2] = new Option("朝阳县","朝阳县#211321");
			co[p][i][3] = new Option("建平县","建平县#211322");
			co[p][i][4] = new Option("喀喇沁左翼蒙古族自治县","喀喇沁左翼蒙古族自治县#211324");
			co[p][i][5] = new Option("北票市","北票市#211381");
			co[p][i][6] = new Option("凌源市","凌源市#211382");
		
		} else if(i == 14){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("连山区","连山区#211402");
			co[p][i][1] = new Option("龙港区","龙港区#211403");
			co[p][i][2] = new Option("南票区","南票区#211404");
			co[p][i][3] = new Option("绥中县","绥中县#211421");
			co[p][i][4] = new Option("建昌县","建昌县#211422");
			co[p][i][5] = new Option("兴城市","兴城市#211481");
		}
	
	}else if(p == 7){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("南关区","南关区#220102");
			co[p][i][1] = new Option("宽城区","宽城区#220103");
			co[p][i][2] = new Option("朝阳区","朝阳区#220104");
			co[p][i][3] = new Option("二道区","二道区#220105");
			co[p][i][4] = new Option("绿园区","绿园区#220106");
			co[p][i][5] = new Option("双阳区","双阳区#220112");
			co[p][i][6] = new Option("农安县","农安县#220122");
			co[p][i][7] = new Option("九台市","九台市#220181");
			co[p][i][8] = new Option("榆树市","榆树市#220182");
			co[p][i][9] = new Option("德惠市","德惠市#220183");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("昌邑区","昌邑区#220202");
			co[p][i][1] = new Option("龙潭区","龙潭区#220203");
			co[p][i][2] = new Option("船营区","船营区#220204");
			co[p][i][3] = new Option("丰满区","丰满区#220211");
			co[p][i][4] = new Option("永吉县","永吉县#220221");
			co[p][i][5] = new Option("蛟河市","蛟河市#220281");
			co[p][i][6] = new Option("桦甸市","桦甸市#220282");
			co[p][i][7] = new Option("舒兰市","舒兰市#220283");
			co[p][i][8] = new Option("磐石市","磐石市#220284");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("铁西区","铁西区#220302");
			co[p][i][1] = new Option("铁东区","铁东区#220303");
			co[p][i][2] = new Option("梨树县","梨树县#220322");
			co[p][i][3] = new Option("伊通满族自治县","伊通满族自治县#220323");
			co[p][i][4] = new Option("公主岭市","公主岭市#220381");
			co[p][i][5] = new Option("双辽市","双辽市#220382");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("龙山区","龙山区#220402");
			co[p][i][1] = new Option("西安区","西安区#220403");
			co[p][i][2] = new Option("东丰县","东丰县#220421");
			co[p][i][3] = new Option("东辽县","东辽县#220422");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("东昌区","东昌区#220502");
			co[p][i][1] = new Option("二道江区","二道江区#220503");
			co[p][i][2] = new Option("通化县","通化县#220521");
			co[p][i][3] = new Option("辉南县","辉南县#220523");
			co[p][i][4] = new Option("柳河县","柳河县#220524");
			co[p][i][5] = new Option("梅河口市","梅河口市#220581");
			co[p][i][6] = new Option("集安市","集安市#220582");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("八道江区","八道江区#220602");
			co[p][i][1] = new Option("抚松县","抚松县#220621");
			co[p][i][2] = new Option("靖宇县","靖宇县#220622");
			co[p][i][3] = new Option("长白朝鲜族自治县","长白朝鲜族自治县#220623");
			co[p][i][4] = new Option("江源县","江源县#220625");
			co[p][i][5] = new Option("临江市","临江市#220681");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("宁江区","宁江区#220702");
			co[p][i][1] = new Option("前郭尔罗斯蒙古族自治县","前郭尔罗斯蒙古族自治县#220721");
			co[p][i][2] = new Option("长岭县","长岭县#220722");
			co[p][i][3] = new Option("乾安县","乾安县#220723");
			co[p][i][4] = new Option("扶余县","扶余县#220724");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("洮北区","洮北区#220802");
			co[p][i][1] = new Option("镇赉县","镇赉县#220821");
			co[p][i][2] = new Option("通榆县","通榆县#220822");
			co[p][i][3] = new Option("洮南市","洮南市#220881");
			co[p][i][4] = new Option("大安市","大安市#220882");
		
		} else if(i == 9){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("延吉市","延吉市#222401");
			co[p][i][1] = new Option("图们市","图们市#222402");
			co[p][i][2] = new Option("敦化市","敦化市#222403");
			co[p][i][3] = new Option("珲春市","珲春市#222404");
			co[p][i][4] = new Option("龙井市","龙井市#222405");
			co[p][i][5] = new Option("和龙市","和龙市#222406");
			co[p][i][6] = new Option("汪清县","汪清县#222424");
			co[p][i][7] = new Option("安图县","安图县#222426");
		}
	
	}else if(p == 8){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("道里区","道里区#230102");
			co[p][i][1] = new Option("南岗区","南岗区#230103");
			co[p][i][2] = new Option("道外区","道外区#230104");
			co[p][i][3] = new Option("香坊区","香坊区#230106");
			co[p][i][4] = new Option("动力区","动力区#230107");
			co[p][i][5] = new Option("平房区","平房区#230108");
			co[p][i][6] = new Option("松北区","松北区#230109");
			co[p][i][7] = new Option("呼兰区","呼兰区#230111");
			co[p][i][8] = new Option("依兰县","依兰县#230123");
			co[p][i][9] = new Option("方正县","方正县#230124");
			co[p][i][10] = new Option("宾县","宾县#230125");
			co[p][i][11] = new Option("巴彦县","巴彦县#230126");
			co[p][i][12] = new Option("木兰县","木兰县#230127");
			co[p][i][13] = new Option("通河县","通河县#230128");
			co[p][i][14] = new Option("延寿县","延寿县#230129");
			co[p][i][15] = new Option("阿城市","阿城市#230181");
			co[p][i][16] = new Option("双城市","双城市#230182");
			co[p][i][17] = new Option("尚志市","尚志市#230183");
			co[p][i][18] = new Option("五常市","五常市#230184");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("龙沙区","龙沙区#230202");
			co[p][i][1] = new Option("建华区","建华区#230203");
			co[p][i][2] = new Option("铁锋区","铁锋区#230204");
			co[p][i][3] = new Option("昂昂溪区","昂昂溪区#230205");
			co[p][i][4] = new Option("富拉尔基区","富拉尔基区#230206");
			co[p][i][5] = new Option("碾子山区","碾子山区#230207");
			co[p][i][6] = new Option("梅里斯达斡尔族区","梅里斯达斡尔族区#230208");
			co[p][i][7] = new Option("龙江县","龙江县#230221");
			co[p][i][8] = new Option("依安县","依安县#230223");
			co[p][i][9] = new Option("泰来县","泰来县#230224");
			co[p][i][10] = new Option("甘南县","甘南县#230225");
			co[p][i][11] = new Option("富裕县","富裕县#230227");
			co[p][i][12] = new Option("克山县","克山县#230229");
			co[p][i][13] = new Option("克东县","克东县#230230");
			co[p][i][14] = new Option("拜泉县","拜泉县#230231");
			co[p][i][15] = new Option("讷河市","讷河市#230281");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("鸡冠区","鸡冠区#230302");
			co[p][i][1] = new Option("恒山区","恒山区#230303");
			co[p][i][2] = new Option("滴道区","滴道区#230304");
			co[p][i][3] = new Option("梨树区","梨树区#230305");
			co[p][i][4] = new Option("城子河区","城子河区#230306");
			co[p][i][5] = new Option("麻山区","麻山区#230307");
			co[p][i][6] = new Option("鸡东县","鸡东县#230321");
			co[p][i][7] = new Option("虎林市","虎林市#230381");
			co[p][i][8] = new Option("密山市","密山市#230382");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("向阳区","向阳区#230402");
			co[p][i][1] = new Option("工农区","工农区#230403");
			co[p][i][2] = new Option("南山区","南山区#230404");
			co[p][i][3] = new Option("兴安区","兴安区#230405");
			co[p][i][4] = new Option("东山区","东山区#230406");
			co[p][i][5] = new Option("兴山区","兴山区#230407");
			co[p][i][6] = new Option("萝北县","萝北县#230421");
			co[p][i][7] = new Option("绥滨县","绥滨县#230422");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("尖山区","尖山区#230502");
			co[p][i][1] = new Option("岭东区","岭东区#230503");
			co[p][i][2] = new Option("四方台区","四方台区#230505");
			co[p][i][3] = new Option("宝山区","宝山区#230506");
			co[p][i][4] = new Option("集贤县","集贤县#230521");
			co[p][i][5] = new Option("友谊县","友谊县#230522");
			co[p][i][6] = new Option("宝清县","宝清县#230523");
			co[p][i][7] = new Option("饶河县","饶河县#230524");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("萨尔图区","萨尔图区#230602");
			co[p][i][1] = new Option("龙凤区","龙凤区#230603");
			co[p][i][2] = new Option("让胡路区","让胡路区#230604");
			co[p][i][3] = new Option("红岗区","红岗区#230605");
			co[p][i][4] = new Option("大同区","大同区#230606");
			co[p][i][5] = new Option("肇州县","肇州县#230621");
			co[p][i][6] = new Option("肇源县","肇源县#230622");
			co[p][i][7] = new Option("林甸县","林甸县#230623");
			co[p][i][8] = new Option("杜尔伯特蒙古族自治县","杜尔伯特蒙古族自治县#230624");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("伊春区","伊春区#230702");
			co[p][i][1] = new Option("南岔区","南岔区#230703");
			co[p][i][2] = new Option("友好区","友好区#230704");
			co[p][i][3] = new Option("西林区","西林区#230705");
			co[p][i][4] = new Option("翠峦区","翠峦区#230706");
			co[p][i][5] = new Option("新青区","新青区#230707");
			co[p][i][6] = new Option("美溪区","美溪区#230708");
			co[p][i][7] = new Option("金山屯区","金山屯区#230709");
			co[p][i][8] = new Option("五营区","五营区#230710");
			co[p][i][9] = new Option("乌马河区","乌马河区#230711");
			co[p][i][10] = new Option("汤旺河区","汤旺河区#230712");
			co[p][i][11] = new Option("带岭区","带岭区#230713");
			co[p][i][12] = new Option("乌伊岭区","乌伊岭区#230714");
			co[p][i][13] = new Option("红星区","红星区#230715");
			co[p][i][14] = new Option("上甘岭区","上甘岭区#230716");
			co[p][i][15] = new Option("嘉荫县","嘉荫县#230722");
			co[p][i][16] = new Option("铁力市","铁力市#230781");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("永红区","永红区#230802");
			co[p][i][1] = new Option("向阳区","向阳区#230803");
			co[p][i][2] = new Option("前进区","前进区#230804");
			co[p][i][3] = new Option("东风区","东风区#230805");
			co[p][i][4] = new Option("桦南县","桦南县#230822");
			co[p][i][5] = new Option("桦川县","桦川县#230826");
			co[p][i][6] = new Option("汤原县","汤原县#230828");
			co[p][i][7] = new Option("抚远县","抚远县#230833");
			co[p][i][8] = new Option("同江市","同江市#230881");
			co[p][i][9] = new Option("富锦市","富锦市#230882");
		
		} else if(i == 9){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("新兴区","新兴区#230902");
			co[p][i][1] = new Option("桃山区","桃山区#230903");
			co[p][i][2] = new Option("茄子河区","茄子河区#230904");
			co[p][i][3] = new Option("勃利县","勃利县#230921");
		
		} else if(i == 10){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("东安区","东安区#231002");
			co[p][i][1] = new Option("阳明区","阳明区#231003");
			co[p][i][2] = new Option("爱民区","爱民区#231004");
			co[p][i][3] = new Option("西安区","西安区#231005");
			co[p][i][4] = new Option("东宁县","东宁县#231024");
			co[p][i][5] = new Option("林口县","林口县#231025");
			co[p][i][6] = new Option("绥芬河市","绥芬河市#231081");
			co[p][i][7] = new Option("海林市","海林市#231083");
			co[p][i][8] = new Option("宁安市","宁安市#231084");
			co[p][i][9] = new Option("穆棱市","穆棱市#231085");
		
		} else if(i == 11){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("爱辉区","爱辉区#231102");
			co[p][i][1] = new Option("嫩江县","嫩江县#231121");
			co[p][i][2] = new Option("逊克县","逊克县#231123");
			co[p][i][3] = new Option("孙吴县","孙吴县#231124");
			co[p][i][4] = new Option("北安市","北安市#231181");
			co[p][i][5] = new Option("五大连池市","五大连池市#231182");
		
		} else if(i == 12){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("北林区","北林区#231202");
			co[p][i][1] = new Option("望奎县","望奎县#231221");
			co[p][i][2] = new Option("兰西县","兰西县#231222");
			co[p][i][3] = new Option("青冈县","青冈县#231223");
			co[p][i][4] = new Option("庆安县","庆安县#231224");
			co[p][i][5] = new Option("明水县","明水县#231225");
			co[p][i][6] = new Option("绥棱县","绥棱县#231226");
			co[p][i][7] = new Option("安达市","安达市#231281");
			co[p][i][8] = new Option("肇东市","肇东市#231282");
			co[p][i][9] = new Option("海伦市","海伦市#231283");
		
		} else if(i == 13){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("呼玛县","呼玛县#232721");
			co[p][i][1] = new Option("塔河县","塔河县#232722");
			co[p][i][2] = new Option("漠河县","漠河县#232723");
			co[p][i][3] = new Option("加格达奇区","加格达奇区#232724");
		}
	
	}else if(p == 9){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("黄浦区","黄浦区#310101");
			co[p][i][1] = new Option("卢湾区","卢湾区#310103");
			co[p][i][2] = new Option("徐汇区","徐汇区#310104");
			co[p][i][3] = new Option("长宁区","长宁区#310105");
			co[p][i][4] = new Option("静安区","静安区#310106");
			co[p][i][5] = new Option("普陀区","普陀区#310107");
			co[p][i][6] = new Option("闸北区","闸北区#310108");
			co[p][i][7] = new Option("虹口区","虹口区#310109");
			co[p][i][8] = new Option("杨浦区","杨浦区#310110");
			co[p][i][9] = new Option("闵行区","闵行区#310112");
			co[p][i][10] = new Option("宝山区","宝山区#310113");
			co[p][i][11] = new Option("嘉定区","嘉定区#310114");
			co[p][i][12] = new Option("浦东新区","浦东新区#310115");
			co[p][i][13] = new Option("金山区","金山区#310116");
			co[p][i][14] = new Option("松江区","松江区#310117");
			co[p][i][15] = new Option("青浦区","青浦区#310118");
			co[p][i][16] = new Option("南汇区","南汇区#310119");
			co[p][i][17] = new Option("奉贤区","奉贤区#310120");
		}
	
	}else if(p == 10){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("玄武区","玄武区#320102");
			co[p][i][1] = new Option("白下区","白下区#320103");
			co[p][i][2] = new Option("秦淮区","秦淮区#320104");
			co[p][i][3] = new Option("建邺区","建邺区#320105");
			co[p][i][4] = new Option("鼓楼区","鼓楼区#320106");
			co[p][i][5] = new Option("下关区","下关区#320107");
			co[p][i][6] = new Option("浦口区","浦口区#320111");
			co[p][i][7] = new Option("栖霞区","栖霞区#320113");
			co[p][i][8] = new Option("雨花台区","雨花台区#320114");
			co[p][i][9] = new Option("江宁区","江宁区#320115");
			co[p][i][10] = new Option("六合区","六合区#320116");
			co[p][i][11] = new Option("溧水县","溧水县#320124");
			co[p][i][12] = new Option("高淳县","高淳县#320125");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("崇安区","崇安区#320202");
			co[p][i][1] = new Option("南长区","南长区#320203");
			co[p][i][2] = new Option("北塘区","北塘区#320204");
			co[p][i][3] = new Option("锡山区","锡山区#320205");
			co[p][i][4] = new Option("惠山区","惠山区#320206");
			co[p][i][5] = new Option("滨湖区","滨湖区#320211");
			co[p][i][6] = new Option("江阴市","江阴市#320281");
			co[p][i][7] = new Option("宜兴市","宜兴市#320282");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("鼓楼区","鼓楼区#320302");
			co[p][i][1] = new Option("云龙区","云龙区#320303");
			co[p][i][2] = new Option("九里区","九里区#320304");
			co[p][i][3] = new Option("贾汪区","贾汪区#320305");
			co[p][i][4] = new Option("泉山区","泉山区#320311");
			co[p][i][5] = new Option("丰县","丰县#320321");
			co[p][i][6] = new Option("沛县","沛县#320322");
			co[p][i][7] = new Option("铜山县","铜山县#320323");
			co[p][i][8] = new Option("睢宁县","睢宁县#320324");
			co[p][i][9] = new Option("新沂市","新沂市#320381");
			co[p][i][10] = new Option("邳州市","邳州市#320382");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("天宁区","天宁区#320402");
			co[p][i][1] = new Option("钟楼区","钟楼区#320404");
			co[p][i][2] = new Option("戚墅堰区","戚墅堰区#320405");
			co[p][i][3] = new Option("新北区","新北区#320411");
			co[p][i][4] = new Option("武进区","武进区#320412");
			co[p][i][5] = new Option("溧阳市","溧阳市#320481");
			co[p][i][6] = new Option("金坛市","金坛市#320482");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("沧浪区","沧浪区#320502");
			co[p][i][1] = new Option("平江区","平江区#320503");
			co[p][i][2] = new Option("金阊区","金阊区#320504");
			co[p][i][3] = new Option("虎丘区","虎丘区#320505");
			co[p][i][4] = new Option("吴中区","吴中区#320506");
			co[p][i][5] = new Option("相城区","相城区#320507");
			co[p][i][6] = new Option("常熟市","常熟市#320581");
			co[p][i][7] = new Option("张家港市","张家港市#320582");
			co[p][i][8] = new Option("昆山市","昆山市#320583");
			co[p][i][9] = new Option("吴江市","吴江市#320584");
			co[p][i][10] = new Option("太仓市","太仓市#320585");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("崇川区","崇川区#320602");
			co[p][i][1] = new Option("港闸区","港闸区#320611");
			co[p][i][2] = new Option("海安县","海安县#320621");
			co[p][i][3] = new Option("如东县","如东县#320623");
			co[p][i][4] = new Option("启东市","启东市#320681");
			co[p][i][5] = new Option("如皋市","如皋市#320682");
			co[p][i][6] = new Option("通州市","通州市#320683");
			co[p][i][7] = new Option("海门市","海门市#320684");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("连云区","连云区#320703");
			co[p][i][1] = new Option("新浦区","新浦区#320705");
			co[p][i][2] = new Option("海州区","海州区#320706");
			co[p][i][3] = new Option("赣榆县","赣榆县#320721");
			co[p][i][4] = new Option("东海县","东海县#320722");
			co[p][i][5] = new Option("灌云县","灌云县#320723");
			co[p][i][6] = new Option("灌南县","灌南县#320724");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("清河区","清河区#320802");
			co[p][i][1] = new Option("楚州区","楚州区#320803");
			co[p][i][2] = new Option("淮阴区","淮阴区#320804");
			co[p][i][3] = new Option("清浦区","清浦区#320811");
			co[p][i][4] = new Option("涟水县","涟水县#320826");
			co[p][i][5] = new Option("洪泽县","洪泽县#320829");
			co[p][i][6] = new Option("盱眙县","盱眙县#320830");
			co[p][i][7] = new Option("金湖县","金湖县#320831");
		
		} else if(i == 9){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("亭湖区","亭湖区#320902");
			co[p][i][1] = new Option("盐都区","盐都区#320903");
			co[p][i][2] = new Option("响水县","响水县#320921");
			co[p][i][3] = new Option("滨海县","滨海县#320922");
			co[p][i][4] = new Option("阜宁县","阜宁县#320923");
			co[p][i][5] = new Option("射阳县","射阳县#320924");
			co[p][i][6] = new Option("建湖县","建湖县#320925");
			co[p][i][7] = new Option("东台市","东台市#320981");
			co[p][i][8] = new Option("大丰市","大丰市#320982");
		
		} else if(i == 10){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("广陵区","广陵区#321002");
			co[p][i][1] = new Option("邗江区","邗江区#321003");
			co[p][i][2] = new Option("宝应县","宝应县#321023");
			co[p][i][3] = new Option("仪征市","仪征市#321081");
			co[p][i][4] = new Option("高邮市","高邮市#321084");
			co[p][i][5] = new Option("江都市","江都市#321088");
		
		} else if(i == 11){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("京口区","京口区#321102");
			co[p][i][1] = new Option("润州区","润州区#321111");
			co[p][i][2] = new Option("丹徒区","丹徒区#321112");
			co[p][i][3] = new Option("丹阳市","丹阳市#321181");
			co[p][i][4] = new Option("扬中市","扬中市#321182");
			co[p][i][5] = new Option("句容市","句容市#321183");
		
		} else if(i == 12){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("海陵区","海陵区#321202");
			co[p][i][1] = new Option("高港区","高港区#321203");
			co[p][i][2] = new Option("兴化市","兴化市#321281");
			co[p][i][3] = new Option("靖江市","靖江市#321282");
			co[p][i][4] = new Option("泰兴市","泰兴市#321283");
			co[p][i][5] = new Option("姜堰市","姜堰市#321284");
		
		} else if(i == 13){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("宿城区","宿城区#321302");
			co[p][i][1] = new Option("宿豫区","宿豫区#321311");
			co[p][i][2] = new Option("沭阳县","沭阳县#321322");
			co[p][i][3] = new Option("泗阳县","泗阳县#321323");
			co[p][i][4] = new Option("泗洪县","泗洪县#321324");
		}
	
	}else if(p == 11){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("上城区","上城区#330102");
			co[p][i][1] = new Option("下城区","下城区#330103");
			co[p][i][2] = new Option("江干区","江干区#330104");
			co[p][i][3] = new Option("拱墅区","拱墅区#330105");
			co[p][i][4] = new Option("西湖区","西湖区#330106");
			co[p][i][5] = new Option("滨江区","滨江区#330108");
			co[p][i][6] = new Option("萧山区","萧山区#330109");
			co[p][i][7] = new Option("余杭区","余杭区#330110");
			co[p][i][8] = new Option("桐庐县","桐庐县#330122");
			co[p][i][9] = new Option("淳安县","淳安县#330127");
			co[p][i][10] = new Option("建德市","建德市#330182");
			co[p][i][11] = new Option("富阳市","富阳市#330183");
			co[p][i][12] = new Option("临安市","临安市#330185");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("海曙区","海曙区#330203");
			co[p][i][1] = new Option("江东区","江东区#330204");
			co[p][i][2] = new Option("江北区","江北区#330205");
			co[p][i][3] = new Option("北仑区","北仑区#330206");
			co[p][i][4] = new Option("镇海区","镇海区#330211");
			co[p][i][5] = new Option("鄞州区","鄞州区#330212");
			co[p][i][6] = new Option("象山县","象山县#330225");
			co[p][i][7] = new Option("宁海县","宁海县#330226");
			co[p][i][8] = new Option("余姚市","余姚市#330281");
			co[p][i][9] = new Option("慈溪市","慈溪市#330282");
			co[p][i][10] = new Option("奉化市","奉化市#330283");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("鹿城区","鹿城区#330302");
			co[p][i][1] = new Option("龙湾区","龙湾区#330303");
			co[p][i][2] = new Option("瓯海区","瓯海区#330304");
			co[p][i][3] = new Option("洞头县","洞头县#330322");
			co[p][i][4] = new Option("永嘉县","永嘉县#330324");
			co[p][i][5] = new Option("平阳县","平阳县#330326");
			co[p][i][6] = new Option("苍南县","苍南县#330327");
			co[p][i][7] = new Option("文成县","文成县#330328");
			co[p][i][8] = new Option("泰顺县","泰顺县#330329");
			co[p][i][9] = new Option("瑞安市","瑞安市#330381");
			co[p][i][10] = new Option("乐清市","乐清市#330382");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("秀城区","秀城区#330402");
			co[p][i][1] = new Option("秀洲区","秀洲区#330411");
			co[p][i][2] = new Option("嘉善县","嘉善县#330421");
			co[p][i][3] = new Option("海盐县","海盐县#330424");
			co[p][i][4] = new Option("海宁市","海宁市#330481");
			co[p][i][5] = new Option("平湖市","平湖市#330482");
			co[p][i][6] = new Option("桐乡市","桐乡市#330483");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("吴兴区","吴兴区#330502");
			co[p][i][1] = new Option("南浔区","南浔区#330503");
			co[p][i][2] = new Option("德清县","德清县#330521");
			co[p][i][3] = new Option("长兴县","长兴县#330522");
			co[p][i][4] = new Option("安吉县","安吉县#330523");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("越城区","越城区#330602");
			co[p][i][1] = new Option("绍兴县","绍兴县#330621");
			co[p][i][2] = new Option("新昌县","新昌县#330624");
			co[p][i][3] = new Option("诸暨市","诸暨市#330681");
			co[p][i][4] = new Option("上虞市","上虞市#330682");
			co[p][i][5] = new Option("嵊州市","嵊州市#330683");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("婺城区","婺城区#330702");
			co[p][i][1] = new Option("金东区","金东区#330703");
			co[p][i][2] = new Option("武义县","武义县#330723");
			co[p][i][3] = new Option("浦江县","浦江县#330726");
			co[p][i][4] = new Option("磐安县","磐安县#330727");
			co[p][i][5] = new Option("兰溪市","兰溪市#330781");
			co[p][i][6] = new Option("义乌市","义乌市#330782");
			co[p][i][7] = new Option("东阳市","东阳市#330783");
			co[p][i][8] = new Option("永康市","永康市#330784");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("柯城区","柯城区#330802");
			co[p][i][1] = new Option("衢江区","衢江区#330803");
			co[p][i][2] = new Option("常山县","常山县#330822");
			co[p][i][3] = new Option("开化县","开化县#330824");
			co[p][i][4] = new Option("龙游县","龙游县#330825");
			co[p][i][5] = new Option("江山市","江山市#330881");
		
		} else if(i == 9){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("定海区","定海区#330902");
			co[p][i][1] = new Option("普陀区","普陀区#330903");
			co[p][i][2] = new Option("岱山县","岱山县#330921");
			co[p][i][3] = new Option("嵊泗县","嵊泗县#330922");
		
		} else if(i == 10){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("椒江区","椒江区#331002");
			co[p][i][1] = new Option("黄岩区","黄岩区#331003");
			co[p][i][2] = new Option("路桥区","路桥区#331004");
			co[p][i][3] = new Option("玉环县","玉环县#331021");
			co[p][i][4] = new Option("三门县","三门县#331022");
			co[p][i][5] = new Option("天台县","天台县#331023");
			co[p][i][6] = new Option("仙居县","仙居县#331024");
			co[p][i][7] = new Option("温岭市","温岭市#331081");
			co[p][i][8] = new Option("临海市","临海市#331082");
		
		} else if(i == 11){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("莲都区","莲都区#331102");
			co[p][i][1] = new Option("青田县","青田县#331121");
			co[p][i][2] = new Option("缙云县","缙云县#331122");
			co[p][i][3] = new Option("遂昌县","遂昌县#331123");
			co[p][i][4] = new Option("松阳县","松阳县#331124");
			co[p][i][5] = new Option("云和县","云和县#331125");
			co[p][i][6] = new Option("庆元县","庆元县#331126");
			co[p][i][7] = new Option("景宁畲族自治县","景宁畲族自治县#331127");
			co[p][i][8] = new Option("龙泉市","龙泉市#331181");
		}
	
	}else if(p == 12){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("瑶海区","瑶海区#340102");
			co[p][i][1] = new Option("庐阳区","庐阳区#340103");
			co[p][i][2] = new Option("蜀山区","蜀山区#340104");
			co[p][i][3] = new Option("包河区","包河区#340111");
			co[p][i][4] = new Option("长丰县","长丰县#340121");
			co[p][i][5] = new Option("肥东县","肥东县#340122");
			co[p][i][6] = new Option("肥西县","肥西县#340123");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("镜湖区","镜湖区#340202");
			co[p][i][1] = new Option("马塘区","马塘区#340203");
			co[p][i][2] = new Option("新芜区","新芜区#340204");
			co[p][i][3] = new Option("鸠江区","鸠江区#340207");
			co[p][i][4] = new Option("芜湖县","芜湖县#340221");
			co[p][i][5] = new Option("繁昌县","繁昌县#340222");
			co[p][i][6] = new Option("南陵县","南陵县#340223");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("龙子湖区","龙子湖区#340302");
			co[p][i][1] = new Option("蚌山区","蚌山区#340303");
			co[p][i][2] = new Option("禹会区","禹会区#340304");
			co[p][i][3] = new Option("淮上区","淮上区#340311");
			co[p][i][4] = new Option("怀远县","怀远县#340321");
			co[p][i][5] = new Option("五河县","五河县#340322");
			co[p][i][6] = new Option("固镇县","固镇县#340323");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("大通区","大通区#340402");
			co[p][i][1] = new Option("田家庵区","田家庵区#340403");
			co[p][i][2] = new Option("谢家集区","谢家集区#340404");
			co[p][i][3] = new Option("八公山区","八公山区#340405");
			co[p][i][4] = new Option("潘集区","潘集区#340406");
			co[p][i][5] = new Option("凤台县","凤台县#340421");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("金家庄区","金家庄区#340502");
			co[p][i][1] = new Option("花山区","花山区#340503");
			co[p][i][2] = new Option("雨山区","雨山区#340504");
			co[p][i][3] = new Option("当涂县","当涂县#340521");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("杜集区","杜集区#340602");
			co[p][i][1] = new Option("相山区","相山区#340603");
			co[p][i][2] = new Option("烈山区","烈山区#340604");
			co[p][i][3] = new Option("濉溪县","濉溪县#340621");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("铜官山区","铜官山区#340702");
			co[p][i][1] = new Option("狮子山区","狮子山区#340703");
			co[p][i][2] = new Option("铜陵县","铜陵县#340721");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("迎江区","迎江区#340802");
			co[p][i][1] = new Option("大观区","大观区#340803");
			co[p][i][2] = new Option("怀宁县","怀宁县#340822");
			co[p][i][3] = new Option("枞阳县","枞阳县#340823");
			co[p][i][4] = new Option("潜山县","潜山县#340824");
			co[p][i][5] = new Option("太湖县","太湖县#340825");
			co[p][i][6] = new Option("宿松县","宿松县#340826");
			co[p][i][7] = new Option("望江县","望江县#340827");
			co[p][i][8] = new Option("岳西县","岳西县#340828");
			co[p][i][9] = new Option("桐城市","桐城市#340881");
		
		} else if(i == 9){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("屯溪区","屯溪区#341002");
			co[p][i][1] = new Option("黄山区","黄山区#341003");
			co[p][i][2] = new Option("徽州区","徽州区#341004");
			co[p][i][3] = new Option("歙县","歙县#341021");
			co[p][i][4] = new Option("休宁县","休宁县#341022");
			co[p][i][5] = new Option("黟县","黟县#341023");
			co[p][i][6] = new Option("祁门县","祁门县#341024");
		
		} else if(i == 10){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("琅琊区","琅琊区#341102");
			co[p][i][1] = new Option("南谯区","南谯区#341103");
			co[p][i][2] = new Option("来安县","来安县#341122");
			co[p][i][3] = new Option("全椒县","全椒县#341124");
			co[p][i][4] = new Option("定远县","定远县#341125");
			co[p][i][5] = new Option("凤阳县","凤阳县#341126");
			co[p][i][6] = new Option("天长市","天长市#341181");
			co[p][i][7] = new Option("明光市","明光市#341182");
		
		} else if(i == 11){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("颍州区","颍州区#341202");
			co[p][i][1] = new Option("颍东区","颍东区#341203");
			co[p][i][2] = new Option("颍泉区","颍泉区#341204");
			co[p][i][3] = new Option("临泉县","临泉县#341221");
			co[p][i][4] = new Option("太和县","太和县#341222");
			co[p][i][5] = new Option("阜南县","阜南县#341225");
			co[p][i][6] = new Option("颍上县","颍上县#341226");
			co[p][i][7] = new Option("界首市","界首市#341282");
		
		} else if(i == 12){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("墉桥区","墉桥区#341302");
			co[p][i][1] = new Option("砀山县","砀山县#341321");
			co[p][i][2] = new Option("萧县","萧县#341322");
			co[p][i][3] = new Option("灵璧县","灵璧县#341323");
			co[p][i][4] = new Option("泗县","泗县#341324");
		
		} else if(i == 13){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("居巢区","居巢区#341402");
			co[p][i][1] = new Option("庐江县","庐江县#341421");
			co[p][i][2] = new Option("无为县","无为县#341422");
			co[p][i][3] = new Option("含山县","含山县#341423");
			co[p][i][4] = new Option("和县","和县#341424");
		
		} else if(i == 14){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("金安区","金安区#341502");
			co[p][i][1] = new Option("裕安区","裕安区#341503");
			co[p][i][2] = new Option("寿县","寿县#341521");
			co[p][i][3] = new Option("霍邱县","霍邱县#341522");
			co[p][i][4] = new Option("舒城县","舒城县#341523");
			co[p][i][5] = new Option("金寨县","金寨县#341524");
			co[p][i][6] = new Option("霍山县","霍山县#341525");
		
		} else if(i == 15){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("谯城区","谯城区#341602");
			co[p][i][1] = new Option("涡阳县","涡阳县#341621");
			co[p][i][2] = new Option("蒙城县","蒙城县#341622");
			co[p][i][3] = new Option("利辛县","利辛县#341623");
		
		} else if(i == 16){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("贵池区","贵池区#341702");
			co[p][i][1] = new Option("东至县","东至县#341721");
			co[p][i][2] = new Option("石台县","石台县#341722");
			co[p][i][3] = new Option("青阳县","青阳县#341723");
		
		} else if(i == 17){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("宣州区","宣州区#341802");
			co[p][i][1] = new Option("郎溪县","郎溪县#341821");
			co[p][i][2] = new Option("广德县","广德县#341822");
			co[p][i][3] = new Option("泾县","泾县#341823");
			co[p][i][4] = new Option("绩溪县","绩溪县#341824");
			co[p][i][5] = new Option("旌德县","旌德县#341825");
			co[p][i][6] = new Option("宁国市","宁国市#341881");
		}
	
	}else if(p == 13){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("鼓楼区","鼓楼区#350102");
			co[p][i][1] = new Option("台江区","台江区#350103");
			co[p][i][2] = new Option("仓山区","仓山区#350104");
			co[p][i][3] = new Option("马尾区","马尾区#350105");
			co[p][i][4] = new Option("晋安区","晋安区#350111");
			co[p][i][5] = new Option("闽侯县","闽侯县#350121");
			co[p][i][6] = new Option("连江县","连江县#350122");
			co[p][i][7] = new Option("罗源县","罗源县#350123");
			co[p][i][8] = new Option("闽清县","闽清县#350124");
			co[p][i][9] = new Option("永泰县","永泰县#350125");
			co[p][i][10] = new Option("平潭县","平潭县#350128");
			co[p][i][11] = new Option("福清市","福清市#350181");
			co[p][i][12] = new Option("长乐市","长乐市#350182");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("思明区","思明区#350203");
			co[p][i][1] = new Option("海沧区","海沧区#350205");
			co[p][i][2] = new Option("湖里区","湖里区#350206");
			co[p][i][3] = new Option("集美区","集美区#350211");
			co[p][i][4] = new Option("同安区","同安区#350212");
			co[p][i][5] = new Option("翔安区","翔安区#350213");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("城厢区","城厢区#350302");
			co[p][i][1] = new Option("涵江区","涵江区#350303");
			co[p][i][2] = new Option("荔城区","荔城区#350304");
			co[p][i][3] = new Option("秀屿区","秀屿区#350305");
			co[p][i][4] = new Option("仙游县","仙游县#350322");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("梅列区","梅列区#350402");
			co[p][i][1] = new Option("三元区","三元区#350403");
			co[p][i][2] = new Option("明溪县","明溪县#350421");
			co[p][i][3] = new Option("清流县","清流县#350423");
			co[p][i][4] = new Option("宁化县","宁化县#350424");
			co[p][i][5] = new Option("大田县","大田县#350425");
			co[p][i][6] = new Option("尤溪县","尤溪县#350426");
			co[p][i][7] = new Option("沙县","沙县#350427");
			co[p][i][8] = new Option("将乐县","将乐县#350428");
			co[p][i][9] = new Option("泰宁县","泰宁县#350429");
			co[p][i][10] = new Option("建宁县","建宁县#350430");
			co[p][i][11] = new Option("永安市","永安市#350481");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("鲤城区","鲤城区#350502");
			co[p][i][1] = new Option("丰泽区","丰泽区#350503");
			co[p][i][2] = new Option("洛江区","洛江区#350504");
			co[p][i][3] = new Option("泉港区","泉港区#350505");
			co[p][i][4] = new Option("惠安县","惠安县#350521");
			co[p][i][5] = new Option("安溪县","安溪县#350524");
			co[p][i][6] = new Option("永春县","永春县#350525");
			co[p][i][7] = new Option("德化县","德化县#350526");
			co[p][i][8] = new Option("金门县","金门县#350527");
			co[p][i][9] = new Option("石狮市","石狮市#350581");
			co[p][i][10] = new Option("晋江市","晋江市#350582");
			co[p][i][11] = new Option("南安市","南安市#350583");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("芗城区","芗城区#350602");
			co[p][i][1] = new Option("龙文区","龙文区#350603");
			co[p][i][2] = new Option("云霄县","云霄县#350622");
			co[p][i][3] = new Option("漳浦县","漳浦县#350623");
			co[p][i][4] = new Option("诏安县","诏安县#350624");
			co[p][i][5] = new Option("长泰县","长泰县#350625");
			co[p][i][6] = new Option("东山县","东山县#350626");
			co[p][i][7] = new Option("南靖县","南靖县#350627");
			co[p][i][8] = new Option("平和县","平和县#350628");
			co[p][i][9] = new Option("华安县","华安县#350629");
			co[p][i][10] = new Option("龙海市","龙海市#350681");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("延平区","延平区#350702");
			co[p][i][1] = new Option("顺昌县","顺昌县#350721");
			co[p][i][2] = new Option("浦城县","浦城县#350722");
			co[p][i][3] = new Option("光泽县","光泽县#350723");
			co[p][i][4] = new Option("松溪县","松溪县#350724");
			co[p][i][5] = new Option("政和县","政和县#350725");
			co[p][i][6] = new Option("邵武市","邵武市#350781");
			co[p][i][7] = new Option("武夷山市","武夷山市#350782");
			co[p][i][8] = new Option("建瓯市","建瓯市#350783");
			co[p][i][9] = new Option("建阳市","建阳市#350784");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("新罗区","新罗区#350802");
			co[p][i][1] = new Option("长汀县","长汀县#350821");
			co[p][i][2] = new Option("永定县","永定县#350822");
			co[p][i][3] = new Option("上杭县","上杭县#350823");
			co[p][i][4] = new Option("武平县","武平县#350824");
			co[p][i][5] = new Option("连城县","连城县#350825");
			co[p][i][6] = new Option("漳平市","漳平市#350881");
		
		} else if(i == 9){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("蕉城区","蕉城区#350902");
			co[p][i][1] = new Option("霞浦县","霞浦县#350921");
			co[p][i][2] = new Option("古田县","古田县#350922");
			co[p][i][3] = new Option("屏南县","屏南县#350923");
			co[p][i][4] = new Option("寿宁县","寿宁县#350924");
			co[p][i][5] = new Option("周宁县","周宁县#350925");
			co[p][i][6] = new Option("柘荣县","柘荣县#350926");
			co[p][i][7] = new Option("福安市","福安市#350981");
			co[p][i][8] = new Option("福鼎市","福鼎市#350982");
		}
	
	}else if(p == 14){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("东湖区","东湖区#360102");
			co[p][i][1] = new Option("西湖区","西湖区#360103");
			co[p][i][2] = new Option("青云谱区","青云谱区#360104");
			co[p][i][3] = new Option("湾里区","湾里区#360105");
			co[p][i][4] = new Option("青山湖区","青山湖区#360111");
			co[p][i][5] = new Option("南昌县","南昌县#360121");
			co[p][i][6] = new Option("新建县","新建县#360122");
			co[p][i][7] = new Option("安义县","安义县#360123");
			co[p][i][8] = new Option("进贤县","进贤县#360124");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("昌江区","昌江区#360202");
			co[p][i][1] = new Option("珠山区","珠山区#360203");
			co[p][i][2] = new Option("浮梁县","浮梁县#360222");
			co[p][i][3] = new Option("乐平市","乐平市#360281");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("安源区","安源区#360302");
			co[p][i][1] = new Option("湘东区","湘东区#360313");
			co[p][i][2] = new Option("莲花县","莲花县#360321");
			co[p][i][3] = new Option("上栗县","上栗县#360322");
			co[p][i][4] = new Option("芦溪县","芦溪县#360323");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("庐山区","庐山区#360402");
			co[p][i][1] = new Option("浔阳区","浔阳区#360403");
			co[p][i][2] = new Option("九江县","九江县#360421");
			co[p][i][3] = new Option("武宁县","武宁县#360423");
			co[p][i][4] = new Option("修水县","修水县#360424");
			co[p][i][5] = new Option("永修县","永修县#360425");
			co[p][i][6] = new Option("德安县","德安县#360426");
			co[p][i][7] = new Option("星子县","星子县#360427");
			co[p][i][8] = new Option("都昌县","都昌县#360428");
			co[p][i][9] = new Option("湖口县","湖口县#360429");
			co[p][i][10] = new Option("彭泽县","彭泽县#360430");
			co[p][i][11] = new Option("瑞昌市","瑞昌市#360481");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("渝水区","渝水区#360502");
			co[p][i][1] = new Option("分宜县","分宜县#360521");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("月湖区","月湖区#360602");
			co[p][i][1] = new Option("余江县","余江县#360622");
			co[p][i][2] = new Option("贵溪市","贵溪市#360681");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("章贡区","章贡区#360702");
			co[p][i][1] = new Option("赣县","赣县#360721");
			co[p][i][2] = new Option("信丰县","信丰县#360722");
			co[p][i][3] = new Option("大余县","大余县#360723");
			co[p][i][4] = new Option("上犹县","上犹县#360724");
			co[p][i][5] = new Option("崇义县","崇义县#360725");
			co[p][i][6] = new Option("安远县","安远县#360726");
			co[p][i][7] = new Option("龙南县","龙南县#360727");
			co[p][i][8] = new Option("定南县","定南县#360728");
			co[p][i][9] = new Option("全南县","全南县#360729");
			co[p][i][10] = new Option("宁都县","宁都县#360730");
			co[p][i][11] = new Option("于都县","于都县#360731");
			co[p][i][12] = new Option("兴国县","兴国县#360732");
			co[p][i][13] = new Option("会昌县","会昌县#360733");
			co[p][i][14] = new Option("寻乌县","寻乌县#360734");
			co[p][i][15] = new Option("石城县","石城县#360735");
			co[p][i][16] = new Option("瑞金市","瑞金市#360781");
			co[p][i][17] = new Option("南康市","南康市#360782");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("吉州区","吉州区#360802");
			co[p][i][1] = new Option("青原区","青原区#360803");
			co[p][i][2] = new Option("吉安县","吉安县#360821");
			co[p][i][3] = new Option("吉水县","吉水县#360822");
			co[p][i][4] = new Option("峡江县","峡江县#360823");
			co[p][i][5] = new Option("新干县","新干县#360824");
			co[p][i][6] = new Option("永丰县","永丰县#360825");
			co[p][i][7] = new Option("泰和县","泰和县#360826");
			co[p][i][8] = new Option("遂川县","遂川县#360827");
			co[p][i][9] = new Option("万安县","万安县#360828");
			co[p][i][10] = new Option("安福县","安福县#360829");
			co[p][i][11] = new Option("永新县","永新县#360830");
			co[p][i][12] = new Option("井冈山市","井冈山市#360881");
		
		} else if(i == 9){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("袁州区","袁州区#360902");
			co[p][i][1] = new Option("奉新县","奉新县#360921");
			co[p][i][2] = new Option("万载县","万载县#360922");
			co[p][i][3] = new Option("上高县","上高县#360923");
			co[p][i][4] = new Option("宜丰县","宜丰县#360924");
			co[p][i][5] = new Option("靖安县","靖安县#360925");
			co[p][i][6] = new Option("铜鼓县","铜鼓县#360926");
			co[p][i][7] = new Option("丰城市","丰城市#360981");
			co[p][i][8] = new Option("樟树市","樟树市#360982");
			co[p][i][9] = new Option("高安市","高安市#360983");
		
		} else if(i == 10){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("临川区","临川区#361002");
			co[p][i][1] = new Option("南城县","南城县#361021");
			co[p][i][2] = new Option("黎川县","黎川县#361022");
			co[p][i][3] = new Option("南丰县","南丰县#361023");
			co[p][i][4] = new Option("崇仁县","崇仁县#361024");
			co[p][i][5] = new Option("乐安县","乐安县#361025");
			co[p][i][6] = new Option("宜黄县","宜黄县#361026");
			co[p][i][7] = new Option("金溪县","金溪县#361027");
			co[p][i][8] = new Option("资溪县","资溪县#361028");
			co[p][i][9] = new Option("东乡县","东乡县#361029");
			co[p][i][10] = new Option("广昌县","广昌县#361030");
		
		} else if(i == 11){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("信州区","信州区#361102");
			co[p][i][1] = new Option("上饶县","上饶县#361121");
			co[p][i][2] = new Option("广丰县","广丰县#361122");
			co[p][i][3] = new Option("玉山县","玉山县#361123");
			co[p][i][4] = new Option("铅山县","铅山县#361124");
			co[p][i][5] = new Option("横峰县","横峰县#361125");
			co[p][i][6] = new Option("弋阳县","弋阳县#361126");
			co[p][i][7] = new Option("余干县","余干县#361127");
			co[p][i][8] = new Option("鄱阳县","鄱阳县#361128");
			co[p][i][9] = new Option("万年县","万年县#361129");
			co[p][i][10] = new Option("婺源县","婺源县#361130");
			co[p][i][11] = new Option("德兴市","德兴市#361181");
		}
	
	}else if(p == 15){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("历下区","历下区#370102");
			co[p][i][1] = new Option("槐荫区","槐荫区#370104");
			co[p][i][2] = new Option("天桥区","天桥区#370105");
			co[p][i][3] = new Option("历城区","历城区#370112");
			co[p][i][4] = new Option("长清区","长清区#370113");
			co[p][i][5] = new Option("平阴县","平阴县#370124");
			co[p][i][6] = new Option("济阳县","济阳县#370125");
			co[p][i][7] = new Option("商河县","商河县#370126");
			co[p][i][8] = new Option("章丘市","章丘市#370181");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("市南区","市南区#370202");
			co[p][i][1] = new Option("市北区","市北区#370203");
			co[p][i][2] = new Option("四方区","四方区#370205");
			co[p][i][3] = new Option("黄岛区","黄岛区#370211");
			co[p][i][4] = new Option("崂山区","崂山区#370212");
			co[p][i][5] = new Option("李沧区","李沧区#370213");
			co[p][i][6] = new Option("城阳区","城阳区#370214");
			co[p][i][7] = new Option("胶州市","胶州市#370281");
			co[p][i][8] = new Option("即墨市","即墨市#370282");
			co[p][i][9] = new Option("平度市","平度市#370283");
			co[p][i][10] = new Option("胶南市","胶南市#370284");
			co[p][i][11] = new Option("莱西市","莱西市#370285");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("淄川区","淄川区#370302");
			co[p][i][1] = new Option("张店区","张店区#370303");
			co[p][i][2] = new Option("博山区","博山区#370304");
			co[p][i][3] = new Option("临淄区","临淄区#370305");
			co[p][i][4] = new Option("周村区","周村区#370306");
			co[p][i][5] = new Option("桓台县","桓台县#370321");
			co[p][i][6] = new Option("高青县","高青县#370322");
			co[p][i][7] = new Option("沂源县","沂源县#370323");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("薛城区","薛城区#370403");
			co[p][i][1] = new Option("峄城区","峄城区#370404");
			co[p][i][2] = new Option("台儿庄区","台儿庄区#370405");
			co[p][i][3] = new Option("山亭区","山亭区#370406");
			co[p][i][4] = new Option("滕州市","滕州市#370481");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("东营区","东营区#370502");
			co[p][i][1] = new Option("河口区","河口区#370503");
			co[p][i][2] = new Option("垦利县","垦利县#370521");
			co[p][i][3] = new Option("利津县","利津县#370522");
			co[p][i][4] = new Option("广饶县","广饶县#370523");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("芝罘区","芝罘区#370602");
			co[p][i][1] = new Option("福山区","福山区#370611");
			co[p][i][2] = new Option("牟平区","牟平区#370612");
			co[p][i][3] = new Option("莱山区","莱山区#370613");
			co[p][i][4] = new Option("长岛县","长岛县#370634");
			co[p][i][5] = new Option("龙口市","龙口市#370681");
			co[p][i][6] = new Option("莱阳市","莱阳市#370682");
			co[p][i][7] = new Option("莱州市","莱州市#370683");
			co[p][i][8] = new Option("蓬莱市","蓬莱市#370684");
			co[p][i][9] = new Option("招远市","招远市#370685");
			co[p][i][10] = new Option("栖霞市","栖霞市#370686");
			co[p][i][11] = new Option("海阳市","海阳市#370687");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("潍城区","潍城区#370702");
			co[p][i][1] = new Option("寒亭区","寒亭区#370703");
			co[p][i][2] = new Option("坊子区","坊子区#370704");
			co[p][i][3] = new Option("奎文区","奎文区#370705");
			co[p][i][4] = new Option("临朐县","临朐县#370724");
			co[p][i][5] = new Option("昌乐县","昌乐县#370725");
			co[p][i][6] = new Option("青州市","青州市#370781");
			co[p][i][7] = new Option("诸城市","诸城市#370782");
			co[p][i][8] = new Option("寿光市","寿光市#370783");
			co[p][i][9] = new Option("安丘市","安丘市#370784");
			co[p][i][10] = new Option("高密市","高密市#370785");
			co[p][i][11] = new Option("昌邑市","昌邑市#370786");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("任城区","任城区#370811");
			co[p][i][1] = new Option("微山县","微山县#370826");
			co[p][i][2] = new Option("鱼台县","鱼台县#370827");
			co[p][i][3] = new Option("金乡县","金乡县#370828");
			co[p][i][4] = new Option("嘉祥县","嘉祥县#370829");
			co[p][i][5] = new Option("汶上县","汶上县#370830");
			co[p][i][6] = new Option("泗水县","泗水县#370831");
			co[p][i][7] = new Option("梁山县","梁山县#370832");
			co[p][i][8] = new Option("曲阜市","曲阜市#370881");
			co[p][i][9] = new Option("兖州市","兖州市#370882");
			co[p][i][10] = new Option("邹城市","邹城市#370883");
		
		} else if(i == 9){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("泰山区","泰山区#370902");
			co[p][i][1] = new Option("岱岳区","岱岳区#370903");
			co[p][i][2] = new Option("宁阳县","宁阳县#370921");
			co[p][i][3] = new Option("东平县","东平县#370923");
			co[p][i][4] = new Option("新泰市","新泰市#370982");
			co[p][i][5] = new Option("肥城市","肥城市#370983");
		
		} else if(i == 10){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("环翠区","环翠区#371002");
			co[p][i][1] = new Option("文登市","文登市#371081");
			co[p][i][2] = new Option("荣成市","荣成市#371082");
			co[p][i][3] = new Option("乳山市","乳山市#371083");
		
		} else if(i == 11){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("东港区","东港区#371102");
			co[p][i][1] = new Option("岚山区","岚山区#371103");
			co[p][i][2] = new Option("五莲县","五莲县#371121");
			co[p][i][3] = new Option("莒县","莒县#371122");
		
		} else if(i == 12){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("莱城区","莱城区#371202");
			co[p][i][1] = new Option("钢城区","钢城区#371203");
		
		} else if(i == 13){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("兰山区","兰山区#371302");
			co[p][i][1] = new Option("罗庄区","罗庄区#371311");
			co[p][i][2] = new Option("河东区","河东区#371312");
			co[p][i][3] = new Option("沂南县","沂南县#371321");
			co[p][i][4] = new Option("郯城县","郯城县#371322");
			co[p][i][5] = new Option("沂水县","沂水县#371323");
			co[p][i][6] = new Option("苍山县","苍山县#371324");
			co[p][i][7] = new Option("费县","费县#371325");
			co[p][i][8] = new Option("平邑县","平邑县#371326");
			co[p][i][9] = new Option("莒南县","莒南县#371327");
			co[p][i][10] = new Option("蒙阴县","蒙阴县#371328");
			co[p][i][11] = new Option("临沭县","临沭县#371329");
		
		} else if(i == 14){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("德城区","德城区#371402");
			co[p][i][1] = new Option("陵县","陵县#371421");
			co[p][i][2] = new Option("宁津县","宁津县#371422");
			co[p][i][3] = new Option("庆云县","庆云县#371423");
			co[p][i][4] = new Option("临邑县","临邑县#371424");
			co[p][i][5] = new Option("齐河县","齐河县#371425");
			co[p][i][6] = new Option("平原县","平原县#371426");
			co[p][i][7] = new Option("夏津县","夏津县#371427");
			co[p][i][8] = new Option("武城县","武城县#371428");
			co[p][i][9] = new Option("乐陵市","乐陵市#371481");
			co[p][i][10] = new Option("禹城市","禹城市#371482");
		
		} else if(i == 15){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("东昌府区","东昌府区#371502");
			co[p][i][1] = new Option("阳谷县","阳谷县#371521");
			co[p][i][2] = new Option("莘县","莘县#371522");
			co[p][i][3] = new Option("茌平县","茌平县#371523");
			co[p][i][4] = new Option("东阿县","东阿县#371524");
			co[p][i][5] = new Option("冠县","冠县#371525");
			co[p][i][6] = new Option("高唐县","高唐县#371526");
			co[p][i][7] = new Option("临清市","临清市#371581");
		
		} else if(i == 16){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("滨城区","滨城区#371602");
			co[p][i][1] = new Option("惠民县","惠民县#371621");
			co[p][i][2] = new Option("阳信县","阳信县#371622");
			co[p][i][3] = new Option("无棣县","无棣县#371623");
			co[p][i][4] = new Option("沾化县","沾化县#371624");
			co[p][i][5] = new Option("博兴县","博兴县#371625");
			co[p][i][6] = new Option("邹平县","邹平县#371626");
		
		} else if(i == 17){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("牡丹区","牡丹区#371702");
			co[p][i][1] = new Option("曹县","曹县#371721");
			co[p][i][2] = new Option("单县","单县#371722");
			co[p][i][3] = new Option("成武县","成武县#371723");
			co[p][i][4] = new Option("巨野县","巨野县#371724");
			co[p][i][5] = new Option("郓城县","郓城县#371725");
			co[p][i][6] = new Option("鄄城县","鄄城县#371726");
			co[p][i][7] = new Option("定陶县","定陶县#371727");
			co[p][i][8] = new Option("东明县","东明县#371728");
		}
	
	}else if(p == 16){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("中原区","中原区#410102");
			co[p][i][1] = new Option("二七区","二七区#410103");
			co[p][i][2] = new Option("管城回族区","管城回族区#410104");
			co[p][i][3] = new Option("金水区","金水区#410105");
			co[p][i][4] = new Option("上街区","上街区#410106");
			co[p][i][5] = new Option("邙山区","邙山区#410108");
			co[p][i][6] = new Option("中牟县","中牟县#410122");
			co[p][i][7] = new Option("巩义市","巩义市#410181");
			co[p][i][8] = new Option("荥阳市","荥阳市#410182");
			co[p][i][9] = new Option("新密市","新密市#410183");
			co[p][i][10] = new Option("新郑市","新郑市#410184");
			co[p][i][11] = new Option("登封市","登封市#410185");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("龙亭区","龙亭区#410202");
			co[p][i][1] = new Option("顺河回族区","顺河回族区#410203");
			co[p][i][2] = new Option("鼓楼区","鼓楼区#410204");
			co[p][i][3] = new Option("南关区","南关区#410205");
			co[p][i][4] = new Option("杞县","杞县#410221");
			co[p][i][5] = new Option("通许县","通许县#410222");
			co[p][i][6] = new Option("尉氏县","尉氏县#410223");
			co[p][i][7] = new Option("开封县","开封县#410224");
			co[p][i][8] = new Option("兰考县","兰考县#410225");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("老城区","老城区#410302");
			co[p][i][1] = new Option("西工区","西工区#410303");
			co[p][i][2] = new Option("廛河回族区","廛河回族区#410304");
			co[p][i][3] = new Option("涧西区","涧西区#410305");
			co[p][i][4] = new Option("吉利区","吉利区#410306");
			co[p][i][5] = new Option("洛龙区","洛龙区#410307");
			co[p][i][6] = new Option("孟津县","孟津县#410322");
			co[p][i][7] = new Option("新安县","新安县#410323");
			co[p][i][8] = new Option("栾川县","栾川县#410324");
			co[p][i][9] = new Option("嵩县","嵩县#410325");
			co[p][i][10] = new Option("汝阳县","汝阳县#410326");
			co[p][i][11] = new Option("宜阳县","宜阳县#410327");
			co[p][i][12] = new Option("洛宁县","洛宁县#410328");
			co[p][i][13] = new Option("伊川县","伊川县#410329");
			co[p][i][14] = new Option("偃师市","偃师市#410381");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("新华区","新华区#410402");
			co[p][i][1] = new Option("卫东区","卫东区#410403");
			co[p][i][2] = new Option("石龙区","石龙区#410404");
			co[p][i][3] = new Option("湛河区","湛河区#410411");
			co[p][i][4] = new Option("宝丰县","宝丰县#410421");
			co[p][i][5] = new Option("叶县","叶县#410422");
			co[p][i][6] = new Option("鲁山县","鲁山县#410423");
			co[p][i][7] = new Option("郏县","郏县#410425");
			co[p][i][8] = new Option("舞钢市","舞钢市#410481");
			co[p][i][9] = new Option("汝州市","汝州市#410482");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("文峰区","文峰区#410502");
			co[p][i][1] = new Option("北关区","北关区#410503");
			co[p][i][2] = new Option("殷都区","殷都区#410505");
			co[p][i][3] = new Option("龙安区","龙安区#410506");
			co[p][i][4] = new Option("安阳县","安阳县#410522");
			co[p][i][5] = new Option("汤阴县","汤阴县#410523");
			co[p][i][6] = new Option("滑县","滑县#410526");
			co[p][i][7] = new Option("内黄县","内黄县#410527");
			co[p][i][8] = new Option("林州市","林州市#410581");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("鹤山区","鹤山区#410602");
			co[p][i][1] = new Option("山城区","山城区#410603");
			co[p][i][2] = new Option("淇滨区","淇滨区#410611");
			co[p][i][3] = new Option("浚县","浚县#410621");
			co[p][i][4] = new Option("淇县","淇县#410622");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("红旗区","红旗区#410702");
			co[p][i][1] = new Option("卫滨区","卫滨区#410703");
			co[p][i][2] = new Option("凤泉区","凤泉区#410704");
			co[p][i][3] = new Option("牧野区","牧野区#410711");
			co[p][i][4] = new Option("新乡县","新乡县#410721");
			co[p][i][5] = new Option("获嘉县","获嘉县#410724");
			co[p][i][6] = new Option("原阳县","原阳县#410725");
			co[p][i][7] = new Option("延津县","延津县#410726");
			co[p][i][8] = new Option("封丘县","封丘县#410727");
			co[p][i][9] = new Option("长垣县","长垣县#410728");
			co[p][i][10] = new Option("卫辉市","卫辉市#410781");
			co[p][i][11] = new Option("辉县市","辉县市#410782");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("解放区","解放区#410802");
			co[p][i][1] = new Option("中站区","中站区#410803");
			co[p][i][2] = new Option("马村区","马村区#410804");
			co[p][i][3] = new Option("山阳区","山阳区#410811");
			co[p][i][4] = new Option("修武县","修武县#410821");
			co[p][i][5] = new Option("博爱县","博爱县#410822");
			co[p][i][6] = new Option("武陟县","武陟县#410823");
			co[p][i][7] = new Option("温县","温县#410825");
			co[p][i][8] = new Option("济源市","济源市#410881");
			co[p][i][9] = new Option("沁阳市","沁阳市#410882");
			co[p][i][10] = new Option("孟州市","孟州市#410883");
		
		} else if(i == 9){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("华龙区","华龙区#410902");
			co[p][i][1] = new Option("清丰县","清丰县#410922");
			co[p][i][2] = new Option("南乐县","南乐县#410923");
			co[p][i][3] = new Option("范县","范县#410926");
			co[p][i][4] = new Option("台前县","台前县#410927");
			co[p][i][5] = new Option("濮阳县","濮阳县#410928");
		
		} else if(i == 10){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("魏都区","魏都区#411002");
			co[p][i][1] = new Option("许昌县","许昌县#411023");
			co[p][i][2] = new Option("鄢陵县","鄢陵县#411024");
			co[p][i][3] = new Option("襄城县","襄城县#411025");
			co[p][i][4] = new Option("禹州市","禹州市#411081");
			co[p][i][5] = new Option("长葛市","长葛市#411082");
		
		} else if(i == 11){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("源汇区","源汇区#411102");
			co[p][i][1] = new Option("郾城区","郾城区#411103");
			co[p][i][2] = new Option("召陵区","召陵区#411104");
			co[p][i][3] = new Option("舞阳县","舞阳县#411121");
			co[p][i][4] = new Option("临颍县","临颍县#411122");
		
		} else if(i == 12){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("湖滨区","湖滨区#411202");
			co[p][i][1] = new Option("渑池县","渑池县#411221");
			co[p][i][2] = new Option("陕县","陕县#411222");
			co[p][i][3] = new Option("卢氏县","卢氏县#411224");
			co[p][i][4] = new Option("义马市","义马市#411281");
			co[p][i][5] = new Option("灵宝市","灵宝市#411282");
		
		} else if(i == 13){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("宛城区","宛城区#411302");
			co[p][i][1] = new Option("卧龙区","卧龙区#411303");
			co[p][i][2] = new Option("南召县","南召县#411321");
			co[p][i][3] = new Option("方城县","方城县#411322");
			co[p][i][4] = new Option("西峡县","西峡县#411323");
			co[p][i][5] = new Option("镇平县","镇平县#411324");
			co[p][i][6] = new Option("内乡县","内乡县#411325");
			co[p][i][7] = new Option("淅川县","淅川县#411326");
			co[p][i][8] = new Option("社旗县","社旗县#411327");
			co[p][i][9] = new Option("唐河县","唐河县#411328");
			co[p][i][10] = new Option("新野县","新野县#411329");
			co[p][i][11] = new Option("桐柏县","桐柏县#411330");
			co[p][i][12] = new Option("邓州市","邓州市#411381");
		
		} else if(i == 14){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("梁园区","梁园区#411402");
			co[p][i][1] = new Option("睢阳区","睢阳区#411403");
			co[p][i][2] = new Option("民权县","民权县#411421");
			co[p][i][3] = new Option("睢县","睢县#411422");
			co[p][i][4] = new Option("宁陵县","宁陵县#411423");
			co[p][i][5] = new Option("柘城县","柘城县#411424");
			co[p][i][6] = new Option("虞城县","虞城县#411425");
			co[p][i][7] = new Option("夏邑县","夏邑县#411426");
			co[p][i][8] = new Option("永城市","永城市#411481");
		
		} else if(i == 15){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("师河区","师河区#411502");
			co[p][i][1] = new Option("平桥区","平桥区#411503");
			co[p][i][2] = new Option("罗山县","罗山县#411521");
			co[p][i][3] = new Option("光山县","光山县#411522");
			co[p][i][4] = new Option("新县","新县#411523");
			co[p][i][5] = new Option("商城县","商城县#411524");
			co[p][i][6] = new Option("固始县","固始县#411525");
			co[p][i][7] = new Option("潢川县","潢川县#411526");
			co[p][i][8] = new Option("淮滨县","淮滨县#411527");
			co[p][i][9] = new Option("息县","息县#411528");
		
		} else if(i == 16){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("川汇区","川汇区#411602");
			co[p][i][1] = new Option("扶沟县","扶沟县#411621");
			co[p][i][2] = new Option("西华县","西华县#411622");
			co[p][i][3] = new Option("商水县","商水县#411623");
			co[p][i][4] = new Option("沈丘县","沈丘县#411624");
			co[p][i][5] = new Option("郸城县","郸城县#411625");
			co[p][i][6] = new Option("淮阳县","淮阳县#411626");
			co[p][i][7] = new Option("太康县","太康县#411627");
			co[p][i][8] = new Option("鹿邑县","鹿邑县#411628");
			co[p][i][9] = new Option("项城市","项城市#411681");
		
		} else if(i == 17){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("驿城区","驿城区#411702");
			co[p][i][1] = new Option("西平县","西平县#411721");
			co[p][i][2] = new Option("上蔡县","上蔡县#411722");
			co[p][i][3] = new Option("平舆县","平舆县#411723");
			co[p][i][4] = new Option("正阳县","正阳县#411724");
			co[p][i][5] = new Option("确山县","确山县#411725");
			co[p][i][6] = new Option("泌阳县","泌阳县#411726");
			co[p][i][7] = new Option("汝南县","汝南县#411727");
			co[p][i][8] = new Option("遂平县","遂平县#411728");
			co[p][i][9] = new Option("新蔡县","新蔡县#411729");
		}
	
	}else if(p == 17){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("江岸区","江岸区#420102");
			co[p][i][1] = new Option("江汉区","江汉区#420103");
			co[p][i][2] = new Option("乔口区","乔口区#420104");
			co[p][i][3] = new Option("汉阳区","汉阳区#420105");
			co[p][i][4] = new Option("武昌区","武昌区#420106");
			co[p][i][5] = new Option("青山区","青山区#420107");
			co[p][i][6] = new Option("洪山区","洪山区#420111");
			co[p][i][7] = new Option("东西湖区","东西湖区#420112");
			co[p][i][8] = new Option("汉南区","汉南区#420113");
			co[p][i][9] = new Option("蔡甸区","蔡甸区#420114");
			co[p][i][10] = new Option("江夏区","江夏区#420115");
			co[p][i][11] = new Option("黄陂区","黄陂区#420116");
			co[p][i][12] = new Option("新洲区","新洲区#420117");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("黄石港区","黄石港区#420202");
			co[p][i][1] = new Option("西塞山区","西塞山区#420203");
			co[p][i][2] = new Option("下陆区","下陆区#420204");
			co[p][i][3] = new Option("铁山区","铁山区#420205");
			co[p][i][4] = new Option("阳新县","阳新县#420222");
			co[p][i][5] = new Option("大冶市","大冶市#420281");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("茅箭区","茅箭区#420302");
			co[p][i][1] = new Option("张湾区","张湾区#420303");
			co[p][i][2] = new Option("郧县","郧县#420321");
			co[p][i][3] = new Option("郧西县","郧西县#420322");
			co[p][i][4] = new Option("竹山县","竹山县#420323");
			co[p][i][5] = new Option("竹溪县","竹溪县#420324");
			co[p][i][6] = new Option("房县","房县#420325");
			co[p][i][7] = new Option("丹江口市","丹江口市#420381");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("西陵区","西陵区#420502");
			co[p][i][1] = new Option("伍家岗区","伍家岗区#420503");
			co[p][i][2] = new Option("点军区","点军区#420504");
			co[p][i][3] = new Option("猇亭区","猇亭区#420505");
			co[p][i][4] = new Option("夷陵区","夷陵区#420506");
			co[p][i][5] = new Option("远安县","远安县#420525");
			co[p][i][6] = new Option("兴山县","兴山县#420526");
			co[p][i][7] = new Option("秭归县","秭归县#420527");
			co[p][i][8] = new Option("长阳土家族自治县","长阳土家族自治县#420528");
			co[p][i][9] = new Option("五峰土家族自治县","五峰土家族自治县#420529");
			co[p][i][10] = new Option("宜都市","宜都市#420581");
			co[p][i][11] = new Option("当阳市","当阳市#420582");
			co[p][i][12] = new Option("枝江市","枝江市#420583");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("襄城区","襄城区#420602");
			co[p][i][1] = new Option("樊城区","樊城区#420606");
			co[p][i][2] = new Option("襄阳区","襄阳区#420607");
			co[p][i][3] = new Option("南漳县","南漳县#420624");
			co[p][i][4] = new Option("谷城县","谷城县#420625");
			co[p][i][5] = new Option("保康县","保康县#420626");
			co[p][i][6] = new Option("老河口市","老河口市#420682");
			co[p][i][7] = new Option("枣阳市","枣阳市#420683");
			co[p][i][8] = new Option("宜城市","宜城市#420684");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("梁子湖区","梁子湖区#420702");
			co[p][i][1] = new Option("华容区","华容区#420703");
			co[p][i][2] = new Option("鄂城区","鄂城区#420704");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("东宝区","东宝区#420802");
			co[p][i][1] = new Option("掇刀区","掇刀区#420804");
			co[p][i][2] = new Option("京山县","京山县#420821");
			co[p][i][3] = new Option("沙洋县","沙洋县#420822");
			co[p][i][4] = new Option("钟祥市","钟祥市#420881");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("孝南区","孝南区#420902");
			co[p][i][1] = new Option("孝昌县","孝昌县#420921");
			co[p][i][2] = new Option("大悟县","大悟县#420922");
			co[p][i][3] = new Option("云梦县","云梦县#420923");
			co[p][i][4] = new Option("应城市","应城市#420981");
			co[p][i][5] = new Option("安陆市","安陆市#420982");
			co[p][i][6] = new Option("汉川市","汉川市#420984");
		
		} else if(i == 9){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("沙市区","沙市区#421002");
			co[p][i][1] = new Option("荆州区","荆州区#421003");
			co[p][i][2] = new Option("公安县","公安县#421022");
			co[p][i][3] = new Option("监利县","监利县#421023");
			co[p][i][4] = new Option("江陵县","江陵县#421024");
			co[p][i][5] = new Option("石首市","石首市#421081");
			co[p][i][6] = new Option("洪湖市","洪湖市#421083");
			co[p][i][7] = new Option("松滋市","松滋市#421087");
		
		} else if(i == 10){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("黄州区","黄州区#421102");
			co[p][i][1] = new Option("团风县","团风县#421121");
			co[p][i][2] = new Option("红安县","红安县#421122");
			co[p][i][3] = new Option("罗田县","罗田县#421123");
			co[p][i][4] = new Option("英山县","英山县#421124");
			co[p][i][5] = new Option("浠水县","浠水县#421125");
			co[p][i][6] = new Option("蕲春县","蕲春县#421126");
			co[p][i][7] = new Option("黄梅县","黄梅县#421127");
			co[p][i][8] = new Option("麻城市","麻城市#421181");
			co[p][i][9] = new Option("武穴市","武穴市#421182");
		
		} else if(i == 11){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("咸安区","咸安区#421202");
			co[p][i][1] = new Option("嘉鱼县","嘉鱼县#421221");
			co[p][i][2] = new Option("通城县","通城县#421222");
			co[p][i][3] = new Option("崇阳县","崇阳县#421223");
			co[p][i][4] = new Option("通山县","通山县#421224");
			co[p][i][5] = new Option("赤壁市","赤壁市#421281");
		
		} else if(i == 12){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("曾都区","曾都区#421302");
			co[p][i][1] = new Option("广水市","广水市#421381");
		
		} else if(i == 13){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("恩施市","恩施市#422801");
			co[p][i][1] = new Option("利川市","利川市#422802");
			co[p][i][2] = new Option("建始县","建始县#422822");
			co[p][i][3] = new Option("巴东县","巴东县#422823");
			co[p][i][4] = new Option("宣恩县","宣恩县#422825");
			co[p][i][5] = new Option("咸丰县","咸丰县#422826");
			co[p][i][6] = new Option("来凤县","来凤县#422827");
			co[p][i][7] = new Option("鹤峰县","鹤峰县#422828");
		}
	
	}else if(p == 18){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("芙蓉区","芙蓉区#430102");
			co[p][i][1] = new Option("天心区","天心区#430103");
			co[p][i][2] = new Option("岳麓区","岳麓区#430104");
			co[p][i][3] = new Option("开福区","开福区#430105");
			co[p][i][4] = new Option("雨花区","雨花区#430111");
			co[p][i][5] = new Option("长沙县","长沙县#430121");
			co[p][i][6] = new Option("望城县","望城县#430122");
			co[p][i][7] = new Option("宁乡县","宁乡县#430124");
			co[p][i][8] = new Option("浏阳市","浏阳市#430181");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("荷塘区","荷塘区#430202");
			co[p][i][1] = new Option("芦淞区","芦淞区#430203");
			co[p][i][2] = new Option("石峰区","石峰区#430204");
			co[p][i][3] = new Option("天元区","天元区#430211");
			co[p][i][4] = new Option("株洲县","株洲县#430221");
			co[p][i][5] = new Option("攸县","攸县#430223");
			co[p][i][6] = new Option("茶陵县","茶陵县#430224");
			co[p][i][7] = new Option("炎陵县","炎陵县#430225");
			co[p][i][8] = new Option("醴陵市","醴陵市#430281");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("雨湖区","雨湖区#430302");
			co[p][i][1] = new Option("岳塘区","岳塘区#430304");
			co[p][i][2] = new Option("湘潭县","湘潭县#430321");
			co[p][i][3] = new Option("湘乡市","湘乡市#430381");
			co[p][i][4] = new Option("韶山市","韶山市#430382");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("珠晖区","珠晖区#430405");
			co[p][i][1] = new Option("雁峰区","雁峰区#430406");
			co[p][i][2] = new Option("石鼓区","石鼓区#430407");
			co[p][i][3] = new Option("蒸湘区","蒸湘区#430408");
			co[p][i][4] = new Option("南岳区","南岳区#430412");
			co[p][i][5] = new Option("衡阳县","衡阳县#430421");
			co[p][i][6] = new Option("衡南县","衡南县#430422");
			co[p][i][7] = new Option("衡山县","衡山县#430423");
			co[p][i][8] = new Option("衡东县","衡东县#430424");
			co[p][i][9] = new Option("祁东县","祁东县#430426");
			co[p][i][10] = new Option("耒阳市","耒阳市#430481");
			co[p][i][11] = new Option("常宁市","常宁市#430482");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("双清区","双清区#430502");
			co[p][i][1] = new Option("大祥区","大祥区#430503");
			co[p][i][2] = new Option("北塔区","北塔区#430511");
			co[p][i][3] = new Option("邵东县","邵东县#430521");
			co[p][i][4] = new Option("新邵县","新邵县#430522");
			co[p][i][5] = new Option("邵阳县","邵阳县#430523");
			co[p][i][6] = new Option("隆回县","隆回县#430524");
			co[p][i][7] = new Option("洞口县","洞口县#430525");
			co[p][i][8] = new Option("绥宁县","绥宁县#430527");
			co[p][i][9] = new Option("新宁县","新宁县#430528");
			co[p][i][10] = new Option("城步苗族自治县","城步苗族自治县#430529");
			co[p][i][11] = new Option("武冈市","武冈市#430581");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("岳阳楼区","岳阳楼区#430602");
			co[p][i][1] = new Option("云溪区","云溪区#430603");
			co[p][i][2] = new Option("君山区","君山区#430611");
			co[p][i][3] = new Option("岳阳县","岳阳县#430621");
			co[p][i][4] = new Option("华容县","华容县#430623");
			co[p][i][5] = new Option("湘阴县","湘阴县#430624");
			co[p][i][6] = new Option("平江县","平江县#430626");
			co[p][i][7] = new Option("汨罗市","汨罗市#430681");
			co[p][i][8] = new Option("临湘市","临湘市#430682");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("武陵区","武陵区#430702");
			co[p][i][1] = new Option("鼎城区","鼎城区#430703");
			co[p][i][2] = new Option("安乡县","安乡县#430721");
			co[p][i][3] = new Option("汉寿县","汉寿县#430722");
			co[p][i][4] = new Option("澧县","澧县#430723");
			co[p][i][5] = new Option("临澧县","临澧县#430724");
			co[p][i][6] = new Option("桃源县","桃源县#430725");
			co[p][i][7] = new Option("石门县","石门县#430726");
			co[p][i][8] = new Option("津市市","津市市#430781");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("永定区","永定区#430802");
			co[p][i][1] = new Option("武陵源区","武陵源区#430811");
			co[p][i][2] = new Option("慈利县","慈利县#430821");
			co[p][i][3] = new Option("桑植县","桑植县#430822");
		
		} else if(i == 9){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("资阳区","资阳区#430902");
			co[p][i][1] = new Option("赫山区","赫山区#430903");
			co[p][i][2] = new Option("南县","南县#430921");
			co[p][i][3] = new Option("桃江县","桃江县#430922");
			co[p][i][4] = new Option("安化县","安化县#430923");
			co[p][i][5] = new Option("沅江市","沅江市#430981");
		
		} else if(i == 10){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("北湖区","北湖区#431002");
			co[p][i][1] = new Option("苏仙区","苏仙区#431003");
			co[p][i][2] = new Option("桂阳县","桂阳县#431021");
			co[p][i][3] = new Option("宜章县","宜章县#431022");
			co[p][i][4] = new Option("永兴县","永兴县#431023");
			co[p][i][5] = new Option("嘉禾县","嘉禾县#431024");
			co[p][i][6] = new Option("临武县","临武县#431025");
			co[p][i][7] = new Option("汝城县","汝城县#431026");
			co[p][i][8] = new Option("桂东县","桂东县#431027");
			co[p][i][9] = new Option("安仁县","安仁县#431028");
			co[p][i][10] = new Option("资兴市","资兴市#431081");
		
		} else if(i == 11){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("芝山区","芝山区#431102");
			co[p][i][1] = new Option("冷水滩区","冷水滩区#431103");
			co[p][i][2] = new Option("祁阳县","祁阳县#431121");
			co[p][i][3] = new Option("东安县","东安县#431122");
			co[p][i][4] = new Option("双牌县","双牌县#431123");
			co[p][i][5] = new Option("道县","道县#431124");
			co[p][i][6] = new Option("江永县","江永县#431125");
			co[p][i][7] = new Option("宁远县","宁远县#431126");
			co[p][i][8] = new Option("蓝山县","蓝山县#431127");
			co[p][i][9] = new Option("新田县","新田县#431128");
			co[p][i][10] = new Option("江华瑶族自治县","江华瑶族自治县#431129");
		
		} else if(i == 12){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("鹤城区","鹤城区#431202");
			co[p][i][1] = new Option("中方县","中方县#431221");
			co[p][i][2] = new Option("沅陵县","沅陵县#431222");
			co[p][i][3] = new Option("辰溪县","辰溪县#431223");
			co[p][i][4] = new Option("溆浦县","溆浦县#431224");
			co[p][i][5] = new Option("会同县","会同县#431225");
			co[p][i][6] = new Option("麻阳苗族自治县","麻阳苗族自治县#431226");
			co[p][i][7] = new Option("新晃侗族自治县","新晃侗族自治县#431227");
			co[p][i][8] = new Option("芷江侗族自治县","芷江侗族自治县#431228");
			co[p][i][9] = new Option("靖州苗族侗族自治县","靖州苗族侗族自治县#431229");
			co[p][i][10] = new Option("通道侗族自治县","通道侗族自治县#431230");
			co[p][i][11] = new Option("洪江市","洪江市#431281");
		
		} else if(i == 13){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("娄星区","娄星区#431302");
			co[p][i][1] = new Option("双峰县","双峰县#431321");
			co[p][i][2] = new Option("新化县","新化县#431322");
			co[p][i][3] = new Option("冷水江市","冷水江市#431381");
			co[p][i][4] = new Option("涟源市","涟源市#431382");
		
		} else if(i == 14){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("吉首市","吉首市#433101");
			co[p][i][1] = new Option("泸溪县","泸溪县#433122");
			co[p][i][2] = new Option("凤凰县","凤凰县#433123");
			co[p][i][3] = new Option("花垣县","花垣县#433124");
			co[p][i][4] = new Option("保靖县","保靖县#433125");
			co[p][i][5] = new Option("古丈县","古丈县#433126");
			co[p][i][6] = new Option("永顺县","永顺县#433127");
			co[p][i][7] = new Option("龙山县","龙山县#433130");
		}
	
	}else if(p == 19){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("东山区","东山区#440102");
			co[p][i][1] = new Option("荔湾区","荔湾区#440103");
			co[p][i][2] = new Option("越秀区","越秀区#440104");
			co[p][i][3] = new Option("海珠区","海珠区#440105");
			co[p][i][4] = new Option("天河区","天河区#440106");
			co[p][i][5] = new Option("芳村区","芳村区#440107");
			co[p][i][6] = new Option("白云区","白云区#440111");
			co[p][i][7] = new Option("黄埔区","黄埔区#440112");
			co[p][i][8] = new Option("番禺区","番禺区#440113");
			co[p][i][9] = new Option("花都区","花都区#440114");
			co[p][i][10] = new Option("增城市","增城市#440183");
			co[p][i][11] = new Option("从化市","从化市#440184");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("武江区","武江区#440203");
			co[p][i][1] = new Option("浈江区","浈江区#440204");
			co[p][i][2] = new Option("曲江区","曲江区#440205");
			co[p][i][3] = new Option("始兴县","始兴县#440222");
			co[p][i][4] = new Option("仁化县","仁化县#440224");
			co[p][i][5] = new Option("翁源县","翁源县#440229");
			co[p][i][6] = new Option("乳源瑶族自治县","乳源瑶族自治县#440232");
			co[p][i][7] = new Option("新丰县","新丰县#440233");
			co[p][i][8] = new Option("乐昌市","乐昌市#440281");
			co[p][i][9] = new Option("南雄市","南雄市#440282");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("罗湖区","罗湖区#440303");
			co[p][i][1] = new Option("福田区","福田区#440304");
			co[p][i][2] = new Option("南山区","南山区#440305");
			co[p][i][3] = new Option("宝安区","宝安区#440306");
			co[p][i][4] = new Option("龙岗区","龙岗区#440307");
			co[p][i][5] = new Option("盐田区","盐田区#440308");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("香洲区","香洲区#440402");
			co[p][i][1] = new Option("斗门区","斗门区#440403");
			co[p][i][2] = new Option("金湾区","金湾区#440404");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("龙湖区","龙湖区#440507");
			co[p][i][1] = new Option("金平区","金平区#440511");
			co[p][i][2] = new Option("濠江区","濠江区#440512");
			co[p][i][3] = new Option("潮阳区","潮阳区#440513");
			co[p][i][4] = new Option("潮南区","潮南区#440514");
			co[p][i][5] = new Option("澄海区","澄海区#440515");
			co[p][i][6] = new Option("南澳县","南澳县#440523");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("禅城区","禅城区#440604");
			co[p][i][1] = new Option("南海区","南海区#440605");
			co[p][i][2] = new Option("顺德区","顺德区#440606");
			co[p][i][3] = new Option("三水区","三水区#440607");
			co[p][i][4] = new Option("高明区","高明区#440608");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("蓬江区","蓬江区#440703");
			co[p][i][1] = new Option("江海区","江海区#440704");
			co[p][i][2] = new Option("新会区","新会区#440705");
			co[p][i][3] = new Option("台山市","台山市#440781");
			co[p][i][4] = new Option("开平市","开平市#440783");
			co[p][i][5] = new Option("鹤山市","鹤山市#440784");
			co[p][i][6] = new Option("恩平市","恩平市#440785");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("赤坎区","赤坎区#440802");
			co[p][i][1] = new Option("霞山区","霞山区#440803");
			co[p][i][2] = new Option("坡头区","坡头区#440804");
			co[p][i][3] = new Option("麻章区","麻章区#440811");
			co[p][i][4] = new Option("遂溪县","遂溪县#440823");
			co[p][i][5] = new Option("徐闻县","徐闻县#440825");
			co[p][i][6] = new Option("廉江市","廉江市#440881");
			co[p][i][7] = new Option("雷州市","雷州市#440882");
			co[p][i][8] = new Option("吴川市","吴川市#440883");
		
		} else if(i == 9){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("茂南区","茂南区#440902");
			co[p][i][1] = new Option("茂港区","茂港区#440903");
			co[p][i][2] = new Option("电白县","电白县#440923");
			co[p][i][3] = new Option("高州市","高州市#440981");
			co[p][i][4] = new Option("化州市","化州市#440982");
			co[p][i][5] = new Option("信宜市","信宜市#440983");
		
		} else if(i == 10){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("端州区","端州区#441202");
			co[p][i][1] = new Option("鼎湖区","鼎湖区#441203");
			co[p][i][2] = new Option("广宁县","广宁县#441223");
			co[p][i][3] = new Option("怀集县","怀集县#441224");
			co[p][i][4] = new Option("封开县","封开县#441225");
			co[p][i][5] = new Option("德庆县","德庆县#441226");
			co[p][i][6] = new Option("高要市","高要市#441283");
			co[p][i][7] = new Option("四会市","四会市#441284");
		
		} else if(i == 11){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("惠城区","惠城区#441302");
			co[p][i][1] = new Option("惠阳区","惠阳区#441303");
			co[p][i][2] = new Option("博罗县","博罗县#441322");
			co[p][i][3] = new Option("惠东县","惠东县#441323");
			co[p][i][4] = new Option("龙门县","龙门县#441324");
		
		} else if(i == 12){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("梅江区","梅江区#441402");
			co[p][i][1] = new Option("梅县","梅县#441421");
			co[p][i][2] = new Option("大埔县","大埔县#441422");
			co[p][i][3] = new Option("丰顺县","丰顺县#441423");
			co[p][i][4] = new Option("五华县","五华县#441424");
			co[p][i][5] = new Option("平远县","平远县#441426");
			co[p][i][6] = new Option("蕉岭县","蕉岭县#441427");
			co[p][i][7] = new Option("兴宁市","兴宁市#441481");
		
		} else if(i == 13){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("海丰县","海丰县#441521");
			co[p][i][1] = new Option("陆河县","陆河县#441523");
			co[p][i][2] = new Option("陆丰市","陆丰市#441581");
		
		} else if(i == 14){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("源城区","源城区#441602");
			co[p][i][1] = new Option("紫金县","紫金县#441621");
			co[p][i][2] = new Option("龙川县","龙川县#441622");
			co[p][i][3] = new Option("连平县","连平县#441623");
			co[p][i][4] = new Option("和平县","和平县#441624");
			co[p][i][5] = new Option("东源县","东源县#441625");
		
		} else if(i == 15){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("江城区","江城区#441702");
			co[p][i][1] = new Option("阳西县","阳西县#441721");
			co[p][i][2] = new Option("阳东县","阳东县#441723");
			co[p][i][3] = new Option("阳春市","阳春市#441781");
		
		} else if(i == 16){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("清城区","清城区#441802");
			co[p][i][1] = new Option("佛冈县","佛冈县#441821");
			co[p][i][2] = new Option("阳山县","阳山县#441823");
			co[p][i][3] = new Option("连山壮族瑶族自治县","连山壮族瑶族自治县#441825");
			co[p][i][4] = new Option("连南瑶族自治县","连南瑶族自治县#441826");
			co[p][i][5] = new Option("清新县","清新县#441827");
			co[p][i][6] = new Option("英德市","英德市#441881");
			co[p][i][7] = new Option("连州市","连州市#441882");
		
		} else if(i == 17){
			co[p] = new Array();
			co[p][i] = new Array();
		
		} else if(i == 18){
			co[p] = new Array();
			co[p][i] = new Array();
		
		} else if(i == 19){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("湘桥区","湘桥区#445102");
			co[p][i][1] = new Option("潮安县","潮安县#445121");
			co[p][i][2] = new Option("饶平县","饶平县#445122");
		
		} else if(i == 20){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("榕城区","榕城区#445202");
			co[p][i][1] = new Option("揭东县","揭东县#445221");
			co[p][i][2] = new Option("揭西县","揭西县#445222");
			co[p][i][3] = new Option("惠来县","惠来县#445224");
			co[p][i][4] = new Option("普宁市","普宁市#445281");
		
		} else if(i == 21){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("云城区","云城区#445302");
			co[p][i][1] = new Option("新兴县","新兴县#445321");
			co[p][i][2] = new Option("郁南县","郁南县#445322");
			co[p][i][3] = new Option("云安县","云安县#445323");
			co[p][i][4] = new Option("罗定市","罗定市#445381");
		}
	
	}else if(p == 20){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("兴宁区","兴宁区#450102");
			co[p][i][1] = new Option("青秀区","青秀区#450103");
			co[p][i][2] = new Option("江南区","江南区#450105");
			co[p][i][3] = new Option("西乡塘区","西乡塘区#450107");
			co[p][i][4] = new Option("良庆区","良庆区#450108");
			co[p][i][5] = new Option("邕宁区","邕宁区#450109");
			co[p][i][6] = new Option("武鸣县","武鸣县#450122");
			co[p][i][7] = new Option("隆安县","隆安县#450123");
			co[p][i][8] = new Option("马山县","马山县#450124");
			co[p][i][9] = new Option("上林县","上林县#450125");
			co[p][i][10] = new Option("宾阳县","宾阳县#450126");
			co[p][i][11] = new Option("横县","横县#450127");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("城中区","城中区#450202");
			co[p][i][1] = new Option("鱼峰区","鱼峰区#450203");
			co[p][i][2] = new Option("柳南区","柳南区#450204");
			co[p][i][3] = new Option("柳北区","柳北区#450205");
			co[p][i][4] = new Option("柳江县","柳江县#450221");
			co[p][i][5] = new Option("柳城县","柳城县#450222");
			co[p][i][6] = new Option("鹿寨县","鹿寨县#450223");
			co[p][i][7] = new Option("融安县","融安县#450224");
			co[p][i][8] = new Option("融水苗族自治县","融水苗族自治县#450225");
			co[p][i][9] = new Option("三江侗族自治县","三江侗族自治县#450226");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("秀峰区","秀峰区#450302");
			co[p][i][1] = new Option("叠彩区","叠彩区#450303");
			co[p][i][2] = new Option("象山区","象山区#450304");
			co[p][i][3] = new Option("七星区","七星区#450305");
			co[p][i][4] = new Option("雁山区","雁山区#450311");
			co[p][i][5] = new Option("阳朔县","阳朔县#450321");
			co[p][i][6] = new Option("临桂县","临桂县#450322");
			co[p][i][7] = new Option("灵川县","灵川县#450323");
			co[p][i][8] = new Option("全州县","全州县#450324");
			co[p][i][9] = new Option("兴安县","兴安县#450325");
			co[p][i][10] = new Option("永福县","永福县#450326");
			co[p][i][11] = new Option("灌阳县","灌阳县#450327");
			co[p][i][12] = new Option("龙胜各族自治县","龙胜各族自治县#450328");
			co[p][i][13] = new Option("资源县","资源县#450329");
			co[p][i][14] = new Option("平乐县","平乐县#450330");
			co[p][i][15] = new Option("荔蒲县","荔蒲县#450331");
			co[p][i][16] = new Option("恭城瑶族自治县","恭城瑶族自治县#450332");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("万秀区","万秀区#450403");
			co[p][i][1] = new Option("蝶山区","蝶山区#450404");
			co[p][i][2] = new Option("长洲区","长洲区#450405");
			co[p][i][3] = new Option("苍梧县","苍梧县#450421");
			co[p][i][4] = new Option("藤县","藤县#450422");
			co[p][i][5] = new Option("蒙山县","蒙山县#450423");
			co[p][i][6] = new Option("岑溪市","岑溪市#450481");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("海城区","海城区#450502");
			co[p][i][1] = new Option("银海区","银海区#450503");
			co[p][i][2] = new Option("铁山港区","铁山港区#450512");
			co[p][i][3] = new Option("合浦县","合浦县#450521");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("港口区","港口区#450602");
			co[p][i][1] = new Option("防城区","防城区#450603");
			co[p][i][2] = new Option("上思县","上思县#450621");
			co[p][i][3] = new Option("东兴市","东兴市#450681");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("钦南区","钦南区#450702");
			co[p][i][1] = new Option("钦北区","钦北区#450703");
			co[p][i][2] = new Option("灵山县","灵山县#450721");
			co[p][i][3] = new Option("浦北县","浦北县#450722");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("港北区","港北区#450802");
			co[p][i][1] = new Option("港南区","港南区#450803");
			co[p][i][2] = new Option("覃塘区","覃塘区#450804");
			co[p][i][3] = new Option("平南县","平南县#450821");
			co[p][i][4] = new Option("桂平市","桂平市#450881");
		
		} else if(i == 9){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("玉州区","玉州区#450902");
			co[p][i][1] = new Option("容县","容县#450921");
			co[p][i][2] = new Option("陆川县","陆川县#450922");
			co[p][i][3] = new Option("博白县","博白县#450923");
			co[p][i][4] = new Option("兴业县","兴业县#450924");
			co[p][i][5] = new Option("北流市","北流市#450981");
		
		} else if(i == 10){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("右江区","右江区#451002");
			co[p][i][1] = new Option("田阳县","田阳县#451021");
			co[p][i][2] = new Option("田东县","田东县#451022");
			co[p][i][3] = new Option("平果县","平果县#451023");
			co[p][i][4] = new Option("德保县","德保县#451024");
			co[p][i][5] = new Option("靖西县","靖西县#451025");
			co[p][i][6] = new Option("那坡县","那坡县#451026");
			co[p][i][7] = new Option("凌云县","凌云县#451027");
			co[p][i][8] = new Option("乐业县","乐业县#451028");
			co[p][i][9] = new Option("田林县","田林县#451029");
			co[p][i][10] = new Option("西林县","西林县#451030");
			co[p][i][11] = new Option("隆林各族自治县","隆林各族自治县#451031");
		
		} else if(i == 11){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("八步区","八步区#451102");
			co[p][i][1] = new Option("昭平县","昭平县#451121");
			co[p][i][2] = new Option("钟山县","钟山县#451122");
			co[p][i][3] = new Option("富川瑶族自治县","富川瑶族自治县#451123");
		
		} else if(i == 12){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("金城江区","金城江区#451202");
			co[p][i][1] = new Option("南丹县","南丹县#451221");
			co[p][i][2] = new Option("天峨县","天峨县#451222");
			co[p][i][3] = new Option("凤山县","凤山县#451223");
			co[p][i][4] = new Option("东兰县","东兰县#451224");
			co[p][i][5] = new Option("罗城仫佬族自治县","罗城仫佬族自治县#451225");
			co[p][i][6] = new Option("环江毛南族自治县","环江毛南族自治县#451226");
			co[p][i][7] = new Option("巴马瑶族自治县","巴马瑶族自治县#451227");
			co[p][i][8] = new Option("都安瑶族自治县","都安瑶族自治县#451228");
			co[p][i][9] = new Option("大化瑶族自治县","大化瑶族自治县#451229");
			co[p][i][10] = new Option("宜州市","宜州市#451281");
		
		} else if(i == 13){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("兴宾区","兴宾区#451302");
			co[p][i][1] = new Option("忻城县","忻城县#451321");
			co[p][i][2] = new Option("象州县","象州县#451322");
			co[p][i][3] = new Option("武宣县","武宣县#451323");
			co[p][i][4] = new Option("金秀瑶族自治县","金秀瑶族自治县#451324");
			co[p][i][5] = new Option("合山市","合山市#451381");
		
		} else if(i == 14){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("江洲区","江洲区#451402");
			co[p][i][1] = new Option("扶绥县","扶绥县#451421");
			co[p][i][2] = new Option("宁明县","宁明县#451422");
			co[p][i][3] = new Option("龙州县","龙州县#451423");
			co[p][i][4] = new Option("大新县","大新县#451424");
			co[p][i][5] = new Option("天等县","天等县#451425");
			co[p][i][6] = new Option("凭祥市","凭祥市#451481");
		}
	
	}else if(p == 21){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("秀英区","秀英区#460105");
			co[p][i][1] = new Option("龙华区","龙华区#460106");
			co[p][i][2] = new Option("琼山区","琼山区#460107");
			co[p][i][3] = new Option("美兰区","美兰区#460108");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
		}
	
	}else if(p == 22){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("万州区","万州区#500101");
			co[p][i][1] = new Option("涪陵区","涪陵区#500102");
			co[p][i][2] = new Option("渝中区","渝中区#500103");
			co[p][i][3] = new Option("大渡口区","大渡口区#500104");
			co[p][i][4] = new Option("江北区","江北区#500105");
			co[p][i][5] = new Option("沙坪坝区","沙坪坝区#500106");
			co[p][i][6] = new Option("九龙坡区","九龙坡区#500107");
			co[p][i][7] = new Option("南岸区","南岸区#500108");
			co[p][i][8] = new Option("北碚区","北碚区#500109");
			co[p][i][9] = new Option("万盛区","万盛区#500110");
			co[p][i][10] = new Option("双桥区","双桥区#500111");
			co[p][i][11] = new Option("渝北区","渝北区#500112");
			co[p][i][12] = new Option("巴南区","巴南区#500113");
			co[p][i][13] = new Option("黔江区","黔江区#500114");
			co[p][i][14] = new Option("长寿区","长寿区#500115");
			co[p][i][15] = new Option("江津区","江津区#500116");
			co[p][i][16] = new Option("合川区","合川区#500117");
			co[p][i][17] = new Option("永川区","永川区#500118");
			co[p][i][18] = new Option("南川区","南川区#500119");
		}
	
	}else if(p == 23){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("锦江区","锦江区#510104");
			co[p][i][1] = new Option("青羊区","青羊区#510105");
			co[p][i][2] = new Option("金牛区","金牛区#510106");
			co[p][i][3] = new Option("武侯区","武侯区#510107");
			co[p][i][4] = new Option("成华区","成华区#510108");
			co[p][i][5] = new Option("龙泉驿区","龙泉驿区#510112");
			co[p][i][6] = new Option("青白江区","青白江区#510113");
			co[p][i][7] = new Option("新都区","新都区#510114");
			co[p][i][8] = new Option("温江区","温江区#510115");
			co[p][i][9] = new Option("金堂县","金堂县#510121");
			co[p][i][10] = new Option("双流县","双流县#510122");
			co[p][i][11] = new Option("郫县","郫县#510124");
			co[p][i][12] = new Option("大邑县","大邑县#510129");
			co[p][i][13] = new Option("蒲江县","蒲江县#510131");
			co[p][i][14] = new Option("新津县","新津县#510132");
			co[p][i][15] = new Option("都江堰市","都江堰市#510181");
			co[p][i][16] = new Option("彭州市","彭州市#510182");
			co[p][i][17] = new Option("邛崃市","邛崃市#510183");
			co[p][i][18] = new Option("崇州市","崇州市#510184");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("自流井区","自流井区#510302");
			co[p][i][1] = new Option("贡井区","贡井区#510303");
			co[p][i][2] = new Option("大安区","大安区#510304");
			co[p][i][3] = new Option("沿滩区","沿滩区#510311");
			co[p][i][4] = new Option("荣县","荣县#510321");
			co[p][i][5] = new Option("富顺县","富顺县#510322");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("东区","东区#510402");
			co[p][i][1] = new Option("西区","西区#510403");
			co[p][i][2] = new Option("仁和区","仁和区#510411");
			co[p][i][3] = new Option("米易县","米易县#510421");
			co[p][i][4] = new Option("盐边县","盐边县#510422");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("江阳区","江阳区#510502");
			co[p][i][1] = new Option("纳溪区","纳溪区#510503");
			co[p][i][2] = new Option("龙马潭区","龙马潭区#510504");
			co[p][i][3] = new Option("泸县","泸县#510521");
			co[p][i][4] = new Option("合江县","合江县#510522");
			co[p][i][5] = new Option("叙永县","叙永县#510524");
			co[p][i][6] = new Option("古蔺县","古蔺县#510525");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("旌阳区","旌阳区#510603");
			co[p][i][1] = new Option("中江县","中江县#510623");
			co[p][i][2] = new Option("罗江县","罗江县#510626");
			co[p][i][3] = new Option("广汉市","广汉市#510681");
			co[p][i][4] = new Option("什邡市","什邡市#510682");
			co[p][i][5] = new Option("绵竹市","绵竹市#510683");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("涪城区","涪城区#510703");
			co[p][i][1] = new Option("游仙区","游仙区#510704");
			co[p][i][2] = new Option("三台县","三台县#510722");
			co[p][i][3] = new Option("盐亭县","盐亭县#510723");
			co[p][i][4] = new Option("安县","安县#510724");
			co[p][i][5] = new Option("梓潼县","梓潼县#510725");
			co[p][i][6] = new Option("北川羌族自治县","北川羌族自治县#510726");
			co[p][i][7] = new Option("平武县","平武县#510727");
			co[p][i][8] = new Option("江油市","江油市#510781");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("元坝区","元坝区#510811");
			co[p][i][1] = new Option("朝天区","朝天区#510812");
			co[p][i][2] = new Option("旺苍县","旺苍县#510821");
			co[p][i][3] = new Option("青川县","青川县#510822");
			co[p][i][4] = new Option("剑阁县","剑阁县#510823");
			co[p][i][5] = new Option("苍溪县","苍溪县#510824");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("船山区","船山区#510903");
			co[p][i][1] = new Option("安居区","安居区#510904");
			co[p][i][2] = new Option("蓬溪县","蓬溪县#510921");
			co[p][i][3] = new Option("射洪县","射洪县#510922");
			co[p][i][4] = new Option("大英县","大英县#510923");
		
		} else if(i == 9){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("东兴区","东兴区#511011");
			co[p][i][1] = new Option("威远县","威远县#511024");
			co[p][i][2] = new Option("资中县","资中县#511025");
			co[p][i][3] = new Option("隆昌县","隆昌县#511028");
		
		} else if(i == 10){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("沙湾区","沙湾区#511111");
			co[p][i][1] = new Option("五通桥区","五通桥区#511112");
			co[p][i][2] = new Option("金口河区","金口河区#511113");
			co[p][i][3] = new Option("犍为县","犍为县#511123");
			co[p][i][4] = new Option("井研县","井研县#511124");
			co[p][i][5] = new Option("夹江县","夹江县#511126");
			co[p][i][6] = new Option("沐川县","沐川县#511129");
			co[p][i][7] = new Option("峨边彝族自治县","峨边彝族自治县#511132");
			co[p][i][8] = new Option("马边彝族自治县","马边彝族自治县#511133");
			co[p][i][9] = new Option("峨眉山市","峨眉山市#511181");
		
		} else if(i == 11){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("顺庆区","顺庆区#511302");
			co[p][i][1] = new Option("高坪区","高坪区#511303");
			co[p][i][2] = new Option("嘉陵区","嘉陵区#511304");
			co[p][i][3] = new Option("南部县","南部县#511321");
			co[p][i][4] = new Option("营山县","营山县#511322");
			co[p][i][5] = new Option("蓬安县","蓬安县#511323");
			co[p][i][6] = new Option("仪陇县","仪陇县#511324");
			co[p][i][7] = new Option("西充县","西充县#511325");
			co[p][i][8] = new Option("阆中市","阆中市#511381");
		
		} else if(i == 12){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("东坡区","东坡区#511402");
			co[p][i][1] = new Option("仁寿县","仁寿县#511421");
			co[p][i][2] = new Option("彭山县","彭山县#511422");
			co[p][i][3] = new Option("洪雅县","洪雅县#511423");
			co[p][i][4] = new Option("丹棱县","丹棱县#511424");
			co[p][i][5] = new Option("青神县","青神县#511425");
		
		} else if(i == 13){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("翠屏区","翠屏区#511502");
			co[p][i][1] = new Option("宜宾县","宜宾县#511521");
			co[p][i][2] = new Option("南溪县","南溪县#511522");
			co[p][i][3] = new Option("江安县","江安县#511523");
			co[p][i][4] = new Option("长宁县","长宁县#511524");
			co[p][i][5] = new Option("高县","高县#511525");
			co[p][i][6] = new Option("珙县","珙县#511526");
			co[p][i][7] = new Option("筠连县","筠连县#511527");
			co[p][i][8] = new Option("兴文县","兴文县#511528");
			co[p][i][9] = new Option("屏山县","屏山县#511529");
		
		} else if(i == 14){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("广安区","广安区#511602");
			co[p][i][1] = new Option("岳池县","岳池县#511621");
			co[p][i][2] = new Option("武胜县","武胜县#511622");
			co[p][i][3] = new Option("邻水县","邻水县#511623");
			co[p][i][4] = new Option("华莹市","华莹市#511681");
		
		} else if(i == 15){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("通川区","通川区#511702");
			co[p][i][1] = new Option("达县","达县#511721");
			co[p][i][2] = new Option("宣汉县","宣汉县#511722");
			co[p][i][3] = new Option("开江县","开江县#511723");
			co[p][i][4] = new Option("大竹县","大竹县#511724");
			co[p][i][5] = new Option("渠县","渠县#511725");
			co[p][i][6] = new Option("万源市","万源市#511781");
		
		} else if(i == 16){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("雨城区","雨城区#511802");
			co[p][i][1] = new Option("名山县","名山县#511821");
			co[p][i][2] = new Option("荥经县","荥经县#511822");
			co[p][i][3] = new Option("汉源县","汉源县#511823");
			co[p][i][4] = new Option("石棉县","石棉县#511824");
			co[p][i][5] = new Option("天全县","天全县#511825");
			co[p][i][6] = new Option("芦山县","芦山县#511826");
			co[p][i][7] = new Option("宝兴县","宝兴县#511827");
		
		} else if(i == 17){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("巴州区","巴州区#511902");
			co[p][i][1] = new Option("通江县","通江县#511921");
			co[p][i][2] = new Option("南江县","南江县#511922");
			co[p][i][3] = new Option("平昌县","平昌县#511923");
		
		} else if(i == 18){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("雁江区","雁江区#512002");
			co[p][i][1] = new Option("安岳县","安岳县#512021");
			co[p][i][2] = new Option("乐至县","乐至县#512022");
			co[p][i][3] = new Option("简阳市","简阳市#512081");
		
		} else if(i == 19){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("汶川县","汶川县#513221");
			co[p][i][1] = new Option("理县","理县#513222");
			co[p][i][2] = new Option("茂县","茂县#513223");
			co[p][i][3] = new Option("松潘县","松潘县#513224");
			co[p][i][4] = new Option("九寨沟县","九寨沟县#513225");
			co[p][i][5] = new Option("金川县","金川县#513226");
			co[p][i][6] = new Option("小金县","小金县#513227");
			co[p][i][7] = new Option("黑水县","黑水县#513228");
			co[p][i][8] = new Option("马尔康县","马尔康县#513229");
			co[p][i][9] = new Option("壤塘县","壤塘县#513230");
			co[p][i][10] = new Option("阿坝县","阿坝县#513231");
			co[p][i][11] = new Option("若尔盖县","若尔盖县#513232");
			co[p][i][12] = new Option("红原县","红原县#513233");
		
		} else if(i == 20){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("康定县","康定县#513321");
			co[p][i][1] = new Option("泸定县","泸定县#513322");
			co[p][i][2] = new Option("丹巴县","丹巴县#513323");
			co[p][i][3] = new Option("九龙县","九龙县#513324");
			co[p][i][4] = new Option("雅江县","雅江县#513325");
			co[p][i][5] = new Option("道孚县","道孚县#513326");
			co[p][i][6] = new Option("炉霍县","炉霍县#513327");
			co[p][i][7] = new Option("甘孜县","甘孜县#513328");
			co[p][i][8] = new Option("新龙县","新龙县#513329");
			co[p][i][9] = new Option("德格县","德格县#513330");
			co[p][i][10] = new Option("白玉县","白玉县#513331");
			co[p][i][11] = new Option("石渠县","石渠县#513332");
			co[p][i][12] = new Option("色达县","色达县#513333");
			co[p][i][13] = new Option("理塘县","理塘县#513334");
			co[p][i][14] = new Option("巴塘县","巴塘县#513335");
			co[p][i][15] = new Option("乡城县","乡城县#513336");
			co[p][i][16] = new Option("稻城县","稻城县#513337");
			co[p][i][17] = new Option("得荣县","得荣县#513338");
		
		} else if(i == 21){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("西昌市","西昌市#513401");
			co[p][i][1] = new Option("木里藏族自治县","木里藏族自治县#513422");
			co[p][i][2] = new Option("盐源县","盐源县#513423");
			co[p][i][3] = new Option("德昌县","德昌县#513424");
			co[p][i][4] = new Option("会理县","会理县#513425");
			co[p][i][5] = new Option("会东县","会东县#513426");
			co[p][i][6] = new Option("宁南县","宁南县#513427");
			co[p][i][7] = new Option("普格县","普格县#513428");
			co[p][i][8] = new Option("布拖县","布拖县#513429");
			co[p][i][9] = new Option("金阳县","金阳县#513430");
			co[p][i][10] = new Option("昭觉县","昭觉县#513431");
			co[p][i][11] = new Option("喜德县","喜德县#513432");
			co[p][i][12] = new Option("冕宁县","冕宁县#513433");
			co[p][i][13] = new Option("越西县","越西县#513434");
			co[p][i][14] = new Option("甘洛县","甘洛县#513435");
			co[p][i][15] = new Option("美姑县","美姑县#513436");
			co[p][i][16] = new Option("雷波县","雷波县#513437");
		}
	
	}else if(p == 24){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("南明区","南明区#520102");
			co[p][i][1] = new Option("云岩区","云岩区#520103");
			co[p][i][2] = new Option("花溪区","花溪区#520111");
			co[p][i][3] = new Option("乌当区","乌当区#520112");
			co[p][i][4] = new Option("白云区","白云区#520113");
			co[p][i][5] = new Option("小河区","小河区#520114");
			co[p][i][6] = new Option("开阳县","开阳县#520121");
			co[p][i][7] = new Option("息烽县","息烽县#520122");
			co[p][i][8] = new Option("修文县","修文县#520123");
			co[p][i][9] = new Option("清镇市","清镇市#520181");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("钟山区","钟山区#520201");
			co[p][i][1] = new Option("六枝特区","六枝特区#520203");
			co[p][i][2] = new Option("水城县","水城县#520221");
			co[p][i][3] = new Option("盘县","盘县#520222");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("红花岗区","红花岗区#520302");
			co[p][i][1] = new Option("汇川区","汇川区#520303");
			co[p][i][2] = new Option("遵义县","遵义县#520321");
			co[p][i][3] = new Option("桐梓县","桐梓县#520322");
			co[p][i][4] = new Option("绥阳县","绥阳县#520323");
			co[p][i][5] = new Option("正安县","正安县#520324");
			co[p][i][6] = new Option("道真仡佬族苗族自治县","道真仡佬族苗族自治县#520325");
			co[p][i][7] = new Option("务川仡佬族苗族自治县","务川仡佬族苗族自治县#520326");
			co[p][i][8] = new Option("凤冈县","凤冈县#520327");
			co[p][i][9] = new Option("湄潭县","湄潭县#520328");
			co[p][i][10] = new Option("余庆县","余庆县#520329");
			co[p][i][11] = new Option("习水县","习水县#520330");
			co[p][i][12] = new Option("赤水市","赤水市#520381");
			co[p][i][13] = new Option("仁怀市","仁怀市#520382");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("西秀区","西秀区#520402");
			co[p][i][1] = new Option("平坝县","平坝县#520421");
			co[p][i][2] = new Option("普定县","普定县#520422");
			co[p][i][3] = new Option("镇宁布依族苗族自治县","镇宁布依族苗族自治县#520423");
			co[p][i][4] = new Option("关岭布依族苗族自治县","关岭布依族苗族自治县#520424");
			co[p][i][5] = new Option("紫云苗族布依族自治县","紫云苗族布依族自治县#520425");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("铜仁市","铜仁市#522201");
			co[p][i][1] = new Option("江口县","江口县#522222");
			co[p][i][2] = new Option("玉屏侗族自治县","玉屏侗族自治县#522223");
			co[p][i][3] = new Option("石阡县","石阡县#522224");
			co[p][i][4] = new Option("思南县","思南县#522225");
			co[p][i][5] = new Option("印江土家族苗族自治县","印江土家族苗族自治县#522226");
			co[p][i][6] = new Option("德江县","德江县#522227");
			co[p][i][7] = new Option("沿河土家族自治县","沿河土家族自治县#522228");
			co[p][i][8] = new Option("松桃苗族自治县","松桃苗族自治县#522229");
			co[p][i][9] = new Option("万山特区","万山特区#522230");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("兴义市","兴义市#522301");
			co[p][i][1] = new Option("兴仁县","兴仁县#522322");
			co[p][i][2] = new Option("普安县","普安县#522323");
			co[p][i][3] = new Option("晴隆县","晴隆县#522324");
			co[p][i][4] = new Option("贞丰县","贞丰县#522325");
			co[p][i][5] = new Option("望谟县","望谟县#522326");
			co[p][i][6] = new Option("册亨县","册亨县#522327");
			co[p][i][7] = new Option("安龙县","安龙县#522328");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("毕节市","毕节市#522401");
			co[p][i][1] = new Option("大方县","大方县#522422");
			co[p][i][2] = new Option("黔西县","黔西县#522423");
			co[p][i][3] = new Option("金沙县","金沙县#522424");
			co[p][i][4] = new Option("织金县","织金县#522425");
			co[p][i][5] = new Option("纳雍县","纳雍县#522426");
			co[p][i][6] = new Option("威宁彝族回族苗族自治县","威宁彝族回族苗族自治县#522427");
			co[p][i][7] = new Option("赫章县","赫章县#522428");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("凯里市","凯里市#522601");
			co[p][i][1] = new Option("黄平县","黄平县#522622");
			co[p][i][2] = new Option("施秉县","施秉县#522623");
			co[p][i][3] = new Option("三穗县","三穗县#522624");
			co[p][i][4] = new Option("镇远县","镇远县#522625");
			co[p][i][5] = new Option("岑巩县","岑巩县#522626");
			co[p][i][6] = new Option("天柱县","天柱县#522627");
			co[p][i][7] = new Option("锦屏县","锦屏县#522628");
			co[p][i][8] = new Option("剑河县","剑河县#522629");
			co[p][i][9] = new Option("台江县","台江县#522630");
			co[p][i][10] = new Option("黎平县","黎平县#522631");
			co[p][i][11] = new Option("榕江县","榕江县#522632");
			co[p][i][12] = new Option("从江县","从江县#522633");
			co[p][i][13] = new Option("雷山县","雷山县#522634");
			co[p][i][14] = new Option("麻江县","麻江县#522635");
			co[p][i][15] = new Option("丹寨县","丹寨县#522636");
		
		} else if(i == 9){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("都匀市","都匀市#522701");
			co[p][i][1] = new Option("福泉市","福泉市#522702");
			co[p][i][2] = new Option("荔波县","荔波县#522722");
			co[p][i][3] = new Option("贵定县","贵定县#522723");
			co[p][i][4] = new Option("瓮安县","瓮安县#522725");
			co[p][i][5] = new Option("独山县","独山县#522726");
			co[p][i][6] = new Option("平塘县","平塘县#522727");
			co[p][i][7] = new Option("罗甸县","罗甸县#522728");
			co[p][i][8] = new Option("长顺县","长顺县#522729");
			co[p][i][9] = new Option("龙里县","龙里县#522730");
			co[p][i][10] = new Option("惠水县","惠水县#522731");
			co[p][i][11] = new Option("三都水族自治县","三都水族自治县#522732");
		}
	
	}else if(p == 25){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("五华区","五华区#530102");
			co[p][i][1] = new Option("盘龙区","盘龙区#530103");
			co[p][i][2] = new Option("官渡区","官渡区#530111");
			co[p][i][3] = new Option("西山区","西山区#530112");
			co[p][i][4] = new Option("东川区","东川区#530113");
			co[p][i][5] = new Option("呈贡县","呈贡县#530121");
			co[p][i][6] = new Option("晋宁县","晋宁县#530122");
			co[p][i][7] = new Option("富民县","富民县#530124");
			co[p][i][8] = new Option("宜良县","宜良县#530125");
			co[p][i][9] = new Option("石林彝族自治县","石林彝族自治县#530126");
			co[p][i][10] = new Option("嵩明县","嵩明县#530127");
			co[p][i][11] = new Option("禄劝彝族苗族自治县","禄劝彝族苗族自治县#530128");
			co[p][i][12] = new Option("寻甸回族彝族自治县","寻甸回族彝族自治县#530129");
			co[p][i][13] = new Option("安宁市","安宁市#530181");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("麒麟区","麒麟区#530302");
			co[p][i][1] = new Option("马龙县","马龙县#530321");
			co[p][i][2] = new Option("陆良县","陆良县#530322");
			co[p][i][3] = new Option("师宗县","师宗县#530323");
			co[p][i][4] = new Option("罗平县","罗平县#530324");
			co[p][i][5] = new Option("富源县","富源县#530325");
			co[p][i][6] = new Option("会泽县","会泽县#530326");
			co[p][i][7] = new Option("沾益县","沾益县#530328");
			co[p][i][8] = new Option("宣威市","宣威市#530381");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("红塔区","红塔区#530402");
			co[p][i][1] = new Option("江川县","江川县#530421");
			co[p][i][2] = new Option("澄江县","澄江县#530422");
			co[p][i][3] = new Option("通海县","通海县#530423");
			co[p][i][4] = new Option("华宁县","华宁县#530424");
			co[p][i][5] = new Option("易门县","易门县#530425");
			co[p][i][6] = new Option("峨山彝族自治县","峨山彝族自治县#530426");
			co[p][i][7] = new Option("新平彝族傣族自治县","新平彝族傣族自治县#530427");
			co[p][i][8] = new Option("元江哈尼族彝族傣族自治县","元江哈尼族彝族傣族自治县#530428");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("隆阳区","隆阳区#530502");
			co[p][i][1] = new Option("施甸县","施甸县#530521");
			co[p][i][2] = new Option("腾冲县","腾冲县#530522");
			co[p][i][3] = new Option("龙陵县","龙陵县#530523");
			co[p][i][4] = new Option("昌宁县","昌宁县#530524");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("昭阳区","昭阳区#530602");
			co[p][i][1] = new Option("鲁甸县","鲁甸县#530621");
			co[p][i][2] = new Option("巧家县","巧家县#530622");
			co[p][i][3] = new Option("盐津县","盐津县#530623");
			co[p][i][4] = new Option("大关县","大关县#530624");
			co[p][i][5] = new Option("永善县","永善县#530625");
			co[p][i][6] = new Option("绥江县","绥江县#530626");
			co[p][i][7] = new Option("镇雄县","镇雄县#530627");
			co[p][i][8] = new Option("彝良县","彝良县#530628");
			co[p][i][9] = new Option("威信县","威信县#530629");
			co[p][i][10] = new Option("水富县","水富县#530630");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("古城区","古城区#530702");
			co[p][i][1] = new Option("玉龙纳西族自治县","玉龙纳西族自治县#530721");
			co[p][i][2] = new Option("永胜县","永胜县#530722");
			co[p][i][3] = new Option("华坪县","华坪县#530723");
			co[p][i][4] = new Option("宁蒗彝族自治县","宁蒗彝族自治县#530724");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("翠云区","翠云区#530802");
			co[p][i][1] = new Option("普洱哈尼族彝族自治县","普洱哈尼族彝族自治县#530821");
			co[p][i][2] = new Option("墨江哈尼族自治县","墨江哈尼族自治县#530822");
			co[p][i][3] = new Option("景东彝族自治县","景东彝族自治县#530823");
			co[p][i][4] = new Option("景谷傣族彝族自治县","景谷傣族彝族自治县#530824");
			co[p][i][5] = new Option("镇沅彝族哈尼族拉祜族自治县","镇沅彝族哈尼族拉祜族自治县#530825");
			co[p][i][6] = new Option("江城哈尼族彝族自治县","江城哈尼族彝族自治县#530826");
			co[p][i][7] = new Option("孟连傣族拉祜族佤族自治县","孟连傣族拉祜族佤族自治县#530827");
			co[p][i][8] = new Option("澜沧拉祜族自治县","澜沧拉祜族自治县#530828");
			co[p][i][9] = new Option("西盟佤族自治县","西盟佤族自治县#530829");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("临翔区","临翔区#530902");
			co[p][i][1] = new Option("凤庆县","凤庆县#530921");
			co[p][i][2] = new Option("云县","云县#530922");
			co[p][i][3] = new Option("永德县","永德县#530923");
			co[p][i][4] = new Option("镇康县","镇康县#530924");
			co[p][i][5] = new Option("双江拉祜族佤族布朗族傣族自治县","双江拉祜族佤族布朗族傣族自治县#530925");
			co[p][i][6] = new Option("耿马傣族佤族自治县","耿马傣族佤族自治县#530926");
			co[p][i][7] = new Option("沧源佤族自治县","沧源佤族自治县#530927");
		
		} else if(i == 9){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("楚雄市","楚雄市#532301");
			co[p][i][1] = new Option("双柏县","双柏县#532322");
			co[p][i][2] = new Option("牟定县","牟定县#532323");
			co[p][i][3] = new Option("南华县","南华县#532324");
			co[p][i][4] = new Option("姚安县","姚安县#532325");
			co[p][i][5] = new Option("大姚县","大姚县#532326");
			co[p][i][6] = new Option("永仁县","永仁县#532327");
			co[p][i][7] = new Option("元谋县","元谋县#532328");
			co[p][i][8] = new Option("武定县","武定县#532329");
			co[p][i][9] = new Option("禄丰县","禄丰县#532331");
		
		} else if(i == 10){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("个旧市","个旧市#532501");
			co[p][i][1] = new Option("开远市","开远市#532502");
			co[p][i][2] = new Option("蒙自县","蒙自县#532522");
			co[p][i][3] = new Option("屏边苗族自治县","屏边苗族自治县#532523");
			co[p][i][4] = new Option("建水县","建水县#532524");
			co[p][i][5] = new Option("石屏县","石屏县#532525");
			co[p][i][6] = new Option("弥勒县","弥勒县#532526");
			co[p][i][7] = new Option("泸西县","泸西县#532527");
			co[p][i][8] = new Option("元阳县","元阳县#532528");
			co[p][i][9] = new Option("红河县","红河县#532529");
			co[p][i][10] = new Option("金平苗族瑶族傣族自治县","金平苗族瑶族傣族自治县#532530");
			co[p][i][11] = new Option("绿春县","绿春县#532531");
			co[p][i][12] = new Option("河口瑶族自治县","河口瑶族自治县#532532");
		
		} else if(i == 11){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("文山县","文山县#532621");
			co[p][i][1] = new Option("砚山县","砚山县#532622");
			co[p][i][2] = new Option("西畴县","西畴县#532623");
			co[p][i][3] = new Option("麻栗坡县","麻栗坡县#532624");
			co[p][i][4] = new Option("马关县","马关县#532625");
			co[p][i][5] = new Option("丘北县","丘北县#532626");
			co[p][i][6] = new Option("广南县","广南县#532627");
			co[p][i][7] = new Option("富宁县","富宁县#532628");
		
		} else if(i == 12){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("景洪市","景洪市#532801");
			co[p][i][1] = new Option("勐海县","勐海县#532822");
			co[p][i][2] = new Option("勐腊县","勐腊县#532823");
		
		} else if(i == 13){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("大理市","大理市#532901");
			co[p][i][1] = new Option("漾濞彝族自治县","漾濞彝族自治县#532922");
			co[p][i][2] = new Option("祥云县","祥云县#532923");
			co[p][i][3] = new Option("宾川县","宾川县#532924");
			co[p][i][4] = new Option("弥渡县","弥渡县#532925");
			co[p][i][5] = new Option("南涧彝族自治县","南涧彝族自治县#532926");
			co[p][i][6] = new Option("巍山彝族回族自治县","巍山彝族回族自治县#532927");
			co[p][i][7] = new Option("永平县","永平县#532928");
			co[p][i][8] = new Option("云龙县","云龙县#532929");
			co[p][i][9] = new Option("洱源县","洱源县#532930");
			co[p][i][10] = new Option("剑川县","剑川县#532931");
			co[p][i][11] = new Option("鹤庆县","鹤庆县#532932");
		
		} else if(i == 14){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("瑞丽市","瑞丽市#533102");
			co[p][i][1] = new Option("潞西市","潞西市#533103");
			co[p][i][2] = new Option("梁河县","梁河县#533122");
			co[p][i][3] = new Option("盈江县","盈江县#533123");
			co[p][i][4] = new Option("陇川县","陇川县#533124");
		
		} else if(i == 15){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("泸水县","泸水县#533321");
			co[p][i][1] = new Option("福贡县","福贡县#533323");
			co[p][i][2] = new Option("贡山独龙族怒族自治县","贡山独龙族怒族自治县#533324");
			co[p][i][3] = new Option("兰坪白族普米族自治县","兰坪白族普米族自治县#533325");
		
		} else if(i == 16){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("香格里拉县","香格里拉县#533421");
			co[p][i][1] = new Option("德钦县","德钦县#533422");
			co[p][i][2] = new Option("维西傈僳族自治县","维西傈僳族自治县#533423");
		}
	
	}else if(p == 26){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("城关区","城关区#540102");
			co[p][i][1] = new Option("林周县","林周县#540121");
			co[p][i][2] = new Option("当雄县","当雄县#540122");
			co[p][i][3] = new Option("尼木县","尼木县#540123");
			co[p][i][4] = new Option("曲水县","曲水县#540124");
			co[p][i][5] = new Option("堆龙德庆县","堆龙德庆县#540125");
			co[p][i][6] = new Option("达孜县","达孜县#540126");
			co[p][i][7] = new Option("墨竹工卡县","墨竹工卡县#540127");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("昌都县","昌都县#542121");
			co[p][i][1] = new Option("江达县","江达县#542122");
			co[p][i][2] = new Option("贡觉县","贡觉县#542123");
			co[p][i][3] = new Option("类乌齐县","类乌齐县#542124");
			co[p][i][4] = new Option("丁青县","丁青县#542125");
			co[p][i][5] = new Option("察雅县","察雅县#542126");
			co[p][i][6] = new Option("八宿县","八宿县#542127");
			co[p][i][7] = new Option("左贡县","左贡县#542128");
			co[p][i][8] = new Option("芒康县","芒康县#542129");
			co[p][i][9] = new Option("洛隆县","洛隆县#542132");
			co[p][i][10] = new Option("边坝县","边坝县#542133");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("乃东县","乃东县#542221");
			co[p][i][1] = new Option("扎囊县","扎囊县#542222");
			co[p][i][2] = new Option("贡嘎县","贡嘎县#542223");
			co[p][i][3] = new Option("桑日县","桑日县#542224");
			co[p][i][4] = new Option("琼结县","琼结县#542225");
			co[p][i][5] = new Option("曲松县","曲松县#542226");
			co[p][i][6] = new Option("措美县","措美县#542227");
			co[p][i][7] = new Option("洛扎县","洛扎县#542228");
			co[p][i][8] = new Option("加查县","加查县#542229");
			co[p][i][9] = new Option("隆子县","隆子县#542231");
			co[p][i][10] = new Option("错那县","错那县#542232");
			co[p][i][11] = new Option("浪卡子县","浪卡子县#542233");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("日喀则市","日喀则市#542301");
			co[p][i][1] = new Option("南木林县","南木林县#542322");
			co[p][i][2] = new Option("江孜县","江孜县#542323");
			co[p][i][3] = new Option("定日县","定日县#542324");
			co[p][i][4] = new Option("萨迦县","萨迦县#542325");
			co[p][i][5] = new Option("拉孜县","拉孜县#542326");
			co[p][i][6] = new Option("昂仁县","昂仁县#542327");
			co[p][i][7] = new Option("谢通门县","谢通门县#542328");
			co[p][i][8] = new Option("白朗县","白朗县#542329");
			co[p][i][9] = new Option("仁布县","仁布县#542330");
			co[p][i][10] = new Option("康马县","康马县#542331");
			co[p][i][11] = new Option("定结县","定结县#542332");
			co[p][i][12] = new Option("仲巴县","仲巴县#542333");
			co[p][i][13] = new Option("亚东县","亚东县#542334");
			co[p][i][14] = new Option("吉隆县","吉隆县#542335");
			co[p][i][15] = new Option("聂拉木县","聂拉木县#542336");
			co[p][i][16] = new Option("萨嘎县","萨嘎县#542337");
			co[p][i][17] = new Option("岗巴县","岗巴县#542338");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("那曲县","那曲县#542421");
			co[p][i][1] = new Option("嘉黎县","嘉黎县#542422");
			co[p][i][2] = new Option("比如县","比如县#542423");
			co[p][i][3] = new Option("聂荣县","聂荣县#542424");
			co[p][i][4] = new Option("安多县","安多县#542425");
			co[p][i][5] = new Option("申扎县","申扎县#542426");
			co[p][i][6] = new Option("索县","索县#542427");
			co[p][i][7] = new Option("班戈县","班戈县#542428");
			co[p][i][8] = new Option("巴青县","巴青县#542429");
			co[p][i][9] = new Option("尼玛县","尼玛县#542430");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("普兰县","普兰县#542521");
			co[p][i][1] = new Option("札达县","札达县#542522");
			co[p][i][2] = new Option("噶尔县","噶尔县#542523");
			co[p][i][3] = new Option("日土县","日土县#542524");
			co[p][i][4] = new Option("革吉县","革吉县#542525");
			co[p][i][5] = new Option("改则县","改则县#542526");
			co[p][i][6] = new Option("措勤县","措勤县#542527");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("林芝县","林芝县#542621");
			co[p][i][1] = new Option("工布江达县","工布江达县#542622");
			co[p][i][2] = new Option("米林县","米林县#542623");
			co[p][i][3] = new Option("墨脱县","墨脱县#542624");
			co[p][i][4] = new Option("波密县","波密县#542625");
			co[p][i][5] = new Option("察隅县","察隅县#542626");
			co[p][i][6] = new Option("朗县","朗县#542627");
		}
	
	}else if(p == 27){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("新城区","新城区#610102");
			co[p][i][1] = new Option("碑林区","碑林区#610103");
			co[p][i][2] = new Option("莲湖区","莲湖区#610104");
			co[p][i][3] = new Option("灞桥区","灞桥区#610111");
			co[p][i][4] = new Option("未央区","未央区#610112");
			co[p][i][5] = new Option("雁塔区","雁塔区#610113");
			co[p][i][6] = new Option("阎良区","阎良区#610114");
			co[p][i][7] = new Option("临潼区","临潼区#610115");
			co[p][i][8] = new Option("长安区","长安区#610116");
			co[p][i][9] = new Option("蓝田县","蓝田县#610122");
			co[p][i][10] = new Option("周至县","周至县#610124");
			co[p][i][11] = new Option("户县","户县#610125");
			co[p][i][12] = new Option("高陵县","高陵县#610126");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("王益区","王益区#610202");
			co[p][i][1] = new Option("印台区","印台区#610203");
			co[p][i][2] = new Option("耀州区","耀州区#610204");
			co[p][i][3] = new Option("宜君县","宜君县#610222");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("渭滨区","渭滨区#610302");
			co[p][i][1] = new Option("金台区","金台区#610303");
			co[p][i][2] = new Option("陈仓区","陈仓区#610304");
			co[p][i][3] = new Option("凤翔县","凤翔县#610322");
			co[p][i][4] = new Option("岐山县","岐山县#610323");
			co[p][i][5] = new Option("扶风县","扶风县#610324");
			co[p][i][6] = new Option("眉县","眉县#610326");
			co[p][i][7] = new Option("陇县","陇县#610327");
			co[p][i][8] = new Option("千阳县","千阳县#610328");
			co[p][i][9] = new Option("麟游县","麟游县#610329");
			co[p][i][10] = new Option("凤县","凤县#610330");
			co[p][i][11] = new Option("太白县","太白县#610331");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("秦都区","秦都区#610402");
			co[p][i][1] = new Option("杨凌区","杨凌区#610403");
			co[p][i][2] = new Option("渭城区","渭城区#610404");
			co[p][i][3] = new Option("三原县","三原县#610422");
			co[p][i][4] = new Option("泾阳县","泾阳县#610423");
			co[p][i][5] = new Option("乾县","乾县#610424");
			co[p][i][6] = new Option("礼泉县","礼泉县#610425");
			co[p][i][7] = new Option("永寿县","永寿县#610426");
			co[p][i][8] = new Option("彬县","彬县#610427");
			co[p][i][9] = new Option("长武县","长武县#610428");
			co[p][i][10] = new Option("旬邑县","旬邑县#610429");
			co[p][i][11] = new Option("淳化县","淳化县#610430");
			co[p][i][12] = new Option("武功县","武功县#610431");
			co[p][i][13] = new Option("兴平市","兴平市#610481");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("临渭区","临渭区#610502");
			co[p][i][1] = new Option("华县","华县#610521");
			co[p][i][2] = new Option("潼关县","潼关县#610522");
			co[p][i][3] = new Option("大荔县","大荔县#610523");
			co[p][i][4] = new Option("合阳县","合阳县#610524");
			co[p][i][5] = new Option("澄城县","澄城县#610525");
			co[p][i][6] = new Option("蒲城县","蒲城县#610526");
			co[p][i][7] = new Option("白水县","白水县#610527");
			co[p][i][8] = new Option("富平县","富平县#610528");
			co[p][i][9] = new Option("韩城市","韩城市#610581");
			co[p][i][10] = new Option("华阴市","华阴市#610582");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("宝塔区","宝塔区#610602");
			co[p][i][1] = new Option("延长县","延长县#610621");
			co[p][i][2] = new Option("延川县","延川县#610622");
			co[p][i][3] = new Option("子长县","子长县#610623");
			co[p][i][4] = new Option("安塞县","安塞县#610624");
			co[p][i][5] = new Option("志丹县","志丹县#610625");
			co[p][i][6] = new Option("吴旗县","吴旗县#610626");
			co[p][i][7] = new Option("甘泉县","甘泉县#610627");
			co[p][i][8] = new Option("富县","富县#610628");
			co[p][i][9] = new Option("洛川县","洛川县#610629");
			co[p][i][10] = new Option("宜川县","宜川县#610630");
			co[p][i][11] = new Option("黄龙县","黄龙县#610631");
			co[p][i][12] = new Option("黄陵县","黄陵县#610632");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("汉台区","汉台区#610702");
			co[p][i][1] = new Option("南郑县","南郑县#610721");
			co[p][i][2] = new Option("城固县","城固县#610722");
			co[p][i][3] = new Option("洋县","洋县#610723");
			co[p][i][4] = new Option("西乡县","西乡县#610724");
			co[p][i][5] = new Option("勉县","勉县#610725");
			co[p][i][6] = new Option("宁强县","宁强县#610726");
			co[p][i][7] = new Option("略阳县","略阳县#610727");
			co[p][i][8] = new Option("镇巴县","镇巴县#610728");
			co[p][i][9] = new Option("留坝县","留坝县#610729");
			co[p][i][10] = new Option("佛坪县","佛坪县#610730");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("榆阳区","榆阳区#610802");
			co[p][i][1] = new Option("神木县","神木县#610821");
			co[p][i][2] = new Option("府谷县","府谷县#610822");
			co[p][i][3] = new Option("横山县","横山县#610823");
			co[p][i][4] = new Option("靖边县","靖边县#610824");
			co[p][i][5] = new Option("定边县","定边县#610825");
			co[p][i][6] = new Option("绥德县","绥德县#610826");
			co[p][i][7] = new Option("米脂县","米脂县#610827");
			co[p][i][8] = new Option("佳县","佳县#610828");
			co[p][i][9] = new Option("吴堡县","吴堡县#610829");
			co[p][i][10] = new Option("清涧县","清涧县#610830");
			co[p][i][11] = new Option("子洲县","子洲县#610831");
		
		} else if(i == 9){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("汉滨区","汉滨区#610902");
			co[p][i][1] = new Option("汉阴县","汉阴县#610921");
			co[p][i][2] = new Option("石泉县","石泉县#610922");
			co[p][i][3] = new Option("宁陕县","宁陕县#610923");
			co[p][i][4] = new Option("紫阳县","紫阳县#610924");
			co[p][i][5] = new Option("岚皋县","岚皋县#610925");
			co[p][i][6] = new Option("平利县","平利县#610926");
			co[p][i][7] = new Option("镇坪县","镇坪县#610927");
			co[p][i][8] = new Option("旬阳县","旬阳县#610928");
			co[p][i][9] = new Option("白河县","白河县#610929");
		
		} else if(i == 10){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("商州区","商州区#611002");
			co[p][i][1] = new Option("洛南县","洛南县#611021");
			co[p][i][2] = new Option("丹凤县","丹凤县#611022");
			co[p][i][3] = new Option("商南县","商南县#611023");
			co[p][i][4] = new Option("山阳县","山阳县#611024");
			co[p][i][5] = new Option("镇安县","镇安县#611025");
			co[p][i][6] = new Option("柞水县","柞水县#611026");
		}
	
	}else if(p == 28){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("城关区","城关区#620102");
			co[p][i][1] = new Option("七里河区","七里河区#620103");
			co[p][i][2] = new Option("西固区","西固区#620104");
			co[p][i][3] = new Option("安宁区","安宁区#620105");
			co[p][i][4] = new Option("红古区","红古区#620111");
			co[p][i][5] = new Option("永登县","永登县#620121");
			co[p][i][6] = new Option("皋兰县","皋兰县#620122");
			co[p][i][7] = new Option("榆中县","榆中县#620123");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("金川区","金川区#620302");
			co[p][i][1] = new Option("永昌县","永昌县#620321");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("白银区","白银区#620402");
			co[p][i][1] = new Option("平川区","平川区#620403");
			co[p][i][2] = new Option("靖远县","靖远县#620421");
			co[p][i][3] = new Option("会宁县","会宁县#620422");
			co[p][i][4] = new Option("景泰县","景泰县#620423");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("秦城区","秦城区#620502");
			co[p][i][1] = new Option("北道区","北道区#620503");
			co[p][i][2] = new Option("清水县","清水县#620521");
			co[p][i][3] = new Option("秦安县","秦安县#620522");
			co[p][i][4] = new Option("甘谷县","甘谷县#620523");
			co[p][i][5] = new Option("武山县","武山县#620524");
			co[p][i][6] = new Option("张家川回族自治县","张家川回族自治县#620525");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("凉州区","凉州区#620602");
			co[p][i][1] = new Option("民勤县","民勤县#620621");
			co[p][i][2] = new Option("古浪县","古浪县#620622");
			co[p][i][3] = new Option("天祝藏族自治县","天祝藏族自治县#620623");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("甘州区","甘州区#620702");
			co[p][i][1] = new Option("肃南裕固族自治县","肃南裕固族自治县#620721");
			co[p][i][2] = new Option("民乐县","民乐县#620722");
			co[p][i][3] = new Option("临泽县","临泽县#620723");
			co[p][i][4] = new Option("高台县","高台县#620724");
			co[p][i][5] = new Option("山丹县","山丹县#620725");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("崆峒区","崆峒区#620802");
			co[p][i][1] = new Option("泾川县","泾川县#620821");
			co[p][i][2] = new Option("灵台县","灵台县#620822");
			co[p][i][3] = new Option("崇信县","崇信县#620823");
			co[p][i][4] = new Option("华亭县","华亭县#620824");
			co[p][i][5] = new Option("庄浪县","庄浪县#620825");
			co[p][i][6] = new Option("静宁县","静宁县#620826");
		
		} else if(i == 9){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("肃州区","肃州区#620902");
			co[p][i][1] = new Option("金塔县","金塔县#620921");
			co[p][i][2] = new Option("安西县","安西县#620922");
			co[p][i][3] = new Option("肃北蒙古族自治县","肃北蒙古族自治县#620923");
			co[p][i][4] = new Option("阿克塞哈萨克族自治县","阿克塞哈萨克族自治县#620924");
			co[p][i][5] = new Option("玉门市","玉门市#620981");
			co[p][i][6] = new Option("敦煌市","敦煌市#620982");
		
		} else if(i == 10){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("西峰区","西峰区#621002");
			co[p][i][1] = new Option("庆城县","庆城县#621021");
			co[p][i][2] = new Option("环县","环县#621022");
			co[p][i][3] = new Option("华池县","华池县#621023");
			co[p][i][4] = new Option("合水县","合水县#621024");
			co[p][i][5] = new Option("正宁县","正宁县#621025");
			co[p][i][6] = new Option("宁县","宁县#621026");
			co[p][i][7] = new Option("镇原县","镇原县#621027");
		
		} else if(i == 11){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("安定区","安定区#621102");
			co[p][i][1] = new Option("通渭县","通渭县#621121");
			co[p][i][2] = new Option("陇西县","陇西县#621122");
			co[p][i][3] = new Option("渭源县","渭源县#621123");
			co[p][i][4] = new Option("临洮县","临洮县#621124");
			co[p][i][5] = new Option("漳县","漳县#621125");
			co[p][i][6] = new Option("岷县","岷县#621126");
		
		} else if(i == 12){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("武都区","武都区#621202");
			co[p][i][1] = new Option("成县","成县#621221");
			co[p][i][2] = new Option("文县","文县#621222");
			co[p][i][3] = new Option("宕昌县","宕昌县#621223");
			co[p][i][4] = new Option("康县","康县#621224");
			co[p][i][5] = new Option("西和县","西和县#621225");
			co[p][i][6] = new Option("礼县","礼县#621226");
			co[p][i][7] = new Option("徽县","徽县#621227");
			co[p][i][8] = new Option("两当县","两当县#621228");
		
		} else if(i == 13){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("临夏市","临夏市#622901");
			co[p][i][1] = new Option("临夏县","临夏县#622921");
			co[p][i][2] = new Option("康乐县","康乐县#622922");
			co[p][i][3] = new Option("永靖县","永靖县#622923");
			co[p][i][4] = new Option("广河县","广河县#622924");
			co[p][i][5] = new Option("和政县","和政县#622925");
			co[p][i][6] = new Option("东乡族自治县","东乡族自治县#622926");
			co[p][i][7] = new Option("积石山保安族东乡族撒拉族自治县","积石山保安族东乡族撒拉族自治县#622927");
		
		} else if(i == 14){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("合作市","合作市#623001");
			co[p][i][1] = new Option("临潭县","临潭县#623021");
			co[p][i][2] = new Option("卓尼县","卓尼县#623022");
			co[p][i][3] = new Option("舟曲县","舟曲县#623023");
			co[p][i][4] = new Option("迭部县","迭部县#623024");
			co[p][i][5] = new Option("玛曲县","玛曲县#623025");
			co[p][i][6] = new Option("碌曲县","碌曲县#623026");
			co[p][i][7] = new Option("夏河县","夏河县#623027");
		
		} else if(i == 15){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("安定区","安定区#623101");
			co[p][i][1] = new Option("陇西县","陇西县#623102");
			co[p][i][2] = new Option("渭源县","渭源县#623103");
			co[p][i][3] = new Option("临洮县","临洮县#623104");
			co[p][i][4] = new Option("通渭县","通渭县#623105");
			co[p][i][5] = new Option("岷县","岷县#623106");
			co[p][i][6] = new Option("漳县","漳县#623107");
		}
	
	}else if(p == 29){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("城东区","城东区#630102");
			co[p][i][1] = new Option("城中区","城中区#630103");
			co[p][i][2] = new Option("城西区","城西区#630104");
			co[p][i][3] = new Option("城北区","城北区#630105");
			co[p][i][4] = new Option("大通回族土族自治县","大通回族土族自治县#630121");
			co[p][i][5] = new Option("湟中县","湟中县#630122");
			co[p][i][6] = new Option("湟源县","湟源县#630123");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("平安县","平安县#632121");
			co[p][i][1] = new Option("民和回族土族自治县","民和回族土族自治县#632122");
			co[p][i][2] = new Option("乐都县","乐都县#632123");
			co[p][i][3] = new Option("互助土族自治县","互助土族自治县#632126");
			co[p][i][4] = new Option("化隆回族自治县","化隆回族自治县#632127");
			co[p][i][5] = new Option("循化撒拉族自治县","循化撒拉族自治县#632128");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("门源回族自治县","门源回族自治县#632221");
			co[p][i][1] = new Option("祁连县","祁连县#632222");
			co[p][i][2] = new Option("海晏县","海晏县#632223");
			co[p][i][3] = new Option("刚察县","刚察县#632224");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("同仁县","同仁县#632321");
			co[p][i][1] = new Option("尖扎县","尖扎县#632322");
			co[p][i][2] = new Option("泽库县","泽库县#632323");
			co[p][i][3] = new Option("河南蒙古族自治县","河南蒙古族自治县#632324");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("共和县","共和县#632521");
			co[p][i][1] = new Option("同德县","同德县#632522");
			co[p][i][2] = new Option("贵德县","贵德县#632523");
			co[p][i][3] = new Option("兴海县","兴海县#632524");
			co[p][i][4] = new Option("贵南县","贵南县#632525");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("玛沁县","玛沁县#632621");
			co[p][i][1] = new Option("班玛县","班玛县#632622");
			co[p][i][2] = new Option("甘德县","甘德县#632623");
			co[p][i][3] = new Option("达日县","达日县#632624");
			co[p][i][4] = new Option("久治县","久治县#632625");
			co[p][i][5] = new Option("玛多县","玛多县#632626");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("玉树县","玉树县#632721");
			co[p][i][1] = new Option("杂多县","杂多县#632722");
			co[p][i][2] = new Option("称多县","称多县#632723");
			co[p][i][3] = new Option("治多县","治多县#632724");
			co[p][i][4] = new Option("囊谦县","囊谦县#632725");
			co[p][i][5] = new Option("曲麻莱县","曲麻莱县#632726");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("格尔木市","格尔木市#632801");
			co[p][i][1] = new Option("德令哈市","德令哈市#632802");
			co[p][i][2] = new Option("乌兰县","乌兰县#632821");
			co[p][i][3] = new Option("都兰县","都兰县#632822");
			co[p][i][4] = new Option("天峻县","天峻县#632823");
		}
	
	}else if(p == 30){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("兴庆区","兴庆区#640104");
			co[p][i][1] = new Option("西夏区","西夏区#640105");
			co[p][i][2] = new Option("金凤区","金凤区#640106");
			co[p][i][3] = new Option("永宁县","永宁县#640121");
			co[p][i][4] = new Option("贺兰县","贺兰县#640122");
			co[p][i][5] = new Option("灵武市","灵武市#640181");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("大武口区","大武口区#640202");
			co[p][i][1] = new Option("惠农区","惠农区#640205");
			co[p][i][2] = new Option("平罗县","平罗县#640221");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("利通区","利通区#640302");
			co[p][i][1] = new Option("盐池县","盐池县#640323");
			co[p][i][2] = new Option("同心县","同心县#640324");
			co[p][i][3] = new Option("青铜峡市","青铜峡市#640381");
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("原州区","原州区#640402");
			co[p][i][1] = new Option("西吉县","西吉县#640422");
			co[p][i][2] = new Option("隆德县","隆德县#640423");
			co[p][i][3] = new Option("泾源县","泾源县#640424");
			co[p][i][4] = new Option("彭阳县","彭阳县#640425");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("沙坡头区","沙坡头区#640502");
			co[p][i][1] = new Option("中宁县","中宁县#640521");
			co[p][i][2] = new Option("海原县","海原县#640522");
		}
	
	}else if(p == 31){
		if(i == 0){
			co[p] = new Array();
			co[p][i] = new Array();
		    co[p][i][0] = new Option("请选择区","");
		} else if(i == 1){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("天山区","天山区#650102");
			co[p][i][1] = new Option("沙依巴克区","沙依巴克区#650103");
			co[p][i][2] = new Option("新市区","新市区#650104");
			co[p][i][3] = new Option("水磨沟区","水磨沟区#650105");
			co[p][i][4] = new Option("头屯河区","头屯河区#650106");
			co[p][i][5] = new Option("达坂城区","达坂城区#650107");
			co[p][i][6] = new Option("东山区","东山区#650108");
			co[p][i][7] = new Option("乌鲁木齐县","乌鲁木齐县#650121");
		
		} else if(i == 2){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("独山子区","独山子区#650202");
			co[p][i][1] = new Option("克拉玛依区","克拉玛依区#650203");
			co[p][i][2] = new Option("白碱滩区","白碱滩区#650204");
			co[p][i][3] = new Option("乌尔禾区","乌尔禾区#650205");
		
		} else if(i == 3){
			co[p] = new Array();
			co[p][i] = new Array();
		
		} else if(i == 4){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("吐鲁番市","吐鲁番市#652101");
			co[p][i][1] = new Option("鄯善县","鄯善县#652122");
			co[p][i][2] = new Option("托克逊县","托克逊县#652123");
		
		} else if(i == 5){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("哈密市","哈密市#652201");
			co[p][i][1] = new Option("巴里坤哈萨克自治县","巴里坤哈萨克自治县#652222");
			co[p][i][2] = new Option("伊吾县","伊吾县#652223");
		
		} else if(i == 6){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("昌吉市","昌吉市#652301");
			co[p][i][1] = new Option("阜康市","阜康市#652302");
			co[p][i][2] = new Option("米泉市","米泉市#652303");
			co[p][i][3] = new Option("呼图壁县","呼图壁县#652323");
			co[p][i][4] = new Option("玛纳斯县","玛纳斯县#652324");
			co[p][i][5] = new Option("奇台县","奇台县#652325");
			co[p][i][6] = new Option("吉木萨尔县","吉木萨尔县#652327");
			co[p][i][7] = new Option("木垒哈萨克自治县","木垒哈萨克自治县#652328");
		
		} else if(i == 7){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("博乐市","博乐市#652701");
			co[p][i][1] = new Option("精河县","精河县#652722");
			co[p][i][2] = new Option("温泉县","温泉县#652723");
		
		} else if(i == 8){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("库尔勒市","库尔勒市#652801");
			co[p][i][1] = new Option("轮台县","轮台县#652822");
			co[p][i][2] = new Option("尉犁县","尉犁县#652823");
			co[p][i][3] = new Option("若羌县","若羌县#652824");
			co[p][i][4] = new Option("且末县","且末县#652825");
			co[p][i][5] = new Option("焉耆回族自治县","焉耆回族自治县#652826");
			co[p][i][6] = new Option("和静县","和静县#652827");
			co[p][i][7] = new Option("和硕县","和硕县#652828");
			co[p][i][8] = new Option("博湖县","博湖县#652829");
		
		} else if(i == 9){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("阿克苏市","阿克苏市#652901");
			co[p][i][1] = new Option("温宿县","温宿县#652922");
			co[p][i][2] = new Option("库车县","库车县#652923");
			co[p][i][3] = new Option("沙雅县","沙雅县#652924");
			co[p][i][4] = new Option("新和县","新和县#652925");
			co[p][i][5] = new Option("拜城县","拜城县#652926");
			co[p][i][6] = new Option("乌什县","乌什县#652927");
			co[p][i][7] = new Option("阿瓦提县","阿瓦提县#652928");
			co[p][i][8] = new Option("柯坪县","柯坪县#652929");
		
		} else if(i == 10){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("阿图什市","阿图什市#653001");
			co[p][i][1] = new Option("阿克陶县","阿克陶县#653022");
			co[p][i][2] = new Option("阿合奇县","阿合奇县#653023");
			co[p][i][3] = new Option("乌恰县","乌恰县#653024");
		
		} else if(i == 11){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("喀什市","喀什市#653101");
			co[p][i][1] = new Option("疏附县","疏附县#653121");
			co[p][i][2] = new Option("疏勒县","疏勒县#653122");
			co[p][i][3] = new Option("英吉沙县","英吉沙县#653123");
			co[p][i][4] = new Option("泽普县","泽普县#653124");
			co[p][i][5] = new Option("莎车县","莎车县#653125");
			co[p][i][6] = new Option("叶城县","叶城县#653126");
			co[p][i][7] = new Option("麦盖提县","麦盖提县#653127");
			co[p][i][8] = new Option("岳普湖县","岳普湖县#653128");
			co[p][i][9] = new Option("伽师县","伽师县#653129");
			co[p][i][10] = new Option("巴楚县","巴楚县#653130");
			co[p][i][11] = new Option("塔什库尔干塔吉克自治县","塔什库尔干塔吉克自治县#653131");
		
		} else if(i == 12){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("和田市","和田市#653201");
			co[p][i][1] = new Option("和田县","和田县#653221");
			co[p][i][2] = new Option("墨玉县","墨玉县#653222");
			co[p][i][3] = new Option("皮山县","皮山县#653223");
			co[p][i][4] = new Option("洛浦县","洛浦县#653224");
			co[p][i][5] = new Option("策勒县","策勒县#653225");
			co[p][i][6] = new Option("于田县","于田县#653226");
			co[p][i][7] = new Option("民丰县","民丰县#653227");
		
		} else if(i == 13){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("伊宁市","伊宁市#654002");
			co[p][i][1] = new Option("奎屯市","奎屯市#654003");
			co[p][i][2] = new Option("伊宁县","伊宁县#654021");
			co[p][i][3] = new Option("察布查尔锡伯自治县","察布查尔锡伯自治县#654022");
			co[p][i][4] = new Option("霍城县","霍城县#654023");
			co[p][i][5] = new Option("巩留县","巩留县#654024");
			co[p][i][6] = new Option("新源县","新源县#654025");
			co[p][i][7] = new Option("昭苏县","昭苏县#654026");
			co[p][i][8] = new Option("特克斯县","特克斯县#654027");
			co[p][i][9] = new Option("尼勒克县","尼勒克县#654028");
		
		} else if(i == 14){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("塔城市","塔城市#654201");
			co[p][i][1] = new Option("乌苏市","乌苏市#654202");
			co[p][i][2] = new Option("额敏县","额敏县#654221");
			co[p][i][3] = new Option("沙湾县","沙湾县#654223");
			co[p][i][4] = new Option("托里县","托里县#654224");
			co[p][i][5] = new Option("裕民县","裕民县#654225");
			co[p][i][6] = new Option("和布克赛尔蒙古自治县","和布克赛尔蒙古自治县#654226");
		
		} else if(i == 15){
			co[p] = new Array();
			co[p][i] = new Array();
			co[p][i][0] = new Option("阿勒泰市","阿勒泰市#654301");
			co[p][i][1] = new Option("布尔津县","布尔津县#654321");
			co[p][i][2] = new Option("富蕴县","富蕴县#654322");
			co[p][i][3] = new Option("福海县","福海县#654323");
			co[p][i][4] = new Option("哈巴河县","哈巴河县#654324");
			co[p][i][5] = new Option("青河县","青河县#654325");
			co[p][i][6] = new Option("吉木乃县","吉木乃县#654326");
		}
	}
	return co;
}

provinceOp = new provinceList();

function delCity(city , area)
{
	var len = city.length;
	for(i=0; i<len; i++)
	{
		city.remove(0);
	}
	delArea(area);
}

function delArea(area){
	var len = area.length;
	for ( i = 0; i < len; i++) {
		area.remove(0);
	}
}

function addCity(prov, city , cityID)
{
	var index = prov.selectedIndex;
	var cityOp = cityList(index);
	var len = cityOp[index].length;
	for(j=0; j<len; j++)
	{
		city.options.add(cityOp[index][j]);
		if(cityID){
			var _v = city.options[j].value;
			if(_v.substring(0, _v.indexOf('#')) == cityID)
			{
				city.options[j].selected = true;
			}
		}

	}
}
var select = new Option("请选择区","");
var other = new Option("其他区","其他区#999999");
function addArea(prov , city , area , areaID){
	var pIndex = prov.selectedIndex;
	var index = city.selectedIndex;
	var areaOp = areaList(pIndex , index);
	if(index > 0){
		area.options.add(select);
		
	}
	for(j=0; j<areaOp[pIndex][index].length; j++)
	{
		area.options.add(areaOp[pIndex][index][j]);
		if(areaID){
			var _v = area.options[j+1].value;
			if(_v.substring(0, _v.indexOf('#')) == areaID)
			{
				area.options[j+1].selected = true;
			}
		}
	}
	if(index > 0){
		area.options.add(other);
		if(areaID == undefined){
			area.options[0].selected = true;
		}else if(areaID == '999999'){
			area.options[area.options.length-1].selected = true;
		}
	}
}

function changeProvince(proObj, cityObj ,areaObj)
{
	delCity(cityObj , areaObj);
	addCity(proObj,cityObj);
	delArea(areaObj);
	addArea(proObj ,cityObj,areaObj);
}

function changeProvinceAndExpressType(proObj, cityObj ,areaObj)
{
	delCity(cityObj , areaObj);
	addCity(proObj,cityObj);
	delArea(areaObj);
	addArea(proObj ,cityObj,areaObj);
}


function changeCity(proObj , cityObj , areaObj){
	delArea(areaObj);
	addArea(proObj ,cityObj,areaObj);
}
function initialize(proObj, cityObj, areaObj, provinceID, cityID , areaID) {
	// 初始化省份列表
	for (i=0; i < provinceOp.length; i++) {
		proObj.options.add(provinceOp[i]);
		if (provinceID) {
			var index = proObj.options[i].value.indexOf('#');
			if (proObj.options[i].value.substring(0, index) == provinceID) {
				proObj.options[i].selected = true;
			} else {
				proObj.options[i].selected = false;
			}
		}
	}
	addCity(proObj, cityObj , cityID);
	addArea(proObj , cityObj, areaObj , areaID);
}
//function initialize(proObj, cityObj,areaObj, provinceID, cityID , areaID){
//	// 初始化省份列表
//	for(i=0; i<provinceOp.length; i++)
//	{
//		proObj.options.add(provinceOp[i]);
//		if(provinceID){
//			var index = proObj.options[i].value.indexOf('#');
//			if(proObj.options[i].value.substring(0, index) == provinceID)
//			{
//				proObj.options[i].selected = true;
//			}
//		}
//	}
//	addCity(proObj, cityObj , cityID);	
//	addArea(proObj , cityObj, areaObj , areaID);
//}