function range(...nums) {
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

range(8, -3, 4)

