import {get } from "./BaseApi";
import {URLList} from "../config/URLs";

export const storeFinder = storeInfo => dispatch => {
    const addressId=storeInfo?storeInfo.address:"77077";
    const radius=storeInfo?storeInfo.radius:"10";
    
    let url = URLList.getStoreFinderUsingAddress(addressId,radius);
  return get(url)
    .then(res => dispatch({ type: "FINDSTORES", payload: res.data }))
    .catch(err => err);
};


