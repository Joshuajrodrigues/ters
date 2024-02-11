interface RosaryMystery {
    title: string;
}

export interface RosaryDay {
    day: string[];
    title: string;
    mysteries: RosaryMystery[];
}

interface RosaryData {
    lang: string;
    rosary: RosaryDay[];
}

interface RosaryDataSet {
    [index: number]: RosaryData;
}

export default  RosaryData