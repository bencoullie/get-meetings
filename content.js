;(() => {
  const day = new Date().getDay() - 1

  const disgustingSelectionString = `div[aria-labelledby="tsc-${day}"] > div[role="presentation"] > div[role="button"] > div > div > div > span > span:first-child`

  const allMeetings = [...document.querySelectorAll(disgustingSelectionString)]
    .filter((x) => {
      return x.textContent !== 'No meetings Thursdays'
    })
    .map((x) => '• ' + x.textContent)
    .join('\n')

  const tempTextAreaNode = document.createElement('textarea')

  tempTextAreaNode.innerHTML = allMeetings

  document.body.appendChild(tempTextAreaNode)

  tempTextAreaNode.select()

  document.execCommand('copy')

  tempTextAreaNode.remove()
})()
