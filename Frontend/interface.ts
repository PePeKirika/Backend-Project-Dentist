interface HospitalItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    __v: number,
    id: string
  }

  interface DentistItem {
    _id: string,
    name: string,
    yearsOfExperience:string,
    areaOfExpertise:string,
    picture: string, 
  }

  interface DentistJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: DentistItem[]
  }
  
  interface HospitalJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: HospitalItem[]
  }

  interface BookingItem {
    name : string;
    surname : string;
    id : string;
    hospital : string;
    bookDate : string;
  }