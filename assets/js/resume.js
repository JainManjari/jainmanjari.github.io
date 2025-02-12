var list = document.querySelectorAll(".nav-item a");
var id1;
let header = document.getElementById("body-header");
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function (event) {
    event.preventDefault();
    $("#navbarNav").removeClass("show");
    var value = this.textContent.trim().toLowerCase();
    var sectionId = document.getElementById(value);
    var curr = 0;
    var targetPos = sectionId.getBoundingClientRect().y - 50;
    if (value == "contact") {
      targetPos = sectionId.getBoundingClientRect().y - 80;
    }
    if (value == "about me") {
      targetPos = sectionId.getBoundingClientRect().y + 10;
    }
    //console.log(sectionId,targetPos)
    $(" #leaves i", sectionId).css("-webkit-animation", "none");
    $(" #leaves i:nth-of-type(2n)", sectionId).css("-webkit-animation", "none");
    $(" #leaves i:nth-of-type(3n)", sectionId).css("-webkit-animation", "none");
    // id1=setInterval(jsnav,10,targetPos);
    //  id1=setInterval(function()
    //  {
    //      scrollVertical(sectionId)
    //  },10);
    function jsnav() {
      if (targetPos >= 0) {
        if (curr >= targetPos) {
          $(" #leaves i", sectionId).css(
            "-webkit-animation",
            "falling 5s 0s 1"
          );
          $(" #leaves i:nth-of-type(n)", sectionId).css(
            "-webkit-animation-delay",
            "1.9s"
          );
          $(" #leaves i:nth-of-type(2n)", sectionId).css(
            "-webkit-animation",
            "falling2 5s 0s 1;"
          );
          $(" #leaves i:nth-of-type(2n)", sectionId).css(
            "-webkit-animation-delay",
            "3.9s"
          );
          $(" #leaves i:nth-of-type(3n)", sectionId).css(
            "-webkit-animation-delay",
            "2.3s"
          );
          $(" #leaves i:nth-of-type(4n)", sectionId).css(
            "-webkit-animation-delay",
            "4.4s"
          );
          $(" #leaves i:nth-of-type(5n)", sectionId).css(
            "-webkit-animation-delay",
            "5.s"
          );
          $(" #leaves i:nth-of-type(3n)", sectionId).css(
            "-webkit-animation",
            "falling3 5s 0s 1;"
          );
          clearInterval(id1);
          return;
        }
        window.scrollBy(0, 200);
        curr += 200;
      } else {
        if (curr <= targetPos) {
          $(" #leaves i", sectionId).css(
            "-webkit-animation",
            "falling 5s 0s 1"
          );
          $(" #leaves i:nth-of-type(n)", sectionId).css(
            "-webkit-animation-delay",
            "1.9s"
          );
          $(" #leaves i:nth-of-type(2n)", sectionId).css(
            "-webkit-animation",
            "falling2 5s 0s 1;"
          );
          $(" #leaves i:nth-of-type(2n)", sectionId).css(
            "-webkit-animation-delay",
            "3.9s"
          );
          $(" #leaves i:nth-of-type(3n)", sectionId).css(
            "-webkit-animation-delay",
            "2.3s"
          );
          $(" #leaves i:nth-of-type(4n)", sectionId).css(
            "-webkit-animation-delay",
            "4.4s"
          );
          $(" #leaves i:nth-of-type(5n)", sectionId).css(
            "-webkit-animation-delay",
            "5.s"
          );
          $(" #leaves i:nth-of-type(3n)", sectionId).css(
            "-webkit-animation",
            "falling3 5s 0s 1;"
          );
          clearInterval(id1);
          return;
        }
        window.scrollBy(0, -200);
        curr -= 200;
      }
    }
    var id1 = setInterval(jsnav, 5);
  });
}

// function scrollVertical(sectionId)
// {
//     var secCor=sectionId.getBoundingClientRect().top;
//     if(secCor<=0)
//     {
//         clearInterval(id1);
//         return;
//     }
//     window.scrollBy(0,50);
// }

var skillDisplay = document.getElementsByClassName("skill-display")[0];
var progessBars = document.querySelectorAll(".skill-progress > div");
var progessBar = document.querySelectorAll(".skill-progress");
var sections = $("section");
var animationDoneSection = new Array(sections.length);
for (let i = 0; i < animationDoneSection.length; i++) {
  animationDoneSection[i] = false;
}

let skillDisplayHeaders = $(
  ".skill-display .skill-display-box .accordion-item .accordion-header"
);

for (let skillDisplayHeader of skillDisplayHeaders) {
  skillDisplayHeader.addEventListener("click", function (e) {
    e.preventDefault();
    let id= skillDisplayHeader.attributes.id.value;
    let accordionCollapseId = skillDisplayHeader.attributes.id.value.replace("heading","collapse");
    let button = $(`#${id} button`);
    let isCollapsed = button.attr("class").includes("collapsed");
    if (isCollapsed) {
      let progessBars = $(`#${accordionCollapseId} .skill-progress`);
      for (var i = 0; i < progessBars.length; i++) {
        initialisedBar(progessBars[i].firstElementChild)
        fillBar(progessBars[i].firstElementChild);
      }
    }
  });
}

function isInViewPort(ele) {
  var coordinates = ele.getBoundingClientRect();
  // console.log(coordinates.top);
  return coordinates.top <= window.innerHeight;
}

function isInView(ele) {
  var coordinates = ele.getBoundingClientRect();
  // console.log(coordinates.top);
  return coordinates.y == 75;
}

var animationDone = new Array(progessBar.length);
for (var i = 0; i < animationDone.length; i++) {
  animationDone[i] = false;
}

// top layers animation
var topLayers = $(".toplayer");
var animationDoneTopLayers = new Array(topLayers.length);
for (let i = 0; i < animationDoneTopLayers.length; i++) {
  animationDoneTopLayers[i] = false;
}

function initialiseTopLayers() {
  for (let toplayer of topLayers) {
    initialiseTopLayer(toplayer);
  }
}

initialiseTopLayers();

function initialiseTopLayer(toplayer) {
  toplayer.style.left = 0 + "%";
}

function shiftTopLayers() {
  for (let toplayer of topLayers) {
    shiftTopLayer(toplayer);
  }
}

function shiftTopLayer(toplayer) {
  let curr = 0;
  let value = 100;
  function shift() {
    if (curr >= value) {
      clearInterval(id);
      return;
    }
    curr += 1;
    toplayer.style.left = curr + "%";
  }
  var id = setInterval(shift, 10);
}

function initialisedBars() {
  for (let i of progessBars) {
    i.style.width = 0 + "%";
    i.style.padding = 0 + "px";
  }
}

initialisedBars();

function initialisedBar(bar) {
  bar.style.width = 0 + "%";
  bar.style.padding = 0 + "px";
}

function fillBars() {
  for (let i of progessBars) {
    let value = i.getAttribute("data-bar");
    i.style.padding = 2 + "px";
    let curr = 0;
    function barFill() {
      if (curr >= value) {
        clearInterval(b);
        return;
      }
      curr++;
      i.style.width = curr + "%";
    }
    var b = setInterval(barFill, 1);
  }
}

function fillBar(bar) {
  let value = bar.getAttribute("data-bar");
  bar.style.padding = 2 + "px";
  let curr = 0;
  function barFill() {
    if (curr >= value) {
      clearInterval(b);
      return;
    }
    curr++;
    bar.style.width = curr + "%";
  }
  var b = setInterval(barFill, 3);
}

var html = document.documentElement;
var body = document.getElementsByTagName("body")[0];
var number = document.getElementById("percent-number");
var bodyHeight = body.offsetHeight;
let endtextAnimation = false;
window.addEventListener("scroll", function () {
  if (header.offsetHeight <= pageYOffset) {
    $(".navbar").addClass("fixed-top");
  } else {
    $(".navbar").removeClass("fixed-top");
  }
  // for (var i = 0; i < progessBar.length; i++) {
  //   if (!animationDone[i] && isInViewPort(progessBar[i])) {
  //     fillBar(progessBar[i].firstElementChild);
  //     animationDone[i] = true;
  //     //console.log("skill");
  //   } else if (!isInViewPort(progessBar[i])) {
  //     animationDone[i] = false;
  //     initialisedBar(progessBar[i].firstElementChild);
  //   }
  // }

  for (let i = 0; i < topLayers.length; i++) {
    if (!animationDoneTopLayers[i] && isInViewPort(topLayers[i])) {
      shiftTopLayer(topLayers[i]);
      animationDoneTopLayers[i] = true;
    } else if (!isInViewPort(topLayers[i])) {
      animationDoneTopLayers[i] = false;
      initialiseTopLayer(topLayers[i]);
    }
  }

  let ele = document.querySelector("#contact #gitSocialIcon");
  let eleview = ele.getBoundingClientRect().top <= window.innerHeight;
  if (eleview && !endtextAnimation) {
    i1 = 0;
    endtextAnimation = true;
    document.getElementById("theend").innerHTML = "";
    setTimeout(typewriter2(), 500);
  }

  for (var i = 0; i < sections.length; i++) {
    if (!animationDoneSection[i] && isInViewPort(sections[i])) {
      $(" #leaves i", sections[i]).css("-webkit-animation", "falling 5s 0s 1");
      $(" #leaves i:nth-of-type(n)", sections[i]).css(
        "-webkit-animation-delay",
        "1.9s"
      );
      $(" #leaves i:nth-of-type(2n)", sections[i]).css(
        "-webkit-animation",
        "falling2 5s 0s 1;"
      );
      $(" #leaves i:nth-of-type(2n)", sections[i]).css(
        "-webkit-animation-delay",
        "3.9s"
      );
      $(" #leaves i:nth-of-type(3n)", sections[i]).css(
        "-webkit-animation-delay",
        "2.3s"
      );
      $(" #leaves i:nth-of-type(4n)", sections[i]).css(
        "-webkit-animation-delay",
        "4.4s"
      );
      $(" #leaves i:nth-of-type(5n)", sections[i]).css(
        "-webkit-animation-delay",
        "5.s"
      );
      $(" #leaves i:nth-of-type(3n)", sections[i]).css(
        "-webkit-animation",
        "falling3 5s 0s 1;"
      );
      animationDoneSection[i] = true;
      // console.log(i)
    } else if (!isInViewPort(sections[i])) {
      animationDoneSection[i] = false;
      $(" #leaves i", sections[i]).css("-webkit-animation", "none");
      $(" #leaves i:nth-of-type(2n)", sections[i]).css(
        "-webkit-animation",
        "none"
      );
      $(" #leaves i:nth-of-type(3n)", sections[i]).css(
        "-webkit-animation",
        "none"
      );
    }
  }
});

var text = "Hi, I am Manjari Jain. This is just a brief tale of my eclectic life.. 😃🎃☃️";
var speed = 120;
var i = 0;

$(document).ready(function () {
  setTimeout(typewriter(), 900);
  if (header.offsetHeight <= pageYOffset) {
    $(".navbar").addClass("fixed-top");
  } else {
    $(".navbar").removeClass("fixed-top");
  }
});

var endText = "You know that an end signifies a new beginning, right?";

function typewriter() {
  if (i < text.length) {
    document.getElementById("my-name").innerHTML += text.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  }
}

var i1 = 0;

function typewriter2() {
  if (i1 < endText.length) {
    document.getElementById("theend").innerHTML += endText.charAt(i1);
    // document.getElementById("contact").style.cssText = 'height:auto;';
    // document.getElementById("contact").style.cssText = 'height:' + document.getElementById("contact").scrollHeight + 'px';
    i1++;
    setTimeout(typewriter2, 60);
  }
}

// var typed=new Typed('.typing',{
//     strings:["","hard worker.","believer.","full stack developer."],
//     loop:true,
//     typeSpeed:60,
//     backSpeed:60
// })

function autosize(textarea) {
  var el = textarea;
  setTimeout(function () {
    el.style.cssText = "height:auto; padding:0";
    el.style.cssText = "height:" + el.scrollHeight + "px";
  }, 0);
}

let mailIcon = $("#mailicon");
$("#mailicon-box").mouseover(function () {
  mailIcon.removeClass("fa-envelope");
  mailIcon.addClass("fa-envelope-open");
});
$("#mailicon-box").mouseout(function () {
  mailIcon.addClass("fa-envelope");
  mailIcon.removeClass("fa-envelope-open");
});

let submitMessage = function () {
  $("form").submit(function (e) {
    e.preventDefault(),
      $.ajax({
        url: "/send-message",
        type: "post",
        data: $("form").serialize(),
        success: function (e) {
          swal({
            title: "Message Sent Successfully!",
            text: `Thank you ${e.data.user.name} for your time!`,
            icon: "success",
          });
        },
        error: function (e) {
          console.log(e.responseText);
        },
      });
  });
};
submitMessage();
