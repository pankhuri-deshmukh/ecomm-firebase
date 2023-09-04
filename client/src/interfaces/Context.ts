import { Dispatch, SetStateAction } from "react";

export interface ContextTypeCart {
    viewCart: boolean;
    setViewCart: Dispatch<SetStateAction<boolean>>;
  }
  
export interface ContextTypeUser {
    viewUser: boolean;
    setViewUser: Dispatch<SetStateAction<boolean>>;
  }

  export interface ContextTypeUpdateCart {
    updateCart : boolean;
    setUpdateCart : Dispatch<SetStateAction<boolean>>;
  }
  