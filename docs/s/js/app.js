// --------------------------------------------------------------------------------------------------------------------

var md = window.markdownit()

var pages = 5
var debounce = null

// setup Clipboard
new Clipboard('#copy')

var app = new Vue({
  el: '#app',
  data: {
    // fields for the ReadMe
    name: '',
    summary: '',
    desc: '',
    where : 'github', // 'github', 'bitbucket'.
    username : '',
    installOk: 'yes', // 'yes', 'no'.
    install: '',
    example: '',
    godoc : true,
    travis : false,
    circle : false,
    semaphore : false,
    codeclimate : false,
    reportcard : false,
    sourcegraph : false,
    contributing : false,
    contributors : false,
    author : false,
    html : '',
    license : '',

    // display
    step: 1,
    preview: 'text', // 'text', 'markdown'.

    // Computed:
    // * url
    // * markdown
  },
  methods: {
    prevStep: function() {
      if ( this.step === 1 ) {
        return
      }
      this.step = this.step - 1
    },
    nextStep: function() {
      if ( this.step === pages ) {
        return
      }
      this.step = this.step + 1
    },
    setStep: function(step) {
      this.step = step
    },
    isStepActive: function (step) {
      if ( step === this.step ) {
        return { 'button-primary' : 1 }
      }
    },
    render: function() {
      console.log('render(): entry')

      // cancel if we already have a timeout
      if ( debounce ) {
        clearTimeout(debounce)
      }

      // remember a new timeout
      debounce = setTimeout(function() {
        console.log('- timeout happened')
        debounce = null
        this.html = md.render(this.markdown)
      }.bind(this), 500)
    },
  },
  computed: {
    url: function() {
      if ( this.name && this.username ) {
        return ( this.where === 'github' ? 'github.com' : 'bitbucket.org' ) + '/' + this.username + '/' + this.name
      }
      return ''
    },
    markdown: function() {
      var text = ''

      // title
      if ( this.name ) {
        text += '# ' + this.name
        if ( this.summary ) {
          text += ' : ' + this.summary
        }
        text += '\n\n'
      }

      // overview
      if ( this.name && this.username ) {
        text += '## Overview'

        // godoc
        if ( this.godoc ) {
          text += ' '
          text += '[![GoDoc]'
          text += '(https://godoc.org/' + this.url + '?status.svg)]'
          text += '(https://godoc.org/' + this.url + ')'
        }

        // travis
        if ( this.travis ) {
          text += ' '
          text += '[![Build Status]'
          text += '(https://travis-ci.org/' + this.username + '/' + this.name + '.svg?branch=master)]'
          text += '(https://travis-ci.org/' + this.username + '/' + this.name + ')'
        }

        // CircleCI
        // ToDo: ... !

        // SemaphoreCI
        if ( this.semaphore ) {
          text += ' '
          text += '[![Build Status]'
          text += '(https://semaphoreci.com/api/v1/' + this.username + '/' + this.name + '/branches/master/badge.svg)]'
          text += '(https://semaphoreci.com/' + this.username + '/' + this.name + ')'
        }

        // codeclimate
        if ( this.codeclimate ) {
          text += ' '
          text += '[![Code Climate]'
          text += '(https://codeclimate.com/github/' + this.username + '/' + this.name + '/badges/gpa.svg)]'
          text += '(https://codeclimate.com/github/' + this.username + '/' + this.name + ')'
        }

        // reportcard
        if ( this.reportcard ) {
          text += ' '
          text += '[![Go Report Card]'
          text += '(https://goreportcard.com/badge/' + this.url + ')]'
          text += '(https://goreportcard.com/report/' + this.url + ')'
        }

        // sourcegraph
        if ( this.sourcegraph ) {
          text += ' '
          text += '[![Sourcegraph]'
          text += '(https://sourcegraph.com/' + this.url + '/-/badge.svg)]'
          text += '(https://sourcegraph.com/' + this.url + '?badge)'
        }

        text += '\n\n'
      } // else, nothing

      if ( this.desc ) {
        text += this.desc + '\n\n'
      } // else, nothing

      // install
      if ( this.installOk === 'yes' ) {
        if ( this.name && this.username ) {
          text += '## Install\n\n'
          text += '```\n'
          text += 'go get '
          text += ( this.where === 'github' ? 'github.com' : 'bitbucket.org' ) + '/' + this.username + '/' + this.name
          text += '\n```'
          text += '\n\n'
        } // else, do nothing yet
      }
      else {
        if ( this.install ) {
          text += '## Install\n\n'
          text += '```\n'
          text += 'go get ' + this.install
          text += '\n```'
          text += '\n\n'
        } // else, do nothing yet
      }

      if ( this.example ) {
        text += '## Example\n\n'
        text += '```\n'
        text += this.example
        text += '\n```'
        text += '\n\n'
      }

      if ( this.contributing ) {
        text += '## Contributing\n\n'
        text += 'ToDo.\n\n'
      }

      if ( this.contributors ) {
        text += '## Contributors\n\n'
        text += 'ToDo.\n\n'
      }

      if ( this.author ) {
        text += '## Author\n\n'
        text += 'ToDo.\n\n'
      }

      if ( this.license ) {
        text += '## License\n\n'
        text += this.license + ".\n\n"
      }

      this.render()

      return text
    },
  },
})

// --------------------------------------------------------------------------------------------------------------------
