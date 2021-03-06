export class Trade {
    id: number;
    type?: string;
    acctname: string;
    acctnum: string;
    segment = new Segment();
}

export class Segment {
    pfmFileId: string;
    isVerified: boolean;
    isDeleted: boolean;
    comments: string;
}

export const TRADE_TYPES = [
    {value:null, name: "-- Select --"},
    {value: "U", name: "UNKNOWN"},
    {value: "I", name: "INSTALLMENT"},
    {value: "M", name: "MORTGAGE"},
    {value: "R", name: "REVOLVING"},
    {value: "O", name: "OPEN"},
    {value: "Y", name: "COLLECTION"},
];
