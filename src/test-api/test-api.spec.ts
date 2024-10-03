import { TestApi } from './test-api';

describe('TestApi', () => {
	describe('Given default fetch', () => {
    describe('When api.get() is called', () => {
      it('Then it should return a response', async () => {
        const testApi = new TestApi();
    
        const response = await testApi.get();
    
        expect(response).toBeTruthy();
      });
    });
  });

  describe('Given mocked fetch', () => {
    describe('When api.get() is called', () => {
      it('Then it should return mocked response', async () => {
        const mockResponse = {
          json: jest.fn().mockResolvedValue({
            hello: 'world!'
          })
        } as any as Response;
        
        global.fetch = jest.fn().mockResolvedValue(mockResponse);
        
        const testApi = new TestApi();
    
        const response = await testApi.get();
    
        expect(response.hello).toBe('world!');
      })
    })
  })
});
