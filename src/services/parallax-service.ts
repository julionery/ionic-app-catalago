import { IService } from './IService';
import { Toast } from 'ionic-native';

export class ParallaxService implements IService {

    constructor() { }

    getId = (): string => 'parallax';

    getTitle = (): string => 'Parallax';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Friends", "theme"  : "layout1"},
          {"title" : "Product", "theme"  : "layout2"},
          {"title" : "Basic", "theme"  : "layout3"},
          {"title" : "Location Details", "theme"  : "layout4"}
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
            headerImage: 'assets/images/background/14.jpg',
            title: 'Parallax-title',
            iconLike: 'icon-thumb-up',
            iconFavorite: 'icon-heart',
            iconShare: 'icon-share-variant',
            items: [
                {
                    id: 1,
                    title: 'Carran Denver',
                    description: 'Granger',
                    image: 'assets/images/avatar/0.jpg',
                    imageAlt: 'avatar',
                    icon: 'icon-cloud-download',
                    duration: '3:42'
                },
                {
                    id: 2,
                    title: 'Jerrold Edgar',
                    description: 'Hillside Acres',
                    image: 'assets/images/avatar/1.jpg',
                    imageAlt: 'avatar',
                    icon: 'icon-cloud-download',
                    duration: '3:42'
                },
                {
                    id: 3,
                    title: 'Jason Read',
                    description: 'Cumberland Center',
                    image: 'assets/images/avatar/2.jpg',
                    imageAlt: 'avatar',
                    icon: 'icon-cloud-download',
                    duration: '3:42'
                },
                {
                    id: 4,
                    title: 'Anthony Shannon',
                    description: 'Manahawkin',
                    image: 'assets/images/avatar/3.jpg',
                    imageAlt: 'avatar',
                    icon: 'icon-cloud-download',
                    duration: '3:42'
                },
                {
                    id: 5,
                    title: 'Haydn Finley',
                    description: 'San Pedro',
                    image: 'assets/images/avatar/4.jpg',
                    imageAlt: 'avatar',
                    icon: 'icon-cloud-download',
                    duration: '3:42'
                },
                {
                    id: 6,
                    title: 'Ted Stu',
                    description: 'Mount Calm',
                    image: 'assets/images/avatar/5.jpg',
                    imageAlt: 'avatar',
                    icon: 'icon-cloud-download',
                    duration: '3:42'
                },
                {
                    id: 7,
                    title: 'Rodger Hunter',
                    description: 'Kennesaw',
                    image: 'assets/images/avatar/6.jpg',
                    imageAlt: 'avatar',
                    icon: 'icon-cloud-download',
                    duration: '3:42'
                },
                {
                    id: 8,
                    title: 'Walker Harry',
                    description: 'Crown Point',
                    image: 'assets/images/avatar/7.jpg',
                    imageAlt: 'avatar',
                    icon: 'icon-cloud-download',
                    duration: '3:42'
                },
                {
                    id: 9,
                    title: 'Dudley Baldric',
                    description: 'Crescent City',
                    image: 'assets/images/avatar/1.jpg',
                    imageAlt: 'avatar',
                    icon: 'icon-cloud-download',
                    duration: '3:42'
                },
                {
                    id: 10,
                    title: 'Horace Ralphie',
                    description: 'Dodgeville',
                    image: 'assets/images/avatar/2.jpg',
                    imageAlt: 'avatar',
                    icon: 'icon-cloud-download',
                    duration: '3:42'
                },
                {
                    id: 11,
                    title: 'Ellery Jez',
                    description: 'Cumberland Center',
                    image: 'assets/images/avatar/0.jpg',
                    imageAlt: 'avatar',
                    icon: 'icon-cloud-download',
                    duration: '3:42'
                },
                {
                    id: 12,
                    title: 'Alphonso Patrick',
                    description: 'Granger',
                    image: 'assets/images/avatar/3.jpg',
                    imageAlt: 'Presque Isle Harbor',
                    icon: 'icon-cloud-download',
                    duration: '3:42'
                }
            ]
        };
    };

    getDataForLayout2 = (): any => {
        return {
            headerImage: 'assets/images/background/7.jpg',
            title: 'Super discount',
            description: '50% OFF',
            iconLike: 'icon-thumb-up',
            iconFavorite: 'icon-heart',
            iconShare: 'icon-share-variant',
            items: [
                {
                    id: 1,
                    title: 'Black Shirt',
                    image: 'assets/images/avatar/0.jpg',
                    description: 'Duis aute irure dolor in reprehenderit text'
                },
                {
                    id: 2,
                    title: 'Black Sweater',
                    image: 'assets/images/avatar/1.jpg',
                    description: 'Duis aute irure dolor in reprehenderit text'
                },
                {
                    id: 3,
                    title: 'Shirt',
                    image: 'assets/images/avatar/2.jpg',
                    description: 'Duis aute irure dolor in reprehenderit text'
                },
                {
                    id: 4,
                    title: 'White Shirt',
                    image: 'assets/images/avatar/3.jpg',
                    description: 'Duis aute irure dolor in reprehenderit text'
                },
                {
                    id: 5,
                    title: 'White T Shirt',
                    image: 'assets/images/avatar/4.jpg',
                    description: 'Duis aute irure dolor in reprehenderit text'
                },
                {
                    id: 6,
                    title: 'Hoodies',
                    image: 'assets/images/avatar/5.jpg',
                    description: 'Duis aute irure dolor in reprehenderit text'
                },
                {
                    id: 7,
                    title: 'Black Shirt',
                    image: 'assets/images/avatar/0.jpg',
                    description: 'Duis aute irure dolor in reprehenderit text'
                },
                {
                    id: 8,
                    title: 'Black Sweater',
                    image: 'assets/images/avatar/1.jpg',
                    description: 'Duis aute irure dolor in reprehenderit text'
                },
                {
                    id: 9,
                    title: 'Shirt',
                    image: 'assets/images/avatar/2.jpg',
                    description: 'Duis aute irure dolor in reprehenderit text'
                },
                {
                    id: 10,
                    title: 'White Shirt',
                    image: 'assets/images/avatar/3.jpg',
                    description: 'Duis aute irure dolor in reprehenderit text'
                },
                {
                    id: 11,
                    title: 'White T Shirt',
                    image: 'assets/images/avatar/4.jpg',
                    description: 'Duis aute irure dolor in reprehenderit text'
                },
                {
                    id: 12,
                    title: 'Hoodies',
                    image: 'assets/images/avatar/5.jpg',
                    description: 'Duis aute irure dolor in reprehenderit text'
                }
            ]
        };
    };

    getDataForLayout3 = (): any => {
        return {
            headerImage: 'assets/images/background/2.jpg',
            avatar: 'assets/images/avatar/0.jpg',
            items: [
                {
                    id: 1,
                    title: 'Isaac Raid',
                    image: 'assets/images/avatar/0.jpg',
                    favorite: false
                },
                {
                    id: 2,
                    title: 'Jason Graham',
                    image: 'assets/images/avatar/1.jpg',
                    favorite: false
                },
                {
                    id: 3,
                    title: 'Abigail Ross',
                    image: 'assets/images/avatar/2.jpg',
                    favorite: false
                },
                {
                    id: 4,
                    title: 'Justin Rutherford',
                    image: 'assets/images/avatar/3.jpg',
                    favorite: false
                },
                {
                    id: 5,
                    title: 'Nicholas Henderson',
                    image: 'assets/images/avatar/4.jpg',
                    favorite: false
                },
                {
                    id: 6,
                    title: 'Elizabeth Mackenzie',
                    image: 'assets/images/avatar/5.jpg',
                    favorite: false
                },
                {
                    id: 7,
                    title: 'Melanie Ferguson',
                    image: 'assets/images/avatar/6.jpg',
                    favorite: false
                },
                {
                    id: 8,
                    title: 'Fiona Kelly',
                    image: 'assets/images/avatar/7.jpg',
                    favorite: false
                },
                {
                    id: 9,
                    title: 'Nicholas King',
                    image: 'assets/images/avatar/8.jpg',
                    favorite: false
                },
                {
                    id: 10,
                    title: 'Victoria Mitchell',
                    image: 'assets/images/avatar/9.jpg',
                    favorite: false
                },
                {
                    id: 11,
                    title: 'Sophie Lyman',
                    image: 'assets/images/avatar/10.jpg',
                    favorite: false
                },
                {
                    id: 12,
                    title: 'Carl Ince',
                    image: 'assets/images/avatar/11.jpg',
                    favorite: false
                },
                {
                    id: 13,
                    title: 'Michelle Slater',
                    image: 'assets/images/avatar/12.jpg',
                    favorite: false
                },
                {
                    id: 14,
                    title: 'Ryan Mathis',
                    image: 'assets/images/avatar/13.jpg',
                    favorite: false
                },
                {
                    id: 15,
                    title: 'Julia Grant',
                    image: 'assets/images/avatar/14.jpg',
                    favorite: false
                },
                {
                    id: 16,
                    title: 'Hannah Martin',
                    image: 'assets/images/avatar/15.jpg',
                    favorite: false
                }
            ]
        };
    };

  getDataForLayout4 = (): any => {
    return {
      headerImage: 'assets/images/background/15.jpg',
      title: "Joe's restaurant",
      iconLike: 'icon-thumb-up',
      iconFavorite: 'icon-comment',
      iconShare: 'icon-share-variant',
      reviews : '4.12 (78 reviews)',
      description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
      description2 : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
      description3:  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English',
      description4:  'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
      iconsStars: [
        { isActive : true, iconActive: 'icon-star', iconInactive: 'icon-star-outline' },
        { isActive : true, iconActive: 'icon-star', iconInactive: 'icon-star-outline' },
        { isActive : true, iconActive: 'icon-star', iconInactive: 'icon-star-outline' },
        { isActive : true, iconActive: 'icon-star', iconInactive: 'icon-star-outline' },
        { isActive : false, iconActive: 'icon-star', iconInactive: 'icon-star-outline' },
      ],
      items: [
        {
          id: 1,
          name: 'ADDRESS:',
          value: 'Boulevard of food, New York, USA'
        },
        {
          id: 2,
          name: 'PHONE:',
          value: "+555 555 555"
        },
        {
          id: 3,
          name: 'WEB:',
          value: 'www.joesrestaurant.com'
        },
        {
          id: 4,
          name: 'MAIL:',
          value: 'jimmy@gmail.com'
        },
        {
          id: 5,
          name: 'WORKING HOURS:',
          value: '7:00 to 23:00 every day'
        }
      ]
    };
  }

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
