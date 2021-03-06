import axios from 'axios';

class LoginRepository {
  URL = "http://localhost:8081/v1/";

  constructor() {
  }

  login(id, password) {
    return axios.get(this.URL + "login?id="       + id +
                                     "&password=" + password, {withCredentials :  true}); //쿠키를 요청에 포함할 때 withCredentials 옵션을 true로 줘야함
  }

  logout(){
      return axios.get(this.URL + "logout", {withCredentials :  true});
  }
}

// 싱글톤으로 리턴 (매번 새로운 객체를 생성 할 필요가 없다면 처음 부터 싱글톤으로 export)
export default new LoginRepository();
