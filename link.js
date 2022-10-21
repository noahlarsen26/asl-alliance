let url =
  "https://docs.google.com/spreadsheets/d/1GNLSiruAG3I6EWzmLGf_qbZm-cSj-9h6BmANv5vEp3k/gviz/tq?";
const query = encodeURIComponent("Select A,B");
url = url + "&tq=" + query;

const rsvpBtn1 = document.getElementById("rsvp-btn-1");
const rsvpBtn2 = document.getElementById("rsvp-btn-2");
const rsvpBtn3 = document.getElementById("rsvp-btn-3");

fetch(url)
  .then((res) => res.text())
  .then((rep) => {
    const data = JSON.parse(rep.substring(47).slice(0, -2));

    data.table.rows.forEach(() => {
      document.querySelectorAll(".rsvp-btn").forEach((rsvpBtn, i) => {
        // set data attribute to rsvp buttons
        rsvpBtn.setAttribute("data-id", i);
        // set events to event from google forms
        rsvpBtn.addEventListener("click", (e) => {
          const rsvpForm = document.getElementById("rsvp-form");
          rsvpForm.src = data.table.rows[e.target.dataset.id].c[1].v;
          document.querySelector(".rsvp-overlay").classList.remove("hide-rsvp");
        });
      });
    });
  });

// CLOSE RSVP FORM

formCloseBtn.addEventListener("click", closeRSVP);
// function to close the RSVP form
function closeRSVP() {
  document.querySelector(".rsvp-overlay").classList.add("hide-rsvp");
}

// ADD CAMPUS OR ALLIANCE CLASS TO EVENTS
const titleContainers = document.querySelectorAll(".title-container");

titleContainers.forEach((eventTitle) => {
  if (eventTitle.children[2].textContent === "campus event") {
    eventTitle.children[2].classList.add("campus");
  } else if (eventTitle.children[2].textContent === "alliance event") {
    eventTitle.children[2].classList.add("alliance");
  }

  const tabs = document.querySelectorAll(".tab");
  addEventListener("DOMContentLoaded", () => {
    document.querySelector(".all-tab").classList.add("tab-underline");
  });

  for (let i = 0; i < tabs.length; i++) {
    const allTab = document.querySelector(".all-tab");
    const campusTab = document.querySelector(".campus-tab");
    const allianceTab = document.querySelector(".alliance-tab");
    const allianceHeadings = document.querySelectorAll(".alliance");
    const campusHeadings = document.querySelectorAll(".campus");

    tabs[i].addEventListener("click", (e) => {
      campusHeadings.forEach((campusHeading) => {
        allianceHeadings.forEach((allianceHeading) => {
          if (e.target.classList.contains("all-tab")) {
            allTab.classList.add("tab-underline");
            campusTab.classList.remove("tab-underline");
            allianceTab.classList.remove("tab-underline");
            allianceHeading
              .closest(".single-event")
              .classList.remove("hide-event");
            campusHeading
              .closest(".single-event")
              .classList.remove("hide-event");
          } else if (e.target.classList.contains("campus-tab")) {
            campusTab.classList.add("tab-underline");
            allTab.classList.remove("tab-underline");
            allianceTab.classList.remove("tab-underline");
            allianceHeading
              .closest(".single-event")
              .classList.add("hide-event");
            campusHeading
              .closest(".single-event")
              .classList.remove("hide-event");
          } else if (e.target.classList.contains("alliance-tab")) {
            allianceTab.classList.add("tab-underline");
            allTab.classList.remove("tab-underline");
            campusTab.classList.remove("tab-underline");
            campusHeading.closest(".single-event").classList.add("hide-event");
            allianceHeading
              .closest(".single-event")
              .classList.remove("hide-event");
          }
        });
      });
    });
  }
});
