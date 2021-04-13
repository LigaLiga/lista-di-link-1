let addNewListElement = function(event){

  event.preventDefault();

  let lisElementUrl = $("#form-url").val();
  let lisElementTitle = $("#form-title").val();
  let lisElementCtaegory = $("#form-category").val();

  const aElem = $("<a>").attr("href",lisElementUrl).text(lisElementTitle);

  const listElement = $("<li>").append(aElem);
  $("#list").append(listElement);
}

let init = function(){

  $("#form-submit").on("click", addNewListElement)
}

$(document).ready(init);