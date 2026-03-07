
// Part-Home page code start here
// Catch Id with variable
const allIssueContainer = document.getElementById('allIssueContainer');
const totalIssueCount = document.getElementById('totalIssueCount');
const loadSpiner = document.getElementById('loadingSpiner');
    
const allIssueBtn = document.getElementById('allIssueBtn');
const openIssueBtn = document.getElementById('openIssueBtn');
const closedIssueBtn = document.getElementById('closedIssueBtn');

// Button toggle function
openIssueBtn.addEventListener('click', function () {
    allIssueBtn.classList.remove('primary-color');
    allIssueBtn.classList.add('btn-outline');
    closedIssueBtn.classList.remove('primary-color');
    openIssueBtn.classList.add('primary-color');
    openIssueBtn.classList.add('text-[white]');
});
closedIssueBtn.addEventListener('click', function () {
    allIssueBtn.classList.remove('primary-color');
    openIssueBtn.classList.remove('primary-color');
    closedIssueBtn.classList.add('primary-color');
  closedIssueBtn.classList.add('text-[white]');
});
allIssueBtn.addEventListener('click', function () {
    allIssueBtn.classList.remove('primary-color');
    openIssueBtn.classList.remove('primary-color');
    allIssueBtn.classList.add('primary-color');
  allIssueBtn.classList.add('text-[white]');
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
allIssueBtn.addEventListener('click', async function(){
    showLoading();
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    hideLoading();
    const AllFilterData = data.data;
    disPlayAllIssue(AllFilterData);
})

// open button Click function
openIssueBtn.addEventListener('click', async function(){
    showLoading();
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    hideLoading();
    const openFilterData = data.data.filter(item=>item.status=='open');
    disPlayAllIssue(openFilterData);
})
// Close Button Click function
closedIssueBtn.addEventListener('click', async function(){
    showLoading();
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    hideLoading();
    const closeFilterData = data.data.filter(item=>item.status=='closed');
    disPlayAllIssue(closeFilterData);
})

function disPlayAllIssue(items, id) {
    allIssueContainer.innerHTML = "";
    items.forEach((item, id) => {
        // console.log(item, id);
        const cart = document.createElement('div');
        cart.className = 'shadow';
        cart.innerHTML = `
    <div  class="cart-wrap p-5 space-y-5">
                <div id="cart-top" class="flex justify-between items-center">
                    <div class="cart-top-left">
                        <img src="./assets/Open-Status.png" alt="">
                    </div>
                    <div class="cart-top-right"><button
                            class="btn bg-[#FEECEC] text-[#EF4444] py-4 px-7 rounded-sm">${item.priority}</button></div>
                </div>
                <div id="cart-heading">
                    <h2 class="text-1xl font-semibold">${item.title}</h2>
                </div>
                <p id="description" class="text-[#64748B] line-clamp-2">${item.description}</p>
                <div id="cact-btn" class="flex justify-between items-center gap-3">
                    <button class="btn rounded border-[#FECACA] text-[#EF4444] bg-[#FEECEC] "><span><img src="./assets/kite.png" alt=""></span>
                        Bug</button>
                    <button class="btn rounded text-[#D97706] bg-[#FFF8DB] border-[#FDE68A]"><span><img src="./assets/circle.png" alt=""></span>
                        help
                        wanted</button>

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
allIssuLoad();