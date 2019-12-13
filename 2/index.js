function getUsersInit() {
    fetch('https://reqres.in/api/users?page=1')
        .then(response => response.json())
        .then(res => {
            res.data.forEach(element => {
                console.log(element);
                $('.listUsers').append(
                    `<div class="media">
                    <div class="media-body">
                     ${element.first_name} ${element.last_name}
                    </div>
                    <img src="${element.avatar}" class="ml-3" alt="...">
                  </div>`
                );
            });
        });
};

getUsersInit();