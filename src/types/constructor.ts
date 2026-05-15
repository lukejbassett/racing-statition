export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

export interface ConstructorResponse {
  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    ConstructorTable: {
      Constructors: Constructor[];
    };
  };
}
