let navigation = {
    current: 1, 
    maxPage: 1
};

function getUsersInit() {
    fetch('https://reqres.in/api/users?page=1')
        .then(response => response.json())
        .then(res => {
            navigation.maxPage = res.total_pages;
            res.data.forEach(element => {
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

$('.next').click(function() {
    if (navigation.current !== navigation.maxPage) {
        navigation.current += 1;
        $('.listUsers').empty();
        fetch(`https://reqres.in/api/users?page=${navigation.current}`)
            .then(response => response.json())
            .then(res => {
                navigation.maxPage = res.total_pages;
                res.data.forEach(element => {
                    $('.listUsers').append(
                        `<div class="media">
                        <div class="media-body">
                         ${element.first_name} ${element.last_name}
                        </div>
                        <img src="${element.avatar}" class="ml-3" alt="...">
                      </div>`
                    );
                });

                if (navigation.current === navigation.maxPage) {
                    $('.prev-block').removeClass('disable');
                    $('.next-block').addClass('disable');
                }
            });
    }
});


$('.prev').click(function() {
    if (navigation.current !== 1) {
        navigation.current -= 1;
        $('.listUsers').empty();
        fetch(`https://reqres.in/api/users?page=${navigation.current}`)
            .then(response => response.json())
            .then(res => {
                navigation.maxPage = res.total_pages;
                res.data.forEach(element => {
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
        }
});
