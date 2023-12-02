(async () => {

    const urlParams = new URLSearchParams(window.location.search);
    const facilityIndex = urlParams.get('id');
    console.log("facilityIndex", facilityIndex);

    const response = await fetch("https://pdev.jooo.tech/api/v1/reviewsFor", {
            method: "POST",
            headers: {
                "Content-Type": "text/plain"
            },
            body: ""+facilityIndex
        });
    
    const facility = (await response.json());
    //console.log("facility + reviews", facility);
    
    const facilityTitle = document.getElementById("facilityTitle");
    facilityTitle.innerHTML = facility.facility_title;

    const reviewsDiv = document.getElementById("reviews")
    
    for (const review of facility.reviews) {
        const revText = review.review_text;
        const template = `
        <div class="review">
            <p>
            ${review.review_text}
            </p>
        </div>
        `
        reviewsDiv.innerHTML+=template
    }

})();
