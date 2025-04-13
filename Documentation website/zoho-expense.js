document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.doc-section');
    sections.forEach(section => section.style.display = 'none');
  
    document.getElementById('doc-intro').style.display = 'block';
  
    const sidebarLinks = document.querySelectorAll('.sidebar ul li[data-section]');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', () => {
        const targetId = link.getAttribute('data-section');
        sections.forEach(sec => sec.style.display = 'none');
        document.getElementById(targetId).style.display = 'block';
      });
    });
  });
  

  

  