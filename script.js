
let interviewList = [];
let rejectedList = [];
let currentStatus = 'all-filter-btn';

let totalCount = document.getElementById('total-count-tab');
let interviewCount = document.getElementById('interview-count-tab');
let rejectedCount = document.getElementById('rejected-count-tab');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');
const jobsCount = document.getElementById('jobs-count');
const emptyCard = document.getElementById('empty-cards');

const allJobs = document.getElementById('allJobs');
const mainContainer = document.querySelector('main');
const filteredSection = document.getElementById('filtered-section');

function calculateCount() {
    const totalJob = allJobs.children.length;
    totalCount.innerText = totalJob;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

    jobsCount.innerText = `${totalJob}jobs`;

    if(currentStatus === "all-filter-btn"){
        toggleEmptyCard(totalJob);
    }
}
calculateCount();

function toggle(id){
    allFilterBtn.classList.remove('bg-blue-400', 'text-white');
    interviewFilterBtn.classList.remove('bg-blue-400', 'text-white');
   rejectedFilterBtn.classList.remove('bg-blue-400', 'text-white');

   allFilterBtn.classList.add('bg-base-100', 'text-gray-600');
    interviewFilterBtn.classList.add('bg-base-100', 'text-gray-600');
   rejectedFilterBtn.classList.add('bg-base-100', 'text-gray-600');

   const selected = document.getElementById(id);
   currentStatus = id ;

   selected.classList.remove('bg-base-100', 'text-gray-600') ;
   selected.classList.add('bg-blue-400', 'text-white') ;
   
   if(id === 'all-filter-btn'){
    allJobs.classList.remove('hidden');
    filteredSection.classList.add('hidden');
   }
   else if(id === 'interview-filter-btn'){
    allJobs.classList.add('hidden');
    filteredSection.classList.remove('hidden')
    renderInterview();
   }
    else if(id === 'rejected-filter-btn'){
    allJobs.classList.add('hidden');
    filteredSection.classList.remove('hidden')
    renderRejected();
   }
}


function toggleEmptyCard(count){
    if(count === 0){
        emptyCard.classList.remove('hidden');
    } else {
        emptyCard.classList.add('hidden');
    }
}


mainContainer.addEventListener('click', function(event){
    const parentNode = event.target.closest('.card') ;
    if(!parentNode){
        return;
    }

    const companyName = parentNode.querySelector('.companyName').innerText ;
    const position = parentNode.querySelector('.position').innerText ;
    const location = parentNode.querySelector('.location').innerText ;
    const type = parentNode.querySelector('.type').innerText ;
    const salary = parentNode.querySelector('.salary').innerText ;
    const jobStatus = parentNode.querySelector('.job-status').innerText ;
    const jobDescription = parentNode.querySelector('.job-description').innerText ;

    if(event.target.classList.contains('interview-btn')){
        parentNode.querySelector('.job-status').innerText = 'Interview' ; 

        const cardInfo = {
            companyName, 
            position, 
            location, 
            type, 
            salary, 
            jobStatus:'Interview', 
            jobDescription
        }
        const jobExist = interviewList.find(item => item.companyName === cardInfo.companyName)
        if(!jobExist){
            interviewList.push(cardInfo);
        }
        rejectedList = rejectedList.filter(item => item.companyName !== cardInfo.companyName)

        calculateCount();

        if(currentStatus === 'rejected-filter-btn'){
            renderRejected();
        }

        if(currentStatus === 'interview-filter-btn'){
            renderInterview();
        }
    }
    
    if(event.target.classList.contains('rejected-btn')){
        parentNode.querySelector('.job-status').innerText = 'Rejected' ; 

        const cardInfo = {
            companyName, 
            position, 
            location, 
            type, 
            salary, 
            jobStatus:'Rejected', 
            jobDescription
        }
        const jobExist = rejectedList.find(item => item.companyName === cardInfo.companyName)
        if(!jobExist){
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.companyName !== cardInfo.companyName)

        calculateCount();

        if(currentStatus === 'interview-filter-btn'){
            renderInterview();
        }
        if(currentStatus === 'rejected-filter-btn'){
            renderRejected();
        }

    }

    // Delete job
        if (event.target.closest('.btn-circle')) {
            const companyName = parentNode.querySelector('.companyName').innerText;
            interviewList = interviewList.filter(item => item.companyName !== companyName);
            rejectedList = rejectedList.filter(item => item.companyName !== companyName);
            parentNode.remove();
            
            calculateCount();

            if(currentStatus === 'interview-filter-btn'){
                renderInterview();
            }
            if(currentStatus === 'rejected-filter-btn'){
                renderRejected();
            }

    }

})


function renderInterview(){
    filteredSection.innerHTML = '' ;

    for(interview of interviewList){
        let div = document.createElement('div');

        div.className = "card flex flex-col sm:flex-row justify-between gap-4 bg-base-100 shadow-lg rounded-lg px-4 sm:px-5 py-4" ;

        div.innerHTML = `

             <!-- left -->
                <div class="space-y-6">
                    <div>
                        <h2 class="companyName text-info-content font-semibold text-xl sm:text-2xl">${interview.companyName}
                        </h2>
                        <p class="position text-sm sm:text-base">${interview.position}</p>
                    </div>

                    <div class="flex flex-wrap gap-3 sm:gap-8 text-sm sm:text-base">
                        <p class="location">${interview.location}</p>
                        <li class="type">${interview.type}</li>
                        <li class="salary">${interview.salary}</li>
                    </div>

                    <p class="job-status w-1/6 bg-blue-50 px-5 py-2">${interview.jobStatus}</p>
                    <p class="job-description text-sm sm:text-base">${interview.jobDescription}</p>

                    <div class="flex gap-4">
                        <button class="interview-btn btn btn-outline btn-success">Interview</button>
                        <button class="rejected-btn btn btn-outline btn-error">Rejected</button>
                    </div>
                </div>

                <!-- rigt -->
                <div>
                    <button class="delete-btn btn btn-circle"><i class="fa-regular fa-trash-can"></i></button>
                </div>

        ` ;
        filteredSection.appendChild(div);
    }
    toggleEmptyCard(interviewList.length);
}

function renderRejected(){
    filteredSection.innerHTML = '' ;

    for(rejected of rejectedList){
        let div = document.createElement('div');

        div.className = "card flex flex-col sm:flex-row justify-between gap-4 bg-base-100 shadow-lg rounded-lg px-4 sm:px-5 py-4" ;

        div.innerHTML = `

             <!-- left -->
                <div class="space-y-6">
                    <div>
                        <h2 class="companyName text-info-content font-semibold text-xl sm:text-2xl">${rejected.companyName}
                        </h2>
                        <p class="position text-sm sm:text-base">${rejected.position}</p>
                    </div>

                    <div class="flex flex-wrap gap-3 sm:gap-8 text-sm sm:text-base">
                        <p class="location">${rejected.location}</p>
                        <li class="type">${rejected.type}</li>
                        <li class="salary">${rejected.salary}</li>
                    </div>

                    <button class="job-status bg-blue-50 px-5 py-2">${rejected.jobStatus}</button>
                    <p class="job-description text-sm sm:text-base">${rejected.jobDescription}</p>

                    <div class="flex gap-4">
                        <button class="interview-btn btn btn-outline btn-success">Interview</button>
                        <button class="rejected-btn btn btn-outline btn-error">Rejected</button>
                    </div>
                </div>

                <!-- rigt -->
                <div>
                    <button class="delete-btn btn btn-circle"><i class="fa-regular fa-trash-can"></i></button>
                </div>

        ` ;
        filteredSection.appendChild(div);
    }
    toggleEmptyCard(rejectedList.length);
}

