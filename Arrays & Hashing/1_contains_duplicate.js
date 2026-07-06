let nums = [1, 2, 3, 3];

let hasDuplicate = function (arr) {
    // edge case
    if (arr.length == 1) return false;

    /*
        // brute force
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    return true;
                }
            }
        }
        
        return false
        
        // Time Complexity ---> O(N^2)
        // Space Compleixty ---> O(1)
    */

    /*
        // better approach --> sorting
        arr.sort((a, b) => a - b);
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] === arr[i - 1]) return true;
        }
        return false;
        
        // Time Complexity ---> O(N log N) + O(N) =~ O(N log N)
        // Space Compleixty ---> O(1) 
    */

    // Best approach --> using Set Data Structure
    let set = new Set([...arr]);
    return set.size !== arr.length ? true : false;

    // Time Complexity ---> O(N) insertion in set
    // Space Complextiy ---> O(N) Set
};

let testCase = hasDuplicate(nums);
console.log(testCase);
