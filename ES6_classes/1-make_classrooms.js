import ClassRoom from './0-classroom';
/*
    import the Classroom class from
    0-classroom
*/
export default function initializeRooms(){
/*
    function named initializeRoom who
    return an array of 3 classroom objects
*/
    return [
        new ClassRoom(19),
        new ClassRoom(20),
        new ClassRoom(34)
    ];
}
