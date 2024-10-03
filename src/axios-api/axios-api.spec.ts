import { AxiosApi } from './axios-api';
import axios from 'axios';

jest.mock('axios');

describe('AxiosApi', () => {
  describe('Given mocked axios', () => {
    it('Then it should call axiosMock.get()', async () => {
      const axiosApi = new AxiosApi();
      const spy = jest.spyOn(axios, 'get');

      await axiosApi.get();
      expect(spy).toHaveBeenCalled();
    });
  });
});
