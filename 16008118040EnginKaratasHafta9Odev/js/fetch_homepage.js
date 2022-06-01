$.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    type: 'GET',
    dataType: 'json', // added data type
    success: function(res) {
        let posts = res;
        let output = '';
        $.each(posts, function(index, post) {
            output += `
            <div class="col s3" style="    height: calc(100% - 15px);
            margin-bottom: 15px;">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title"><b>${post.title.substring(0, 20)}</b></span>
                  <p>${post.body.substring(0, 40)}</p>
                </div>
                <div class="card-action">
                  <a href="#">id ${post.id}</a>
                  <a href="#">user id ${post.id}</a>
                </div>
              </div>
            </div>
            `;
        });
        $('#posts').append(output);
    }
});