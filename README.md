# Example README.md file for Go libraries

When users of our library land on our project page, we need to make sure we have the right things in our `README.md` so
that they can find what they need to know quickly. This might be your license or links to GoDoc and/or your testing page.

Even though we have [GoDoc](https://godoc.org/) for the programmer docs, it is not enough and is not necessarily aimed
at the same audience as the users who land here. This is especially true for people new to Go.

See the original blog post for why this project exists :
[README: Minimum Info needed for your GoLang library](https://chilts.org/2017/01/10/readme-minimum-info-needed-for-your-golang-library).

Use the online [GoReadMe generator](http://go-readme.golang.nz/).

## Usage 

Copy the [template.md](https://github.com/chilts/go-readme/blob/master/template.md) ([raw template.md](https://raw.githubusercontent.com/chilts/go-readme/master/template.md)) file from this repo and search and replace a few things:

* `__TITLE__` : A simple name, e.g. "BoltDB", "Goth", "Slugify", "UUID", "Sessions".
* `__SLUG__` : The import name / project name, e.g. "bolt", "slugify", "uuid", "sessions", "goth".
* `__SHORT_DESC__` : Up to 7 words, e.g. "An OAuth library", "Cookie and filesystem sessions", "Turn strings into slugs".
* `__LONG_DESC__` : More info, e.g. "The key features are ...", "This library ...", "ProjectName is a ...".
* `__USERNAME__` : Your GitHub username, e.g. "chilts", "hashicorp", "gorilla".
* `__LICENSE__` : e.g. "MIT", "Apache 2.0", "BSD licensed. See the LICENSE file for details.".

Once you've done the above, scan over the `README.md` and check for mistakes, errors, or omissions. Add any additional
sections in between "Usage" and "License" sections, such as "Developer Notes", "Contributing", "Implementing
InterfaceName", "Contributors", etc.

If your project is not on GitHub, you may have to manually edit a few of the links.

## Author

By [Andrew Chilton](https://chilts.org/), [@twitter](https://twitter.com/andychilton).

For [AppsAttic](https://appsattic.com/), [@AppsAttic](https://twitter.com/AppsAttic).

## LICENSE

[WTFPL](http://www.wtfpl.net/).

(Ends)
