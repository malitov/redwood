import terminalLink from 'terminal-link'

export const command = 'ui <library>'
export const description = 'Set up a UI design or style library'
export const builder = (yargs) =>
  yargs
    .commandDir('./ui')
    .demandCommand()
    .epilogue(
      `Also see the ${terminalLink(
        'Redwood CLI Reference',
        'https://redwoodjs.com/reference/command-line-interface#ui'
      )}`
    )
