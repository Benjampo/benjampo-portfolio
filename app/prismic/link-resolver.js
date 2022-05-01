export default function (document) {
  if (document.type === 'hompage') {
    return `/${document.lang}`
  }

  if (document.type === 'project') {
    return `/${document.lang}/${document.uid}`
  }

  return '/not-found'
}
