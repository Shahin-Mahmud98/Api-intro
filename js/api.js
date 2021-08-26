function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json.title))

}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        // .then(data => console.log(data));
        .then(data => displayusers(data));
}
function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data));
}

// loadUsers() eita diya sorasore call kora bujai ....jemon kono ekta array ba fuction k call kore button e click na diya save korar porar load hole e hoye jai

function displayusers(data) {
    const ul = document.getElementById('users');
    // console.log(data);
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        // li.innerText = 'new user';
        // li.innerText = user.name;
        li.innerText = `name: ${user.name} email:${user.email}`;

        ul.appendChild(li);
    }
}


