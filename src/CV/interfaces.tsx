export interface Experience {
  description: string;
  startYear: number;
  endYear: number | string;
  additionalText?: string;
}

export interface Education {
  school: string;
  fieldOfStudy: string;
  startYear: number;
  endYear: number | string;
}



export interface DataCV {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  experience: Experience[];
  education: Education[];
  contactData: {
    phone: number;
    email: string;
    country: string;
    city: string;
  };
}
