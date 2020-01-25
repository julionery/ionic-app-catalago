import { IService } from './IService';
import { Toast } from 'ionic-native';

export class QRCodeService implements IService {

    constructor() { }

    getId = (): string => 'qrcode';

    getTitle = (): string => 'QRCode';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Layout 1", "theme"  : "layout1"}
        ];
    };

    getDataForTheme = (menuItem: any): any => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    getDataForLayout1 = (): any => {
        return {}
    };

    getDataForLayout2 = (): any => {
        return {};
    };

     getEventsForTheme = (menuItem: any): any => {
        return {
            'onFab': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("Fab");
                } else {
                    Toast.show("Fab", '1000', 'bottom').subscribe(toast => { });
                }
            },
            'onScan': function(item:any) {
                if (window.location.hostname === "localhost") {
                    console.log(JSON.stringify(item));
                } else {
                    Toast.show(JSON.stringify(item), '1000', 'bottom').subscribe(toast => { });
                }
            },
            'onItemClick': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log(item.title);
                } else {
                    Toast.show(item.title, '1000', 'bottom').subscribe(toast => { });
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
