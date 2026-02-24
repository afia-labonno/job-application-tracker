
let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById('total-count-tab');
let interviewCount = document.getElementById('interview-count-tab');
let rejectedCount = document.getElementById('rejected-count-tab');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const allJobs = document.getElementById('allJobs');
const mainContainer = document.querySelector('main');

function calculateCount() {
    totalCount.innerText = allJobs.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount();

