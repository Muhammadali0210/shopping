import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      count: 5,
      product: [
        {
          "id": 1,
          "type": "Road Racing Shoes",
          "name": "Nike ZoomX Streakfly 1",
          "description": "Our lightest racing shoe, the Nike ZoomX Streakfly is all about the speed you need to take on the competition in a mile, 5K or 10K race.",
          "image": [
            {
              "id": 1,
              "img": "../src/images/shoes1.png"
            },
            {
              "id": 2,
              "img": "../src/images/shoes2.png"
            },
            {
              "id": 3,
              "img": "../src/images/shoes3.png"
            },
            {
              "id": 4,
              "img": "../src/images/shoes4.png"
            },
          ],
          "cost": 213,
          "size": [38, 40, 42, 44],
          "model": ["small", "large"],
          "add_bag": false,
          "add_wishlist": false,
          "reviwes": 13, 
          "sky_rate_result": 2.5,
          "coments": [
            {
              "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
              "username": "Ralph Edwards",
              "date": "2/10/22",
              "userimage":"",
              "sky_rate": 5
            },
            {
              "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
              "username": "John Edwards",
              "date": "8/6/22",
              "userimage":"",
              "sky_rate": 4
            },
            {
              "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
              "username": "Julia Edwards",
              "date": "3/1/22",
              "userimage":"",
              "sky_rate": 4
            },
            {
              "comment": "Ajoyib mahsulot sizlarga ham maslahat beraman. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
              "username": "Macs Edwards",
              "date": "9/12/22",
              "userimage":"",
              "sky_rate": 2
            },
            {
              "comment": "Bu krassovka menga judayom yoqdi. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
              "username": "Toms Edwards",
              "date": "22/7/22",
              "userimage":"",
              "sky_rate": 3
            },

          ]
        },
        {
          "id": 1,
          "type": "Road Racing Shoes",
          "name": "Nike ZoomX Streakfly",
          "description": "Our lightest racing shoe, the Nike ZoomX Streakfly is all about the speed you need to take on the competition in a mile, 5K or 10K race.",
          "image": [
            {
              "id": 1,
              "img": "../src/images/shoes5.png"
            },
            {
              "id": 2,
              "img": "../src/images/shoes6.png"
            },
            {
              "id": 3,
              "img": "../src/images/shoes7.png"
            },
            {
              "id": 4,
              "img": "../src/images/shoes8.png"
            },
          ],
          "cost": 213,
          "size": [38, 40, 42, 44],
          "model": ["small", "large"],
          "add_bag": false,
          "add_wishlist": false,
          "reviwes": 13, 
          "sky_rate_result": 3.2,
          "coments": [
            {
              "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
              "username": "Ralph Edwards",
              "date": "2/10/22",
              "userimage":"",
              "sky_rate": 5
            },
            {
              "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
              "username": "John Edwards",
              "date": "8/6/22",
              "userimage":"",
              "sky_rate": 4
            },
            {
              "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
              "username": "Julia Edwards",
              "date": "3/1/22",
              "userimage":"",
              "sky_rate": 4
            },
            {
              "comment": "Ajoyib mahsulot sizlarga ham maslahat beraman. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
              "username": "Macs Edwards",
              "date": "9/12/22",
              "userimage":"",
              "sky_rate": 2
            },
            {
              "comment": "Bu krassovka menga judayom yoqdi. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
              "username": "Toms Edwards",
              "date": "22/7/22",
              "userimage":"",
              "sky_rate": 3
            },

          ]
        },
        {
          "id": 1,
          "type": "Road Racing Shoes",
          "name": "Nike ZoomX Streakfly",
          "description": "Our lightest racing shoe, the Nike ZoomX Streakfly is all about the speed you need to take on the competition in a mile, 5K or 10K race.",
          "image": [
            {
              "id": 1,
              "img": "../src/images/shoes9.png"
            },
            {
              "id": 2,
              "img": "../src/images/shoes2.png"
            },
            {
              "id": 3,
              "img": "../src/images/shoes3.png"
            },
            {
              "id": 4,
              "img": "../src/images/shoes4.png"
            },
          ],
          "cost": 213,
          "size": [38, 40, 42, 44],
          "model": ["small", "large"],
          "add_bag": false,
          "add_wishlist": false,
          "reviwes": 13, 
          "sky_rate_result": 3.2,
          "coments": [
            {
              "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
              "username": "Ralph Edwards",
              "date": "2/10/22",
              "userimage":"",
              "sky_rate": 5
            },
            {
              "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
              "username": "John Edwards",
              "date": "8/6/22",
              "userimage":"",
              "sky_rate": 4
            },
            {
              "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
              "username": "Julia Edwards",
              "date": "3/1/22",
              "userimage":"",
              "sky_rate": 4
            },
            {
              "comment": "Ajoyib mahsulot sizlarga ham maslahat beraman. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
              "username": "Macs Edwards",
              "date": "9/12/22",
              "userimage":"",
              "sky_rate": 2
            },
            {
              "comment": "Bu krassovka menga judayom yoqdi. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
              "username": "Toms Edwards",
              "date": "22/7/22",
              "userimage":"",
              "sky_rate": 3
            },

          ]
        },
      ]
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    
  }
})

export default store