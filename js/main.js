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
    }
  }
  const links = document.querySelectorAll('.link');
  links.forEach( link => new TabLink(link));