import { IService } from './IService';
import { Toast } from 'ionic-native';

export class WizardService implements IService {

    constructor() {}

    getId = (): string => 'wizard';

    getTitle = (): string => 'Wizard';

    getAllThemes = (): Array<any> => {
        return [
            {"title" : "Simple + icon", "theme"  : "layout1"},
            {"title" : "Big image", "theme"  : "layout2"},
            {"title" : "Big Image + Text", "theme"  : "layout3"}
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
            'btnPrev': 'Previous',
            'btnNext': 'Next',
            'btnFinish': 'Finish',
            'items': [
                {
                    iconSlider: 'icon-star-outline',
                    title: 'Fragment Example 1',
                    description: 'Text for Fragment Example 1 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                },
                {
                    iconSlider: 'icon-star-half',
                    title: 'Fragment Example 2',
                    description: 'Text for Fragment Example 2 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                },
                {
                    iconSlider: 'icon-star',
                    title: 'Fragment Example 3',
                    description: 'Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                }
            ]
        };
    };

    getDataForLayout2 = (): any => {
        return {
            'btnNext': 'Next',
            'btnFinish': 'Finish',
            'items': [
                {
                    backgroundImage: 'assets/images/avatar-large/1.jpg',
                    title: 'Fragment Example 1'
                },
                {
                    backgroundImage: 'assets/images/avatar-large/2.jpg',
                    title: 'Fragment Example 2'
                },
                {
                    backgroundImage: 'assets/images/avatar-large/3.jpg',
                    title: 'Fragment Example 3'
                }
            ]
        };
    };

    getDataForLayout3 = (): any => {
        return {
          'btnNext': 'Next',
          'btnFinish': 'Finish',
          'btnSkip' : 'Skip',
          'items': [
            {
              backgroundImage: 'assets/images/avatar-large/5.jpg',
              title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 1',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            },
            {
              backgroundImage: 'assets/images/avatar-large/6.jpg',
              title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 2',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            },
            {
              backgroundImage: 'assets/images/avatar-large/7.jpg',
              title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 3',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            }
          ]
        };
    }

    getEventsForTheme = (menuItem: any): any => {
        return {
            'onFinish': function(event: any) {
                if (window.location.hostname === "localhost") {
                    console.log('Finish');
                } else {
                    Toast.show("Finish", '1000', 'bottom').subscribe(toast => { });
                }
            }
        };
    };

    getShowItemId = (item: any): string => {
        return this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
    }

    prepareParams = (item: any) => {
        let result = {
            title: item.title,
            data: this.getDataForTheme(item),
            events: this.getEventsForTheme(item)
        };
        result[this.getShowItemId(item)] = true;
        return result;
    };
}
