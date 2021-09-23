import {Authen} from "./model/user";
import { HttpHeaders } from "@angular/common/http";
import {Wiki} from "./model/wiki";
export const url= 'http://localhost:8080';

export var data: Authen;
export function setData(value: Authen) {
  data = value;
}

export var header = new HttpHeaders()
  .append('Content-Type', 'application/json')
  .append('Access-Control-Allow-Origin', '*')
  .append('Access-Control-Allow-Methods', '*')
  .append('Access-Control-Allow-Credentials', 'true');
export function addToken(value: Authen) {
  if (typeof value.token === 'string') {
    header.append('Authorization', value.token);
  }
}

export var staffs: Wiki;
export function setStaffs(value: Wiki) {
  staffs = value;
}
