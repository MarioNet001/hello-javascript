const findTags = (root) => {
    const tags = [...root.querySelectorAll("*")];
    tags.forEach(tag => {
      tag.shadowRoot && tags.push(...findTags(tag.shadowRoot));
    });
    return tags;
  }
  
  findTags(document).filter(tag => tag.nodeName.includes("-"))