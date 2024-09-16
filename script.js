document.addEventListener("DOMContentLoaded", () => {
    // Ensure the file path to main.html is correct and the page isn't reloading automatically
    const currentUrl = window.location.pathname;

    // Only redirect if we are not already on main.html
    if (!currentUrl.includes("avacoin.html")) {
        setTimeout(() => {
            console.log("Redirecting to avacoin.html");  // Log for debugging
            window.location.href = "avacoin.html";  // Redirect after 5 seconds
        }, 5000);  // 5-second delay before redirection
    }
});

