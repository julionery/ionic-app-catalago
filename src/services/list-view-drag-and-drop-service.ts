import { IService } from './IService';
import { Toast } from 'ionic-native';

export class ListViewDragAndDropService implements IService {

    constructor() { }

    getId = (): string => 'dragAndDrop';

    getTitle = (): string => 'Drag and Drop';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Small item + header", "theme"  : "layout1"},
          {"title" : "Products + CTA header", "theme"  : "layout2"},
          {"title" : "Medium item with avatar", "theme"  : "layout3"}
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
            duration: '35:72',
            icon: 'icon-check',
            items: [
                {
                    id: 1,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/0.jpg',
                    leftIcon: 'icon-play-circle'
                },
                {
                    id: 2,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/1.jpg',
                    leftIcon: 'icon-play-circle'
                },
                {
                    id: 3,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/2.jpg',
                    leftIcon: 'icon-play-circle'
                },
                {
                    id: 4,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/3.jpg',
                    leftIcon: 'icon-play-circle'
                },
                {
                    id: 5,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/4.jpg',
                    leftIcon: 'icon-play-circle'
                },
                {
                    id: 6,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/5.jpg',
                    leftIcon: 'icon-play-circle'
                },
                {
                    id: 7,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/6.jpg',
                    leftIcon: 'icon-play-circle'
                },
                {
                    id: 8,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/0.jpg',
                    leftIcon: 'icon-play-circle'
                },
                {
                    id: 9,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/1.jpg',
                    leftIcon: 'icon-play-circle'
                },
                {
                    id: 10,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/2.jpg',
                    leftIcon: 'icon-play-circle'
                },
                {
                    id: 11,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/3.jpg',
                    leftIcon: 'icon-play-circle'
                },
                {
                    id: 12,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/4.jpg',
                    leftIcon: 'icon-play-circle'
                },
                {
                    id: 13,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/5.jpg',
                    leftIcon: 'icon-play-circle'
                },
                {
                    id: 14,
                    title: 'SongName',
                    author: 'Author: UserName',
                    image: 'assets/images/avatar/6.jpg',
                    leftIcon: 'icon-play-circle'
                }
            ]
        };
    };

    getDataForLayout2 = (): any => {
        return {
            title: 'Order No. 1',
            description: 'Will be shipped: 15.5.2016.',
            buttonText: 'PROCEED',
            headerImage: 'assets/images/background/17.jpg',
            price: '$42.99',
            items: [
                {
                    id: 1,
                    title: 'Black Shirt',
                    seller: 'Seller Name',
                    image: 'assets/images/avatar/17.jpg',
                    oldPrice: '$42.99',
                    shipping: 'free shipping',
                    newPrice: '$35.99'
                },
                {
                    id: 2,
                    title: 'Black Sweater',
                    seller: 'Seller Name',
                    image: 'assets/images/avatar/18.jpg',
                    oldPrice: '$42.99',
                    shipping: 'free shipping',
                    newPrice: '$35.99'
                },
                {
                    id: 3,
                    title: 'Shirt',
                    seller: 'Seller Name',
                    image: 'assets/images/avatar/19.jpg',
                    oldPrice: '$42.99',
                    shipping: 'free shipping',
                    newPrice: '$35.99'
                },
                {
                    id: 4,
                    title: 'White Shirt',
                    seller: 'Seller Name',
                    image: 'assets/images/avatar/20.jpg',
                    oldPrice: '$42.99',
                    shipping: 'free shipping',
                    newPrice: '$35.99'
                },
                {
                    id: 5,
                    title: 'White T shirt',
                    seller: 'Seller Name',
                    image: 'assets/images/avatar/21.jpg',
                    oldPrice: '$42.99',
                    shipping: 'free shipping',
                    newPrice: '$35.99'
                },
                {
                    id: 6,
                    title: 'T shirt',
                    seller: 'Seller Name',
                    image: 'assets/images/avatar/22.jpg',
                    oldPrice: '$42.99',
                    shipping: 'free shipping',
                    newPrice: '$35.99'
                },
                {
                    id: 7,
                    title: 'Hoodies',
                    seller: 'Seller Name',
                    image: 'assets/images/avatar/23.jpg',
                    oldPrice: '$42.99',
                    shipping: 'free shipping',
                    newPrice: '$35.99'
                }
            ]
        };
    };

    getDataForLayout3 = (): any => {
        return {
            items: [
                {
                    id: 1,
                    title: 'Isaac Reid',
                    description: 'from Las Vegas',
                    image: 'assets/images/avatar/0.jpg',
                },
                {
                    id: 2,
                    title: 'Jason Graham',
                    description: 'from Las Vegas',
                    image: 'assets/images/avatar/1.jpg',
                },
                {
                    id: 3,
                    title: 'Abigail Ross',
                    description: 'from Las Vegas',
                    image: 'assets/images/avatar/2.jpg',
                },
                {
                    id: 4,
                    title: 'Justin Rutherford',
                    description: 'from Las Vegas',
                    image: 'assets/images/avatar/3.jpg',
                },
                {
                    id: 5,
                    title: 'Nicholas Henderson',
                    description: 'from Las Vegas',
                    image: 'assets/images/avatar/4.jpg',
                },
                {
                    id: 6,
                    title: 'Elizabeth Mackenzie',
                    description: 'from Las Vegas',
                    image: 'assets/images/avatar/5.jpg',
                },
                {
                    id: 7,
                    title: 'Melanie Ferguson',
                    description: 'from Las Vegas',
                    image: 'assets/images/avatar/6.jpg',
                },
                {
                    id: 8,
                    title: 'Fiona Kelly',
                    description: 'from Las Vegas',
                    image: 'assets/images/avatar/7.jpg',
                },
                {
                    id: 9,
                    title: 'Nicholas King',
                    description: 'from Las Vegas',
                    image: 'assets/images/avatar/8.jpg',
                },
                {
                    id: 10,
                    title: 'Victoria Mitchell',
                    description: 'from Las Vegas',
                    image: 'assets/images/avatar/9.jpg',
                },
                {
                    id: 11,
                    title: 'Sophie Lyman',
                    description: 'from Las Vegas',
                    image: 'assets/images/avatar/10.jpg',
                },
                {
                    id: 12,
                    title: 'Carl Ince',
                    description: 'from Las Vegas',
                    image: 'assets/images/avatar/11.jpg',
                },
                {
                    id: 13,
                    title: 'Michelle Slater',
                    description: 'from Las Vegas',
                    image: 'assets/images/avatar/12.jpg',
                },
                {
                    id: 14,
                    title: 'Ryan Mathis',
                    description: 'from Las Vegas',
                    image: 'assets/images/avatar/13.jpg',
                },
                {
                    id: 15,
                    title: 'Julia Grant',
                    description: 'from Las Vegas',
                    image: 'assets/images/avatar/14.jpg',
                },
                {
                    id: 16,
                    title: 'Hannah Martin',
                    description: 'from Las Vegas',
                    image: 'assets/images/avatar/15.jpg',
                }
            ]
        };
    }

    getEventsForTheme = (menuItem: any): any => {
        return {
            'onItemClick': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log(item);
                } else {
                    Toast.show(item.title, '1000', 'bottom').subscribe(toast => { });
                }
            },
            'onProceed': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("Proceed");
                } else {
                    Toast.show("Proceed", '1000', 'bottom').subscribe(toast => { });
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
