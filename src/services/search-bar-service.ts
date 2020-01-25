import { IService } from './IService';
import { Toast } from 'ionic-native';

export class SearchBarService implements IService {

    constructor() {}

    getId = (): string => 'searchBars';

    getTitle = (): string => 'Search bars';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Simple", "theme"  : "layout1"},
          {"title" : "Field + header", "theme"  : "layout2"},
          {"title" : "Field + header 2", "theme"  : "layout3"}
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
            items: [
                {
                    title: 'Friends',
                    description: '254 people',
                    icon: 'icon-account-check'
                },
                {
                    title: 'Enemies',
                    description: '254 people',
                    icon: 'icon-account-check'
                },
                {
                    title: 'Neutral',
                    description: '254 people',
                    icon: 'icon-account-check'
                },
                {
                    title: 'Family',
                    description: '254 people',
                    icon: 'icon-account-check'
                },
                {
                    title: 'Guests',
                    description: '254 people',
                    icon: 'icon-account-check'
                },
                {
                    title: 'Students',
                    description: '254 people',
                    icon: 'icon-account-check'
                },
                {
                    title: 'Friends',
                    description: '254 people',
                    icon: 'icon-account-check'
                },
                {
                    title: 'Enemies',
                    description: '254 people',
                    icon: 'icon-account-check'
                },
                {
                    title: 'Neutral',
                    description: '254 people',
                    icon: 'icon-account-check'
                },
                {
                    title: 'Family',
                    description: '254 people',
                    icon: 'icon-account-check'
                },
                {
                    title: 'Guests',
                    description: '254 people',
                    icon: 'icon-account-check'
                },
                {
                    title: 'Students',
                    description: '254 people',
                    icon: 'icon-account-check'
                }
            ]
        };
    };

    getDataForLayout2 = (): any => {
        return {
            headerImage: 'assets/images/background/30.jpg',
            items: [
                {
                    title: 'Song',
                    icon: 'icon-music-box'
                },
                {
                    title: 'Album',
                    icon: 'icon-headset'
                },
                {
                    title: 'Artist',
                    icon: 'icon-human-child'
                },
                {
                    title: 'Genre',
                    icon: 'icon-menu'
                },
                {
                    title: 'Song',
                    icon: 'icon-music-box'
                },
                {
                    title: 'Album',
                    icon: 'icon-headset'
                },
                {
                    title: 'Artist',
                    icon: 'icon-human-child'
                },
                {
                    title: 'Genre',
                    icon: 'icon-menu'
                },
                {
                  title: 'Album',
                  icon: 'icon-headset'
                }
            ]
        };
    };

    getDataForLayout3 = (): any => {
          return {
                headerImage: 'assets/images/background/9.jpg',
                items: [{
                    id: 1,
                    title: 'Monument walk tour',
                    description: '3:30min walking tour',
                    price: '123$',
                    icon: 'icon-map-marker-radius',
                },
                {
                    id: 2,
                    title: 'River walk tour',
                    description: '3:30min walking tour',
                    price: '123$',
                    icon: 'icon-map-marker-radius',
                },
                {
                    id: 3,
                    title: 'City walk tour',
                    description: '3:30min walking tour',
                    price: '123$',
                    icon: 'icon-map-marker-radius',
                },
                {
                    id: 4,
                    title: 'Park walk tour',
                    description: '3:30min walking tour',
                    price: '123$',
                    icon: 'icon-map-marker-radius',
                },
                {
                    id: 5,
                    title: 'Vilage walk tour',
                    description: '3:30min walking tour',
                    price: '123$',
                    icon: 'icon-map-marker-radius',
                },
                {
                    id: 6,
                    title: 'Lake walk tour',
                    description: '3:30min walking tour',
                    price: '123$',
                    icon: 'icon-map-marker-radius',
                },
                {
                    id: 7,
                    title: 'Castle walk tour',
                    description: '3:30min walking tour',
                    price: '123$',
                    icon: 'icon-map-marker-radius',
                },
                {
                    id: 8,
                    title: 'Beach walk tour',
                    description: '3:30min walking tour',
                    price: '123$',
                    icon: 'icon-map-marker-radius',
                }
            ]
        }
    }

    getEventsForTheme = (menuItem: any): any => {
        return {
            'onTextChange': function(text: any) {
                if (window.location.hostname === "localhost") {
                    console.log(text);
                } else {
                    Toast.show(text, '1000', 'bottom').subscribe(toast => { });
                }
            },
            'onItemClick': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log(JSON.stringify(item));
                } else {
                    Toast.show(item.title, '1000', 'bottom').subscribe(toast => { });
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
