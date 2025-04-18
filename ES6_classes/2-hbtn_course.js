export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = name;

        if (typeof length !== 'number') {
            throw new TypeError('Length must be a number');
        }
        if (length < 0) {
            throw new Error('Length must be a non-negative number');
        }
        this._length = length;

        if (!Array.isArray(students)) {
            throw new TypeError('Students must be an array');
        }
        if (!students.every(student => typeof student === 'string')) {
            throw new TypeError('Students must be an array of strings');
        }
        this._students = students;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = newName;
    }

    get length() {
        return this._length;
    }

    set length(newLength) {
        if (typeof newLength !== 'number') {
            throw new TypeError('Length must be a number');
        }
        if (newLength < 0) {
            throw new Error('Length must be a non-negative number');
        }
        this._length = newLength;
    }

    get students() {
        return this._students;
    }

    set students(newStudents) {
        if (!Array.isArray(newStudents)) {
            throw new TypeError('Students must be an array');
        }
        if (!newStudents.every(student => typeof student === 'string')) {
            throw new TypeError('Students must be an array of strings');
        }
        this._students = newStudents;
    }
}
