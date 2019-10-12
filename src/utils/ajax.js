import axios from "axios";
const baseURL = window.SYSTEM_CONFIG.webServer; //基础服务地址
export default class Ajax {
  /**
   * @param { String } baseURL        基础请求地址
   * @param { String } Token          通行凭证token
   * @param { Number } TIMEOUT        超时时间
   * @param { String } MerchantCode   商户号
   */
  constructor(Token = "", MerchantCode = "", TIMEOUT = 60000) {
    // 创建一个新的axios实例，并设置默认请求地址和请求头
    this._axios = axios.create({
      baseURL,
      TIMEOUT,
      params: {
        MerchantCode: MerchantCode
      },
      headers: { Token }
    });
    this._axios.interceptors.request.use(
      config => {
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    this._axios.interceptors.response.use(
      response => {
        return response.data;
      },
      error => {
        return Promise.reject(error);
      }
    );
  }
  // 请求方式
  get (url, params = {}) {
    return this._axios({ method: "get", url, params });
  }
  post (url, params = {}, data = {}) {
    return this._axios({ method: "post", url, data, params });
  }
}
