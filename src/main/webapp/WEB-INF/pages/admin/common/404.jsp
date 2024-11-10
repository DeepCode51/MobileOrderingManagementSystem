<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>

<div class="breadcrumbs" id="breadcrumbs">
	<ul class="breadcrumb">
		<li>
			<i class="ace-icon fa fa-home home-icon"></i>
			<a href="javascript:goIndex();">首页</a>
		</li>
		<li>系统设置</li>
		<li class="active">Error 404</li>
	</ul>
</div>

<div class="page-content">
	<div class="row">
		<div class="col-xs-12">
			<!-- PAGE CONTENT BEGINS -->
	
			<!-- #section:pages/error -->
			<div class="error-container">
				<div class="well">
					<h1 class="grey lighter smaller">
						<span class="blue bigger-125">
							<i class="ace-icon fa fa-sitemap"></i>404
						</span>
						页面找不到
					</h1>
	
					<hr />
					<h3 class="lighter smaller">We looked everywhere but we couldn't find it!</h3>
	
					<div>
						<form class="form-search">
							<span class="input-icon align-middle">
								<i class="ace-icon fa fa-search"></i>
	
								<input type="text" class="search-query" placeholder="Give it a search..." />
							</span>
							<button class="btn btn-sm" type="button">Go!</button>
						</form>
	
						<div class="space"></div>
						<h4 class="smaller">Try one of the following:</h4>
	
						<ul class="list-unstyled spaced inline bigger-110 margin-15">
							<li>
								<i class="ace-icon fa fa-hand-o-right blue"></i>
								Re-check the url for typos
							</li>
	
							<li>
								<i class="ace-icon fa fa-hand-o-right blue"></i>
								Read the faq
							</li>
	
							<li>
								<i class="ace-icon fa fa-hand-o-right blue"></i>
								Tell us about it
							</li>
						</ul>
					</div>
	
					<hr />
					<div class="space"></div>
	
					<div class="center">
						<a href="javascript:goIndex();" class="btn btn-info">
							<i class="ace-icon fa fa-tachometer"></i>首页
						</a>
					</div>
				</div>
			</div>
		</div><!-- /.col -->
	</div>
</div>