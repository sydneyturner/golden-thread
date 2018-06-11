import { Charity } from "./charity";

export class User {
    id: number;
    username: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    totalDonated: number;
    // array of charities
    charitiesDonated: Array<Charity>;
    // array of fav chairites
    favorites: Charity[];
}

// charitys class
// slice class
// donations page
    // public tech Array<slice> = []

    // slider for % of donations