export function htmlStringFromRichText(richText) {
  function processNode(node) {
      switch (node.nodeType) {
          case 'document':
              return node.content.map(processNode).join('');
          case 'paragraph':
              return `<p>${node.content.map(processNode).join('')}</p>`;
          case 'unordered-list':
              return `<ul>${node.content.map(processNode).join('')}</ul>`;
          case 'list-item':
              return `<li>${node.content.map(processNode).join('')}</li>`;
          case 'text':
              return node.value || '';
          default:
              return '';
      }
  }
  // Process the rich text description
  return processNode(richText);
}