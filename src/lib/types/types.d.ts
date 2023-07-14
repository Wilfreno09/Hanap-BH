

export interface GeoType extends Promise<number>{
    location:{
        lat: number
        lng: number
    }
}