# Example README.md file for Go libraries

When users of our library land on our project page, we need to make sure we have the right things in our `README.md` so
that the user can find what they need to know quickly.

Even though we have [GoDoc](https://godoc.org/), it is not enough and is not necessarily aimed at the same audience as
the users who land here.

See the original blog post for why this project exists :
[README: Minimum Info needed for your GoLang library](https://chilts.org/2017/01/10/readme-minimum-info-needed-for-your-golang-library).

## Usage 

Copy the [template.md](https://raw.githubusercontent.com/chilts/go-readme/master/template.md) file from this repo and search and replace a few things:

* `__TITLE__` : A simple name, e.g. "BoltDB", "Goth", "Slugify", "UUID", "Sessions".
* `__SLUG__` : The import name / project name, e.g. "bolt", "slugify", "uuid", "sessions", "goth".
* `__SHORT_DESC__` : Up to 7 words, e.g. "An OAuth library", "Cookie and filesystem sessions", "Turn strings into slugs".
* `__LONG_DESC__` : More info, e.g. "The key features are ...", "This library ...", "ProjectName is a ...".
* `__USERNAME__` : Your GitHub username, e.g. "chilts", "hashicorp", "gorilla".
* `__LICENSE__ : e.g. "MIT", "Apache 2.0", "BSD licensed. See the LICENSE file for details.".

Once you've done the above, scan over the readme and check for mistakes, errors, or omissions.

If your project is not on GitHub, you may have to manually edit a few of the links.

## Author

By [Andrew Chilton](https://chilts.org/), [@twitter](https://twitter.com/andychilton).

For [AppsAttic](https://appsattic.com/), [@AppsAttic](https://twitter.com/AppsAttic).

## LICENSE

[WTFPL](http://www.wtfpl.net/).

(Ends)
