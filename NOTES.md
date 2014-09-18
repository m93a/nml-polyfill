# Problems with HTML6
 * no `rel` attribute on `<html:link />`
 * no `controls` attribute on `<html:media />`
 * no `<html:source />` tag in specification
 * `href`/`src` confusion (personally I'd deprecate `href` on link elements)
 * possible problems with `HTMLMediaElement` implementation:
  * image maps on video
  * `x` and `y` properties for video and audio
  * `volume`, `muted` `defaultMuted`, `play`, `played`,
    `playbackRate`, `seeking`, `seekable`, `ended`,
    `duration`, `currentTime` and `currentSrc`
    properties for images
  * unified posters
  * unified _natural_ size properties
  * unified subtitle support
  * possible multiformat support
   * image + video → video with poster
   * image + audio → audio with poster
   * animated image + audio → video
  * possible responsive source selection

# Problems in implementation
 * Global
  * css reparser needed
  * javascript wrapper needed
  * extension list for type-less source elements needed
 * Hypertext API
  * incomplete source element
 * Form API
  * missing Form API
   * especially Form API needed
    * no shit sherlock!
