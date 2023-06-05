import { rest } from 'msw';

let default_value = 0;
export const setDefaultValue = (val: number) => (default_value = val);
export default rest.get('*/api/counter/default-value', (req, res, ctx) =>
  res(
    ctx.json({
      content: {
        default_value,
      },
    })
  )
);
