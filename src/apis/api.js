//api.js
import { request } from "../utils/request";
export const login = (data) => {
  return request({
    url: "/login",
    params: data,
    method: "GET",
  });
};
export const getUserInfo = () => {
  return request({
    url: 'http://47.119.148.251:3000/testMsg',
  })
}
