import UseExample from '../pages/UseExample';
import UseContextExample from '../pages/UseContextExample';
import FormActionExample from '../pages/FormActionExample';
import UseFormStateExample from '../pages/UseFormStateExample';
import UseFormStatusExample from '../pages/UseFormStatusExample';
import UseOptimisticExample from '../pages/UseOptimisticExample';
import UseTransitionExample from '../pages/UseTransitionExample';

type Route = {
  name: string;
  path: string;
  element: React.ComponentType;
};

export const routes: Route[] = [
  { name: 'use', path: '/use', element: UseExample },
  { name: 'use(context)', path: '/use-context', element: UseContextExample },
  { name: 'form action', path: '/form-action', element: FormActionExample },
  {
    name: 'useFormState',
    path: '/use-form-state',
    element: UseFormStateExample,
  },
  {
    name: 'useFormStatus',
    path: '/use-form-status',
    element: UseFormStatusExample,
  },
  {
    name: 'useOptimistic',
    path: '/use-optimistic',
    element: UseOptimisticExample,
  },
  {
    name: 'useTransition',
    path: '/use-transition',
    element: UseTransitionExample,
  },
];
