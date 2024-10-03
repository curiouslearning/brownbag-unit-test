import { Car, Engine } from './car';

describe('Car - Black Box Example', () => {
  describe('Given a car with default engine', () => {
    describe('When not started', () => {
      it('Then status should be parked', () => {
        const car = new Car();
        expect(car.status).toBe('parked');
      });
    });

    describe('When car.start() is called', () => {
      it('Then car.status should be idle', () => {
        // Arrange
        const car = new Car();

        // Act
        car.start();

        // Assert
        expect(car.status).toBe('idle');
      });
    });
  });
});

describe('Car - White Box Example', () => {
  describe('Given a car with custom engine', () => {
    describe('When not started', () => {
      it('Then engine should be off', () => {
        // Arrange
        const engine = new Engine();
        new Car(engine);

        // Act
        // do nothing

        // Assert
        expect(engine.status).toBe('off');
      });
    });

    describe('When car.start() is called', () => {
      it.todo('Then engine should be off');
    });
  });
});

describe('Car - White Box w/ method spy', () => {
  describe('Given a car with mocked engine', () => {
    describe('When car.start() is called', () => {
      it('Then engine.start() should be called', () => {
        // Arrange
        const engine = new Engine();
        const car = new Car(engine);
        const engineSpy = jest.spyOn(engine, 'start');

        // Act
        car.start();

        // Assert
        expect(engineSpy).toHaveBeenCalled();
      });
    });

    describe('When doing nothing', () => {
      it('Then engine.start() should not called', () => {
        // Arrange
        const engine = new Engine();
        new Car(engine);
        const engineSpy = jest.spyOn(engine, 'start');

        // Act
        // do nothing

        // Assert
        expect(engineSpy).not.toHaveBeenCalled();
      });
    });
  });
});
