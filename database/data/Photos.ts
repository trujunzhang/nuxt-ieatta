import { IFBPhoto } from 'ieattatypes/types/index'
import { PhotoType } from '~/database/constant'
import { loadRecipes } from '~/database/data/Recipes'
import { filterUser } from '~/database/data/Users'
import { loadRestaurants } from '~/database/data/Restaurants'

const getLocation = (item: IFBPhoto, restaurantId?: string) => {
  loadRestaurants().forEach((restaurant) => {
    if (restaurant.uniqueId === restaurantId) {
      // item
      // item.geoHash = restaurant.geoHash
      // item.latitude = restaurant.latitude
      // item.longitude = restaurant.longitude
    }
  })
}

const addLocationForRecipe = (item: IFBPhoto) => {
  for (const index in loadRecipes()) {
    if (loadRecipes()[index].uniqueId === item.recipeId) {
      getLocation(item, loadRecipes()[index].restaurantId)
    }
  }
}

const addCommonFields = (item: IFBPhoto) => {
  // offline(2)
  item.offlinePath = ''

  // extra
  item.extraNote = ''

  // user(2)
  const creatorId = item.creatorId
  if (creatorId) {
    const user = filterUser(creatorId)
    if (user) {
      item.username = user.username
      item.avatarUrl = user.originalUrl || ''
    }
  } else {
    item.username = ''
    item.avatarUrl = ''
  }
}

export const loadPhotos = (): IFBPhoto[] => {
  const next = photos.map((item: IFBPhoto) => {
    switch (item.photoType) {
      case PhotoType.Restaurant: {
        getLocation(item, item.restaurantId)
        break
      }
      case PhotoType.Recipe: {
        addLocationForRecipe(item)
        break
      }
    }

    addCommonFields(item)
    // console.log(JSON.stringify(item))
    return item
  })
  // console.log(JSON.stringify(next))
  return next
}

const photos: IFBPhoto[] =
  [{
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529261/politicl/o_xr3usf.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--qsTnagxL--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_xr3usf',
    // url: 'https://s3-media1.fl.yelpcdn.com/bphoto/6WZcm0sujFq8jQ9fvs_KwQ/o.jpg',
    photoType: 'restaurant',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    uniqueId: '8fda3252-1bdb-4195-8c2d-29a715ddce6f',
    createdAt: '2017-10-09T06:02:22.237+0000',
    updatedAt: '2017-11-07T00:39:34.665+0000',
    userId: 'zis2vkx9G2',
    creatorId: 'clB85fmtwS',
    flag: '1',
    // geoHash: 'hb00n8n2pb08',
    // latitude: -118.253985,
    // longitude: 34.044561,
    offlinePath: '',

    extraNote: '',
    username: 'Nkechi Jim',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530628/politicl/o_luk1is.jpg'
  }, {
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529271/politicl/o_bpyepj.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--6GK394Mb--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_bpyepj',
    // url: 'https://s3-media4.fl.yelpcdn.com/bphoto/e0ko4SOkgKsr2tQYR1rPIg/o.jpg',
    photoType: 'restaurant',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    uniqueId: 'c00bb511-a935-422d-8ec6-ddd02c7f103e',
    createdAt: '2017-10-09T06:02:29.646+0000',
    updatedAt: '2017-11-06T09:57:52.735+0000',
    userId: 'PqAx0FCrEn',
    creatorId: 'clB85fmtwS',
    flag: '1',
    // geoHash: 'hb00n8n2pb08',
    // latitude: -118.253985,
    // longitude: 34.044561,
    offlinePath: '',

    extraNote: '',
    username: 'Nkechi Jim',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530628/politicl/o_luk1is.jpg'
  }, {
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529281/politicl/o_dyph8v.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--4NY4aNvA--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_dyph8v',
    // url: 'https://s3-media3.fl.yelpcdn.com/bphoto/QyqDo9cpaygMTs4e6ozayw/o.jpg',
    photoType: 'restaurant',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    uniqueId: '738dacdc-b3a9-4302-9c23-c59b876da99e',
    createdAt: '2017-10-09T06:02:37.069+0000',
    updatedAt: '2017-11-06T09:18:51.460+0000',
    userId: 'zis2vkx9G2',
    creatorId: 'tiBfFJkC71',
    flag: '1',
    // geoHash: 'hb00n8n2pb08',
    // latitude: -118.253985,
    // longitude: 34.044561,
    offlinePath: '',

    extraNote: '',
    username: 'Cheryl Philly',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530609/politicl/o_ycidf6.jpg'
  }, {
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529311/politicl/o_ugrhuw.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--TqIOho75--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_ugrhuw',
    // url: 'https://s3-media3.fl.yelpcdn.com/bphoto/idHB5V5yEhk5Jmfc8d2luw/o.jpg',
    photoType: 'restaurant',
    restaurantId: '0b92b483-8860-438b-961d-4fef4b124176',
    uniqueId: 'de91e3f6-75e7-4959-a299-1399c50a36ad',
    createdAt: '2017-10-09T06:02:59.618+0000',
    updatedAt: '2017-10-09T06:35:28.105+0000',
    userId: 'ua04ebIMCn',
    creatorId: 'ua04ebIMCn',
    flag: '1',
    // geoHash: 'hb00nb521bn8',
    // latitude: -118.247636,
    // longitude: 34.051178,
    offlinePath: '',

    extraNote: '',
    username: 'Sarah Holl',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530582/politicl/o_zeno6i.jpg'
  }, {
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529321/politicl/o_gfxzrj.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--Fo2H27fM--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_gfxzrj',
    // url: 'https://s3-media1.fl.yelpcdn.com/bphoto/jJImRSGh-hJYgh6eLSVsLQ/o.jpg',
    photoType: 'restaurant',
    restaurantId: '0b92b483-8860-438b-961d-4fef4b124176',
    uniqueId: '3d63e974-112b-4006-b842-27b26ed756c2',
    createdAt: '2017-10-09T06:03:17.228+0000',
    updatedAt: '2017-10-09T06:35:39.672+0000',
    userId: 'tiBfFJkC71',
    creatorId: 'tiBfFJkC71',
    flag: '1',
    // geoHash: 'hb00nb521bn8',
    // latitude: -118.247636,
    // longitude: 34.051178,
    offlinePath: '',

    extraNote: '',
    username: 'Cheryl Philly',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530609/politicl/o_ycidf6.jpg'
  }, {
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529351/politicl/o_h1fei1.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--r05hgf5R--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_h1fei1',
    // url: 'https://s3-media1.fl.yelpcdn.com/bphoto/goA0JX-sed3zho9Il3VSKg/o.jpg',
    photoType: 'restaurant',
    restaurantId: 'f603f752-5641-472d-bcd1-0dec921b8931',
    uniqueId: 'd1754ec6-3c52-495e-bad1-f3749b8e758f',
    createdAt: '2017-10-09T06:04:03.927+0000',
    updatedAt: '2017-10-09T06:36:14.576+0000',
    userId: 'clB85fmtwS',
    creatorId: 'clB85fmtwS',
    flag: '1',
    // geoHash: 'hb00nb521bn8',
    // latitude: -118.249782,
    // longitude: 34.050796,
    offlinePath: '',

    extraNote: '',
    username: 'Nkechi Jim',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530628/politicl/o_luk1is.jpg'
  }, {
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529360/politicl/o_cz9lwf.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--j-Ij7met--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_cz9lwf',
    // url: 'https://s3-media2.fl.yelpcdn.com/bphoto/l3zkW8UULlFPuauCMUlHIg/o.jpg',
    photoType: 'restaurant',
    restaurantId: 'f603f752-5641-472d-bcd1-0dec921b8931',
    uniqueId: '65c76621-35a5-4548-8dbf-de7b9eda289f',
    createdAt: '2017-10-09T06:04:12.101+0000',
    updatedAt: '2017-10-09T06:36:28.479+0000',
    userId: 'PqAx0FCrEn',
    creatorId: 'PqAx0FCrEn',
    flag: '1',
    // geoHash: 'hb00nb521bn8',
    // latitude: -118.249782,
    // longitude: 34.050796,
    offlinePath: '',

    extraNote: '',
    username: 'Derek Hele',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530557/politicl/o_dogqeq.jpg'
  }, {
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529370/politicl/o_yjpbn3.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--Z141RJsD--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_yjpbn3',
    // url: 'https://s3-media4.fl.yelpcdn.com/bphoto/cjnN5XPYCGbeBOQcNRj0QA/o.jpg',
    photoType: 'restaurant',
    restaurantId: 'f603f752-5641-472d-bcd1-0dec921b8931',
    uniqueId: '9f25c149-4b4e-4c83-a416-523ccf07a7aa',
    createdAt: '2017-10-09T06:04:19.432+0000',
    updatedAt: '2017-10-09T06:36:39.510+0000',
    userId: 'zis2vkx9G2',
    creatorId: 'zis2vkx9G2',
    flag: '1',
    // geoHash: 'hb00nb521bn8',
    // latitude: -118.249782,
    // longitude: 34.050796,
    offlinePath: '',

    extraNote: '',
    username: 'Jaron Lawrence',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530533/politicl/o_zhkvq8.jpg'
  }, {
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529398/politicl/o_npi8ev.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--pdqw12x3--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_npi8ev',
    // url: 'https://s3-media1.fl.yelpcdn.com/bphoto/iwldbyBasVNGjcKLLhSwoA/o.jpg',
    photoType: 'restaurant',
    restaurantId: '0423ce1f-34c5-405a-9b7a-22202046ee68',
    uniqueId: 'ca65f74e-f783-4656-9db4-9953f91548dd',
    createdAt: '2017-10-09T06:04:42.551+0000',
    updatedAt: '2017-10-09T06:37:11.757+0000',
    userId: 'PqAx0FCrEn',
    creatorId: 'PqAx0FCrEn',
    flag: '1',
    // geoHash: 'hb00nb584012',
    // latitude: -118.253312,
    // longitude: 34.051525,
    offlinePath: '',

    extraNote: '',
    username: 'Derek Hele',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530557/politicl/o_dogqeq.jpg'
  }, {
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529407/politicl/o_smfudp.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--yrfOtOZo--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_smfudp',
    // url: 'https://s3-media3.fl.yelpcdn.com/bphoto/YV0MsjbPdGhYeP_JtvSxUA/o.jpg',
    photoType: 'restaurant',
    restaurantId: '0423ce1f-34c5-405a-9b7a-22202046ee68',
    uniqueId: '08dd6e03-7345-43b9-abe7-64f7e8c3df14',
    createdAt: '2017-10-09T06:04:50.826+0000',
    updatedAt: '2017-10-09T06:37:23.633+0000',
    userId: 'ua04ebIMCn',
    creatorId: 'ua04ebIMCn',
    flag: '1',
    // geoHash: 'hb00nb584012',
    // latitude: -118.253312,
    // longitude: 34.051525,
    offlinePath: '',

    extraNote: '',
    username: 'Sarah Holl',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530582/politicl/o_zeno6i.jpg'
  }, {
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529417/politicl/o_nnaeic.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--BbZSUMkR--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_nnaeic',
    // url: 'https://s3-media1.fl.yelpcdn.com/bphoto/qOjCzq6cJMx1lUkRs5Kcjg/o.jpg',
    photoType: 'restaurant',
    restaurantId: '0423ce1f-34c5-405a-9b7a-22202046ee68',
    uniqueId: '0e14dce6-2430-496f-8fd6-206a523e7aff',
    createdAt: '2017-10-09T06:04:58.950+0000',
    updatedAt: '2017-10-09T06:37:38.052+0000',
    userId: 'zis2vkx9G2',
    creatorId: 'zis2vkx9G2',
    flag: '1',
    // geoHash: 'hb00nb584012',
    // latitude: -118.253312,
    // longitude: 34.051525,
    offlinePath: '',

    extraNote: '',
    username: 'Jaron Lawrence',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530533/politicl/o_zhkvq8.jpg'
  }, {
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529446/politicl/o_ygnkam.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--sX0P-dsK--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_ygnkam',
    // url: 'https://s3-media4.fl.yelpcdn.com/bphoto/CnqJyNQQ90YGP3p8UE5qKA/o.jpg',
    photoType: 'restaurant',
    restaurantId: 'e854bd77-7836-4244-8b17-f7b2ec5e910a',
    uniqueId: 'ccea19d8-f2a7-4093-9c60-4be3dee72763',
    createdAt: '2017-10-09T06:05:20.828+0000',
    updatedAt: '2017-10-09T06:38:10.947+0000',
    userId: 'zis2vkx9G2',
    creatorId: 'zis2vkx9G2',
    flag: '1',
    // geoHash: 'hb00nb1b18n2',
    // latitude: -118.254707,
    // longitude: 34.049107,
    offlinePath: '',

    extraNote: '',
    username: 'Jaron Lawrence',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530533/politicl/o_zhkvq8.jpg'
  }, {
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529457/politicl/o_eaa0ox.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--JUlTz8rL--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_eaa0ox',
    // url: 'https://s3-media3.fl.yelpcdn.com/bphoto/EM884zKnPKqs5sw1TVExbg/o.jpg',
    photoType: 'restaurant',
    restaurantId: 'e854bd77-7836-4244-8b17-f7b2ec5e910a',
    uniqueId: '73922db3-ec02-42e8-9faa-a48643a822ee',
    createdAt: '2017-10-09T06:05:28.325+0000',
    updatedAt: '2017-10-09T06:38:22.794+0000',
    userId: 'PqAx0FCrEn',
    creatorId: 'PqAx0FCrEn',
    flag: '1',
    // geoHash: 'hb00nb1b18n2',
    // latitude: -118.254707,
    // longitude: 34.049107,
    offlinePath: '',

    extraNote: '',
    username: 'Derek Hele',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530557/politicl/o_dogqeq.jpg'
  }, {
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529469/politicl/o_pimlql.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--0fnK7zI5--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_pimlql',
    // url: 'https://s3-media1.fl.yelpcdn.com/bphoto/akJ3m_Gh6RIyRvGyjwjQig/o.jpg',
    photoType: 'restaurant',
    restaurantId: 'e854bd77-7836-4244-8b17-f7b2ec5e910a',
    uniqueId: '4abe1029-4e2c-481c-8bdd-3b3f9f1f5d9b',
    createdAt: '2017-10-09T06:05:35.451+0000',
    updatedAt: '2017-10-09T06:38:34.021+0000',
    userId: 'ua04ebIMCn',
    creatorId: 'ua04ebIMCn',
    flag: '1',
    // geoHash: 'hb00nb1b18n2',
    // latitude: -118.254707,
    // longitude: 34.049107,
    offlinePath: '',

    extraNote: '',
    username: 'Sarah Holl',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530582/politicl/o_zeno6i.jpg'
  }, {
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529479/politicl/o_xtisvp.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--9m2gE--s--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_xtisvp',
    // url: 'https://s3-media1.fl.yelpcdn.com/bphoto/Pi9hpELPd-o6nNwbJHZQbA/o.jpg',
    photoType: 'restaurant',
    restaurantId: 'e854bd77-7836-4244-8b17-f7b2ec5e910a',
    uniqueId: '1f5d33d9-b8f3-427d-9f8a-21eebd55db55',
    createdAt: '2017-10-09T06:05:42.619+0000',
    updatedAt: '2017-10-09T06:38:45.189+0000',
    userId: 'zis2vkx9G2',
    creatorId: 'zis2vkx9G2',
    flag: '1',
    // geoHash: 'hb00nb1b18n2',
    // latitude: -118.254707,
    // longitude: 34.049107,
    offlinePath: '',

    extraNote: '',
    username: 'Jaron Lawrence',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530533/politicl/o_zhkvq8.jpg'
  }, {
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529490/politicl/o_xylngj.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--OmbiQl0c--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_xylngj',
    // url: 'https://s3-media1.fl.yelpcdn.com/bphoto/8IuLF61kJzjb__E-xY37zw/o.jpg',
    photoType: 'restaurant',
    restaurantId: 'e854bd77-7836-4244-8b17-f7b2ec5e910a',
    uniqueId: '058b294d-e8d7-433f-957d-fb654992d01d',
    createdAt: '2017-10-09T06:05:50.021+0000',
    updatedAt: '2017-10-09T06:38:57.120+0000',
    userId: 'tiBfFJkC71',
    creatorId: 'tiBfFJkC71',
    flag: '1',
    // geoHash: 'hb00nb1b18n2',
    // latitude: -118.254707,
    // longitude: 34.049107,
    offlinePath: '',

    extraNote: '',
    username: 'Cheryl Philly',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530609/politicl/o_ycidf6.jpg'
  }, {
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529500/politicl/o_pbivnd.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--xiGcPS03--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_pbivnd',
    // url: 'https://s3-media4.fl.yelpcdn.com/bphoto/nB5cu_83og7Y8ZyXz4h5cw/o.jpg',
    photoType: 'restaurant',
    restaurantId: 'e854bd77-7836-4244-8b17-f7b2ec5e910a',
    uniqueId: '536859e6-3ce3-4f32-b533-6d1817fb6023',
    createdAt: '2017-10-09T06:05:59.025+0000',
    updatedAt: '2017-10-09T06:39:09.041+0000',
    userId: 'PqAx0FCrEn',
    creatorId: 'PqAx0FCrEn',
    flag: '1',
    // geoHash: 'hb00nb1b18n2',
    // latitude: -118.254707,
    // longitude: 34.049107,
    offlinePath: '',

    extraNote: '',
    username: 'Derek Hele',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530557/politicl/o_dogqeq.jpg'
  }, {
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531726/politicl/o_xkor8t.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--_ykUTkdO--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_xkor8t',
    // url: 'https://s3-media1.fl.yelpcdn.com/bphoto/fdpSD5ZgbWmfAxOVCVXDxw/o.jpg',
    photoType: 'recipe',
    creatorId: 'tiBfFJkC71',
    recipeId: '5d30724f-4d13-456c-8a50-358ac3861786',
    uniqueId: '69e88542-cdf1-41d9-b353-64a69686ee1b',
    createdAt: '2017-10-09T06:48:46.783+0000',
    updatedAt: '2017-10-19T01:59:24.161+0000',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1',
    // geoHash: 'hb00n8n2pb08',
    // latitude: -118.253985,
    // longitude: 34.044561,
    offlinePath: '',

    extraNote: '',
    username: 'Cheryl Philly',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530609/politicl/o_ycidf6.jpg'
  }, {
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531750/politicl/o_j3xxe9.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--03VMWlP_--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_j3xxe9',
    // url: 'https://s3-media2.fl.yelpcdn.com/bphoto/zAtPQP7xNDVz4MyUtwRXDQ/o.jpg',
    photoType: 'recipe',
    creatorId: 'clB85fmtwS',
    recipeId: 'd37d6d87-5031-4482-bbd3-c5f51f5cf00e',
    uniqueId: '91995cdb-1caf-4816-a8d7-469f711fb79d',
    createdAt: '2017-10-09T06:49:10.011+0000',
    updatedAt: '2017-10-19T02:00:00.313+0000',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1',
    // geoHash: 'hb00n8n2pb08',
    // latitude: -118.253985,
    // longitude: 34.044561,
    offlinePath: '',

    extraNote: '',
    username: 'Nkechi Jim',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530628/politicl/o_luk1is.jpg'
  }, {
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531774/politicl/o_fxiuk6.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--aD34Krh_--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_fxiuk6',
    // url: 'https://s3-media2.fl.yelpcdn.com/bphoto/82O9b8SVHiUGUL5radCwzg/o.jpg',
    photoType: 'recipe',
    creatorId: 'zis2vkx9G2',
    recipeId: '3d0476f3-1225-4c0b-9042-7e22e22734e7',
    uniqueId: 'ee168bf6-86ea-4862-9679-40f08c38a9cf',
    createdAt: '2017-10-09T06:49:34.846+0000',
    updatedAt: '2017-10-19T02:00:08.496+0000',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1',
    // geoHash: 'hb00n8n2pb08',
    // latitude: -118.253985,
    // longitude: 34.044561,
    offlinePath: '',

    extraNote: '',
    username: 'Jaron Lawrence',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530533/politicl/o_zhkvq8.jpg'
  }, {
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531799/politicl/o_sewnmn.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--UO1R80Ds--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_sewnmn',
    // url: 'https://s3-media2.fl.yelpcdn.com/bphoto/uRhlSTsfxsDpkBSfn4AKOA/o.jpg',
    photoType: 'recipe',
    creatorId: 'clB85fmtwS',
    recipeId: 'b0b9fa6f-e95e-46d5-aee4-f693de0ad910',
    uniqueId: '0fffe4a3-5033-4789-a5fd-8cf6c5e83681',
    createdAt: '2017-10-09T06:49:59.308+0000',
    updatedAt: '2017-10-19T02:00:16.994+0000',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1',
    // geoHash: 'hb00n8n2pb08',
    // latitude: -118.253985,
    // longitude: 34.044561,
    offlinePath: '',

    extraNote: '',
    username: 'Nkechi Jim',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530628/politicl/o_luk1is.jpg'
  }, {
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531824/politicl/o_sm57rc.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--rgJwuthn--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_sm57rc',
    // url: 'https://s3-media4.fl.yelpcdn.com/bphoto/kF-1-JELVL93vT0BQ-LuKA/o.jpg',
    photoType: 'recipe',
    creatorId: 'clB85fmtwS',
    recipeId: '89ec8123-7f08-4ab3-8d6d-f3ece7fb9620',
    uniqueId: '286f1e8c-5efe-483c-b234-33d398223cc2',
    createdAt: '2017-10-09T06:50:24.204+0000',
    updatedAt: '2017-10-19T02:00:25.702+0000',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1',
    // geoHash: 'hb00n8n2pb08',
    // latitude: -118.253985,
    // longitude: 34.044561,
    offlinePath: '',

    extraNote: '',
    username: 'Nkechi Jim',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530628/politicl/o_luk1is.jpg'
  }, {
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531849/politicl/o_tgo9rx.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--b9gqIyN5--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_tgo9rx',
    // url: 'https://s3-media3.fl.yelpcdn.com/bphoto/KdMsYWvbbg9CYUirAMRN_Q/o.jpg',
    photoType: 'recipe',
    creatorId: 'tiBfFJkC71',
    recipeId: 'f23a24ae-e752-4237-bc4a-cd991cf0159a',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    uniqueId: '2be3b9e2-e694-4340-b170-c386e0a9f3e3',
    createdAt: '2017-10-09T06:50:49.564+0000',
    updatedAt: '2017-10-19T02:00:31.775+0000',
    flag: '1',
    // geoHash: 'hb00n8n2pb08',
    // latitude: -118.253985,
    // longitude: 34.044561,
    offlinePath: '',

    extraNote: '',
    username: 'Cheryl Philly',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530609/politicl/o_ycidf6.jpg'
  }, {
    flag: '1',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531873/politicl/o_t464fv.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--NRGMd50V--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_t464fv',
    // url: 'https://s3-media2.fl.yelpcdn.com/bphoto/CQIjKn0iDmqNPUYIIWVElw/o.jpg',
    photoType: 'recipe',
    creatorId: 'PqAx0FCrEn',
    recipeId: '4da96d60-89fd-4977-9fd2-cc639c659b21',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    uniqueId: '27275d5a-1600-40d8-8a6e-30aaaf1478b4',
    createdAt: '2017-10-09T06:51:13.785+0000',
    updatedAt: '2017-10-19T02:00:40.875+0000',
    // geoHash: 'hb00n8n2pb08',
    // latitude: -118.253985,
    // longitude: 34.044561,
    offlinePath: '',

    extraNote: '',
    username: 'Derek Hele',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530557/politicl/o_dogqeq.jpg'
  }, {
    flag: '1',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531897/politicl/o_adl9hj.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--QD9W0JNe--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_adl9hj',
    // url: 'https://s3-media3.fl.yelpcdn.com/bphoto/clBESridEiXiOx5GWL31sg/o.jpg',
    photoType: 'recipe',
    creatorId: 'PqAx0FCrEn',
    recipeId: '975bcdb8-dbd6-46e5-a532-7b45b830f483',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    uniqueId: 'cd7de0cc-eb8c-44b6-862d-d7558404836c',
    createdAt: '2017-10-09T06:51:37.848+0000',
    updatedAt: '2017-10-19T02:00:48.448+0000',
    // geoHash: 'hb00n8n2pb08',
    // latitude: -118.253985,
    // longitude: 34.044561,
    offlinePath: '',

    extraNote: '',
    username: 'Derek Hele',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530557/politicl/o_dogqeq.jpg'
  }, {
    flag: '1',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531920/politicl/o_ggmcbh.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--4OkxwxNV--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_ggmcbh',
    // url: 'https://s3-media1.fl.yelpcdn.com/bphoto/pcDCWbOJZGXM5ERPoTXZsg/o.jpg',
    photoType: 'recipe',
    creatorId: 'tiBfFJkC71',
    recipeId: '5a837699-06d6-4681-8f75-66278d45e298',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    uniqueId: 'df759dce-5b45-4b1d-b1e6-fef4f56d71db',
    createdAt: '2017-10-09T06:52:00.226+0000',
    updatedAt: '2017-10-19T02:00:55.324+0000',
    // geoHash: 'hb00n8n2pb08',
    // latitude: -118.253985,
    // longitude: 34.044561,
    offlinePath: '',

    extraNote: '',
    username: 'Cheryl Philly',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530609/politicl/o_ycidf6.jpg'
  }, {
    flag: '1',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531941/politicl/o_dwbrvn.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--YD3QQ8I0--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_dwbrvn',
    // url: 'https://s3-media4.fl.yelpcdn.com/bphoto/Sybe9Cm1EE4DHntLSUMGpg/o.jpg',
    photoType: 'recipe',
    creatorId: 'clB85fmtwS',
    recipeId: '017d2e60-ee82-49ee-8e3f-1f23d246a667',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    uniqueId: '76ed857f-fad5-46fa-8958-721c0210ba62',
    createdAt: '2017-10-09T06:52:21.829+0000',
    updatedAt: '2017-10-19T02:01:12.829+0000',
    // geoHash: 'hb00n8n2pb08',
    // latitude: -118.253985,
    // longitude: 34.044561,
    offlinePath: '',

    extraNote: '',
    username: 'Nkechi Jim',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530628/politicl/o_luk1is.jpg'
  }, {
    flag: '1',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531963/politicl/o_trkntk.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--SLYNMwNg--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_trkntk',
    // url: 'https://s3-media4.fl.yelpcdn.com/bphoto/pE2QCTBNl1JtETtGmvyj9w/o.jpg',
    photoType: 'recipe',
    creatorId: 'clB85fmtwS',
    recipeId: '2ffbf644-c568-4d26-87e9-1023c1458932',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    uniqueId: '6abaef62-fb33-4efc-b334-e08d7f3f77db',
    createdAt: '2017-10-09T06:52:43.698+0000',
    updatedAt: '2017-10-19T02:02:02.521+0000',
    // geoHash: 'hb00n8n2pb08',
    // latitude: -118.253985,
    // longitude: 34.044561,
    offlinePath: '',

    extraNote: '',
    username: 'Nkechi Jim',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530628/politicl/o_luk1is.jpg'
  }, {
    flag: '1',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531986/politicl/o_nxart3.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--dJRJlkjr--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_nxart3',
    // url: 'https://s3-media2.fl.yelpcdn.com/bphoto/G7OInXM7iG8Q4ycyb8tTeQ/o.jpg',
    photoType: 'recipe',
    creatorId: 'zis2vkx9G2',
    recipeId: '4be8853c-c7e5-438a-9372-1ecb87b74a79',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    uniqueId: '6dd0cd39-e921-4ea1-88a3-8bf4a7057db4',
    createdAt: '2017-10-09T06:53:06.418+0000',
    updatedAt: '2017-10-19T02:02:09.234+0000',
    // geoHash: 'hb00n8n2pb08',
    // latitude: -118.253985,
    // longitude: 34.044561,
    offlinePath: '',

    extraNote: '',
    username: 'Jaron Lawrence',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530533/politicl/o_zhkvq8.jpg'
  }, {
    flag: '1',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507532007/politicl/o_xdtmjn.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--j8kOEbZ1--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_xdtmjn',
    // url: 'https://s3-media3.fl.yelpcdn.com/bphoto/aRlI3Fug6L1fqvVoVA3Egg/o.jpg',
    photoType: 'recipe',
    creatorId: 'tiBfFJkC71',
    recipeId: '45e446e1-86cb-43f6-925a-8b5c197ea666',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    uniqueId: '19b364ea-f6f8-4098-9435-5de1d08a4eb2',
    createdAt: '2017-10-09T06:53:27.607+0000',
    updatedAt: '2017-10-19T02:02:15.488+0000',
    // geoHash: 'hb00n8n2pb08',
    // latitude: -118.253985,
    // longitude: 34.044561,
    offlinePath: '',

    extraNote: '',
    username: 'Cheryl Philly',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530609/politicl/o_ycidf6.jpg'
  }, {
    flag: '1',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507532030/politicl/o_jhce0k.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--OK2aM5rt--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_jhce0k',
    // url: 'https://s3-media4.fl.yelpcdn.com/bphoto/Dr3l7U3kNkTlwsXT4feD0g/o.jpg',
    photoType: 'recipe',
    creatorId: 'PqAx0FCrEn',
    recipeId: '0e53bc39-600d-4db2-8306-e9dad062e6a5',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    uniqueId: 'c68270ba-f613-4add-b35e-b7c21ce412c2',
    createdAt: '2017-10-09T06:53:50.578+0000',
    updatedAt: '2017-10-19T02:02:22.034+0000',
    // geoHash: 'hb00n8n2pb08',
    // latitude: -118.253985,
    // longitude: 34.044561,
    offlinePath: '',

    extraNote: '',
    username: 'Derek Hele',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530557/politicl/o_dogqeq.jpg'
  }, {
    flag: '1',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507532056/politicl/o_fcscmf.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--C43wdmxN--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_fcscmf',
    // url: 'https://s3-media2.fl.yelpcdn.com/bphoto/gkFc7NClZAtuk3VJWbyNZg/o.jpg',
    photoType: 'recipe',
    creatorId: 'clB85fmtwS',
    recipeId: '9d6861d4-3692-4a6b-a01d-6476725550b4',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    uniqueId: 'ce4e7e8e-49bb-4866-a280-ca61e8b54d60',
    createdAt: '2017-10-09T06:54:15.853+0000',
    updatedAt: '2017-10-19T02:02:28.480+0000',
    // geoHash: 'hb00n8n2pb08',
    // latitude: -118.253985,
    // longitude: 34.044561,
    offlinePath: '',

    extraNote: '',
    username: 'Nkechi Jim',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530628/politicl/o_luk1is.jpg'
  }, {
    flag: '1',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507532078/politicl/o_eth1d7.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--wmhZ9p5b--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_eth1d7',
    // url: 'https://s3-media3.fl.yelpcdn.com/bphoto/zT2cfodnN15HS0WN1yjIcQ/o.jpg',
    photoType: 'recipe',
    creatorId: 'ua04ebIMCn',
    recipeId: 'bd57c952-97d9-4276-9cfe-54b4e24645f7',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    uniqueId: 'c3885b2b-4b73-417f-89a9-e21b6318d9e8',
    createdAt: '2017-10-09T06:54:38.566+0000',
    updatedAt: '2017-10-19T02:02:34.926+0000',
    // geoHash: 'hb00n8n2pb08',
    // latitude: -118.253985,
    // longitude: 34.044561,
    offlinePath: '',

    extraNote: '',
    username: 'Sarah Holl',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530582/politicl/o_zeno6i.jpg'
  }, {
    flag: '1',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507532101/politicl/o_xinrso.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--iUyuZS9m--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_xinrso',
    // url: 'https://s3-media1.fl.yelpcdn.com/bphoto/Iy8UhJBTRPmrAO_5B6nLlg/o.jpg',
    photoType: 'recipe',
    creatorId: 'clB85fmtwS',
    recipeId: '784f9cfc-806b-49e2-9f1d-23cd220547c0',
    uniqueId: 'f1e681ba-0e1c-47a0-a703-cfdf3d04a80f',
    createdAt: '2017-10-09T06:55:00.892+0000',
    updatedAt: '2017-10-19T02:02:44.470+0000',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    // geoHash: 'hb00n8n2pb08',
    // latitude: -118.253985,
    // longitude: 34.044561,
    offlinePath: '',

    extraNote: '',
    username: 'Nkechi Jim',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530628/politicl/o_luk1is.jpg'
  }, {
    flag: '1',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507532123/politicl/o_i93hfj.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--4VKwLw0_--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_i93hfj',
    // url: 'https://s3-media1.fl.yelpcdn.com/bphoto/_gEhehcoVIYvR1u5obWgHA/o.jpg',
    photoType: 'recipe',
    creatorId: 'tiBfFJkC71',
    recipeId: 'f765b129-8040-43b7-8077-a59136937410',
    uniqueId: 'cfed5b4a-448a-45af-a8ed-91d699dae0f3',
    createdAt: '2017-10-09T06:55:23.461+0000',
    updatedAt: '2017-10-19T02:02:53.532+0000',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    // geoHash: 'hb00n8n2pb08',
    // latitude: -118.253985,
    // longitude: 34.044561,
    offlinePath: '',

    extraNote: '',
    username: 'Cheryl Philly',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530609/politicl/o_ycidf6.jpg'
  }, {
    flag: '1',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507532145/politicl/o_dekrel.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--4ACnGmB5--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_dekrel',
    // url: 'https://s3-media3.fl.yelpcdn.com/bphoto/CdioTTHmW87GQ8LyOjpb4Q/o.jpg',
    photoType: 'recipe',
    creatorId: 'W4Iqc2hYE5',
    recipeId: '2b5308bb-3fb0-4dc0-88fc-6c37ea2d4795',
    uniqueId: '1004ab3b-fbf8-4fb1-a413-bb04ca25eca7',
    createdAt: '2017-10-09T06:55:45.568+0000',
    updatedAt: '2017-11-06T12:33:10.789+0000',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    // geoHash: 'hb00n8n2pb08',
    // latitude: -118.253985,
    // longitude: 34.044561,
    offlinePath: '',

    extraNote: '',
    username: 'trujunzhang',
    avatarUrl: ''
  }, {
    flag: '1',
    uniqueId: '00f31aaa-05f9-4dc4-aa02-fb4997834917',
    creatorId: 'W4Iqc2hYE5',
    photoType: 'restaurant',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--zE0P3i_b--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/b2eccd155ad6639c29e51f9b0d2549f6_image_bjvqag',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507615599/politicl/b2eccd155ad6639c29e51f9b0d2549f6_image_bjvqag.jpg',
    restaurantId: 'f1c0aff9-728b-4041-9560-c09578ce7b01',
    createdAt: '2017-10-10T06:06:40.578+0000',
    updatedAt: '2017-10-10T06:06:40.578+0000',
    // geoHash: 'uxzpcrfzypbp',
    // latitude: 120.550209,
    // longitude: 32.402716,
    offlinePath: '',

    extraNote: '',
    username: '',
    avatarUrl: ''
  }, {
    flag: '1',
    uniqueId: '96507683-4ae2-4950-9592-f1859be0399d',
    creatorId: 'W4Iqc2hYE5',
    photoType: 'recipe',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--7rqBTuL---/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/1bfbdaf49c4beef5147894bcdfd6c323_image_lqtndv',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507696994/politicl/1bfbdaf49c4beef5147894bcdfd6c323_image_lqtndv.jpg',
    restaurantId: 'f1c0aff9-728b-4041-9560-c09578ce7b01',
    createdAt: '2017-10-11T04:43:15.638+0000',
    updatedAt: '2017-10-19T02:03:09.553+0000',
    recipeId: '823fab00-d58c-47c3-a77e-45156cb93d95',
    // geoHash: 'uxzpcrfzypbp',
    // latitude: 120.550209,
    // longitude: 32.402716,
    offlinePath: '',

    extraNote: '',
    username: '',
    avatarUrl: ''
  }, {
    flag: '1',
    uniqueId: '0c9e3dd7-bc7e-44ac-9507-a111116b9e3f',
    creatorId: 'PqAx0FCrEn',
    photoType: 'recipe',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--3_-lyYCD--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/fccc4bbab5983310e505ac004e0b49c8_image_rfiagd',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507697001/politicl/fccc4bbab5983310e505ac004e0b49c8_image_rfiagd.jpg',
    restaurantId: 'f1c0aff9-728b-4041-9560-c09578ce7b01',
    createdAt: '2017-10-11T04:43:22.810+0000',
    updatedAt: '2017-10-19T02:03:15.904+0000',
    recipeId: '823fab00-d58c-47c3-a77e-45156cb93d95',
    // geoHash: 'uxzpcrfzypbp',
    // latitude: 120.550209,
    // longitude: 32.402716,
    offlinePath: '',

    extraNote: '',
    username: '',
    avatarUrl: ''
  }, {
    flag: '1',
    uniqueId: 'f6932e44-6c3f-4a6c-af28-b7ff60b73edc',
    creatorId: 'PqAx0FCrEn',
    photoType: 'recipe',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--yB01Ss3Q--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/29ffd82d90bec7371c0293ab40a2fb37_image_abytek',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507697016/politicl/29ffd82d90bec7371c0293ab40a2fb37_image_abytek.jpg',
    restaurantId: 'f1c0aff9-728b-4041-9560-c09578ce7b01',
    createdAt: '2017-10-11T04:43:37.425+0000',
    updatedAt: '2017-10-19T02:03:22.145+0000',
    recipeId: '823fab00-d58c-47c3-a77e-45156cb93d95',
    // geoHash: 'uxzpcrfzypbp',
    // latitude: 120.550209,
    // longitude: 32.402716,
    offlinePath: '',

    extraNote: '',
    username: '',
    avatarUrl: ''
  }, {
    flag: '1',
    uniqueId: '9afccc56-1ca5-4648-903d-2e2ee05856fd',
    creatorId: 'PqAx0FCrEn',
    photoType: 'recipe',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--SL1Rqtzn--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/bde2427509fa90199e891e3486878d5c_image_oihmfg',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507697024/politicl/bde2427509fa90199e891e3486878d5c_image_oihmfg.jpg',
    restaurantId: 'f1c0aff9-728b-4041-9560-c09578ce7b01',
    createdAt: '2017-10-11T04:43:45.323+0000',
    updatedAt: '2017-10-19T02:03:29.018+0000',
    recipeId: '823fab00-d58c-47c3-a77e-45156cb93d95',
    // geoHash: 'uxzpcrfzypbp',
    // latitude: 120.550209,
    // longitude: 32.402716,
    offlinePath: '',

    extraNote: '',
    username: '',
    avatarUrl: ''
  }, {
    flag: '1',
    uniqueId: 'ff5649b7-9666-4c38-bf82-b1dd4722db79',
    photoType: 'recipe',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--9gUobet---/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/1506e576473eff87b3383f8e95176454_image_x8klya',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507697078/politicl/1506e576473eff87b3383f8e95176454_image_x8klya.jpg',
    restaurantId: 'f1c0aff9-728b-4041-9560-c09578ce7b01',
    createdAt: '2017-10-11T04:44:39.336+0000',
    updatedAt: '2017-10-19T02:03:37.952+0000',
    creatorId: 'zis2vkx9G2',
    recipeId: '823fab00-d58c-47c3-a77e-45156cb93d95',
    // geoHash: 'uxzpcrfzypbp',
    // latitude: 120.550209,
    // longitude: 32.402716,
    offlinePath: '',

    extraNote: '',
    username: 'Jaron Lawrence',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530533/politicl/o_zhkvq8.jpg'
  }, {
    flag: '1',
    uniqueId: '10db20e3-858d-448e-b039-e1f8dedb8982',
    photoType: 'recipe',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--yRxITcc2--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/f6519231d546a83ae485411ddce66e65_image_lshphq',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1508388439/politicl/f6519231d546a83ae485411ddce66e65_image_lshphq.jpg',
    creatorId: 'zis2vkx9G2',
    recipeId: 'd37d6d87-5031-4482-bbd3-c5f51f5cf00e',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    createdAt: '2017-10-19T04:47:19.987+0000',
    updatedAt: '2017-10-19T04:47:19.987+0000',
    // geoHash: 'hb00n8n2pb08',
    // latitude: -118.253985,
    // longitude: 34.044561,
    offlinePath: '',

    extraNote: '',
    username: 'Jaron Lawrence',
    avatarUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530533/politicl/o_zhkvq8.jpg'
  }]
