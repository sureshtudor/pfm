import {ISegment, Segment} from "../shared/segment/segment";

export interface Identity {
    // app
    app: IBorrower,
    // appSegment: ISegment,
    // co-app
    cap: IBorrower,
    // capSegment: ISegment
}

export interface IBorrower {
    firstName: string,
    lastName: string,
    middleName?: string,
    ssn: number,
    gender?: string,
    marital?: number,
    dob?: string,
    age?: number
    dep?: number,
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

// export class Home {
//
//     public static initIdentity(): Identity {
//         return {
//             applicant: this.initBorrower(),
//             appSegment: Segment.initSegment(),
//             coApplicant: this.initBorrower(),
//             capSegment: Segment.initSegment()
//         }
//     }
//
//     public static initBorrower(): IBorrower {
//         return {
//             firstName: '',
//             lastName: '',
//             middleName: '',
//             ssn: null,
//             gender: '',
//             marital: null,
//             dob: '',
//             age: null,
//             dep: null,
//             phone: null
//         }
//     }
// }