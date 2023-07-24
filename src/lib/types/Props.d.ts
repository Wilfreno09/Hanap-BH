
export interface PlacePropTypes{
    
    place_id?: string
    place_lat?: number
    place_lng?: number
    place_vicinity?: string
    place_name?: string
    photo_details?: any

}

export interface UserPropTypes{
    user_lat: number
    user_lng: number
    
}

export interface Props{
    
    selected?:boolean
    fontSize?: number
}