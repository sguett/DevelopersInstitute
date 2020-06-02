// Turn the below users object (value is their ID number) into an array
const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersArr = Object.entries(users)
console.log(usersArr)

// Change the output array above in order to have the user’s IDs multiplied by 2
let usersID2 = usersArr.map((val, i) => { return [val[0], val[1] * 2] })
console.log(usersID2)