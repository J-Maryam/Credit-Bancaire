document.addEventListener('DOMContentLoaded', () => {
    const linkInputs = (numberInput, rangeInput) => {
        numberInput.addEventListener('input', () => {
            rangeInput.value = numberInput.value;
        });
        rangeInput.addEventListener('input', () => {
            numberInput.value = rangeInput.value;
        });
    };

    linkInputs(document.getElementById('amount'), document.getElementById('amountRange'));
    linkInputs(document.getElementById('duration'), document.getElementById('durationRange'));
    linkInputs(document.getElementById('monthly'), document.getElementById('monthlyRange'));

    const goToStep2 = () => {
        // Récupération des données du formulaire
        const project = document.getElementById("project").value;
        const status = document.getElementById("status").value;
        const amount = document.getElementById("amount").value;
        const duration = document.getElementById("duration").value;
        const monthly = document.getElementById("monthly").value;

        // Mise à jour du récapitulatif
        document.getElementById("summaryProject").textContent = project;
        document.querySelector("#summaryStatus span").textContent = status;
        document.querySelector("#summaryAmount span").textContent = amount + " DH";
        document.querySelector("#summaryDuration span").textContent = duration + " mois";
        document.querySelector("#summaryMonthly span").textContent = monthly + " DH";

        // Rendre les détails visibles dans step 2
        document.getElementById("summaryStatus").style.display = "block";
        document.getElementById("summaryAmount").style.display = "block";
        document.getElementById("summaryDuration").style.display = "block";
        document.getElementById("summaryMonthly").style.display = "block";

        // Afficher le form de l'étape 2 et masquer celui de l'étape 1
        document.getElementById("formStep1").style.display = "none";
        document.getElementById("formStep2").style.display = "block";

        // Mise à jour de l'affichage des étapes
        document.getElementById("step1").classList.remove("active");
        document.getElementById("step2").classList.add("active");
    };

    document.getElementById('creditForm').addEventListener('submit', (e) => {
        e.preventDefault();
        goToStep2();
    });
});
