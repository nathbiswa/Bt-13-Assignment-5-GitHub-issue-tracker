
// Part-Home page code start here
// Catch Id with variable
const allIssueContainer = document.getElementById('allIssueContainer');

// all Issue data fetch

async function allIssuLoad() {
    
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
   disPlayAllIssue(data.data);
    // console.log(allIssueContainer);
    
}

// {
//     "id": 42,
//     "title": "Add role-based access control",
//     "description": "Implement RBAC system with different permission levels for users, moderators, and admins.",
//     "status": "open",
//     "labels": [
//         "enhancement"
//     ],
//     "priority": "high",
//     "author": "rbac_rachel",
//     "assignee": "security_sam",
//     "createdAt": "2024-01-23T08:45:00Z",
//     "updatedAt": "2024-01-23T08:45:00Z"
// }

function disPlayAllIssue(items, id){
 allIssueContainer.innerHTML= "";
items.forEach((item, id)=>{
    console.log(item, id);
    const cart = document.createElement('div');
    cart.className = 'shadow';
    cart.innerHTML = `
    <div class="cart-wrap p-5 space-y-5">
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
});

}
allIssuLoad();