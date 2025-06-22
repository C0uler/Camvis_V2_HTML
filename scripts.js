  document.addEventListener('DOMContentLoaded', function() {            
            // Animasi skill bar
            const skillLevels = document.querySelectorAll('.skill-level');
            const skillPercents = document.querySelectorAll('.skill-percent');
            
            skillLevels.forEach((level, index) => {
                const percent = level.getAttribute('data-percent');
                level.style.width = '0%';
                
                // Setelah delay, animasikan skill bar
                setTimeout(() => {
                    level.style.width = `${percent}%`;
                    
                    // Animasi persentase angka
                    let current = 0;
                    const target = parseInt(percent);
                    const increment = target / 10; // Durasi animasi
                    
                    const counter = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(counter);
                        }
                        skillPercents[index].textContent = `${Math.round(current)}%`;
                    }, 50);
                }, 300 + (index * 200));
            });
            
        
            
            // Animasi timeline saat muncul
            const timelineItems = document.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(20px)';
                
                setTimeout(() => {
                    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, 800 + (index * 200));
            });
        });