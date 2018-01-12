export interface IPayStation {
    payStationId: string;
    payStationName: string;
    direction: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    county: string;
    phoneNumber: string;
    feeAmount: number;
    secondaryLanguage: string;
    typeOfBusiness : string;
    latitude: number;
    longitude: number;
    comment: string;
    activeFlag: boolean;
    publicPayStation : boolean;
    distanceFromMapLocation : number;
    vendor : string;
    acceptsCash : boolean;
    acceptsCreditCard : boolean;
    acceptsDebit : boolean;
    acceptsMoneyOrder : boolean;
    acceptsCheck : boolean;
}
