document.addEventListener("DOMContentLoaded", function () {
  
    document.getElementById("submitOrder").addEventListener("click", function () {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const comments = document.getElementById("comments").value;

      
        $('#orderModal').modal('hide');
    });

   
    const pricingButtons = document.querySelectorAll(".pricing-button");
    pricingButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
         
            const highlightedPlanIndex = Math.floor(index / 3);

            pricingButtons.forEach(function (btn) {
                btn.classList.remove("btn-primary");
                btn.classList.add("btn-secondary");
            });

         
            button.classList.remove("btn-secondary");
            button.classList.add("btn-primary");
        });
    });
});
