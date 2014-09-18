#HTML6 polyfill

## How to install
 0. Clone the repository
 1. Put your files into the content folder
 2. Instead of linking your nml files directly,
    use `index.xhtml?p=content/mypage.nml`
 4. Read the original [Oscar Godson's spec](http://html6spec.com).
    Not all of the features are supported. Yet.

## What's different
 0. All the HTML tags are prefixed by `<html:`
 1. Single tags have to be closed with `/>`
 2. Images, sounds and video are represented by `<html:media />`
 3. Scripts are imported using `<html:link rel=stylesheet href=... />`
 4. In css use `[data-nml-tag="foo"]` for selecting `<foo>` element (will be fixed in the future)
 5. In your styles use [`@namespace` at-rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@namespace)
