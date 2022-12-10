import { IFBRecipe, IFBReview } from 'ieattatypes/types/index'
import { loadReviews } from '~/database/data/Reviews'
import { slugifyToLower } from '~/database/utils/slug_helper'
import { ReviewType } from '~/database/constant'

const fixReviewStatistic = (item: IFBRecipe) => {
  const { uniqueId } = item
  let rateForRecipe: number = 0
  let reviewCount: number = 0
  for (const index in loadReviews()) {
    const review: IFBReview = loadReviews()[index]
    if (review.recipeId === uniqueId && review.reviewType === ReviewType.Recipe) {
      const { rate } = review
      reviewCount += 1
      rateForRecipe += rate
    }
  }
  item.rate = rateForRecipe
  item.reviewCount = reviewCount
}

export const loadRecipes = (): IFBRecipe[] => {
  const next = recipes.map((item: IFBRecipe) => {
    fixReviewStatistic(item)
    // item.slug = slugifyToLower(item.displayName)
    // console.log(JSON.stringify({
    //   slug: item.slug
    // }))
    // console.log(JSON.stringify(item))
    return item
  })
  // console.log(JSON.stringify(next))
  return next
}

const recipes: IFBRecipe[] = [
  {
    // id: 'TFMuxD6Etf',
    creatorId: 'zis2vkx9G2',
    displayName: 'Chicken Tacos',
    slug: 'chicken-tacos',
    price: '12',
    rate: 4,
    reviewCount: 2,
    uniqueId: '5d30724f-4d13-456c-8a50-358ac3861786',
    createdAt: '2017-10-09T06:48:38.320+0000',
    updatedAt: '2017-10-19T01:16:59.656+0000',
    // _p_listPhoto: 'sKKxPtxMMS',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531726/politicl/o_xkor8t.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--_ykUTkdO--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_xkor8t',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1'
  },
  {
    // id: '5gckWrMNxg',
    creatorId: 'ua04ebIMCn',
    displayName: 'KOMODO 2.0 Seared top sirloin steak',
    slug: 'komodo-2.0-seared-top-sirloin-steak',
    price: '20',
    rate: 4,
    reviewCount: 1,
    uniqueId: 'd37d6d87-5031-4482-bbd3-c5f51f5cf00e',
    createdAt: '2017-10-09T06:49:01.357+0000',
    updatedAt: '2017-10-09T07:30:06.500+0000',
    // _p_listPhoto: 'R1oj6TaqfZ',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531750/politicl/o_j3xxe9.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--03VMWlP_--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_j3xxe9',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1'
  },
  {
    // id: 'oOYmAf4GOs',
    creatorId: 'ua04ebIMCn',
    displayName: 'Spicy Salmon Rice Bowl',
    slug: 'spicy-salmon-rice-bowl',
    price: '40',
    rate: 0,
    reviewCount: 0,
    uniqueId: '3d0476f3-1225-4c0b-9042-7e22e22734e7',
    createdAt: '2017-10-09T06:49:26.123+0000',
    updatedAt: '2017-10-09T07:29:02.750+0000',
    // _p_listPhoto: 'pg7l02B14d',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531774/politicl/o_fxiuk6.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--aD34Krh_--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_fxiuk6',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1'
  },
  {
    // id: 'F1ruTbSMJG',
    creatorId: 'W4Iqc2hYE5',
    displayName: 'Brutis Salad',
    slug: 'brutis-salad',
    price: '14',
    rate: 6,
    reviewCount: 2,
    uniqueId: 'b0b9fa6f-e95e-46d5-aee4-f693de0ad910',
    createdAt: '2017-10-09T06:49:50.437+0000',
    updatedAt: '2017-11-04T09:40:06.577+0000',
    // _p_listPhoto: 'FnnO8WKEGg',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531799/politicl/o_sewnmn.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--UO1R80Ds--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_sewnmn',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1'
  },
  {
    // id: 'f39HB1FtU6',
    creatorId: 'tiBfFJkC71',
    displayName: 'Lobster roll',
    slug: 'lobster-roll',
    price: '30',
    rate: 4,
    reviewCount: 1,
    uniqueId: '89ec8123-7f08-4ab3-8d6d-f3ece7fb9620',
    createdAt: '2017-10-09T06:50:15.208+0000',
    updatedAt: '2017-10-09T07:29:09.351+0000',
    // _p_listPhoto: 'sjCodljeni',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531824/politicl/o_sm57rc.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--rgJwuthn--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_sm57rc',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1'
  },
  {
    // id: 'AQ3Cvm1Id3',
    creatorId: 'clB85fmtwS',
    displayName: 'Breakfast burrito',
    slug: 'breakfast-burrito',
    price: '22',
    rate: 0,
    reviewCount: 0,
    uniqueId: 'f23a24ae-e752-4237-bc4a-cd991cf0159a',
    createdAt: '2017-10-09T06:50:40.683+0000',
    updatedAt: '2017-11-05T11:25:29.101+0000',
    // _p_listPhoto: 'JQBFkXaepA',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531849/politicl/o_tgo9rx.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--b9gqIyN5--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_tgo9rx',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1'
  },
  {
    // id: 'RRhSW6dHfp',
    creatorId: 'PqAx0FCrEn',
    displayName: 'Lobster roll',
    slug: 'lobster-roll',
    price: '30',
    rate: 0,
    reviewCount: 0,
    uniqueId: '4da96d60-89fd-4977-9fd2-cc639c659b21',
    createdAt: '2017-10-09T06:51:05.282+0000',
    updatedAt: '2017-11-05T02:01:24.601+0000',
    // _p_listPhoto: 'lN4CwtUc6O',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531873/politicl/o_t464fv.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--NRGMd50V--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_t464fv',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1'
  },
  {
    // id: 'O164RiQhfH',
    creatorId: 'zis2vkx9G2',
    displayName: 'Grilled chicken salad',
    slug: 'grilled-chicken-salad',
    price: '40',
    rate: 0,
    reviewCount: 0,
    uniqueId: '975bcdb8-dbd6-46e5-a532-7b45b830f483',
    createdAt: '2017-10-09T06:51:29.561+0000',
    updatedAt: '2017-11-05T02:01:30.687+0000',
    // _p_listPhoto: 'MXl0Fzln2e',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531897/politicl/o_adl9hj.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--QD9W0JNe--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_adl9hj',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1'
  },
  {
    // id: 'e3GIxMZrfX',
    creatorId: 'PqAx0FCrEn',
    displayName: 'Oatmeal crumble',
    slug: 'oatmeal-crumble',
    price: '10',
    rate: 0,
    reviewCount: 0,
    uniqueId: '5a837699-06d6-4681-8f75-66278d45e298',
    createdAt: '2017-10-09T06:51:52.473+0000',
    updatedAt: '2017-11-05T02:01:39.403+0000',
    // _p_listPhoto: 'JfoDcEjj7g',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531920/politicl/o_ggmcbh.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--4OkxwxNV--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_ggmcbh',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1'
  },
  {
    // id: '1CNbFtVULN',
    creatorId: 'zis2vkx9G2',
    displayName: 'Chicken koobideh for 2nd visit',
    slug: 'chicken-koobideh-for-2nd-visit',
    price: '40',
    rate: 0,
    reviewCount: 0,
    uniqueId: '017d2e60-ee82-49ee-8e3f-1f23d246a667',
    createdAt: '2017-10-09T06:52:14.125+0000',
    updatedAt: '2017-11-05T02:01:51.021+0000',
    // _p_listPhoto: '1sKAiub1t0',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531941/politicl/o_dwbrvn.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--YD3QQ8I0--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_dwbrvn',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1'
  },
  {
    // id: 'OcmYV8LFIh',
    creatorId: 'zis2vkx9G2',
    displayName: 'House salad with salmon',
    slug: 'house-salad-with-salmon',
    price: '40',
    rate: 0,
    reviewCount: 0,
    uniqueId: '2ffbf644-c568-4d26-87e9-1023c1458932',
    createdAt: '2017-10-09T06:52:35.965+0000',
    updatedAt: '2017-11-05T02:01:57.372+0000',
    // _p_listPhoto: 'PBs5w46Fsi',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531963/politicl/o_trkntk.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--SLYNMwNg--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_trkntk',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1'
  },
  {
    // id: '9IugAv5UFJ',
    creatorId: 'PqAx0FCrEn',
    displayName: 'Cobb Salad',
    slug: 'cobb-salad',
    price: '30',
    rate: 0,
    reviewCount: 0,
    uniqueId: '4be8853c-c7e5-438a-9372-1ecb87b74a79',
    createdAt: '2017-10-09T06:52:58.910+0000',
    updatedAt: '2017-11-05T02:02:03.337+0000',
    // _p_listPhoto: 'a381SEojrT',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507531986/politicl/o_nxart3.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--dJRJlkjr--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_nxart3',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1'
  },
  {
    // id: 'QDTgyhoV7K',
    creatorId: 'tiBfFJkC71',
    displayName: 'Pecan pie',
    slug: 'pecan-pie',
    price: '10',
    rate: 0,
    reviewCount: 0,
    uniqueId: '45e446e1-86cb-43f6-925a-8b5c197ea666',
    createdAt: '2017-10-09T06:53:20.286+0000',
    updatedAt: '2017-11-05T02:02:10.007+0000',
    // _p_listPhoto: 'dM3q6FuC2N',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507532007/politicl/o_xdtmjn.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--j8kOEbZ1--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_xdtmjn',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1'
  },
  {
    // id: 'hNLIi7AQjx',
    creatorId: 'clB85fmtwS',
    displayName: 'Mac n cheese',
    slug: 'mac-n-cheese',
    price: '8',
    rate: 0,
    reviewCount: 0,
    uniqueId: '0e53bc39-600d-4db2-8306-e9dad062e6a5',
    createdAt: '2017-10-09T06:53:42.545+0000',
    updatedAt: '2017-11-05T02:02:17.708+0000',
    // _p_listPhoto: 'jM9bLzXf6V',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507532030/politicl/o_jhce0k.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--OK2aM5rt--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_jhce0k',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1'
  },
  {
    // id: 'OLWeLxvqrs',
    creatorId: 'clB85fmtwS',
    displayName: 'Meatball pie',
    slug: 'meatball-pie',
    price: '40',
    rate: 0,
    reviewCount: 0,
    uniqueId: '9d6861d4-3692-4a6b-a01d-6476725550b4',
    createdAt: '2017-10-09T06:54:07.931+0000',
    updatedAt: '2017-11-05T02:02:23.861+0000',
    // _p_listPhoto: 'PmU5yYKhUd',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507532056/politicl/o_fcscmf.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--C43wdmxN--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_fcscmf',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1'
  },
  {
    // id: 'QSPLK8U0UX',
    creatorId: 'PqAx0FCrEn',
    displayName: 'Caprese salad',
    slug: 'caprese-salad',
    price: '18',
    rate: 0,
    reviewCount: 0,
    uniqueId: 'bd57c952-97d9-4276-9cfe-54b4e24645f7',
    createdAt: '2017-10-09T06:54:30.682+0000',
    updatedAt: '2017-11-05T02:02:30.233+0000',
    // _p_listPhoto: 'xJTohHT8UQ',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507532078/politicl/o_eth1d7.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--wmhZ9p5b--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_eth1d7',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1'
  },
  {
    // id: 'AHlT6oyht0',
    creatorId: 'ua04ebIMCn',
    displayName: 'Pizza with chicken and garlic cloves',
    slug: 'pizza-with-chicken-and-garlic-cloves',
    price: '20',
    rate: 0,
    reviewCount: 0,
    uniqueId: '784f9cfc-806b-49e2-9f1d-23cd220547c0',
    createdAt: '2017-10-09T06:54:52.924+0000',
    updatedAt: '2017-10-09T07:30:52.313+0000',
    // _p_listPhoto: 'dwZQw1GOEm',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507532101/politicl/o_xinrso.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--iUyuZS9m--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_xinrso',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1'
  },
  {
    // id: 'EW6CciOKrx',
    creatorId: 'ua04ebIMCn',
    displayName: 'My Mongolian creation',
    slug: 'my-mongolian-creation',
    price: '30',
    rate: 0,
    reviewCount: 0,
    uniqueId: 'f765b129-8040-43b7-8077-a59136937410',
    createdAt: '2017-10-09T06:55:15.573+0000',
    updatedAt: '2017-10-09T07:30:15.773+0000',
    // _p_listPhoto: 'oMNFPZjIKf',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507532123/politicl/o_i93hfj.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--4VKwLw0_--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_i93hfj',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1'
  },
  {
    // id: 'Ahwb8d5rKx',
    creatorId: 'zis2vkx9G2',
    displayName: 'Rose',
    slug: 'rose',
    price: '40',
    rate: 4,
    reviewCount: 1,
    uniqueId: '2b5308bb-3fb0-4dc0-88fc-6c37ea2d4795',
    createdAt: '2017-10-09T06:55:37.794+0000',
    updatedAt: '2017-11-01T01:05:42.405+0000',
    // _p_listPhoto: 'gKOqTIJ1iK',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507532145/politicl/o_dekrel.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--4ACnGmB5--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_dekrel',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    flag: '1'
  }
]
