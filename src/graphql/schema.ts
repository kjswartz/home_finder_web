/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Homes
// ====================================================

export interface Homes_homes {
  __typename: "Home";
  id: string;
  address: string;
  city: string | null;
  state: string | null;
  zip: string | null;
  propertyType: string | null;
  yearBuilt: string | null;
}

export interface Homes {
  homes: Homes_homes[];
}

export interface HomesVariables {
  search?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
