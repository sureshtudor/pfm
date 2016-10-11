
export class Trade {
    id: number;
    type: string;
    acctnum: string;
    acctname: string;
    segment = new Segment();
}

export class Segment {
    fileId: number;
    isVerified: boolean;
    isDeleted: boolean;
    comments: string;
}

export var TradeTypes = [
    { name: "UNKNOWN", value: "U"},
    { name: "INSTALLMENT", value: "I"},
    { name: "MORTGAGE", value: "M"},
    { name: "REVOLVING", value: "R"},
    { name: "OPEN", value: "O"},
    { name: "COLLECTION", value: "Y"},
];