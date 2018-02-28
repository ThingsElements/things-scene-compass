import locales from './locales';

var templates = [{
  name: 'Compass', /* 다국어 키 표현을 어떻게.. */
  description: '...', /* 다국어 키 표현을 어떻게.. */
  group: 'etc', /* line|shape|textAndMedia|chartAndGauge|table|container|dataSource|IoT|3D|warehouse|form|etc */
  icon: '../', /* 또는, Object */
  template: {
    type: 'compass',
    model: {
        type: 'compass',
        cx: 150,
        cy: 150,
        rx: 50,
        ry: 50,
        value: 0,
        fontSize: 20,
        fontColoe: '#000',
        fillStyle: '#F2F2F2',
        strokeStyle: '#AAAAAA',
        lineWidth: 10,
        fontColor: '#ff0000',
        alpha: 1
    }
  }
}];

module.exports = {
  locales,
  templates
};
