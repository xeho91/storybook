import { type StoryContext } from './public-types';

export function mount(context: StoryContext) {
  return async (ui?: JSX.Element) => {
    if (ui != null) {
      context.originalStoryFn = () => ui;
    }
    await context.renderToCanvas();
  };
}
