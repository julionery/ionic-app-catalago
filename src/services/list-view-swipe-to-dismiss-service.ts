import { IService } from './IService';
import { Toast } from 'ionic-native';

export class ListViewSwipeToDismissService implements IService {

    constructor() { }

    getId = (): string => 'swipeToDismiss';

    getTitle = (): string => 'Swipe to dismiss';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Small item + header", "theme"  : "layout1"},
          {"title" : "Products + CTA", "theme"  : "layout2"},
          {"title" : "Full width image", "theme"  : "layout3"}
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
            title: 'HeaderTitle',
            description: 'HeaderSubtitle',
            shortDescription: '35:72',
            iconLike: 'icon-thumb-up',
            iconFavorite: 'icon-heart',
            iconShare: 'icon-share-variant',
            iconPlay: 'icon-play-circle-outline',
            items: [
                {
                    id: 1,
                    title: 'ItemTitle',
                    description: 'ItemSubtitle',
                    shortDescription: '3:42',
                    image: 'assets/images/avatar/0.jpg',
                    iconDelate: 'icon-delete',
                    iconUndo: 'icon-undo-variant'
                },
                {
                    id: 2,
                    title: 'ItemTitle',
                    description: 'ItemSubtitle',
                    shortDescription: '3:42',
                    image: 'assets/images/avatar/1.jpg',
                    iconDelate: 'icon-delete',
                    iconUndo: 'icon-undo-variant'
                },
                {
                    id: 3,
                    title: 'ItemTitle',
                    description: 'ItemSubtitle',
                    shortDescription: '3:42',
                    image: 'assets/images/avatar/2.jpg',
                    iconDelate: 'icon-delete',
                    iconUndo: 'icon-undo-variant'
                },
                {
                    id: 4,
                    title: 'ItemTitle',
                    description: 'ItemSubtitle',
                    shortDescription: '3:42',
                    image: 'assets/images/avatar/3.jpg',
                    iconDelate: 'icon-delete',
                    iconUndo: 'icon-undo-variant'
                },
                {
                    id: 5,
                    title: 'ItemTitle',
                    description: 'ItemSubtitle',
                    shortDescription: '3:42',
                    image: 'assets/images/avatar/4.jpg',
                    iconDelate: 'icon-delete',
                    iconUndo: 'icon-undo-variant'
                },
                {
                    id: 6,
                    title: 'ItemTitle',
                    description: 'ItemSubtitle',
                    shortDescription: '3:42',
                    image: 'assets/images/avatar/5.jpg',
                    iconDelate: 'icon-delete',
                    iconUndo: 'icon-undo-variant'
                },
                {
                    id: 7,
                    title: 'ItemTitle',
                    description: 'ItemSubtitle',
                    shortDescription: '3:42',
                    image: 'assets/images/avatar/6.jpg',
                    iconDelate: 'icon-delete',
                    iconUndo: 'icon-undo-variant'

                },
                {
                    id: 8,
                    title: 'ItemTitle',
                    description: 'ItemSubtitle',
                    shortDescription: '3:42',
                    image: 'assets/images/avatar/7.jpg',
                    iconDelate: 'icon-delete',
                    iconUndo: 'icon-undo-variant'
                }
            ]
        };
    };

    getDataForLayout2 = (): any => {
        return {
            items: [
                {
                    id: 1,
                    title: 'ProductName',
                    description: 'Lorem ipsum dolor sit amet, consectetur',
                    image: 'assets/images/avatar/17.jpg',
                    oldPrice: '$42.99',
                    newPrice: '$35.99',
                    iconDelate: 'icon-delete',
                    iconUndo: 'icon-undo-variant'
                },
                {
                    id: 2,
                    title: 'ProductName',
                    description: 'Lorem ipsum dolor sit amet, consectetur',
                    image: 'assets/images/avatar/18.jpg',
                    oldPrice: '$42.99',
                    newPrice: '$35.99',
                    iconDelate: 'icon-delete',
                    iconUndo: 'icon-undo-variant'
                },
                {
                    id: 3,
                    title: 'ProductName',
                    description: 'Lorem ipsum dolor sit amet, consectetur',
                    image: 'assets/images/avatar/19.jpg',
                    oldPrice: '$42.99',
                    newPrice: '$35.99',
                    iconDelate: 'icon-delete',
                    iconUndo: 'icon-undo-variant'
                },
                {
                    id: 4,
                    title: 'ProductName',
                    description: 'Lorem ipsum dolor sit amet, consectetur',
                    image: 'assets/images/avatar/20.jpg',
                    oldPrice: '$42.99',
                    newPrice: '$35.99',
                    iconDelate: 'icon-delete',
                    iconUndo: 'icon-undo-variant'
                },
                {
                    id: 5,
                    title: 'ProductName',
                    description: 'Lorem ipsum dolor sit amet, consectetur',
                    image: 'assets/images/avatar/21.jpg',
                    oldPrice: '$42.99',
                    newPrice: '$35.99',
                    iconDelate: 'icon-delete',
                    iconUndo: 'icon-undo-variant'
                },
                {
                    id: 6,
                    title: 'ProductName',
                    description: 'Lorem ipsum dolor sit amet, consectetur',
                    image: 'assets/images/avatar/22.jpg',
                    oldPrice: '$42.99',
                    newPrice: '$35.99',
                    iconDelate: 'icon-delete',
                    iconUndo: 'icon-undo-variant'
                },
                {
                    id: 7,
                    title: 'ProductName',
                    description: 'Lorem ipsum dolor sit amet, consectetur',
                    image: 'assets/images/avatar/23.jpg',
                    oldPrice: '$42.99',
                    newPrice: '$35.99',
                    iconDelate: 'icon-delete',
                    iconUndo: 'icon-undo-variant'
                },
                {
                    id: 8,
                    title: 'ProductName',
                    description: 'Lorem ipsum dolor sit amet, consectetur',
                    image: 'assets/images/avatar/17.jpg',
                    oldPrice: '$42.99',
                    newPrice: '$35.99',
                    iconDelate: 'icon-delete',
                    iconUndo: 'icon-undo-variant'
                },
                {
                    id: 9,
                    title: 'ProductName',
                    description: 'Lorem ipsum dolor sit amet, consectetur',
                    image: 'assets/images/avatar/18.jpg',
                    oldPrice: '$42.99',
                    newPrice: '$35.99',
                    iconDelate: 'icon-delete',
                    iconUndo: 'icon-undo-variant'
                }
            ]
        };
    };

    getDataForLayout3 = (): any => {
         return {
                items : [{
                        id: 1,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        image: 'assets/images/background-small/11.jpg',
                        iconDelate: 'icon-delete',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 2,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        image: 'assets/images/background-small/3.jpg',
                        iconDelate: 'icon-delete',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 3,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        image: 'assets/images/background-small/10.jpg',
                        iconDelate: 'icon-delete',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 4,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        image: 'assets/images/background-small/11.jpg',
                        iconDelate: 'icon-delete',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 5,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        image: 'assets/images/background-small/12.jpg',
                        iconDelate: 'icon-delete',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 6,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        image: 'assets/images/background-small/13.jpg',
                        iconDelate: 'icon-delete',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 7,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        image: 'assets/images/background-small/5.jpg',
                        iconDelate: 'icon-delete',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 8,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        image: 'assets/images/background-small/15.jpg',
                        iconDelate: 'icon-delete',
                        iconUndo: 'icon-undo-variant'
                    }]
          }
    };


    getEventsForTheme = (menuItem: any): any => {
        return {
            'onItemClick': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log(item);
                } else {
                    Toast.show(item.title, '1000', 'bottom').subscribe(toast => { });
                }
            },
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
            'onFab': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("Fab");
                } else {
                    Toast.show("Fab", '1000', 'bottom').subscribe(toast => { });
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
