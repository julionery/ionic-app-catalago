import { IService } from './IService';
import { Toast } from 'ionic-native';

export class RegisterService implements IService {

    constructor() { }

    getId = (): string => 'register';

    getTitle = (): string => 'Register pages';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Register + logo", "theme"  : "layout1"},
          {"title" : "Register + image", "theme"  : "layout2"}
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
        "logo"                : "assets/images/logo/login-3.png",
        "register"            : "Register",
        "username"            : "Username",
        "city"                : "City",
        "country"             : "Country",
        "password"            : "Password",
        "email"               : "Email",
        "button"              : "submit",
        "skip"                : "Skip"
      };
    };

    getDataForLayout2 = (): any => {
      return {
         "logo"                : "assets/images/logo/login-2.png",
         "iconAccount"         : "icon-account",
         "username"            : "Username",
         "iconHome"            : "icon-home-variant",
         "iconCity"            : "icon-city",
         "city"                : "City",
         "iconWeb"             : "icon-web",
         "country"             : "Country",
         "iconLock"            : "icon-lock",
         "password"            : "Password",
         "iconEmail"           : "icon-email-outline",
         "email"               : "Email",
         "submit"              : "submit",
         "skip"                : "Skip"

      };
    };

    getEventsForTheme = (menuItem: any): any => {
        return {
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
            }
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
