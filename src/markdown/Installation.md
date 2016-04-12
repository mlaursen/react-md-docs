# Installation
react-md is available as an [npm package](https://www.npmjs.com/package/react-md).

You can install with:

```bash
$ npm install -S react \
                 react-dom \
                 react-addons-transition-group \
                 react-addons-css-transition-group \
                 react-addons-pure-render-mixin \
                 react-md
```

Once installed, the compiled versions are accessibile from `react-md/lib` and the
uncompiled are in `react-md/src/js`.

### Fonts
The [Roboto font](https://www.google.com/fonts/specimen/Roboto) and 
[material-icons](https://design.google.com/icons/) should be included as well
(or some equivalent). These fonts can be included via [WebFontLoader](https://github.com/typekit/webfontloader)
or by locally hosting and using the provided sass mixins to include them. The
example below will include the fonts with the WebFontLoader.


### Example

```js
/* index.jsx */
import React, { Component } from 'react';
import { render } from 'react-dom';
import WebFontLoader from 'webfontloader';
import { Card, CardTitle, CardText, CardActions } from 'react-md/lib/Cards';
import { FlatButton } from 'react-md/lib/Buttons';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

class App extends Component {
  render() {
    return (
      <div className="md-card-list">
        <Card>
          <CardTitle title="Hello, World!"  />
          <CardText>
            Lorem ipsum... pretend more ...
          </CardText>
          <CardActions>
            <FlatButton label="Action 1" />
            <FlatButton label="Action 2" />
          </CardActions>
        </Card>
      </div>
    );
  }
}

render(document.getElementById('app'), <App />);
```
