document.addEventListener('DOMContentLoaded', function () {
            // Initialize icons
            try {
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            } catch (err) {
                console.error('Lucide icons failed to load:', err);
            }

            // Health Toggle Logic
            const medicalToggle = document.getElementById('has-medical-toggle');
            const medicalSection = document.getElementById('medical-info-section');

            if (medicalToggle && medicalSection) {
                const toggle = () => {
                    if (medicalToggle.checked) {
                        medicalSection.style.setProperty('display', 'block', 'important');
                        medicalSection.querySelectorAll('textarea, input').forEach(el => el.required = true);
                    } else {
                        medicalSection.style.setProperty('display', 'none', 'important');
                        medicalSection.querySelectorAll('textarea, input').forEach(el => el.required = false);
                    }
                };

                medicalToggle.addEventListener('change', toggle);
                medicalToggle.addEventListener('click', toggle); // Backup for some mobile browsers
            }

            // Form Submit Logic
            const form = document.getElementById('strongman-reg-form');
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    document.getElementById('success-overlay').style.display = 'flex';
                });
            }
        });