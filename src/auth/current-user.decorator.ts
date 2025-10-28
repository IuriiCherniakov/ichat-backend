import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../users/entities/user.entity';

const getCurrentUserByContext = (context: ExecutionContext): User => {
  console.log(
    'getCurrentUserByContext',
    context.switchToHttp().getRequest().user,
  );
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    return getCurrentUserByContext(context);
  },
);
