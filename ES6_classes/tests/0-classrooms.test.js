import ClassRoom from './0-classroom.js';

describe('ClassRoom Class', () => {
    test('constructor sets maxStudentsSize correctly', () => {
        const classroom = new ClassRoom(20);
        expect(classroom._maxStudentsSize).toBe(20);
    });

    test('maxStudentsSize cannot be modified directly', () => {
        const classroom = new ClassRoom(25);
        
        expect(() => {
            classroom._maxStudentsSize = 30;
        }).not.toThrow();
        
        expect(classroom._maxStudentsSize).toBe(25);
    });
});
