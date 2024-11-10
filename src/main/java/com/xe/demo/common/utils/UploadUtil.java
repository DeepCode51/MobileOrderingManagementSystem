package com.xe.demo.common.utils;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.Iterator;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

@Component
public class UploadUtil {

    /**
     * 上传
     * @param request
     * @return
     * @throws Exception
     */
    public String upload(HttpServletRequest request, String docBase, String path) {
		String filepath = "";
		 //创建一个通用的多部分解析器
        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(request.getSession().getServletContext());
        //判断 request 是否有文件上传,即多部分请求
        if (multipartResolver.isMultipart(request)) {
        	//转换成多部分request
            MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
            //取得request中的所有文件名
            Iterator<String> iter = multiRequest.getFileNames();
            while (iter.hasNext()) {
            	//取得上传文件
                MultipartFile file = multiRequest.getFile(iter.next());
                if (file != null) {
					// 重命名上传后的文件名
                	String nowName = getNewName(".jpg");
					final ByteArrayOutputStream srcImageData = new ByteArrayOutputStream();
					try {
						IOUtils.copy(file.getInputStream(), srcImageData);
						// 上传图片
						FileUtils.copyInputStreamToFile(new ByteArrayInputStream(srcImageData.toByteArray()), new File(getFilePath(docBase, nowName)));
					} catch (IOException e) {
						return filepath;
					}
					filepath = getFilePath(path, nowName);
				}
            }
        }
		return filepath;
	}

    /**
     * 获取文件绝对路径
     * @param request
     * @param host
     * @return
     */
    public static String getFileUrl(HttpServletRequest request, String host) {
        String path = request.getScheme() + "://" + host + request.getContextPath() + "/";
        int port = request.getServerPort();
        if (80 != port) {
            path = request.getScheme() + "://" + host + ":" + request.getServerPort() + request.getContextPath() + "/";
        }
        return path;
    }

    /**
     * 文件路径
     * @param type
     * @return
     */
    public String getFilePath(String filepath, String filename) {
    	StringBuilder sb = new StringBuilder(filepath).append(DateUtil.getCurDate("yyyyMMdd")).append("/").append(filename);
        return sb.toString();
    }
    
    /**
     * 文件重命名
     * @param suffixes
     * @return
     */
    public String getNewName(String suffixes){
    	return UUID.randomUUID().toString() + suffixes;
    }

    /**
     * 删除文件
     * @param path
     */
    public static void delFiles(String path) {
        File file = new File(path);
        if (file.exists()) {
            file.delete();
        }
    }
}
