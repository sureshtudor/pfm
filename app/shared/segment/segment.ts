export interface ISegment {
    overridden: boolean;
    modified: boolean;
    supplement: boolean;
    verified: boolean;
    deleted: boolean;
    printable: boolean;
    chargeable?: boolean;
    status?: number;
    remark?: string;
}

export const STATUS_TYPE = [
    {value: 0, name: "Fix Edit"},
    {value: 1, name: "Review Edit"},
    {value: 2, name: "Manual Edit"},
    {value: 3, name: "Supplemented"},
    {value: 4, name: "None Pending"}
];