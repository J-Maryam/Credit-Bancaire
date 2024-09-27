// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('creditForm');
//     const summaryProject = document.getElementById('summaryProject');

//     const updateSummary = () => {
//         const project = document.getElementById('project').value;
//         const amount = document.getElementById('amount').value;
//         const duration = document.getElementById('duration').value;
//         const monthly = document.getElementById('monthly').value;

//         summaryProject.textContent = project || 'Prêt Personnel';
//     };

//     form.addEventListener('input', updateSummary);

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         console.log('Formulaire soumis');
//     });

//     updateSummary();
// });

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
  });