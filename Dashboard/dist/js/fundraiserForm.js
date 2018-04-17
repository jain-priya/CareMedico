document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelector('#profileSave').addEventListener('click', formsubmit)
});

function formsubmit(e){
    e.preventDefault();
    var formd=$('#form').serialize();
    console.log(document.getElementById("form").className);
    console.log("Form Data" +formd);
    let type = document.getElementById("form").name;
    console.log("type:"+type);
    let token = localStorage.getItem("token")||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2MiOnsiZG9uYXRpb25zIjpbXSwiX2lkIjoiNWFiYzkxMWM1YmJkN2UzZGY5YTI2YjcxIiwiZnVsbE5hbWUiOiJ0ZXN0aW5nIG5nbyIsImVtYWlsIjoic29tbWV0aGluZ0Bzb20uY29tIiwicGFzc3dvcmQiOiIxMjM0NTY3ODkiLCJwaG9uZSI6MTIzNDU2Nzg5MCwiY3JlYXRlZCI6IjIwMTgtMDMtMjlUMDc6MDk6MTYuODkxWiIsInVwZGF0ZWQiOiIyMDE4LTAzLTI5VDA3OjA5OjE2Ljg5MVoiLCJfX3YiOjB9LCJpYXQiOjE1MjM4NTQ3NDEsImV4cCI6MTUyMzk0MTE0MX0.0pfOGX2f5W5h2dOsZnk-4IzPKiV1cuIt4hL2QzjBD2w";
    console.log(token)
       $.ajax({
              url: `http://ec2-35-154-91-106.ap-south-1.compute.amazonaws.com:8080/api/campaign/new/${type}`,
           type: 'POST',
         data:formd,
              headers: {
        Authorization:
          "bearer "+token
      }
              , success: function (response) {
              //    console.log(response)
                 if(response.success==true){
                    
                  // window.location.href="../../Non-Ngo/fundTemplate.html"
                    console.log(response.data._id)
                     alert("Data Posted");                 
                 }
                    else{
                    alert("Failed...");
                    }
                    
                 
                 
              },
              error: function(e){
                  console.log(e)
              alert("Failed...");
              }
            });
       }
        
                 
