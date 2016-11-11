export interface IBorrower {
    id: number,
    pfmFileId: string,
    isCoApp: boolean,
    firstName: string,
    lastName: string,
    middleName?: string,
    ssn: number,
    gender?: string,
    marital?: number,
    dob?: string,
    age?: number
    dependents?: number,
    phone?: number
}

export const GENDER = [
    {value: '', name: ''},
    {value: 'M', name: 'Male'},
    {value: 'F', name: 'Female'}
];

export const MARITAL_STATUS = [
    {value: 0, name: ''},
    {value: 1, name: 'Single'},
    {value: 2, name: 'Married'},
    {value: 3, name: 'Divorced'}
];