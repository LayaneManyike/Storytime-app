document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("early-access-form");
    const nameInput = document.getElementById("signup-name");
    const emailInput = document.getElementById("signup-email");
    const submitButton = form.querySelector("button");
    const successMessage = document.createElement("p");

    successMessage.className = "mt-4 text-green-600 font-semibold hidden";
    successMessage.textContent = "✅ Thank you! You've successfully signed up.";
    form.appendChild(successMessage);

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        // Validate inputs
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        if (!name || !email) {
            alert("Please enter both your name and email.");
            return;
        }

        // Disable submit button
        submitButton.disabled = true;
        submitButton.textContent = "Submitting...";

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbyefAov1iaGEl9p3c-s0SQe-vH_75L9MvE3XqcCPAv8BwMJxlKQpZCmrMOAtddla_Xo-A/exec",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams({ name, email }),
                }
            );

            if (response.ok) {
                successMessage.classList.remove("hidden");
                form.reset();
            } else {
                alert("Oops! Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }

        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = "Sign Up Now";
    });
});
