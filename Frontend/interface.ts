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

  interface BookingItem {
    appDate : string;
    user : string;
    userName :string;
    dentist : string;
    createAt : string;
  }