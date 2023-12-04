function customScript() {
	window.addEventListener("DOMContentLoaded", () => {
		const backToTopButton = document.getElementById("back-to-top");
		if (backToTopButton) {
			backToTopButton.addEventListener("click", () => {
				window.scrollTo({ top: 0 });
			});
		}
	});
}

customScript();
