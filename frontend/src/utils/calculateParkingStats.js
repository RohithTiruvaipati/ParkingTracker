export function calculateParkingStats(data) {
  const total = data.length
  const occupied = data.filter((spot) => spot.status === 'occupied').length
  const available = data.filter((spot) => spot.status === 'available').length

  return { total, occupied, available }
}
