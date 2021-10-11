/*function range(...nums) {
    let aux = []
     
    if(nums.length === 1) {
        let x = 1
        while(x <= nums) {
            aux.push(x)
            x++
        }
    } else if (nums.length === 2 && nums[0] < nums[1]) {
        let x = nums[0]
        while(x <= nums[1]) {
            aux.push(x)
            x++
        }
    } else if(nums.length === 3 && nums[0] < nums[1]) {
        let x = nums[0]
        while(x <= nums[1]) {
            aux.push(x)
            x += nums[2]
        }
    } else if (nums.length === 2 && nums[0] > nums[1]) {
        let x = nums[0]
        while(x >= nums[1]) {
            aux.push(x)
            x--
        }
    } else if (nums.length === 3 && nums[0] > nums[1]) {
        let x = nums[0]
        while(x >= nums[1]) {
            aux.push(x)
            x -= nums[2]
        }
    }
    return console.log(aux)
}
*/
function range(...nums) {
    let aux = [];
    let x = 1;
    let rangeArray = nums[0];
    let index = 1
    nums[2] === undefined ? true : index = nums[2];

    if (nums[1] !== undefined) {
        rangeArray = nums[1];
        x = nums[0];
    }

    if (nums[0] < nums[1] || nums[1] === undefined) {
        for (let i = x; i <= rangeArray; i += index) {
            aux.push(i);
        }
        return console.log(aux);
    } else {
        for (let i = x; i >= rangeArray; i -= index) {
            aux.push(i);
        }
        return console.log(aux);
    }
    
}
range(10, 2, 1);
