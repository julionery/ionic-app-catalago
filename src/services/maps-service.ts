import { IService } from './IService';
import { Toast } from 'ionic-native';

export class MapsService implements IService {

    constructor() { }

    getId = (): string => 'maps';

    getTitle = (): string => 'Maps';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "GMAPS + Location  Details", "theme"  : "layout1"},
          {"title" : "GMAPS + About Us", "theme"  : "layout2"},
          {"title" : "Full Screen View", "theme"  : "layout3"}
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
        return {
            iconLike: 'icon-thumb-up',
            iconFavorite: 'icon-heart',
            iconShare: 'icon-share-variant',
            title: 'Museum of modern art',
            titleDescription: 'Art Boulevard, New York, USA',
            reviews: '4.12 (78 reviews)',
            contentTitle: 'In short',
            contentDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris. Consequat gravida pretium ligula lectus; Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!',
            iconLoacation: 'icon-map-marker-radius',
            iconLoacationText: 'Design Street, New York, USA',
            iconWatch: 'icon-alarm',
            iconWatchText: '8:00 to 16:00 working days',
            iconPhone: 'icon-phone',
            iconPhoneText: '333 222 111',
            iconEarth: 'icon-earth',
            iconEarthText: 'www.csform.com',
            iconEmail: 'icon-email-outline',
            iconEmailText: 'dev@csform.com',
            iconsStars : [ {
                "iconActive" : "icon-star",
                "iconInactive" : "icon-star-outline",
                "isActive" : true
            }, {
                "iconActive" : "icon-star",
                "iconInactive" : "icon-star-outline",
                "isActive" : true
            }, {
                "iconActive" : "icon-star",
                "iconInactive" : "icon-star-outline",
                "isActive" : true
            }, {
                "iconActive" : "icon-star",
                "iconInactive" : "icon-star-outline",
                "isActive" : true
            }, {
                "iconActive" : "icon-star",
                "iconInactive" : "icon-star-outline",
                "isActive" : false
            }],
            map: {
                lat: 40.712562,
                lng: -74.005911,
                zoom: 15,
                mapTypeControl: true,
                streetViewControl: true,
            }
        };
    };

    getDataForLayout2 = (): any => {
        return {
          iconLike: 'icon-thumb-up',
          iconFavorite: 'icon-heart',
          iconShare: 'icon-share-variant',
          title: 'Creative Studio Form',
          titleDescription: 'Design & Development agency',
          contentTitle: 'About us',
          contentDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris. Consequat gravida pretium ligula lectus; Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!',
          iconLoacation: 'icon-map-marker-radius',
          iconLoacationText: 'Design Street, New York, USA',
          iconWatch: 'icon-alarm',
          iconWatchText: '8:00 to 16:00 working days',
          iconPhone: 'icon-phone',
          iconPhoneText: '333 222 111',
          iconEarth: 'icon-earth',
          iconEarthText: 'www.csform.com',
          iconEmail: 'icon-email-outline',
          iconEmailText: 'dev@csform.com',
          titleMap: 'Here we are :',
           map: {
              lat: 40.712562,
              lng: -74.005911,
              zoom: 15,
              mapTypeControl: true,
              streetViewControl: true,
            }
        };
    };

    getDataForLayout3 = (): any => {
        return {
             map: {
                lat: 40.712562,
                lng: -74.005911,
                zoom: 15,
                mapTypeControl: true,
                streetViewControl: true,
            }
        };
    };


     getEventsForTheme = (menuItem: any): any => {
        return {
            'onLike': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("Like");
                } else {
                    Toast.show("Like", '1000', 'bottom').subscribe(toast => { });
                }
            },
            'onFavorite': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("Favorite");
                    if (item) {
                        item.favorite = !item.favorite;
                    }
                } else {
                    Toast.show("Favorite", '1000', 'bottom').subscribe(toast => { });
                }
            },
            'onShare': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("Share");
                } else {
                    Toast.show("Share", '1000', 'bottom').subscribe(toast => { });
                }
            },
            'onSkipPrevious': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("Skip Previous");
                } else {
                    Toast.show("Skip Previous", '1000', 'bottom').subscribe(toast => { });
                }
            },
            'onPlay': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("Play");
                } else {
                    Toast.show("Play", '1000', 'bottom').subscribe(toast => { });
                }
            },
            'onSkipNext': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("Skip Next");
                } else {
                    Toast.show("Skip Next", '1000', 'bottom').subscribe(toast => { });
                }
            },
            'onFab': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("Fab");
                } else {
                    Toast.show("Fab", '1000', 'bottom').subscribe(toast => { });
                }
            },
            'onRates' : function(index: number) {
              if (window.location.hostname === "localhost") {
                console.log("Rates " + (index+1));
              } else {
                Toast.show("Rates " + (index+1), '1000', 'bottom').subscribe(toast => { });
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
