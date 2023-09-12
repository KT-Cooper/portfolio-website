// EVENT LISTENER
document.getElementById("sort-options").onchange = changeListener;
  
function changeListener() {
    var value = this.value
    console.log(value);
    
    if (value == "sort-title-a-z"){
      SortDataTitle();
    }else if (value == "sort-title-z-a"){
      SortDataTitleRev();
    }else if (value == "sort-date-new-old"){
        SortDataDate();
    }else if (value == "sort-date-old-new"){
        SortDataDateRev();
    }
    
}
// EVENT LISTENER

// SORT TITLE a -> z
function comparatorTitle(a, b) {
    if (a.dataset.title < b.dataset.title) return -1;
    if (a.dataset.title > b.dataset.title) return 1;
    return 0;
}
// Function to sort Data
function SortDataTitle() {
    var titles =
        document.querySelectorAll("[data-title]");
    var titlesArray = Array.from(titles);
    let sorted = titlesArray.sort(comparatorTitle);
    sorted.forEach(e => document.querySelector(".list").appendChild(e));
}
// SORT TITLE a -> z

// SORT TITLE z -> a
function comparatorTitleRev(a, b) {
    if (a.dataset.title > b.dataset.title) return -1;
    if (a.dataset.title < b.dataset.title) return 1;
    return 0;
}
// Function to sort Data
function SortDataTitleRev() {
    var titles =
        document.querySelectorAll("[data-title]");
    var titlesArray = Array.from(titles);
    let sorted = titlesArray.sort(comparatorTitleRev);
    sorted.forEach(e => document.querySelector(".list").appendChild(e));
}
// SORT TITLE z -> a

// SORT DATE new -> old
function comparatorDate(a, b) {
    if (a.dataset.date < b.dataset.date) return -1;
    if (a.dataset.date > b.dataset.date) return 1;
    return 0;
}
// Function to sort Data
function SortDataDate() {
    var dates =
        document.querySelectorAll("[data-date]");
    var datesArray = Array.from(dates);
    let sorted = datesArray.sort(comparatorDate);
    sorted.forEach(e => document.querySelector(".list").appendChild(e));
}
// SORT DATE new -> old

// SORT DATE old -> new
function comparatorDateRev(a, b) {
    if (a.dataset.date > b.dataset.date) return -1;
    if (a.dataset.date < b.dataset.date) return 1;
    return 0;
}
// Function to sort Data
function SortDataDateRev() {
    var dates =
        document.querySelectorAll("[data-date]");
    var datesArray = Array.from(dates);
    let sorted = datesArray.sort(comparatorDateRev);
    sorted.forEach(e => document.querySelector(".list").appendChild(e));
}
// SORT DATE old -> new