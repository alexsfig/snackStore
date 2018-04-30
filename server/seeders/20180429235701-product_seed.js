'use strict';
const Product = require('../models').Product;

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */

      return Product.bulkCreate(

      [{"likes":12,"price":45.44,"stock":66,"name":"Lettuce - Romaine, Heart","description":"massa donec dapibus duis at velit eu est congue elementum in hac","status":true},
      {"likes":89,"price":31.93,"stock":84,"name":"Wine - Shiraz South Eastern","description":"nunc proin at turpis a pede posuere nonummy integer non velit donec diam","status":false},
      {"likes":94,"price":14.29,"stock":125,"name":"Sping Loaded Cup Dispenser","description":"nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros","status":true},
      {"likes":49,"price":28.49,"stock":46,"name":"Salad Dressing","description":"proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante","status":false},
      {"likes":55,"price":37.35,"stock":16,"name":"Sage - Fresh","description":"amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas","status":true},
      {"likes":74,"price":29.01,"stock":60,"name":"Wheat - Soft Kernal Of Wheat","description":"libero nullam sit amet turpis elementum ligula vehicula consequat morbi a","status":false},
      {"likes":84,"price":26.07,"stock":190,"name":"Rosemary - Primerba, Paste","description":"accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi","status":false},
      {"likes":33,"price":49.77,"stock":14,"name":"Bread - Multigrain, Loaf","description":"ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet","status":false},
      {"likes":3,"price":28.68,"stock":193,"name":"Jolt Cola","description":"a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id","status":false},
      {"likes":86,"price":43.63,"stock":88,"name":"Sprouts - Alfalfa","description":"mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non","status":false},
      {"likes":12,"price":15.86,"stock":198,"name":"Truffle Cups - Brown","description":"at turpis donec posuere metus vitae ipsum aliquam non mauris","status":false},
      {"likes":51,"price":19.93,"stock":194,"name":"Corn - Mini","description":"tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac","status":false},
      {"likes":63,"price":26.27,"stock":159,"name":"Soup - Beef Conomme, Dry","description":"vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est","status":false},
      {"likes":40,"price":23.15,"stock":102,"name":"Coffee - Almond Amaretto","description":"vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula","status":true},
      {"likes":35,"price":16.51,"stock":146,"name":"Raspberries - Frozen","description":"ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae","status":true},
      {"likes":42,"price":36.45,"stock":165,"name":"Salmon - Whole, 4 - 6 Pounds","description":"ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris","status":false},
      {"likes":17,"price":29.12,"stock":83,"name":"Cheese Cheddar Processed","description":"phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in","status":false},
      {"likes":55,"price":39.25,"stock":23,"name":"Gherkin - Sour","description":"vehicula condimentum curabitur in libero ut massa volutpat convallis morbi","status":true},
      {"likes":17,"price":14.63,"stock":57,"name":"Macaroons - Homestyle Two Bit","description":"ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo","status":false},
      {"likes":88,"price":14.61,"stock":66,"name":"Soup - Campbells Asian Noodle","description":"nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros","status":true},
      {"likes":28,"price":26.05,"stock":156,"name":"Island Oasis - Banana Daiquiri","description":"id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo","status":false},
      {"likes":3,"price":17.0,"stock":141,"name":"Container - Foam Dixie 12 Oz","description":"quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst","status":false},
      {"likes":40,"price":30.8,"stock":145,"name":"Bread - Raisin","description":"duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam","status":false},
      {"likes":27,"price":36.68,"stock":73,"name":"Cheese - Grie Des Champ","description":"ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam","status":true},
      {"likes":54,"price":31.75,"stock":1,"name":"Beef - Flank Steak","description":"lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam","status":true},
      {"likes":65,"price":28.03,"stock":59,"name":"Pasta - Cheese / Spinach Bauletti","description":"accumsan felis ut at dolor quis odio consequat varius integer ac leo","status":false},
      {"likes":81,"price":24.59,"stock":180,"name":"Table Cloth 54x72 White","description":"eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus","status":true},
      {"likes":59,"price":14.55,"stock":123,"name":"Apricots - Dried","description":"non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed","status":false},
      {"likes":93,"price":10.34,"stock":62,"name":"Bread - Raisin Walnut Pull","description":"integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper","status":true},
      {"likes":18,"price":26.09,"stock":16,"name":"Mint - Fresh","description":"odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue","status":true},
      {"likes":65,"price":18.91,"stock":11,"name":"Soup - Campbells, Minestrone","description":"ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu","status":false},
      {"likes":77,"price":20.06,"stock":140,"name":"Butcher Twine 4r","description":"nibh ligula nec sem duis aliquam convallis nunc proin at turpis","status":false},
      {"likes":24,"price":29.03,"stock":163,"name":"Flour - Whole Wheat","description":"integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem","status":false},
      {"likes":82,"price":45.1,"stock":64,"name":"Pastry - Trippleberry Muffin - Mini","description":"nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed","status":false},
      {"likes":100,"price":22.13,"stock":48,"name":"Tart Shells - Savory, 3","description":"augue vestibulum ante ipsum primis in faucibus orci luctus et","status":true},
      {"likes":100,"price":31.1,"stock":56,"name":"Radish","description":"interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus","status":true},
      {"likes":15,"price":38.61,"stock":98,"name":"Sauce - Apple, Unsweetened","description":"nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet","status":false},
      {"likes":4,"price":46.65,"stock":124,"name":"Container - Clear 32 Oz","description":"dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius","status":true},
      {"likes":8,"price":43.57,"stock":40,"name":"Cheese - Le Cheve Noir","description":"integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla","status":true},
      {"likes":55,"price":38.78,"stock":34,"name":"Lamb - Racks, Frenched","description":"elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus","status":true},
      {"likes":92,"price":13.36,"stock":34,"name":"Pork - Back Ribs","description":"viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris","status":false},
      {"likes":53,"price":36.14,"stock":149,"name":"Turkey Tenderloin Frozen","description":"at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede","status":true},
      {"likes":86,"price":37.76,"stock":148,"name":"Beer - Sleeman Fine Porter","description":"mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus","status":false},
      {"likes":3,"price":27.52,"stock":168,"name":"Pepper - Pablano","description":"etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id","status":true},
      {"likes":17,"price":30.18,"stock":133,"name":"Mushroom - White Button","description":"ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in","status":true},
      {"likes":31,"price":21.21,"stock":57,"name":"Soup - Campbells Chili Veg","description":"ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla","status":true},
      {"likes":12,"price":14.01,"stock":164,"name":"Pimento - Canned","description":"faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus","status":true},
      {"likes":26,"price":36.88,"stock":161,"name":"Pie Shells 10","description":"eget nunc donec quis orci eget orci vehicula condimentum curabitur in","status":false},
      {"likes":99,"price":41.75,"stock":147,"name":"Ham - Smoked, Bone - In","description":"ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam","status":false},
      {"likes":72,"price":23.38,"stock":181,"name":"Pie Box - Cello Window 2.5","description":"proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices","status":true},
      {"likes":44,"price":34.93,"stock":140,"name":"Wine - White, Chardonnay","description":"vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque","status":false},
      {"likes":16,"price":37.16,"stock":44,"name":"Chips - Doritos","description":"iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate","status":false},
      {"likes":67,"price":13.16,"stock":44,"name":"Cactus Pads","description":"cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis","status":false},
      {"likes":82,"price":20.71,"stock":63,"name":"Halibut - Fletches","description":"vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus","status":true},
      {"likes":56,"price":10.84,"stock":97,"name":"Truffle Cups - Red","description":"dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non","status":true},
      {"likes":22,"price":41.94,"stock":130,"name":"Soup - Campbells Chili","description":"odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam","status":false},
      {"likes":34,"price":27.69,"stock":79,"name":"Hersey Shakes","description":"nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam","status":false},
      {"likes":81,"price":13.42,"stock":65,"name":"Artichokes - Knobless, White","description":"consequat ut nulla sed accumsan felis ut at dolor quis","status":true},
      {"likes":62,"price":30.33,"stock":8,"name":"Longos - Chicken Curried","description":"volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus","status":true},
      {"likes":100,"price":39.29,"stock":9,"name":"Wine - Lamancha Do Crianza","description":"pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet","status":false},
      {"likes":41,"price":9.32,"stock":135,"name":"Pepper - Green","description":"praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in","status":true},
      {"likes":7,"price":41.37,"stock":135,"name":"Wine - White, Chardonnay","description":"id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat","status":false},
      {"likes":11,"price":32.24,"stock":181,"name":"Steam Pan Full Lid","description":"parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque","status":false},
      {"likes":60,"price":14.07,"stock":111,"name":"Beer - Blue Light","description":"eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in","status":false},
      {"likes":87,"price":38.32,"stock":128,"name":"Crab - Dungeness, Whole, live","description":"non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed","status":false},
      {"likes":50,"price":26.76,"stock":59,"name":"Celery","description":"quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi","status":true},
      {"likes":96,"price":37.34,"stock":121,"name":"Cookies - Englishbay Oatmeal","description":"rutrum rutrum neque aenean auctor gravida sem praesent id massa id","status":true},
      {"likes":88,"price":17.53,"stock":166,"name":"Flour - Strong","description":"eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien","status":false},
      {"likes":99,"price":28.9,"stock":118,"name":"Ham Black Forest","description":"nulla elit ac nulla sed vel enim sit amet nunc","status":false},
      {"likes":42,"price":35.97,"stock":157,"name":"Coffee - Egg Nog Capuccino","description":"mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis","status":true},
      {"likes":11,"price":34.48,"stock":93,"name":"Stock - Chicken, White","description":"turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus","status":true},
      {"likes":23,"price":43.97,"stock":86,"name":"Lamb - Ground","description":"cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi","status":false},
      {"likes":8,"price":42.61,"stock":62,"name":"Truffle Paste","description":"libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit","status":false},
      {"likes":9,"price":45.6,"stock":54,"name":"Marjoram - Dried, Rubbed","description":"sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis","status":true},
      {"likes":63,"price":24.61,"stock":127,"name":"Nori Sea Weed","description":"suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non","status":true},
      {"likes":51,"price":14.64,"stock":191,"name":"Rice - Basmati","description":"erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis","status":true},
      {"likes":5,"price":37.99,"stock":148,"name":"Flax Seed","description":"consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices","status":true},
      {"likes":89,"price":47.07,"stock":15,"name":"Baking Powder","description":"eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies","status":true},
      {"likes":27,"price":31.85,"stock":97,"name":"Foil - Round Foil","description":"sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam","status":true},
      {"likes":66,"price":41.38,"stock":153,"name":"Cake - Sheet Strawberry","description":"mattis odio donec vitae nisi nam ultrices libero non mattis","status":true},
      {"likes":51,"price":42.95,"stock":28,"name":"Wine - Chianti Classico Riserva","description":"ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac","status":true},
      {"likes":44,"price":26.47,"stock":58,"name":"Sugar - Cubes","description":"non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed","status":false},
      {"likes":33,"price":24.62,"stock":129,"name":"Beans - Navy, Dry","description":"massa donec dapibus duis at velit eu est congue elementum in hac","status":true},
      {"likes":82,"price":28.93,"stock":101,"name":"Wine - Lou Black Shiraz","description":"vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla","status":true},
      {"likes":30,"price":31.95,"stock":190,"name":"Pasta - Rotini, Dry","description":"consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer","status":false},
      {"likes":67,"price":34.5,"stock":15,"name":"Scrubbie - Scotchbrite Hand Pad","description":"primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel","status":true},
      {"likes":63,"price":24.08,"stock":48,"name":"Split Peas - Green, Dry","description":"lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in","status":true},
      {"likes":52,"price":22.57,"stock":29,"name":"Sobe - Berry Energy","description":"rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut","status":true},
      {"likes":19,"price":41.02,"stock":99,"name":"Rum - Cream, Amarula","description":"ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam","status":false},
      {"likes":52,"price":13.47,"stock":66,"name":"Coffee - Frthy Coffee Crisp","description":"id sapien in sapien iaculis congue vivamus metus arcu adipiscing","status":false},
      {"likes":39,"price":45.05,"stock":76,"name":"Tequila - Sauza Silver","description":"justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices","status":false},
      {"likes":93,"price":38.24,"stock":186,"name":"Muffin - Bran Ind Wrpd","description":"nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum","status":false},
      {"likes":64,"price":12.92,"stock":152,"name":"Meldea Green Tea Liquor","description":"justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam","status":true},
      {"likes":11,"price":29.35,"stock":189,"name":"Quail - Jumbo Boneless","description":"sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in","status":true},
      {"likes":45,"price":34.26,"stock":131,"name":"Tea - Vanilla Chai","description":"luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien","status":true},
      {"likes":16,"price":49.2,"stock":182,"name":"Sage - Fresh","description":"nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna","status":false},
      {"likes":77,"price":46.48,"stock":16,"name":"Kolrabi","description":"sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque","status":true},
      {"likes":59,"price":28.88,"stock":56,"name":"V8 - Berry Blend","description":"leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus","status":true},
      {"likes":17,"price":29.04,"stock":200,"name":"Pasta - Fusili, Dry","description":"luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin","status":false},
      {"likes":67,"price":26.58,"stock":191,"name":"Coffee Cup 16oz Foam","description":"luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh","status":true}]
      , {}
    ).then(() => { // Notice: There are no arguments here, as of right now you'll have to...
      return "All products has been created";
    }).then(products => {
      console.log(products) // ... in order to get the array of user objects
    });

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
