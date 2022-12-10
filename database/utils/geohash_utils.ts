import { IFBRestaurant } from 'ieattatypes/types/index'
const geohash = require('ngeohash')

/**
 * numberOfChars of GeoHash for restaurant.
 * @type {number}
 */
export const numberOfCharsForRestaurant = 6
/**
 * numberOfChars of GeoHash for photo.
 * @type {number}
 */
export const numberOfCharsForPhoto = 6

export const convertToGeoHash = (latitude: number, longitude: number) => {
  return geohash.encode(latitude, longitude, numberOfCharsForPhoto)
}

export const getGeoHashForRestaurant = (restaurant: IFBRestaurant) => {
  return geohash.encode(restaurant.latitude, restaurant.longitude, numberOfCharsForRestaurant)
}
