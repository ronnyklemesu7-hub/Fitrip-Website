const items = Array.from(document.querySelectorAll('.gallery-item'));
        const lb = document.getElementById('lightbox');
        const lbImg = document.getElementById('lb-img');
        const lbCap = document.getElementById('lb-caption');
        const lbCnt = document.getElementById('lb-counter');
        let current = 0;

        function openLB(idx) {
            current = idx;
            const img = items[idx].querySelector('img');
            lbImg.src = img.src;
            lbImg.alt = img.alt;
            lbCap.textContent = img.alt;
            lbCnt.textContent = (idx + 1) + ' / ' + items.length;
            lb.classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function closeLB() {
            lb.classList.remove('open');
            document.body.style.overflow = '';
        }

        function showPrev() { openLB((current - 1 + items.length) % items.length); }
        function showNext() { openLB((current + 1) % items.length); }

        items.forEach((item, i) => item.addEventListener('click', () => openLB(i)));
        document.getElementById('lb-close').addEventListener('click', closeLB);
        document.getElementById('lb-prev').addEventListener('click', e => { e.stopPropagation(); showPrev(); });
        document.getElementById('lb-next').addEventListener('click', e => { e.stopPropagation(); showNext(); });
        lb.addEventListener('click', e => { if (e.target === lb) closeLB(); });
        document.addEventListener('keydown', e => {
            if (!lb.classList.contains('open')) return;
            if (e.key === 'Escape') closeLB();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
        });