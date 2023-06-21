
interface Props{
  lat: number
  lng: number

}

export default function NewsFeed({lat, lng}:Props) {
  return (
    <div>
      <h1>{lat}</h1>
      <h1>{lng}</h1>
    </div>
  )
}
