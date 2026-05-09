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
                medicalToggle.addEventListener('click', toggle);
            }

            // Form Submit Logic
            const form = document.getElementById('spinning-reg-form');
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();

                    // Collect data
                    const formData = new FormData(form);
                    const data = {};
                    formData.forEach((value, key) => {
                        data[key] = value;
                    });

                    // Save to localStorage
                    const existing = JSON.parse(localStorage.getItem('fitrip_spinning_regs') || '[]');
                    existing.push({
                        ...data,
                        id: Date.now(),
                        submittedAt: new Date().toISOString()
                    });
                    localStorage.setItem('fitrip_spinning_regs', JSON.stringify(existing));

                    // Show success
                    document.getElementById('success-overlay').style.display = 'flex';
                });
            }
        });