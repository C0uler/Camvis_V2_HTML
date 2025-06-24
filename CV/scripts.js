  document.addEventListener('DOMContentLoaded', function() {            
            // Animasi skill bar
            const skillLevels = document.querySelectorAll('.skill-level'); //Menggunakan DOM yang bertujuan untuk mengakses element ini, ini akan didalam bentuk list
            const skillPercents = document.querySelectorAll('.skill-percent'); //Sama seperti diatas
            
            skillLevels.forEach((level, index) => {      //Fungsi loop yang akan mengakses list skilllevels bertujuan untuk menganimasi Tulisan skill level dan juga skill bar
                const percent = level.getAttribute('data-percent'); //Mengambil data 
                level.style.width = '0%';
                
                // Setelah delay, animasikan skill bar
                setTimeout(() => {
                    level.style.width = `${percent}%`;
                    
                    // Animasi persentase angka
                    let current = 0;
                    const target = parseInt(percent);
                    const increment = target / 10; // Durasi animasi pada Teks percentage, ini akan membagi iterasi increment, bila 10 maka iterasinya akan 10 kali
                    
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
            
        
            
            // Animasi Pengalaman dan juga Sekolah saat muncul
            const timelineItems = document.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
                item.style.opacity = '0'; // Agar pertama tama teks tak dapat dilihat
                item.style.transform = 'translateX(20px)'; //Ini kita pindahkan dulu ke kanan sebanyak 20 px sehingga muncul ilusi seakan ia dari kanan lalu ketengah
                
                setTimeout(() => {
                    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; //Jenis animasi yang terjadi
                    item.style.opacity = '1'; // Ini kita set agar teks dapat dibaca kembali
                    item.style.transform = 'translateX(0)'; //ini akan memindahkan element ke tempat semula sehingga terjadi animasi seakan teks muncul dari kanan lalu ketengah
                }, 800 + (index * 200));
            });
        });