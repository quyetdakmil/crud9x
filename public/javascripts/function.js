$(function (){
  $.ajax({
    type: 'GET',
    url: '/api/celebrities',
    success: function(data){
      $.each(data, function(index, element) {
        $('#ahihi').append(
          '<div class="col-md-4" id="'+ element.id+ '">' + 
          '<div class="card mb-4 box-shadow">'+
          '<img style="width: 300px; height: 250px;"  class="card-img-top" src="' + element.image_url + '" alt="Card image cap">'+
          '<div class="card-body">'+
          '<h3 class="card-title">' + element.name + '</h3>'+
          '<p class="card-text">' + element.description + '</p>'+
          '<div class="d-flex justify-content-between align-items-center">'+
          '<div class="btn-group">'+
          '<a href="#" class="btn btn-success my-2" data-toggle="modal" onclick="SelectData(' + element.id + ');" data-target="#createModal2">Update</a>'+
          '<button type="button" class="btn btn-danger my-2" onclick="Delete(' + element.id + ');">Delete</button>'+
          '</div>'+
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>'
          );
      });
    }
  });
});

function Delete(id) {
  $.ajax({
    url: 'api/celebrities/' + id,
    type: 'delete',
    success: function(result) {
      document.getElementById(id).remove();   
    }
  });
};


function Create() {
  var image_url = document.getElementById('imagelink');
  var description = document.getElementById('description');
  var name = document.getElementById('name');
  var celebrities = {
    image_url: image_url.value,
    name: name.value,
    description: description.value
  };
  $.ajax({
    type: 'POST',
    url: '/api/celebrities',
    dataType: 'json',
    data: celebrities,
    success: function(data){
      $('#ahihi').append(
        '<div class="col-md-4" id="'+ data.insertId + '">' + 
        '<div class="card mb-4 box-shadow">'+
        '<img style="width: 300px; height: 250px;"  class="card-img-top" src="' + image_url.value + '" alt="Card image cap">'+
        '<div class="card-body">'+
        '<p class="card-title">' + name.value + '</p>'+
        '<p class="card-text">' + description.value + '</p>'+
        '<div class="d-flex justify-content-between align-items-center">'+
        '<div class="btn-group">'+
        '<a href="#" class="btn btn-success my-2" data-toggle="modal" onclick="SelectData(' + data.insertId + ');" data-target="#createModal2">Update</a>'+
        '<button type="button" class="btn btn-danger my-2"  onclick="Delete(' + data.insertId + ');">Delete</button>'+
        '</div>'+
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
        );
    }
  });
};

function Update() {
  var id = document.getElementById('celeID');
  var image_url = document.getElementById('imagelink2');
  var description = document.getElementById('description2');
  var name = document.getElementById('name2');
  var celebrities = {
    image_url: image_url.value,
    name: name.value,
    description: description.value,
    id : id.value
  };
  $.ajax({
    url: '/api/celebrities/' + id.value,
    data: celebrities,
    type: "PUT",
    dataType: "json",
    success: function(data){
      var card = $('.col-md-4[id="' + id.value + '"]');
      card.find('.card-title').text(name.value);
      card.find('.card-text').text(description.value);
      card.find('.card-img-top').attr("src", image_url.value);
    }
  });
};

function SelectData(id)
{
  $.ajax({
    type: "GET",
    url: "/api/celebrities/"+id,
    success: function(data){
      $("#name2").val(data[0].name);
      $("#description2").val(data[0].description);
      $("#imagelink2").val(data[0].image_url);
      $("#celeID").val(id);
    }
  });

}
