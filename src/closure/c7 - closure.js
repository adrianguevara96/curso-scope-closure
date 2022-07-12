function greeting(){
    let username = 'Adrian';

    function displayUserName(){
        return `Hello ${username}`;
    }

    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());