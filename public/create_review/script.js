const urlParams = new URLSearchParams(window.location.search);
const facilityIndex = urlParams.get('id');
console.log("facilityIndex", facilityIndex);

function submitReview() {

    const daNewReview = {
        id: facilityIndex
    };
    daNewReview.review_text = document.getElementById("textbox").value;
    
    const response = fetch("https://pdev.jooo.tech/api/v1/newReview", {
            method: "POST",
            mode: "no-cors", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(daNewReview)
        });

    location.href = "../";
}