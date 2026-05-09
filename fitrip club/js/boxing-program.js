document.addEventListener('DOMContentLoaded', function () {
            // Initialize icons
            try {
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            } catch (err) {
                console.error('Lucide icons failed to load:', err);
            }

            // Age Check Logic
            const dobInput = document.getElementById('dob-input');
            const minorSection = document.getElementById('minor-section');

            if (dobInput && minorSection) {
                dobInput.addEventListener('change', (e) => {
                    const birthDate = new Date(e.target.value);
                    const today = new Date();
                    let age = today.getFullYear() - birthDate.getFullYear();
                    const m = today.getMonth() - birthDate.getMonth();
                    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                        age--;
                    }

                    if (age < 18) {
                        minorSection.style.setProperty('display', 'block', 'important');
                        minorSection.querySelectorAll('input').forEach(i => i.required = true);
                    } else {
                        minorSection.style.setProperty('display', 'none', 'important');
                        minorSection.querySelectorAll('input').forEach(i => i.required = false);
                    }
                });
            }

            // Health Toggle Logic
            const medicalToggle = document.getElementById('has-medical-toggle');
            const medicalSection = document.getElementById('medical-info-section');

            if (medicalToggle && medicalSection) {
                const toggle = () => {
                    if (medicalToggle.checked) {
                        medicalSection.style.setProperty('display', 'block', 'important');
                        medicalSection.querySelectorAll('textarea, input, select').forEach(el => el.required = true);
                    } else {
                        medicalSection.style.setProperty('display', 'none', 'important');
                        medicalSection.querySelectorAll('textarea, input, select').forEach(el => el.required = false);
                    }
                };

                medicalToggle.addEventListener('change', toggle);
                medicalToggle.addEventListener('click', toggle);
            }

            // Form Submit Logic
            const form = document.getElementById('boxing-reg-form');
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    document.getElementById('success-overlay').style.display = 'flex';
                });
            }
        });