class ApiURL{

  static BaseUrl="http://127.0.0.1:8000/api/"

  static VisitorDetails = this.BaseUrl+"GetVisitorDetails"
  static SendContactDetails = this.BaseUrl+"SendContactDetails"
  static SendSiteInfo = this.BaseUrl+"SendSiteInfo"
  static SendCategoryDetails = this.BaseUrl+"SendCategoryDetails"

}

export default ApiURL;