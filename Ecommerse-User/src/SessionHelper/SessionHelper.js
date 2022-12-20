class SessionHelper{

    static setAboutSession(JSONDATA){
    
        sessionStorage.setItem("SiteInfoAbout", JSONDATA);
    
    }

    static getAboutSession(){
    
        return sessionStorage.getItem("SiteInfoAbout")
    
    }

    static setUser(Token){
    
        sessionStorage.setItem("user", Token);
    }

    static getUser(){
    
        return sessionStorage.getItem("user")
    }

    static setUserName(Name){
    
        sessionStorage.setItem("name", Name);
    }

    static getUserName(){
    
        return sessionStorage.getItem("name")
    }
    static setUserEmail(Email){
    
        sessionStorage.setItem("email", Email);
    }

    static getUserEmail(){
    
        return sessionStorage.getItem("email")
    }

    static removeUser(){
        return  sessionStorage.removeItem("name") + sessionStorage.removeItem("user") + sessionStorage.removeItem('email')
    }


}

export default SessionHelper;