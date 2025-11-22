import React, { useEffect, useState } from 'react'

export default function PhoneTesting() {
  const [coords, setCoords] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    if (!navigator.geolocation) {
      setErrorMsg('Geolocation is not supported by this browser.')
      return
    }


    //Geo location API which gets the current coords
    const handleSuccess = (position) => {
      setCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        acc: position.coords.accuracy,
        timestamp: position.timestamp,
      })
      setErrorMsg(null)
    }

    //Handles possible errors 
    const handleError = (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          setErrorMsg('User denied the request for Geolocation.')
          break
        case error.POSITION_UNAVAILABLE:
          setErrorMsg('Location information is unavailable.')
          break
        case error.TIMEOUT:
          setErrorMsg('The request to get user location timed out.')
          break
        default:
          setErrorMsg('An unknown error occurred while getting location.')
      }
    }

    // Initial fetch
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError)

    // Poll every 5 seconds
    const id = setInterval(() => {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
    }, 5000)

    return () => clearInterval(id)
  }, [])

  //This can allow for a manual update on demand
  const handleManualRefresh = () => {
    if (!navigator.geolocation) return
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          acc: position.coords.accuracy,
          timestamp: position.timestamp,
        })
        setErrorMsg(null)
      },
      () => {}
    )
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-white">Phone Location Testing</h1>
      <p className="text-sm text-gray-300">
        Location is refreshed automatically every 5 seconds while this page is open.
      </p>

      <button
        type="button"
        className="btn-primary px-4 py-2 text-sm font-medium"
        onClick={handleManualRefresh}
      >
        Refresh Now
      </button>

      <div>
        <p id="location-info" className="text-sm text-gray-200">
          {coords
            ? `Lat: ${coords.lat.toFixed(6)}, Lon: ${coords.lon.toFixed(6)}, Acc: ${coords.acc.toFixed(
                2
              )} m, Time: ${new Date(coords.timestamp).toLocaleString()}`
            : 'No location data yet.'}
        </p>
        {errorMsg && (
          <p className="mt-1 text-xs text-red-400">
            {errorMsg}
          </p>
        )}
      </div>
    </div>
  )
}
