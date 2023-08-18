import {
  CheckCircledIcon,
  CrossCircledIcon,
  StopwatchIcon,
} from '@radix-ui/react-icons'

export const statuses = [
  {
    value: 'In Progress',
    label: 'In Progress',
    icon: StopwatchIcon,
    className: 'text-warning mr-2 h-6 w-6',
  },
  {
    value: 'Success',
    label: 'Success',
    icon: CheckCircledIcon,
    className: 'text-success mr-2 h-6 w-6',
  },
  {
    value: 'Failed',
    label: 'Failed',
    icon: CrossCircledIcon,
    className: 'text-error mr-2 h-6 w-6',
  },
]
