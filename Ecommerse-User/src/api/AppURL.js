class ApiURL{

  static BaseUrl="http://127.0.0.1:8000/api/"

  static VisitorDetails = this.BaseUrl+"GetVisitorDetails"
  static SendContactDetails = this.BaseUrl+"SendContactDetails"
  static SendSiteInfo = this.BaseUrl+"SendSiteInfo"
  static SendCategoryDetails = this.BaseUrl+"SendCategoryDetails"

  static ProductListByRemark(Remark){
    return this.BaseUrl+"ProductListByRemark/"+Remark;
  }
  static ProductListByCategory(Category){
    return this.BaseUrl+"ProductListByCategory/"+Category;
  }

  static ProductListBySubCategory(Category, SubCategory){
    return this.BaseUrl+"ProductListBySubCategory/"+Category+"/"+SubCategory;
  }



}

export default ApiURL;