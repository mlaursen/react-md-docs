# Customization

#### Fonts

The default font for material design is the [Roboto font](https://www.google.com/fonts/specimen/Roboto). You can include
this font (or any other fonts) by using the [webfontloader](https://github.com/typekit/webfontloader), locally hosting them,
or normal `<link>` tags in your html.

```js
import WebFont from 'webfontloader';

WebFont.load({
  google: ['Roboto:300,400,500,700', 'Material Icons']
});
```



If you would like to locally host fonts, there are two sass mixins for generating the needed `font-face`.

See [host-google-font](https://mlaursen.github.io/react-md/sassdoc/#undefined-mixin-host-google-font)
and [host-material-icons](https://mlaursen.github.io/react-md/sassdoc/#undefined-mixin-host-material-icons)
for more information.


#### Colors

This project has been set up for using the [Material design color palette](https://www.google.com/design/spec/style/color.html#color-color-palette).
You can access any of these colors with a variable `.md-COLORNAME-NUMBER`. An accent color is `.md-COLORNAME-a-NUMBER`.

An example would be

```scss
.some-indigo-color {
  color: $md-indigo-500;
}

.some-pink-alt {
  color: $md-pink-a-200;
}
```


#### Theming

The initial theme is the one you see for this documentation website.

```scss
$md-primary-color: $md-indigo-500 !default;
$md-primary-color-hue-1: $md-indigo-400 !default;
$md-secondary-color: $md-pink-a-200 !default;
$md-secondary-color-base: $md-pink-500 !default; // used for secondary toolbars and tabs
```


You can override these variables to style your app very quickly.

If you would like more control, there are mixins with the prefix `md-theme-` that you can use
to specifically style one component. The default theme is created from the
[\_themes.scss](../master/src/scss/_theme.scss).

Some components are joined with the their parent class, while others are not.
