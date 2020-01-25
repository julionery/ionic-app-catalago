import { IService } from './IService';
import { Toast } from 'ionic-native';

export class ListViewGoogleCardsService implements IService {

    constructor() { }

    getId = (): string => 'googleCards';

    getTitle = (): string => 'Google Cards';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Styled cards", "theme"  : "layout1"},
          {"title" : "Styled cards 2", "theme"  : "layout2"},
          {"title" : "Full image cards", "theme"  : "layout3"}
        ];
    };

    getDataForLayout1 = (): any => {
        return {
            items: [
                {
                    id: 1,
                    title: 'Atrist Name',
                    image: 'assets/images/avatar-small/0.jpg',
                    description: 'Birth year: 1984',
                    shortDescription: 'Country: Germany',
                    longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                    iconLike: 'icon-thumb-up',
                    iconFavorite: 'icon-heart',
                    iconShare: 'icon-share-variant'
                },
                {
                    id: 2,
                    title: 'Atrist Name',
                    image: 'assets/images/avatar-small/1.jpg',
                    description: 'Birth year: 1980',
                    shortDescription: 'Country: Germany',
                    longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                    iconLike: 'icon-thumb-up',
                    iconFavorite: 'icon-heart',
                    iconShare: 'icon-share-variant'
                },
                {
                    id: 3,
                    title: 'Atrist Name',
                    image: 'assets/images/avatar-small/2.jpg',
                    description: 'Birth year: 1984',
                    shortDescription: 'Country: Germany',
                    longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                    iconLike: 'icon-thumb-up',
                    iconFavorite: 'icon-heart',
                    iconShare: 'icon-share-variant'
                },
                {
                    id: 4,
                    title: 'Atrist Name',
                    image: 'assets/images/avatar-small/3.jpg',
                    description: 'Birth year: 1984',
                    shortDescription: 'Country: Germany',
                    longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                    iconLike: 'icon-thumb-up',
                    iconFavorite: 'icon-heart',
                    iconShare: 'icon-share-variant'
                },
                {
                    id: 5,
                    title: 'Atrist Name',
                    image: 'assets/images/avatar-small/4.jpg',
                    description: 'Birth year: 1984',
                    shortDescription: 'Country: Germany',
                    longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                    iconLike: 'icon-thumb-up',
                    iconFavorite: 'icon-heart',
                    iconShare: 'icon-share-variant'
                },
                {
                    id: 6,
                    title: 'Atrist Name',
                    image: 'assets/images/avatar-small/5.jpg',
                    description: 'Birth year: 1984',
                    shortDescription: 'Country: Germany',
                    longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                    iconLike: 'icon-thumb-up',
                    iconFavorite: 'icon-heart',
                    iconShare: 'icon-share-variant'
                },
                {
                    id: 7,
                    title: 'Atrist Name',
                    image: 'assets/images/avatar-small/6.jpg',
                    description: 'Birth year: 1984',
                    shortDescription: 'Country: Germany',
                    longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                    iconLike: 'icon-thumb-up',
                    iconFavorite: 'icon-heart',
                    iconShare: 'icon-share-variant'
                },
                {
                    id: 8,
                    title: 'Atrist Name',
                    image: 'assets/images/avatar-small/7.jpg',
                    description: 'Birth year: 1984',
                    shortDescription: 'Country: Germany',
                    longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                    iconLike: 'icon-thumb-up',
                    iconFavorite: 'icon-heart',
                    iconShare: 'icon-share-variant'
                }
            ]
        };
    };
    getDataForLayout2 = (): any => {
        return {
            items: [
                {
                    id: 1,
                    title: 'Card Title 1',
                    titleHeader: 'Lorem Ipsum 1',
                    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
                    image: 'assets/images/background/1.jpg',
                    button: 'EXPLORE',
                    shareButton: 'SHARE'
                },
                {
                    id: 2,
                    title: 'Card Title 2',
                    titleHeader: 'Lorem Ipsum 2',
                    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
                    image: 'assets/images/background/2.jpg',
                    button: 'EXPLORE',
                    shareButton: 'SHARE'
                },
                {
                    id: 3,
                    title: 'Card Title 3',
                    titleHeader: 'Lorem Ipsum 3',
                    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
                    image: 'assets/images/background/5.jpg',
                    button: 'EXPLORE',
                    shareButton: 'SHARE'
                },
                {
                    id: 4,
                    title: 'Card Title 4',
                    titleHeader: 'Lorem Ipsum 4',
                    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
                    image: 'assets/images/background/3.jpg',
                    button: 'EXPLORE',
                    shareButton: 'SHARE'
                },
                {
                    id: 5,
                    title: 'Card Title 5',
                    titleHeader: 'Lorem Ipsum 5',
                    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
                    image: 'assets/images/background/1.jpg',
                    button: 'EXPLORE',
                    shareButton: 'SHARE'
                }
            ]
        };
    };

    getDataForLayout3 = (): any => {
        return {
              items: [
                  {
                      id: 1,
                      image: 'assets/images/background/0.jpg',
                      title: 'Card Title',
                      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                  },
                  {
                      id: 2,
                      image: 'assets/images/background/9.jpg',
                      title: 'Card Title',
                      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                  },
                  {
                      id: 3,
                      image: 'assets/images/background/8.jpg',
                      title: 'Card Title',
                      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                  },
                  {
                      id: 4,
                      image: 'assets/images/background/10.jpg',
                      title: 'Card Title',
                      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                  },
                  {
                      id: 5,
                      image: 'assets/images/background/13.jpg',
                      title: 'Card Title',
                      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                  },
                  {
                      id: 6,
                      image: 'assets/images/background/11.jpg',
                      title: 'Card Title',
                      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                  },
                  {
                      id: 7,
                      image: 'assets/images/background/12.jpg',
                      title: 'Card Title',
                      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                  },
                  {
                      id: 8,
                      image: 'assets/images/background/0.jpg',
                      title: 'Card Title',
                      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                  }
              ]
        };
    }


    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
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
            'onExplore': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("Explore");
                } else {
                    Toast.show("Explore", '1000', 'bottom').subscribe(toast => { });
                }
            },
            'onShare': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("Share");
                } else {
                    Toast.show("Share", '1000', 'bottom').subscribe(toast => { });
                }
            },
            'onLike': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("onLike");
                } else {
                    Toast.show("onLike", '1000', 'bottom').subscribe(toast => { });
                }
            },
            'onFavorite': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("onFavorite");
                } else {
                    Toast.show("onFavorite", '1000', 'bottom').subscribe(toast => { });
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
