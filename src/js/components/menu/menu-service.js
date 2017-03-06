// https://spreadsheets.google.com/feeds/worksheets/1vQaT-10PJ4SxRXDZiV0-eCF8yRJ_scCrW74CYh21lD8/private/full
const worksheetIds = [
  'od6',
  'ob9t8ls'
];

module.exports = class MenuService {
  /** @ngInject */
  constructor($http) {
    this.http = $http;

    this.menuItems_ = [
      {
        section: 'Appetizers',
        items: [
          {
            name: 'Baked Clams',
            price: '9.99',
            description: '1/2 Dozen clams on half shell topped with Italian bread stuffing and seasoning.'
          },
          {
            name: 'Calamari Fritti',
            price: '11.99',
            description: 'Lightly battered and fried.'
          },
          {
            name: 'Bruschetta Al Pomodoro',
            price: '7.99',
            healthy: true,
            description: 'Toasted Italian bread topped with tomatoes, olive oil, garlic and onion.'
          },
          {
            name: 'Mozarella Cheese Sticks',
            price: '7.99',
            description: 'With marinara sauce.'
          },
          {
            name: 'Shrimp Cocktail',
            price: '10.99',
            healthy: true,
            description: 'A classic. Five chilled jumbo shrimp.'
          },
          {
            name: 'Fried Mushrooms',
            price: '8.99',
            description: 'Fresh mushrooms battered and fried.'
          },
          {
            name: 'Mozarella Caprese',
            price: '8.99',
            healthy: true,
            description: 'Fresh Mozarella with tomato and marinated artichokes on a bed of greens.'
          },
          {
            name: 'Zing Wings',
            price: '8.99',
            description: 'Lightly battered chicken wings.'
          },
          {
            name: 'Mussels Al Tegame',
            price: '11.99',
            healthy: true,
            description: 'Sauteed in white wine and garlic or marinara sauce.'
          },
          {
            name: 'Oysters Rockefeller',
            price: 'Market Price',
            description: '1/2 dozen.'
          },
          {
            name: 'Oysters on Half Shell',
            price: 'Market Price',
            healthy: true,
            description: 'Dozen or 1/2 dozen.'
          },
          {
            name: 'Golden Sampler',
            price: '11.99',
            description: 'Cheese Sticks, Fried Mushrooms and Zing Wings.'
          },
          {
            name: 'Stuffed Mushroom Caps',
            price: '8.99',
            description: 'With mozzarella cheese.'
          },
          {
            name: 'Portobello Mushrooms',
            price: '9.99',
            description: 'Portobello mushrooms sauteed with prosciutto, garlic, roma tomatoes and white wine topped with mozzarella cheese and marinara.'
          }
        ]
      },
      {
        section: 'Soups & Salads',
        items: [
          {
            name: 'Soup of the Day',
            price: 'Cup - 5.50, Bowl - 6.50'
          },
          {
            name: 'Soup of the Day',
            price: 'Cup - 5.50, Bowl - 6.50'
          },
          {
            name: 'Soup of the Day',
            price: 'Cup - 5.50, Bowl - 6.50'
          }
        ]
      }
    ];
  }

  // getData() {
  //   for (let i = 0; i < worksheetIds.length; i++) {
  //     const url = 'https://spreadsheets.google.com/feeds/list/' +
  //         '1vQaT-10PJ4SxRXDZiV0-eCF8yRJ_scCrW74CYh21lD8' +
  //         '/' + worksheetIds[i] + '/public/values?alt=json';
  //
  //     this.http.get(url).then((response) => {
  //       return response.data.feed.entry;
  //     }, (error) => {
  //       console.log(error);
  //     });
  //   }
  // }

  getMenuItems() {
    return this.menuItems_;
  }
};
