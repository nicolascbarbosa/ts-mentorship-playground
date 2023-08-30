/** Algoritimo OUT of PLACE - Usando memória extra */
const duplicates = ['dog', 'cat', 'horse', 'cat', 'mouse', 'dog', 'duck', 'cow', 'cow'];
const counterDuplicates = {};

duplicates.forEach(item => {
    counterDuplicates[item] = counterDuplicates[item] ? counterDuplicates[item] + 1 : 1;
});

const duplicatesReplaced = duplicates.map((item) => counterDuplicates[item] > 1 ? '*' : item);

console.log(duplicatesReplaced);

/** Algoritimo IN-PLACE  */

for (let i = 0; i < duplicates.length; i++) {
    for (let j = i + 1; j < duplicates.length; j++) {
        if (duplicates[i] === duplicates[j]) {
            duplicates[i] = '*';
        }
    }
}

console.log(duplicates)