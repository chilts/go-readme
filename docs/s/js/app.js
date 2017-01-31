// --------------------------------------------------------------------------------------------------------------------

var md = window.markdownit()

var pages = 4
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
    travis : false,
    circle : false,
    codeclimate : false,
    html : '',

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
      if ( this.url ) {
        text += '## Overview [![GoDoc](https://godoc.org/' + this.url + '?status.svg)](https://godoc.org/' + this.url + ')'
      }
      else {
        text += '## Overview'
      }

      // badges
      if ( this.travis && this.username && this.name ) {
        text += ' '
        text += '[![Build Status]'
        text += '(https://travis-ci.org/' + this.username + '/' + this.name + '.svg?branch=master)]'
        text += '(https://travis-ci.org/' + this.username + '/' + this.name + ')'
      }

      // codeclimate
      if ( this.codeclimate && this.username && this.name ) {
        text += ' '
        text += '[![Code Climate]'
        text += '(https://codeclimate.com/github/' + this.username + '/' + this.name + '/badges/gpa.svg)]'
        text += '(https://codeclimate.com/github/' + this.username + '/' + this.name + ')'
      }

      text += '\n\n'

      if ( this.desc ) {
        text += this.desc + '\n\n'
      }
      else {
        text += 'ToDo.\n\n'
      }

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
          text += this.install
          text += '\n```'
          text += '\n\n'
        } // else, do nothing yet
      }

      this.render()

      return text
    },
  },
})

// --------------------------------------------------------------------------------------------------------------------
