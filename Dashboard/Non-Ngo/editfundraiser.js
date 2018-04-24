$(document).ready(function(){
    let campaignData = {
        fund_title:"",
        cause:"",
        cover_img:"",
        cover_videoLink:"",
        amount:"",
        campaign_url:"",
        end_date:"",
        campaign_desc:""
    };
    let campaignId = localStorage.getItem("campaignid"); 
   function getInitialData(){
      $.ajax({
      type: "GET",
      url:
 "http://caremedico.org/api/campaign/campaign_listing/campaignId",
      dataType: "json",
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`
      },
      success: function(res) {
        console.log(res);
        if (res.success == true) {
          campaignData.fund_title = res.data.fund_title;
            campaignData.cause=res.data.cause;
            campaignData.cover_img =res.data.cover_img||"";
            campaignData.amount = res.data.amount;
            campaignData.cover_videoLink=res.data.cover_videoLink||"";
            campaignData.end_date:res.data.end_date;
            campaignData.campaign_desc=res.data.campaign_desc||"";
          setInitialData();
        } else {
          $("#errmessage").append(
            "Some error occurred, Please refresh the page or try again later"
          );
          $("#errmessage").css("display", "block");
        }
      },
      error: function(err) {
        console.log(err);
      }
    });
     
   }
    function setInitialData(){
         $("#title").val(campaignData.fund_title);
    $("#cause").val(campaignData.cause);
    $("#coverimg").val(campaignData.cover_img);
    $("#videoli").val(campaignData.cover_videoLink);
    $("#amount").val(campaignData.amount);
    $("#url").val(campaignData.campaign_url);
     $("#campaign_desc").val(campaignData.campaign_desc)    $("#end_date").val(campaignData.end_date);
    }
    
    $("#profileSave").click(function(e) {
      e.preventDefault();
       let data = {
        fund_title:$("#title").val(),
        cause:$("cause").val(),
        cover_img: $("#coverimg").val(),
        cover_videoLink: $("#videoli").val(),
        amount:$("#amount").val(),
        campaign_url:$("#url").val(),
        end_date:$("#end_date").val(),
        campaign_desc:$("#campaign_desc").val()
       }; 
        console.log(data);
             $.ajax({
          type: "PUT",
          url:
            "http://caremedico.org/api/campaign/edit/campaignId",
          dataType: "json",
          data: data,
          headers: {
            Authorization: `bearer ${localStorage.getItem("token")}`
          },
          success: function(res) {
            getInitialData();
          },
          error: function(err) {
            $("#errmessage").append(
              "Some error occurred, Please refresh the page or try again later"
            );
            $("#errmessage").css("display", "block");
          }
        });
   
    })
})