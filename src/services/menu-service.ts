import {IService} from './IService';

export class MenuService implements IService {

    constructor() {}

    getId = ():string => 'menu';

    getTitle = ():string => 'Up Media Tec';

    getAllThemes = (): Array<any> => {
      return [
        {"title" : "Promoções", "theme"  : "listViews",  "icon" : "icon-format-align-justify", "listView" : true, "component": ""},
        {"title" : "Parallax", "theme"  : "parallax",  "icon" : "icon-format-line-spacing", "listView" : false, "component":""},
        {"title" : "Login Pages", "theme"  : "login",  "icon" : "icon-lock-open-outline", "listView" : false, "component":""},
        {"title" : "QRCode", "theme"  : "qrcode",  "icon" : "icon-qrcode", "listView" : false, "component":""}
      ];
    };

    getDataForTheme = (menuItem: any): Array<any> => {
      return [];
    };

    getEventsForTheme = (menuItem: any): any => {
      return {};
    };

    prepareParams = (item: any) => {
      return {
          title: item.title,
          data: this.getDataForTheme(item),
          events: this.getEventsForTheme(item)
      };
    };
}
