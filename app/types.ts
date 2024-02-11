interface Mystery {
    title: string;
}

export interface RosaryOfTheDay {
    day: string[];
    title: string;
    mysteries: Mystery[];
}

export type Rosaries = RosaryOfTheDay[];
