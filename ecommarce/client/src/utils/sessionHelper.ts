class sessionHelper {
    setToken(token: string) {
      localStorage.setItem("token", token);
    }
    getToken() {
      return localStorage.getItem("token");
    }
  
    setUser(user: object) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    getUser() {
      return JSON.parse(localStorage.getItem("user") || "{}");
    }
  }
  
  export const { setToken, getToken, setUser, getUser } = new sessionHelper();
  