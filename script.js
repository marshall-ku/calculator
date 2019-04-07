const $input = $(".input"),
      $tmp = $(".tmp");

function i_empty() {
  $input.empty()
}

function t_empty() {
  $tmp.empty()
}

$(".btn.all-clear").click(function() {
  i_empty(), t_empty()
}),
$(".btn.clear").click(function() {
  i_empty()
}),
$(".btn.number").click(function() {
  if ($input.text().length <= 19) {
    $input.text($input.text() + $(this).text())
  }
  else {
    alert("최대 입력 범위를 초과했습니다!")
  }
}),
$(".dot").click(function() {
  if ($input.text().indexOf(".") === -1) {
    $input.text($input.text() + $(this).text())
  }
}),
$(".sign").click(function() {
  if ($input.text().indexOf("-") === -1 && $input.text() !== "") {
    $input.text("-" + $input.text())
  }
  else {
    $input.text($input.text().replace("-", ""))
  }
}),
$(".btn.amt").click(function() {
  if ($input.text() !== "") {
    if ($tmp.text() === "") {
      $tmp.text($input.text() + " " + $(this).text())
    }
    else {
      $tmp.text($tmp.text() + " " + $input.text() + " " + $(this).text())
    }
  }
  if ($input.text() === "" && $tmp.text() !== "") {
    $tmp.text($tmp.text().slice(0,-1) + " " + $(this).text())
  }
  i_empty()
}),
$(".result").click(function() {
  $input.text(eval($tmp.text() + $input.text())), t_empty()
}),
$(".btn").click(function(b) {
  var f = $(this);
  0 == f.find(".material-ink").length && f.prepend("<div class='material-ink'></div>");
  var h = f.find(".material-ink");
  if (h.removeClass("animate"), !h.height() && !h.width()) {
    var j = Math.max(f.outerWidth(), f.outerHeight());
    h.css({
      height: j,
      width: j
    })
  }
  var k = b.pageX - f.offset().left - h.width() / 2,
    m = b.pageY - f.offset().top - h.height() / 2,
    p = f.data("ripple-color");
  h.css({
    top: m + "px",
    left: k + "px",
    background: p
  }).addClass("animate")
})


document.querySelector("all-clear").addEventListener("click", function(){
  alert(this.textContent)
})
