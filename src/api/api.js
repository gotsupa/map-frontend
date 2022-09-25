import axios from 'axios'

const findRestaurantPlace = async (place) => {
  const searchPlace = place || ''

  try {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:3000/location',
      params: {
        place: searchPlace,
      },
      headers: {},
    })

    return response
  } catch (error) {
    return error.response
  }
}

export default findRestaurantPlace
