
// Part-Home page code start here
// Catch Id with variable
const allIssueContainer = document.getElementById('allIssueContainer');
const totalIssueCount = document.getElementById('totalIssueCount');
const loadSpiner = document.getElementById('loadingSpiner');

const allIssueBtn = document.getElementById('allIssueBtn');
const openIssueBtn = document.getElementById('openIssueBtn');
const closedIssueBtn = document.getElementById('closedIssueBtn');
const issuTrakerModal = document.getElementById('issuTrakerModal');
const modalTitle = document.getElementById('modalTitle');
const modalStatus = document.getElementById('modalStatus');
const modalAuthorStatusName = document.getElementById('modalAuthorStatusName');
const modalStatusDate = document.getElementById('modalStatusDate');
const modalDescription = document.getElementById('modalDescription');
const authorName = document.getElementById('authorName');
const modalProperty = document.getElementById('modalProperty');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const cactBtn = document.getElementById('cact-btn');


// search button and function

searchButton.addEventListener('click', async function () {
    const searchInputValue = searchInput.value;
    showLoading();
    // console.log(searchInputValue);
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchInputValue}`);
    const data = await res.json();
    hideLoading();
    // console.log(data);
    // const searchMatchData = data.data.filter(item => item.title == searchInputValue);
    // console.log(searchMatchData);
    disPlayAllIssue(data.data);
})

// Button toggle function
openIssueBtn.addEventListener('click', function () {
    allIssueBtn.classList.remove('primary-color');
    allIssueBtn.classList.add('btn-outline');
    closedIssueBtn.classList.remove('primary-color');
    closedIssueBtn.classList.add('btn-outline');
    closedIssueBtn.classList.add('text-black');
    openIssueBtn.classList.add('primary-color');
    openIssueBtn.classList.add('text-black');
});
closedIssueBtn.addEventListener('click', function () {
    allIssueBtn.classList.remove('primary-color');
    allIssueBtn.classList.add('btn-outline');
    openIssueBtn.classList.remove('primary-color');
    openIssueBtn.classList.add('btn-outline');
    closedIssueBtn.classList.add('primary-color');
    closedIssueBtn.classList.add('text-[white]');
});
allIssueBtn.addEventListener('click', function () {
    
    openIssueBtn.classList.remove('primary-color');
    closedIssueBtn.classList.remove('primary-color');
    closedIssueBtn.classList.add('text-black');
    closedIssueBtn.classList.add('btn-outline');
    allIssueBtn.classList.add('primary-color');
    allIssueBtn.classList.add('text-[white');
});

// Total Count 
function totalCount() {
    const totalIssue = allIssueContainer.children;
    // console.log(totalIssue.length);
    totalIssueCount.innerText = totalIssue.length;
}
totalCount();
function showLoading() {
    loadSpiner.classList.remove('hidden');
}
function hideLoading() {
    loadSpiner.classList.add('hidden');
}
// all Issue data fetch

async function allIssuLoad() {
    showLoading();
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    hideLoading();
    disPlayAllIssue(data.data);

    // console.log(allIssueContainer);

}
// All button Click function
allIssueBtn.addEventListener('click', async function () {
    showLoading();
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    hideLoading();
    const AllFilterData = data.data;
    disPlayAllIssue(AllFilterData);
})

// open button Click function
openIssueBtn.addEventListener('click', async function () {
    showLoading();
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    hideLoading();
    const openFilterData = data.data.filter(item => item.status == 'open');
    disPlayAllIssue(openFilterData);
})
// Close Button Click function
closedIssueBtn.addEventListener('click', async function () {
    showLoading();
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    hideLoading();
    const closeFilterData = data.data.filter(item => item.status == 'closed');
   
    disPlayAllIssue(closeFilterData);
})

function disPlayAllIssue(items, id) {
    allIssueContainer.innerHTML = "";
    items.forEach((item, id) => {
        console.log(item, id);
        const labels = item.labels.map(label => `<span class="badge bg-yellow-400">${label}</span>`)
        .join("");
        const cart = document.createElement('div');
        cart.className = 'shadow';
        cart.innerHTML = `
    <div  class="${item.status=='open'?'border-t-6 border-green-600 border-radius':'border-t-6 border-purple-600 border-radius'} cart-wrap p-5 space-y-5" onclick="openIssueModal(${item.id})" >
                <div id="cart-top" class="flex justify-between items-center">
                    <div class="cart-top-left">
                        <img src="./assets/Open-Status.png" alt="">
                    </div>
                    <div class="cart-top-right"><button
                            class="btn bg-[#FEECEC] text-[#EF4444] py-4 px-7 rounded-sm">${item.priority}</button></div>
                </div>
                <div id="cart-heading">
                    <h2 class="text-1xl font-semibold" onclick="openIssueModal(${item.id})">${item.title}</h2>
                </div>
                <p id="description" class="text-[#64748B] line-clamp-2">${item.description}</p>

                <div>
                    <span > ${labels}</span>
                </div>
            </div>

            <div id="makeDate" class=" border-t-2 border-gray-200 p-4 space-y-2">
                <div class="createDate">#${id}
                    by ${item.author}
                </div>
                <div class="updateDate">
                    ${item.updatedAt}
                </div>
            </div>
    `
        allIssueContainer.appendChild(cart);
        totalCount();
    });

}

// Open Issue Modal function

async function openIssueModal(id) {
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
    const data = await res.json();
    const issueDetailes = data.data;
    // console.log(issueDetailes);
    cactBtn.innerHTML = '';
    issueDetailes.labels.forEach(item=>{
        let issuButton = document.createElement('button');
        issuButton.className= 'badge bg-yellow-400';
        issuButton.innerText = item;
        cactBtn.appendChild(issuButton);
    })
    console.log(issueDetailes);
    modalTitle.innerText = issueDetailes.title;
    modalStatus.innerText = issueDetailes.status;
    modalAuthorStatusName.innerText = issueDetailes.author;
    modalDescription.innerText = issueDetailes.description;
    authorName.innerText = issueDetailes.author;
    modalProperty.innerText = issueDetailes.priority;
    modalStatusDate.innerText = issueDetailes.createdAt;
    issuTrakerModal.showModal();
}
allIssuLoad();