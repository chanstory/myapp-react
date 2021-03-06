import { observable, action } from 'mobx';

import LoginRepository from '../repository/LoginRepository.js';

class LoginStore {
    @observable
    isLogin : 'false';

    @observable
    loginId : '';

    @observable
    loginPassword : '';

    @observable
    accessToken : '';

    @observable
    refreshToken : '';

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.login = this.login.bind(this);
    }

    @action
    handleChange = (e) => {
        this[e.target.name] = e.target.value;
    }

    @action
    login(component){
        if(!this.loginId){
            alert('아이디를 입력해주세요');
            return;
        }

        if(!this.loginPassword){
            alert('비밀번호를 입력해주세요');
            return;
        }

        var self = this;
        LoginRepository.login(this.loginId, this.loginPassword)
        .then(function (response) {
            if(response.data.success === true){
                self.isLogin = 'true';

                component.props.history.push("/");
            }else{
                alert(response.data.msg);
            }
        })
        .catch(function (error) {
            alert('에러가 발생했습니다. 문제가 지속될 시 관리자에게 문의 해 주세요.');
        })
        .then(function () {
        });
    }

    @action
    logout(component){
        var self = this;
        LoginRepository.logout()
        .then(function (response) {
            if(response.data.success === true){
                self.isLogin = false;
                component.setSignButton();

                alert('로그아웃 되었습니다.');
            }else{
                alert(response.data.msg);
            }
        })
        .catch(function (error) {
            alert(error);
        })
        .then(function () {
        });
    }

    @action
    loginCheck(){
        return this.isLogin;
    }
}

export default LoginStore;
