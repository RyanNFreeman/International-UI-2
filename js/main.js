class TabLink {
    constructor(link) {
      this.tabContent = document.querySelector(`article[data-tab='${link.dataset.tab}']`);
      this.tabContent = new Content(this.tabContent);
      link.addEventListener('click', () => this.linkClick() );
    }
    linkClick() {
      this.tabContent.toggleContent();
    
    }
  }
  
class Content {
constructor(tabElement) {
    this.tabElement = tabElement;
}
toggleContent() {
    this.tabElement.classList.toggle('change');
    // bg.style.filter='blur(4px)';
    // bg.style.WebkitFilter='blur(4px)';
    // content.style.display='none';
}
}
const links = document.querySelectorAll('.link');
links.forEach( link => new TabLink(link));

  
const content = document.querySelector('.content')
const mainbtn = document.querySelector('#login');
const bg = document.querySelector('#bg')

mainbtn.addEventListener('mouseover', () => {
    mainbtn.style.backgroundColor = "darkred";
    this.link
    mainbtn.addEventListener('mouseout', () => {
        mainbtn.style.backgroundColor = "grey";
        this.link
    });
});