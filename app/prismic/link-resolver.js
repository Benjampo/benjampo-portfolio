export default function (doc) {
  if (doc.type === 'homepage') {
    return `/${doc.lang}`
  }

  if (doc.type === 'project') {
    return `/${doc.lang}/${doc.uid}`
  }

  return '/not-found'
}

