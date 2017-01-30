// --------------------------------------------------------------------------------------------------------------------

var pages = 4

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

    // display
    step: 1,
    preview: 'text', // 'text', 'markdown'.

    // Computed:
    // * url
    // * readme
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
    }
  },
  computed: {
    url: function() {
      if ( this.name && this.username ) {
        return ( this.where === 'github' ? 'github.com' : 'bitbucket.org' ) + '/' + this.username + '/' + this.name
      }
      return ''
    },
    readme: function() {
      var text = ''

      // title
      if ( this.name ) {
        text += '# ' + this.name
      }
      else {
        text += '# <name>'
      }
      if ( this.summary ) {
        text += ' : ' + this.summary
      }
      else {
        text += ' : <summary>'
      }
      text += '\n\n'

      // overview
      if ( this.desc ) {
        if ( this.url ) {
          text += '## Overview [![GoDoc](https://godoc.org/' + this.url + '?status.svg)](https://godoc.org/' + this.url + ')'
        }
        else {
          text += '## Overview'
        }
        // ToDo: other badges
        text += '\n\n'
        text += this.desc + '\n\n'
      }

      // install
      if ( this.installOk === 'yes' ) {
        if ( this.name && this.username ) {
          text += '## Install\n\n'
          text += '```\n'
          text += 'go get '
          text += ( this.where === 'github' ? 'github.com' : 'bitbucket.org' ) + '/' + this.username + '/' + this.name
          text += '\n```'
        } // else, do nothing yet
      } else {
        if ( this.install ) {
          text += '## Install\n\n'
          text += '```\n'
          text += this.install
          text += '\n```'
        } // else, do nothing yet
      }

      return text
    },
  },
})

// --------------------------------------------------------------------------------------------------------------------

// setTimeout(() => {
//   app.step = 2
// }, 3000)

// setTimeout(() => {
//   app.step = 3
// }, 6000)

app.step = pages
