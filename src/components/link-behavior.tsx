import { forwardRef } from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

const LinkBehavior = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to']; testId?: string }
>(({ testId, ...props }, ref) => {
  const { href, ...other } = props;
  return <RouterLink data-testid={testId} ref={ref} to={href} {...other} />;
});

export default LinkBehavior;
