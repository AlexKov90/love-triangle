/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var triangleCount = 0;
    var people = [];
    for (var k = 0; k < preferences.length; k++) {
        people.push({
            disabled: false,
            lover: preferences[k], 
        })
    }
    
    for (var i = 0; i < people.length; i++) {
        if (people[i].disabled) {
            continue;
        }
        
        var lover1 = people[i].lover;
        if (!people[lover1 - 1]) {
            continue;
        }

        var lover2 = people[lover1 - 1].lover;
        if (!people[lover2 - 1] || lover1 === lover2) {
            continue;
        }

        var lover3 = people[lover2 - 1].lover;
        if (lover3 > people.length || lover2 === lover3) {
            continue;
        }
        
        if (lover3 === i+1) {
            triangleCount++;
            people[i].disabled = true;
            people[lover1 - 1].disabled = true;
            people[lover2 - 1].disabled = true;
        }
    }
    
    return triangleCount;
};