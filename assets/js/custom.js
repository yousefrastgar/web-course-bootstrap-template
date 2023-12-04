function customScript() {
	window.addEventListener("DOMContentLoaded", () => {
		const backToTopButton = document.getElementById("back-to-top");
		if (backToTopButton) {
			console.log("backToTopButton: ", backToTopButton);

			backToTopButton.addEventListener("click", () => {
				window.scrollTo({ top: 0 });
			});
		}
	});
}

customScript();
