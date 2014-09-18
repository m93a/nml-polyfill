#HTML6 polyfill
Beta! Ready for download!

## How to install
 0. Clone the repository
 1. Put your files into the `content` folder
 2. Instead of linking your nml files directly,
    use `index.xhtml?p=content/mypage.nml`
 4. Read the original [Oscar Godson's spec](http://html6spec.com).
    Not all of the features are supported. Yet.

## What's different
 0. All the HTML tags are prefixed by `<html:`
 1. Single tags have to be closed with `/>`
 2. Images, sounds and video are represented by `<html:media />`
 3. Scripts are imported using `<html:link rel=script href=... />`
 4. In css use `[data-nml-tag="foo"]` for selecting `<foo>` element **(will be fixed in the future)**
 5. In your styles use [`@namespace` at-rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@namespace)
 6. You can make your custom elements with custom attributes with whatever value
  * Note there can't be more elements with the same value of the `id` attribute,
    only the first elements value will be accepted
