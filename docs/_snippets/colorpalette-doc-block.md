```md filename="Colors.stories.mdx" renderer="common" language="mdx" tabTitle="starter-example"
import { Meta, ColorPalette, ColorItem } from '@storybook/addon-docs';

<Meta title="Colors" />

<ColorPalette>
  <ColorItem
    title="theme.color.greyscale"
    subtitle="Some of the greys"
    colors={{ White: '#FFFFFF', Alabaster: '#F8F8F8', Concrete: '#F3F3F3' }}
  />
  <ColorItem 
    title="theme.color.primary" 
    subtitle="Coral" 
    colors={{ WildWatermelon: '#FF4785' }} 
  />
  <ColorItem 
    title="theme.color.secondary" 
    subtitle="Ocean" 
    colors={{ DodgerBlue: '#1EA7FD' }} 
  />
  <ColorItem
    title="theme.color.positive"
    subtitle="Green"
    colors={{
      Apple: 'rgba(102,191,60,1)',
      Apple80: 'rgba(102,191,60,.8)',
      Apple60: 'rgba(102,191,60,.6)',
      Apple30: 'rgba(102,191,60,.3)',
    }}
  />
</ColorPalette>
```
```md filename="Colors.stories.mdx" renderer="common" language="mdx" tabTitle="advanced-example"
import { Meta, ColorPalette, ColorItem } from '@storybook/addon-docs';

import { themes, ThemeProvider, convert, ensure } from '@storybook/theming';

<Meta title="Complex Colors" />

# Dark color scheme

<div style={{ background: '#202020' }}>
  <ThemeProvider theme={ensure(themes.dark)}>
    <ColorPalette>
      {Object.entries(convert(themes.dark).color).map(([k, v]) => {
        if (
          typeof v === 'string' &&
          (v.match(/^#/) || v.match(/^rgb/) || k.match(/color/i))
        ) {
          return <ColorItem key={k} title={k} colors={{ [k]: v }} />;
        } else if (typeof v === 'object') {
          return (
            <ColorItem
              key={k}
              title={k}
              colors={Object.entries(v).reduce(
                (acc, [key, value]) =>
                  typeof value === 'string' &&
                  (value.match(/^#/) ||
                    value.match(/^rgb/) ||
                    key.match(/color/i))
                    ? { ...acc, [key]: value }
                    : acc,
                {}
              )}
            />
          );
        }
        return null;
      })}
    </ColorPalette>
  </ThemeProvider>
</div>

# Light color scheme

<div styles={{ background: '#eeeeee' }}>
  <ColorPalette>
    {Object.entries(convert(themes.light).color).map(([k, v]) => {
      if (
        typeof v === 'string' &&
        (v.match(/^#/) || v.match(/^rgb/) || k.match(/color/i))
      ) {
        return <ColorItem key={k} title={k} colors={{ [k]: v }} />;
      } else if (typeof v === 'object') {
        return (
          <ColorItem
            key={k}
            title={k}
            colors={Object.entries(v).reduce(
              (acc, [key, value]) =>
                typeof value === 'string' &&
                (value.match(/^#/) ||
                  value.match(/^rgb/) ||
                  key.match(/color/i))
                  ? { ...acc, [key]: value }
                  : acc,
              {}
            )}
          />
        );
      }
      return null;
    })}
  </ColorPalette>
</div>
```
