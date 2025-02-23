import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  states = [
    {
      "id": 1,
      "name": "Meghalaya - Laitlum Canyons",
      "description": "A breathtaking gorge with panoramic views and silent trails, perfect for serene getaways and treks.",
      "image": "https://images.unsplash.com/photo-1552978534-9d01e1f91517?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 2,
      "name": "Maharashtra - Lonar Crater Lake",
      "description": "A unique meteorite impact lake surrounded by lush greenery, ancient temples, and rich biodiversity.",
      "image": "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 3,
      "name": "Rajasthan - Kuldhara Village",
      "description": "Explore the mysterious, abandoned ghost village with stories of curses and rich architectural ruins.",
      "image": "https://plus.unsplash.com/premium_photo-1699535657712-02fe404e916f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 4,
      "name": "Arunachal Pradesh - Ziro Valley",
      "description": "A lush valley known for its rice fields, pine forests, Apatani tribal culture, and music festivals.",
      "image": "https://images.unsplash.com/photo-1668437824006-1be44600774b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 5,
      "name": "Gujarat - Polo Forest",
      "description": "Discover ancient temple ruins nestled within serene forests, perfect for trekking and photography.",
      "image": "https://plus.unsplash.com/premium_photo-1711571342116-4cb397f83268?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 6,
      "name": "Himachal Pradesh - Chitkul Village",
      "description": "The last village on the Indo-Tibetan border, offering scenic landscapes, wooden houses, and peaceful vibes.",
      "image": "https://plus.unsplash.com/premium_photo-1697729736968-dbaf069935c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 7,
      "name": "Odisha - Bhitarkanika Mangrove Forest",
      "description": "A natural paradise with crocodile spotting, exotic birds, and tranquil boat rides through mangroves.",
      "image": "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]

  constructor() { }

  getStates()
  {
    return this.states;
  }
  getState(id : number)
  {
    return this.states.find(state=>state.id == id);
  }
}
