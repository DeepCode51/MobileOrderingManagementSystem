package com.xe.demo.controller;

import java.io.File;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.alibaba.fastjson.JSON;
import com.xe.demo.common.Constant;
import com.xe.demo.common.annotation.Authority;
import com.xe.demo.common.annotation.ControllerLog;
import com.xe.demo.common.pojo.AjaxResult;
import com.xe.demo.common.pojo.PageAjax;
import com.xe.demo.common.utils.DateUtil;
import com.xe.demo.model.AuthUser;
import com.xe.demo.model.BXClassify;
import com.xe.demo.model.BXCompany;
import com.xe.demo.model.BXProducts;
import com.xe.demo.service.BXClassifyService;
import com.xe.demo.service.BXCompanyService;
import com.xe.demo.service.BXProductsService;

@Controller
@RequestMapping("/bx/pd/")
public class BXProductsController extends BaseController {

	private static final String UPLOAD = "/upload/";
	@Autowired
	private BXProductsService bxProductService;
	@Autowired


	private BXClassifyService bxClassifyService;
	@Autowired
	private BXCompanyService bxCompanyService;

	@Authority(opCode = "0401", opName = "产品管理界面")
	@RequestMapping("mainPage")
	public String mainPage(Map<String, Object> map) {
		List<BXClassify> classifyList= bxClassifyService.queryList(new BXClassify());
		map.put("classifyList", classifyList);
		return "admin/bx/product/main";
	}

	@RequestMapping("queryPage")
	@ResponseBody
	@Authority(opCode = "0401", opName = "查询产品列表")
	public PageAjax<BXProducts> queryPage(PageAjax<BXProducts> page, BXProducts bean,HttpServletRequest request) {
		bean.setEnabled("1");
		bean.setHot(Boolean.valueOf(request.getParameter("isHot")));
		return bxProductService.queryPage(page, bean);
	}

	@RequestMapping("toCart")
	public String toCart() {
		return "cart";
	}

	@RequestMapping("queryPageIndex")
	@ResponseBody
	public PageAjax<BXProducts> queryPageIndex(PageAjax<BXProducts> page, BXProducts bean,HttpServletRequest request) {
//		bean.setEnabled("1");
//		bean.setHot(Boolean.valueOf(request.getParameter("isHot")));
		return bxProductService.queryPage(page, bean);
	}

	@RequestMapping("toProductIndex/{id}")
	public String toProductIndex(@PathVariable("id") int classfyId, Map<String, Object> map,BXProducts bean) {
		map.put("classfyId",classfyId);
		return "index";
	}

	@RequestMapping("toProductDetail/{id}")
	public String toProductDetail(@PathVariable("id") int productId, Map<String, Object> map,BXProducts bean) {
		map.put("productId",productId);
		BXProducts bxProducts = bxProductService.queryBXProductById(productId);
		map.put("product",bxProducts);
		return "product";
	}

	@RequestMapping("productList/{id}")
	@ResponseBody
	public PageAjax<BXProducts> productDetail(@PathVariable("id") int id, Map<String, Object> map,BXProducts bean) {
		bean.setId(id);
		return bxProductService.queryListByClassId(bean);
	}

	@Authority(opCode = "040101", opName = "添加产品界面")
	@RequestMapping("addPage")
	public String addPage(Map<String, Object> map) {
		List<BXCompany> companyList= bxCompanyService.queryList(new BXCompany());
		map.put("companyList", companyList);
		List<BXClassify> classifyList= bxClassifyService.queryList(new BXClassify());
		map.put("classifyList", classifyList);
		Integer maxOrderIndex= bxProductService.queryMaxOrderIndex();
		map.put("maxOrderIndex", maxOrderIndex);
		return "admin/bx/product/add";
	}
	

	@Autowired
    WebApplicationContext webApplicationConnect;
	
	@ResponseBody  
	@RequestMapping("/upload")  
	public String upload(MultipartHttpServletRequest  request) {
		String fileControlName= request.getParameter("fileControlName");
		MultipartFile file= request.getFile(fileControlName);
		if(file==null) {
			return  JSON.toJSONString("");
		}
		// 存放地址
		if (!file.isEmpty()) {
			try {
				/*
				 * 这段代码执行完毕之后，图片上传到了工程的跟路径； 大家自己扩散下思维，如果我们想把图片上传到 d:/files大家是否能实现呢？ 等等;
				 * 这里只是简单一个例子,请自行参考，融入到实际中可能需要大家自己做一些思考，比如： 1、文件路径； 2、文件名； 3、文件格式; 4、文件大小的限制;
				 */
				String filePath = webApplicationConnect.getServletContext().getRealPath(UPLOAD);
				String fileName = file.getOriginalFilename();
				String fileNameExt = fileName.substring(fileName.lastIndexOf("."));
				String fileNameStr = UUID.randomUUID() + fileNameExt;// 解决中文问题，liunx下中文路径，图片显示问题
				String filePathStr = filePath + fileNameStr;
				File dest = new File(filePathStr);
				// 检测是否存在目录
				if (!dest.getParentFile().exists()) {
					dest.getParentFile().mkdirs();
				}
				file.transferTo(dest);
				return JSON.toJSONString(UPLOAD + fileNameStr);
			} catch (Exception e) {
				logger.error("上传失败", e);
				return JSON.toJSONString("Error:上传失败," + e.getMessage());
			}
		} else {
			return JSON.toJSONString("Error:上传失败，因为文件是空的.");
		}
	}

	@ControllerLog("添加产品")
	@RequestMapping("add")
	@ResponseBody
	@Authority(opCode = "040102", opName = "添加产品")
	public AjaxResult add(HttpServletRequest request) {      
//        String path = request.getContextPath();
//        String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/upload/";
        //上传图片1
		String pic1path= request.getParameter("pic_1_hidden");
    	String pic2path= request.getParameter("pic_2_hidden");
		AuthUser user = (AuthUser)getRequest().getSession().getAttribute(Constant.USER);
		BXProducts bean=new BXProducts();
		bean.setName(request.getParameter("name"));
		bean.setClassifyId(Integer.parseInt(request.getParameter("classifyId")));
		bean.setCompanyId(Integer.parseInt(request.getParameter("companyId")));
		bean.setProductCode(request.getParameter("productCode"));
		bean.setPic_1(pic1path);
		bean.setPic_2(pic2path);
		bean.setBrief(request.getParameter("brief"));
		bean.setHot(Boolean.valueOf(request.getParameter("isHot")));
		bean.setProductTag(request.getParameter("productTag"));
		BigDecimal price=new BigDecimal(request.getParameter("price")).setScale(2,BigDecimal.ROUND_DOWN);//直接去掉多余值
		bean.setPrice(price);
		bean.setOrderIndex(Integer.parseInt(request.getParameter("orderIndex")));
		bean.setStatus(Integer.parseInt(request.getParameter("status")));
		bean.setSaleTotal(Integer.parseInt(request.getParameter("saleTotal")));
		bean.setUrl_1(request.getParameter("url_1"));
		bean.setUrl_2(request.getParameter("url_2"));
		bean.setUrl_3(request.getParameter("url_3"));
		bean.setUrl_4(request.getParameter("url_4"));
		if(user != null){
			bean.setCreateuser(String.valueOf(user.getId()));
		}
		logger.info("insert productInfo={}",JSON.toJSONString(bean));
		return bxProductService.saveBXProduct(bean);
	}
	@ControllerLog("修改产品上下架操作")
	@RequestMapping("modifyPublishStatus/{id}/{status}")
	@ResponseBody
	public AjaxResult modifyPublishStatus(@PathVariable("id") int id,@PathVariable("status") int status, Map<String, Object> map) {
		BXProducts bean=new BXProducts();
		bean.setId(id);
		bean.setStatus(status);
		AuthUser user = (AuthUser)getRequest().getSession().getAttribute(Constant.USER);
		if(user != null){
			bean.setUpdateuser(String.valueOf(user.getId()));
			bean.setUpdatetime(DateUtil.getCurDate());
		}
		return bxProductService.updateBXProduct(bean);
	}
	@Authority(opCode = "040101", opName = "修改产品页面")
	@RequestMapping("updatePage/{id}")
	public String updatePage(@PathVariable("id") int id, Map<String, Object> map) {
		List<BXCompany> companyList= bxCompanyService.queryList(new BXCompany());
		map.put("companyList", companyList);
		List<BXClassify> classifyList= bxClassifyService.queryList(new BXClassify());
		map.put("classifyList", classifyList);
		BXProducts bean = bxProductService.queryBXProductById(id);
		map.put("product", bean);
		return "admin/bx/product/update";
	}



	@ControllerLog("修改产品")
	@RequestMapping("update")
	@ResponseBody
	@Authority(opCode = "040102", opName = "修改产品")
	public AjaxResult update(BXProducts bean,HttpServletRequest request) {
		AuthUser user = (AuthUser)getRequest().getSession().getAttribute(Constant.USER);
		if(user != null){
			bean.setUpdateuser(String.valueOf(user.getId()));
			bean.setUpdatetime(DateUtil.getCurDate());
		}
		String pic1path= request.getParameter("pic_1_hidden");
    	String pic2path= request.getParameter("pic_2_hidden");
    	bean.setPic_1(pic1path);
		bean.setPic_2(pic2path);
		bean.setHot(Boolean.valueOf(request.getParameter("isHot")));
		return bxProductService.updateBXProduct(bean);
	}

	@ControllerLog("删除产品")
	@RequestMapping("deleteByID/{id}")
	@ResponseBody
	@Authority(opCode = "0407", opName = "删除产品")
	public AjaxResult deleteByID(@PathVariable("id") int id) {
		BXProducts bean = new BXProducts();
		bean.setId(id);
		bean.setEnabled("0");
		AuthUser user = (AuthUser)getRequest().getSession().getAttribute(Constant.USER);
		if(user != null){
			bean.setUpdateuser(String.valueOf(user.getId()));
			bean.setUpdatetime(DateUtil.getCurDate());
		}
		return bxProductService.updateBXProduct(bean);
	}
}
