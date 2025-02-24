
export type Villa={
    id: number;
    image: string;
    title: string;
    price: string;
    address: string;
    bath: string;
    beds: string;
    size: string;
    images: string[];
    desc: VillaDescription;
  }
  
  export type VillaDescription={
    desc: DescriptionData;
    layout: LayoutSection[];
    aminities: Amenity[];
  }
  
  export type DescriptionData={
    description: string[];
    Address: string;
    Contact: number;
    Beds: number;
    Check_In: number;
    Check_Out: number;
  }
  
  export type LayoutSection={
    title: string;
    data: string;
  }
  
  export type Amenity={
    title: string;
    logo: string;
  }
  