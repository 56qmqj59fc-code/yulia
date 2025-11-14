document.querySelectorAll('.tech-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('hovered');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('hovered');
    }); /*увеличение карточек технологий при наведении*/
  });
    document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  }); /*плавная навигация*/
  document.querySelectorAll('.advantage-item').forEach(block => {
    block.addEventListener('mouseenter', () => {
      block.classList.add('hovered');
    });
    block.addEventListener('mouseleave', () => {
      block.classList.remove('hovered');
    });
  });/*при наведении на преимущества картинки увеличиваются*/
  document.querySelectorAll('.works').forEach(block => {
    block.addEventListener('mouseenter', () => {
      block.classList.add('hovered');
    });
    block.addEventListener('mouseleave', () => {
      block.classList.remove('hovered');
    });
  });