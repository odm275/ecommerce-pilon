import axios from 'axios';

const pilonApiBaseUrl = 'https://api.pilon.io/v1';

const axiosInstance = axios.create({
  baseURL: pilonApiBaseUrl,
});

export default {
  pilonApiBaseUrl,
  environmentId: '8634b5a6-e159-11e8-a233-4555c0d44ca2',
  pilonApi: axiosInstance,
};
