$(document).ready(function() {
  $(".add").click(function(e) {
    e.preventDefault();
    var data = {
      title: $("#title").val(),
      added_By_id: localStorage.getItem("id"),
      type: "personal",
      end_date: $("#datepicker5").val(),
      cause: $("#cause").val(),
      amount: $("#amount").val()
    };
    var url =
      "http://caremedico.org/api/campaign/new/personal";
    $.ajax({
      url: url,
      type: "POST",
      data: data,
      headers: {
        Authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImZ1bmRyYWlzZXJzIjpbXSwiZG9uYXRpb25zIjpbXSwiX2lkIjoiNWFkNGNiOThhNTc5NGM3MWQ0YjU2MTFhIiwiZnVsbE5hbWUiOiJ0ZXN0aW5nIG5vbiBuZ28iLCJlbWFpbCI6InNvbW1ldGhpbmcxQHNvbS5jb20iLCJwaG9uZSI6MTIzNDU2Nzg5MCwiY3JlYXRlZCI6IjIwMTgtMDQtMTZUMTY6MTM6MTIuMjk5WiIsInVwZGF0ZWQiOiIyMDE4LTA0LTE2VDE2OjEzOjEyLjI5OVoiLCJfX3YiOjB9LCJpYXQiOjE1MjM4OTUyMTEsImV4cCI6MTUyMzk4MTYxMX0.Cs7ZKxPasT-ymJFmrU37oTfmo4ySpKRLJe9mkFJtLHU"
      },
      success: function(response) {
        if (response.success == true) {
            localStorage.setItem("campaignid", response.data.campaign_id);
             window.location.href = "./fundTemplate.html";
        } else {
          $("#err").append(response.message || "Some error occurred");
          $("#err").css("display", "block");
        }
      },
      error: function(e) {
        $("#err").append(e.message || "Some error occurred");
        $("#err").css("display", "block");
      }
    });
  });

  function getCauseCategory() {
    $.ajax({
      url:
        "http://caremedico.org/api/fund",
      type: "GET",
      success: function(response) {
        if (response.success == true) {
            response.data.forEach(function(cause){
    $(".cause").append(`<option value=${cause.category_name}>${cause.category_name}</option>`)
            })
        
        } else {
          $("#err").append(response.message || "Some error occurred");
          $("#err").css("display", "block");
        }
      },
      error: function(e) {
        $("#err").append(e.message || "Some error occurred");
        $("#err").css("display", "block");
      }
    });
  }
  getCauseCategory();
});
