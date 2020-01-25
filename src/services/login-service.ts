import { IService } from './IService';
import { Toast } from 'ionic-native';

export class LoginService implements IService {

    constructor() { }

    getId = (): string => 'login';

    getTitle = (): string => 'Login pages';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Login + logo 1", "theme"  : "layout1"},
          {"title" : "Login + logo 2", "theme"  : "layout2"}
        ];
    };

    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    getDataForLayout1 = (): any => {
      return {
        "username"        : "Username",
        "password"        : "Password",
        "register"        : "Register",
        "login"           : "Login",
        "skip"            : "Skip",
        "logo"            : "assets/images/logo/login.png"
      };
    };

    getDataForLayout2 = (): any => {
      return {
        "username":   "Username",
        "password":   "Password",
        "register":   "Register",
        "login":      "Login",
        "skip":       "Skip",
        "logo":       "assets/images/logo/login.png"
      };
    };


    getEventsForTheme = (menuItem: any): any => {
        return {
            onLogin: function(params) {
              if (window.location.hostname === "localhost") {
                  console.log('onLogin:' + JSON.stringify(params));
              } else {
                  Toast.show('onLogin:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
              }
            },
            onRegister: function(params) {
                if (window.location.hostname === "localhost") {
                    console.log('onRegister:' + JSON.stringify(params));
                } else {
                    Toast.show('onRegister:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
                }
            },
            onSkip: function(params) {
                if (window.location.hostname === "localhost") {
                    console.log('onSkip:' + JSON.stringify(params));
                } else {
                    Toast.show('onSkip:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
                }
            },
            onFacebook: function(params) {
              if (window.location.hostname === "localhost") {
                  console.log('onFacebook:' + JSON.stringify(params));
              } else {
                  Toast.show('onFacebook:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
              }
            },
            onTwitter: function(params) {
                if (window.location.hostname === "localhost") {
                    console.log('onTwitter:' + JSON.stringify(params));
                } else {
                    Toast.show('onTwitter:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
                }
            },
            onGoogle: function(params) {
              if (window.location.hostname === "localhost") {
                  console.log('onGoogle:' + JSON.stringify(params));
              } else {
                  Toast.show('onGoogle:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
              }
            },
            onPinterest: function(params) {
              if (window.location.hostname === "localhost") {
                  console.log('onPinterest:' + JSON.stringify(params));
              } else {
                  Toast.show('onPinterest:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
              }
            },
        };
    };


    prepareParams = (item: any) => {
        let result = {
            title: item.title,
            data: this.getDataForTheme(item),
            events: this.getEventsForTheme(item)
        };
        result[this.getShowItemId(item)] = true;
        return result;
    };

    getShowItemId = (item: any): string => {
        return this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
    }
}
