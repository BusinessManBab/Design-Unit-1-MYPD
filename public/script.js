
function openNewReview(facilityIndex) {
    location.href = "./create_review?id="+facilityIndex;
}

function viewMore(facilityIndex) {
    location.href = "./view_more?id="+facilityIndex;
}

(async () => {
    const reviews = document.querySelector(".reviews");
    const response = await fetch("https://pdev.jooo.tech/api/v1/reviews", {
        method: "POST", 
    });
    const facilitiesArr = (await response.json()).facilities;
    
    for (var i=0; i < facilitiesArr.length; i++) {
        const facility = facilitiesArr[i];
        const review = facility.reviews[0];
        const template = `
        <h1 id="facility_title">
            ${facility.facility_title}
        </h1>
        <img id="facility_pic" src="${facility.image_url} " alt="">
        <p id="facility_description">
        ${facility.facility_description}
        </p>
        <div class="review">
            <p>
            ${review.review_text}
            </p>
            <button id="view_more" onclick="viewMore(${i})">
                View More
            </button>
        </div>
        <div>
            <button id="submit_review" onclick="openNewReview(${i})">
                Create Own Review
            </button>
        </div>
        `
        reviews.innerHTML+=template
    }
})()