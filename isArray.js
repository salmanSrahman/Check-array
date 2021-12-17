function largestFriend(friends) {
    if (Array.isArray(friends) == false) {
        return "Please Give An Array"
    }
    let largestFriend = friends[0];
    for (const friend of friends) {
        if (friend.length > largestFriend.length) {
            largest = friend;
        }
    }
    return largestFriend;
}

const friends = ["Roohullah", "Hamdullah", "Zabhiullah", "AsmatUllah", "Samiullah"]
const myBigFriend = largestFriend(12345);
console.log(myBigFriend)

// ==================== Array check =================


