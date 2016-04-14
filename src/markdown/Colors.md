# Color

[Material Design Color Guide](https://www.google.com/design/spec/style/color.html)

> Color in material design is inspired by bold hues juxtaposed with muted
> environments, deep shadows, and bright highlights. Material takes cues
> from contemporary architecture, road signs, pavement marking tape, and
> athletic courts. Color should be unexpected and vibrant.

#### Using react-md's color palette
The application should define a `primary` and `secondary` color. The `primary` color
should be chosen from one of the `'-500'` colors and the `secondary` should be one of
the `'a-'` colors.

The default color palette is defined as:

```scss
$md-primary-color: $md-indigo-500 !default;
$md-primary-color-hue-1: $md-indigo-400 !default;

$md-secondary-color: $md-pink-a-200 !default;
$md-secondary-color-hue-1: $md-pink-a-100 !default;
```

#### Updating/Changing the Theme
The theme can be changed at a global level or at a section level. To override
the theme at a global level, you can do the following:

```scss
@import '~react-md/src/scss/react-md';

$md-primary-color: $md-teal-500;
$md-primary-color-hue-1: $md-teal-700;
$md-secondary-color: $md-lime-a-400;
$md-secondary-color-hue-1: $md-lime-a-200;
```

Your application should now be using `teal` as a primary color and `lime` as
a secondary color.

If you would like to do it at a section level, you can use the
[md-theme-most](/sassdoc/#colors-mixin-md-theme-most) mixin.

```scss
@import '~react-md/src/scss/helpers/all';

.alternative-theme {
  @include md-theme-most($md-deep-orange-500, $md-deep-orange-400, $md-light-blue-a-200, $md-light-blue-a-100);
}
```
