import { TeamListItem } from "./team"

export type DriverListItem = {
    id : number
    firstName : string
    lastName : string
}

export type DriverDetails = {
    id: number
    firstName : string
    lastName : string
    age : number
    nationality : string
    team : TeamListItem
}