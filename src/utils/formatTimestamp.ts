export const formatTimestamp = (unixTimestamp: number) => {
  return new Date(unixTimestamp * 1000).toLocaleString()
}
