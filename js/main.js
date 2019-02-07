class TabLink {
    constructor(link) {
      this.tabContent = document.querySelector(`article[data-tab='${link.dataset.tab}']`);
      this.bkgroundContent = document.querySelector('.bg');
      this.tabContent = new Content(this.tabContent);
      this.bkgroundContent = new BkGround(this.bkgroundContent);
      link.addEventListener('click', () => this.linkClick() );
    }
    linkClick() {
      this.tabContent.toggleContent();
      this.bkgroundContent.toggleContent2();
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
    // bg.style.zIndex='3';
    // article.style.zIndex='5';
    // nav.style.display='none';
    // content.style.display='none';

    }
}

class BkGround {
    constructor(tab) {
        this.tab = tab;
    }

toggleContent2() {
    this.tab.classList.toggle('change2');
    // bg.style.filter='blur(4px)';
    // bg.style.WebkitFilter='blur(4px)';
    }
}

const links = document.querySelectorAll('.link');
links.forEach( link => new TabLink(link));

  
const content = document.querySelector('.content')
const mainbtn = document.querySelector('#login');
const nav = document.querySelector('nav');
const bg = document.querySelector('#bg');
const article = document.querySelector('article')

mainbtn.addEventListener('mouseover', () => {
    mainbtn.style.backgroundColor = "rebeccapurple";
    this.link
    mainbtn.addEventListener('mouseout', () => {
        mainbtn.style.backgroundColor = "grey";
        this.link
    });
});