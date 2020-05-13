$(document).ready(function () {

  let url = "http://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=ca5b6461d1d543d893339c704b9836ea";

  $.ajax({
    url: url,
    method: "GET",
    dataType: "JSON",

    beforeSend: () => {
      $(".progress").show();
    },

    complete: () => {
      $(".progress").hide();
    },

    success: (newsdata) => {
      let output = "";
      let latestNews = newsdata.articles;
      for (var i in latestNews) {
        output += `

        <style>

        span{
          padding-right: 5px;
          padding-top: 3px;
        }

        
        a{
          text-align:center;
          font-weight: 900;
          font-size: 16px;
        }

        </style>

          <div class="col l6 m6 s12">
          <div class="card medium hoverable">
            <div class="card-image">
              <img src="${latestNews[i].urlToImage}" class="responsive-img" alt="${latestNews[i].title}">
            </div>
            <div class="card-content">
              <span class="card-title activator"><i class="material-icons right">more_vert</i></span>
              <h6 class="truncate"><a href="${latestNews[i].url}" target="_blank" title="${latestNews[i].title}">${latestNews[i].title}</a></h6>
              <p><b>By</b>: ${latestNews[i].source.name} </p>
            </div>

            <div class="card-reveal">
              <span class="card-title"><i class="material-icons right">close</i></span>
              <p><b>Description</b>: ${latestNews[i].description}</p>
            </div>

            <div class="card-action orange darken-1">
              <a href="${latestNews[i].url}" style="text-align:center; font-size: 14px; padding-bottom: 20px 10px;"  target="_blank" class="btn amber"><span class="material-icons">local_library</span>Read More</a>
            </div>
           </div>
          </div>
        `;
      }

      if (output !== "") {
        $("#newsResults").html(output);
      }

    },

    error: function () {
      let errorMsg = `<div class="errorMsg center">Some error occured</div>`;
      $("#newsResults").html(errorMsg);
    }
  })

});