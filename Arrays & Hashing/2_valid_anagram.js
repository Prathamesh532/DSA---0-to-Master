let s = 'cat';
let t = 'rat';

let validAnagram = function (s, t) {
    // edge case
    if (s.length !== t.length) return false;

    /*
        // Brute Force :---
        
        // sort both strings in asc order
        s = s.split('').sort().join('');
        t = t.split('').sort().join('');
        
        // if after sorting both s,t must be equals if not return false otherwise true
        
        return s !== t ? false : true;
        
        // Time complexity :-- O(N log N + M log M) both sorting
        // space Complexity :- O(N + M) N length of sorted S, and M for sorted t
    */
    /*
        // Better Approach :--- using map
        
        let s_map = new Map();
        let t_map = new Map();
        
        for (let char of s) {
            s_map.set(char, (s_map.get(char) || 0) + 1);
        }
        
        for (let char of t) {
            t_map.set(char, (t_map.get(char) || 0) + 1);
        }
        
        for (let [char, freq] of s_map) {
            if (s_map.get(char) !== t_map.get(char)) {
                return false;
            }
        }
        
        return true;

        // Time complexity --> O(n) + O(m) + O(n) =~ O(n+m)
        // Space complexity --> O(n + m)
    */

    // Best Approach :--- using fixed 26 length array
    let countArr = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        countArr[s[i].charCodeAt() - 97]++;
    }

    for (let char of t) {
        countArr[char.charCodeAt() - 97]--;
        if (countArr[char.charCodeAt() - 97] < 0) return false;
    }

    return true;

    // Time Complexity --> O(n + m)
    // Space Complexity --> O(26) =~ O(1)
};

let testCase = validAnagram(s, t);
console.log(testCase);
