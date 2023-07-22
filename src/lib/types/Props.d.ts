
export interface PlacePropTypes{
    
    place_id?: string
    place_lat?: number
    place_lng?: number
    place_vicinity?: string
    photo?: any
    place_name?: string

}

export interface UserPropTypes{
    user_lat: number
    user_lng: number
    
}

export interface Props{
    
    selected?:boolean
    fontSize?: number
}