import React, { memo, useEffect, useRef, useState } from 'react'

import {
  GoogleMap,
  Marker,
  Autocomplete,
  useLoadScript,
} from '@react-google-maps/api'

import findRestaurantPlace from '../../api/api'
import { LIBRARIES } from '../../constants/constant'

import { Styled } from './RestaurantList.styled'
import { VITE_GOOGLE_API_KEY } from '../../config/config'
import Button from '../Button'

const containerStyle = {
  width: '100%',
  height: '100%',
}

const googleMapOptions = {
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
}

const RestaurantList = () => {
  const inputRef = useRef()

  const [fetchLoading, setFetchLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [restaurants, setRestaurants] = useState([])
  const [center, setCenter] = useState({
    lat: 13.806417889149225,
    lng: 100.52590977586283,
  })

  const { isLoaded } = useLoadScript({
    id: 'google-map-script',
    libraries: LIBRARIES,
    googleMapsApiKey: VITE_GOOGLE_API_KEY,
  })

  const onSubmit = async () => {
    const inputValue = inputRef.current.value

    if (!inputValue) {
      return
    }

    await getRestaurantData(inputValue)
    setInputValue('')
  }

  const getRestaurantData = async (place) => {
    setFetchLoading(true)
    const { data, status } = await findRestaurantPlace(place)

    if (status === 200) {
      setRestaurants(data)
    }

    setFetchLoading(false)
  }

  useEffect(() => {
    if (restaurants.length) {
      setCenter({
        lat: restaurants[0].geometry.location.lat,
        lng: restaurants[0].geometry.location.lng,
      })
    }
  }, [restaurants])

  useEffect(() => {
    getRestaurantData()
  }, [])

  return (
    <Styled>
      <div className='input-container'>
        <Autocomplete>
          <input
            ref={inputRef}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            id='input-place'
          />
        </Autocomplete>
        <label htmlFor='input-place'>Insert location</label>
        <Button onClick={onSubmit}>Submit</Button>
      </div>

      {isLoaded ? (
        <div className='image-container'>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
            options={googleMapOptions}
          >
            {restaurants.map(({ geometry }, index) => (
              <Marker
                key={`map-${index}`}
                position={{
                  lat: geometry.location.lat,
                  lng: geometry.location.lng,
                }}
              />
            ))}
          </GoogleMap>
        </div>
      ) : (
        <p>loading</p>
      )}

      <ol className='content-container'>
        {fetchLoading ? (
          <p>Loading Data</p>
        ) : (
          restaurants.map((eachRestaurant, index) => (
            <li key={`content-${index}`}>
              <h2>{eachRestaurant.name}</h2>
              <p>{eachRestaurant.formatted_address}</p>
              <p>Rating: {eachRestaurant.rating}/5</p>
            </li>
          ))
        )}
      </ol>
    </Styled>
  )
}

export default memo(RestaurantList)
