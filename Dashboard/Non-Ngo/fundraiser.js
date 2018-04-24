$(document).ready(function() {
  var id = "5ad4cb98a5794c71d4b5611a";
  function getInitialData() {
    $.ajax({
      type: "GET",
      url: `http://caremedico.org/api/campaigns/byorg/${id}`,
      dataType: "json",
      headers: {
        Authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImZ1bmRyYWlzZXJzIjpbXSwiZG9uYXRpb25zIjpbXSwiX2lkIjoiNWFkNGNiOThhNTc5NGM3MWQ0YjU2MTFhIiwiZnVsbE5hbWUiOiJ0ZXN0aW5nIG5vbiBuZ28iLCJlbWFpbCI6InNvbW1ldGhpbmcxQHNvbS5jb20iLCJwaG9uZSI6MTIzNDU2Nzg5MCwiY3JlYXRlZCI6IjIwMTgtMDQtMTZUMTY6MTM6MTIuMjk5WiIsInVwZGF0ZWQiOiIyMDE4LTA0LTE2VDE2OjEzOjEyLjI5OVoiLCJfX3YiOjB9LCJpYXQiOjE1MjM4OTUyMTEsImV4cCI6MTUyMzk4MTYxMX0.Cs7ZKxPasT-ymJFmrU37oTfmo4ySpKRLJe9mkFJtLHU"
      },
      success: function(res) {
        console.log(res);
        if (res.success == true) {
          res.data.forEach(function(fundraiser) {
            $(".fundraiser-data-tbody").append(` <tr>
                                    <td>${"some date"}</td>
                                    <td>${fundraiser.fund_title || ""}</td>
                                    <td>${fundraiser.amount}</td>
                                    <td>${fundraiser.amount_raised}</td>
                                    <td>${fundraiser.donor || ""}</td>
                                    <td>${fundraiser.status || "active"}</td>
                                </tr>
`);
          });
        }
      },
      error: function(err) {
        $("#errmessage").append(
          "Some error occurred, Please refresh the page or try again later"
        );
        $("#errmessage").css("display", "block");
      }
    });
  }
  getInitialData();
}); //end of ready
